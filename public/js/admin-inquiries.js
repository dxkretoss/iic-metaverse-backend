async function fetchInquiries() {
  const loading = document.getElementById('inquiries-loading');
  const empty = document.getElementById('inquiries-empty');
  const tableWrap = document.querySelector('.inquiries-table-wrap');
  const tbody = document.getElementById('inquiries-table-body');
  const countTag = document.getElementById('inquiries-count-tag');

  if (loading) loading.classList.remove('hidden-panel');
  if (empty) empty.classList.add('hidden-panel');
  if (tableWrap) tableWrap.style.display = 'none';

  try {
    const response = await fetch('/api/contact-inquiries');
    if (!response.ok) throw new Error('API unreachable');
    const resData = await response.json();

    inquiriesCache = resData.data || [];
    if (countTag) countTag.textContent = `${inquiriesCache.length} total`;

    if (loading) loading.classList.add('hidden-panel');

    if (!inquiriesCache.length) {
      if (empty) empty.classList.remove('hidden-panel');
      if (tbody) tbody.innerHTML = '';
      return;
    }

    if (tableWrap) tableWrap.style.display = 'block';
    renderInquiriesTable(inquiriesCache);
  } catch (err) {
    console.error(err);
    if (loading) loading.classList.add('hidden-panel');
    showToast('Error', 'Could not load contact form submissions.', true);
  }
}

function formatInquiryDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderInquiriesTable(inquiries) {
  const tbody = document.getElementById('inquiries-table-body');
  if (!tbody) return;

  tbody.innerHTML = inquiries.map(inq => {
    const statusClass = inq.status === 'new' ? 'new' : 'read';
    const rowClass = inq.status === 'new' ? 'row-new' : '';
    const company = inq.company || '—';
    const type = inq.inquiryType || '—';
    return `
      <tr class="${rowClass}" data-id="${inq._id}">
        <td>${formatInquiryDate(inq.createdAt)}</td>
        <td>${escapeHtml(inq.fullName)}</td>
        <td><a href="mailto:${escapeHtml(inq.email)}">${escapeHtml(inq.email)}</a></td>
        <td>${escapeHtml(company)}</td>
        <td>${escapeHtml(type)}</td>
        <td><span class="status-badge ${statusClass}">${inq.status || 'new'}</span></td>
        <td>
          <button type="button" class="btn btn-secondary btn-table" onclick="openInquiryModal('${inq._id}')">View</button>
          <button type="button" class="btn btn-danger btn-table" onclick="deleteInquiryById('${inq._id}')">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

function openInquiryModal(id) {
  const inquiry = inquiriesCache.find(i => i._id === id);
  if (!inquiry) return;

  activeInquiryId = id;
  const body = document.getElementById('inquiry-modal-body');
  const modal = document.getElementById('inquiry-modal');
  const markReadBtn = document.getElementById('inquiry-modal-mark-read');

  if (body) {
    body.innerHTML = `
      <div class="inquiry-detail-row"><label>Submitted</label><p>${formatInquiryDate(inquiry.createdAt)}</p></div>
      <div class="inquiry-detail-row"><label>Full Name</label><p>${escapeHtml(inquiry.fullName)}</p></div>
      <div class="inquiry-detail-row"><label>Email</label><p><a href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></p></div>
      <div class="inquiry-detail-row"><label>Company</label><p>${escapeHtml(inquiry.company || '—')}</p></div>
      <div class="inquiry-detail-row"><label>Inquiry Type</label><p>${escapeHtml(inquiry.inquiryType || '—')}</p></div>
      <div class="inquiry-detail-row"><label>Message</label><p>${escapeHtml(inquiry.message)}</p></div>
      <div class="inquiry-detail-row"><label>Status</label><p><span class="status-badge ${inquiry.status === 'new' ? 'new' : 'read'}">${inquiry.status || 'new'}</span></p></div>
    `;
  }

  if (markReadBtn) {
    markReadBtn.style.display = inquiry.status === 'read' ? 'none' : 'inline-flex';
  }

  if (modal) modal.classList.remove('hidden-panel');

  if (inquiry.status === 'new') {
    markInquiryRead(id, false);
  }
}

function closeInquiryModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('inquiry-modal');
  if (modal) modal.classList.add('hidden-panel');
  activeInquiryId = null;
}

async function markInquiryRead(id, refreshList = true) {
  try {
    const response = await fetch(`/api/contact-inquiries/${id}/read`, { method: 'PATCH' });
    const resData = await response.json();
    if (!response.ok) throw new Error(resData.error || 'Update failed');

    const idx = inquiriesCache.findIndex(i => i._id === id);
    if (idx !== -1) inquiriesCache[idx] = resData.data;

    if (refreshList) {
      renderInquiriesTable(inquiriesCache);
      showToast('Updated', 'Inquiry marked as read.', false);
    } else {
      renderInquiriesTable(inquiriesCache);
    }
  } catch (err) {
    console.error(err);
    showToast('Error', 'Could not update inquiry status.', true);
  }
}

async function deleteInquiryById(id) {
  if (!confirm('Delete this submission permanently?')) return;

  try {
    const response = await fetch(`/api/contact-inquiries/${id}`, { method: 'DELETE' });
    const resData = await response.json();
    if (!response.ok) throw new Error(resData.error || 'Delete failed');

    closeInquiryModal();
    showToast('Deleted', 'Submission removed.', false);
    fetchInquiries();
  } catch (err) {
    console.error(err);
    showToast('Error', 'Could not delete submission.', true);
  }
}

// Fetch active page data from Node Express Server
