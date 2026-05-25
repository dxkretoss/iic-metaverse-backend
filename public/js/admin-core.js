// Secure Page Authentication & Fetch Interceptor
(function() {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    window.location.href = '/login.html';
    return;
  }

  // Intercept all outgoing fetch requests to inject Authorization header dynamically
  const originalFetch = window.fetch;
  window.fetch = async function(url, options = {}) {
    options.headers = options.headers || {};
    if (!options.headers['Authorization'] && !options.headers['authorization']) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    try {
      const response = await originalFetch(url, options);
      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminEmail');
        window.location.href = '/login.html';
      }
      return response;
    } catch (err) {
      console.error("Fetch intercept error:", err);
      throw err;
    }
  };
})();

function updateAdminViewMode() {
  const adminForm = document.getElementById('admin-form');
  const formFooter = document.getElementById('cms-form-footer');
  const inquiriesPanel = document.getElementById('inquiries-panel');
  const sectionsTitle = document.querySelector('.section-filters-title');

  const isInquiries = activePage === 'inquiries';

  if (adminForm) adminForm.classList.toggle('hidden-panel', isInquiries);
  if (formFooter) formFooter.classList.toggle('hidden-panel', isInquiries);
  if (inquiriesPanel) inquiriesPanel.classList.toggle('hidden-panel', !isInquiries);
  if (sectionsTitle) sectionsTitle.style.display = isInquiries ? 'none' : '';
  if (sectionsFilterContainer) sectionsFilterContainer.style.display = isInquiries ? 'none' : '';
}

// Render dynamic sub-sections inside the sidebar based on active page
function renderSectionFilters() {
  sectionsFilterContainer.innerHTML = '';
  if (activePage === 'inquiries') return;

  const currentSections = PAGE_SECTIONS[activePage] || [];
  const savedSection = localStorage.getItem('adminActiveSection') || 'all';
  activeSectionFilter = savedSection;

  // Create "All Sections" filter
  const allItem = document.createElement('a');
  allItem.href = '#';
  allItem.className = 'menu-item' + (activeSectionFilter === 'all' ? ' active' : '');
  allItem.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span>All Sections</span>`;
  allItem.addEventListener('click', (e) => {
    e.preventDefault();
    sectionsFilterContainer.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    allItem.classList.add('active');
    activeSectionFilter = 'all';
    localStorage.setItem('adminActiveSection', 'all');
    updateSectionVisibility();
  });
  sectionsFilterContainer.appendChild(allItem);

  // Create individual filters
  currentSections.forEach(sec => {
    const item = document.createElement('a');
    item.href = '#';
    item.className = 'menu-item' + (activeSectionFilter === sec.id ? ' active' : '');
    item.innerHTML = `<i class="fa-solid ${sec.icon}"></i> <span>${sec.name}</span>`;
    item.addEventListener('click', (e) => {
      e.preventDefault();
      sectionsFilterContainer.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      activeSectionFilter = sec.id;
      localStorage.setItem('adminActiveSection', sec.id);
      updateSectionVisibility();
    });
    sectionsFilterContainer.appendChild(item);
  });
  
  const hasActive = Array.from(sectionsFilterContainer.querySelectorAll('.menu-item')).some(i => i.classList.contains('active'));
  if (!hasActive) {
      activeSectionFilter = 'all';
      allItem.classList.add('active');
  }

  updateSectionVisibility();
}

// Show/Hide sections in the form depending on page key and active section filter
function updateSectionVisibility() {
  const allSections = document.querySelectorAll('.section-block');

  allSections.forEach(sec => {
    // Check if section belongs to active page
    const belongsToPage = sec.classList.contains(`page-section-${activePage}`);

    if (!belongsToPage) {
      sec.classList.add('hidden-section');
      return;
    }

    // Check if matching specific section filter
    if (activeSectionFilter === 'all') {
      sec.classList.remove('hidden-section');
    } else {
      const secId = sec.getAttribute('id');
      if (secId === `sec-${activeSectionFilter}`) {
        sec.classList.remove('hidden-section');
      } else {
        sec.classList.add('hidden-section');
      }
    }
  });
}

// Resolve stored image path for admin previews (same origin as API server)
function resolvePreviewImageSrc(url) {
  if (!url) return '';
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${path}?t=${Date.now()}`;
}

function setImagePreview(previewId, url) {
  const el = document.getElementById(previewId);
  if (!el) return;
  if (url) {
    el.src = resolvePreviewImageSrc(url);
    el.style.display = '';
  } else {
    el.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23222"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23555" font-size="10">Empty</text></svg>';
  }
}

// Image Preview Handler
function previewImage(input, previewId) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(previewId).src = e.target.result;
    };
    reader.readAsDataURL(file);

    // Reset matching remove hidden input if it exists
    const removeInputId = 'remove_' + input.id;
    const removeInput = document.getElementById(removeInputId);
    if (removeInput) {
      removeInput.value = 'false';
    }
  }
}

// Clear / Remove Image Handler
function clearImage(fileInputId, previewImgId, hiddenInputId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Clear file input value
  const fileInput = document.getElementById(fileInputId);
  if (fileInput) fileInput.value = '';

  // Set preview image to transparent SVG placeholder
  const previewImg = document.getElementById(previewImgId);
  if (previewImg) {
    previewImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23222"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23555" font-size="10">No Image</text></svg>';
  }

  // Mark hidden input for removal
  const hiddenInput = document.getElementById(hiddenInputId);
  if (hiddenInput) {
    hiddenInput.value = 'true';
  }
}

// --- Contact form submissions (admin) ---
let inquiriesCache = [];
let activeInquiryId = null;

async function fetchContent() {
  if (activePage === 'inquiries') return;

  try {
    const response = await fetch(`/api/${activePage}`);
    if (!response.ok) throw new Error('API server unreachable');
    const resData = await response.json();

    if (resData.success && resData.data) {
      if (typeof window.populatePageForm === 'function') {
        window.populatePageForm(resData.data);
      }
    } else {
      showToast('Error', `Could not fetch database records for page key "${activePage}".`, true);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    showToast('Offline Mode', `Showing default static templates for "${activePage}".`, true);
    if (typeof window.populatePageForm === 'function') {
      window.populatePageForm(DEFAULT_VALUES[activePage]);
    }
  }
}

// Populate page-specific input elements
// Handle Save Updates (packs only the currently active page input values!)
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(btnSave) {
      btnSave.disabled = true;
      btnSave.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Syncing in database...';
    }

    const formData = new FormData();
    // Delegate form data appending to the page-specific JS
    if (typeof window.appendPageFormData === 'function') {
      window.appendPageFormData(formData);
    }
    
    try {
      const response = await fetch(`/api/${activePage}`, {
        method: 'POST',
        body: formData
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        showToast('Page Synced', `Changes for page "${activePage.toUpperCase()}" have successfully written to MongoDB.`, false);
        if (typeof window.populatePageForm === 'function') {
          window.populatePageForm(resData.data);
        }
      } else {
        throw new Error(resData.error || 'Server error.');
      }
    } catch (error) {
      console.error('Update error:', error);
      showToast('Save Blocked', error.message || 'Check local MongoDB connections.', true);
    } finally {
      if(btnSave) {
        btnSave.disabled = false;
        btnSave.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save Console Configuration';
      }
    }
  });
}

// Reset Button triggers Active page Defaults
if (btnReset) {
  btnReset.addEventListener('click', () => {
    if (confirm(`Reset the active "${activePage.toUpperCase()}" fields back to initial values? (MongoDB remains unchanged until you save)`)) {
      if (typeof window.populatePageForm === 'function') {
        window.populatePageForm(DEFAULT_VALUES[activePage]);
      }
      showToast('Defaults Loaded', `Default fields loaded for "${activePage.toUpperCase()}". Click save to commit.`, false);
    }
  });
}

// Toast system helpers
let toastTimeout;
function showToast(title, msg, isError = false) {
  clearTimeout(toastTimeout);

  if(toastTitle) toastTitle.innerText = title;
  if(toastMsg) toastMsg.innerText = msg;

  if(toastEl) {
    if (isError) {
      toastEl.classList.add('error');
    } else {
      toastEl.classList.remove('error');
    }
    toastEl.classList.remove('hidden');
  }

  toastTimeout = setTimeout(() => {
    hideToast();
  }, 5000);
}

function hideToast() {
  if(toastEl) toastEl.classList.add('hidden');
}

// Initial triggers
window.addEventListener('DOMContentLoaded', () => {
  // Append Sign Out button to sidebar dynamically
  const sidebarFooter = document.querySelector('.sidebar-footer');
  if (sidebarFooter) {
    const logoutBtn = document.createElement('button');
    logoutBtn.type = 'button';
    logoutBtn.className = 'logout-btn';
    logoutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out';
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminEmail');
      window.location.href = '/login.html';
    });
    sidebarFooter.appendChild(logoutBtn);
  }

  // Update Admin Info dynamically if username elements exist
  const userNameEl = document.querySelector('.user-name');
  const adminEmail = localStorage.getItem('adminEmail');
  if (userNameEl && adminEmail) {
    userNameEl.textContent = adminEmail.split('@')[0];
  }

  updateAdminViewMode();
  renderSectionFilters();

  if (activePage === 'inquiries') {
    if (typeof window.fetchInquiries === 'function') {
      window.fetchInquiries();
    }
  } else {
    fetchContent();
  }

  document.getElementById('inquiry-modal-mark-read')?.addEventListener('click', () => {
    if (activeInquiryId && typeof window.markInquiryRead === 'function') {
      window.markInquiryRead(activeInquiryId);
    }
    if (typeof window.closeInquiryModal === 'function') {
      window.closeInquiryModal();
    }
  });
  document.getElementById('inquiry-modal-delete')?.addEventListener('click', () => {
    if (activeInquiryId && typeof window.deleteInquiryById === 'function') {
      window.deleteInquiryById(activeInquiryId);
    }
  });
});
