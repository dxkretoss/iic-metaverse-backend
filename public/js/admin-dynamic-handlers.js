// Expose preview global functions
window.previewImage = previewImage;
window.hideToast = hideToast;
function syncActivePageData() {
  if (activePage === 'inquiries') {
    if (typeof fetchInquiries !== 'undefined') fetchInquiries();
  } else {
    if (typeof fetchContent !== 'undefined') fetchContent();
  }
}

if (typeof fetchContent !== 'undefined') window.fetchContent = fetchContent;
if (typeof fetchInquiries !== 'undefined') window.fetchInquiries = fetchInquiries;
window.syncActivePageData = syncActivePageData;
if (typeof openInquiryModal !== 'undefined') window.openInquiryModal = openInquiryModal;
if (typeof closeInquiryModal !== 'undefined') window.closeInquiryModal = closeInquiryModal;
if (typeof deleteInquiryById !== 'undefined') window.deleteInquiryById = deleteInquiryById;

// Render Dynamic Ticker Coins Editor Rows
function renderTickerCoinsEditor(coins) {
  const container = document.getElementById('ticker-coins-container');
  if (!container) return;

  container.innerHTML = '';

  if (!coins || coins.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No coins in marquee. Click "Add Dynamic Coin" to start!</div>`;
    return;
  }

  coins.forEach(coin => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-symbol" placeholder="Symbol (e.g. BTC)" value="${coin.symbol || ''}" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-name" placeholder="Name (e.g. Bitcoin)" value="${coin.name || ''}" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-price" placeholder="Price" value="${coin.price || ''}" required>
      </div>
      <div class="form-group" style="margin-bottom: 0;">
        <input type="text" class="ticker-change" placeholder="24h Change" value="${coin.change || ''}" required>
      </div>
      <button type="button" class="btn-delete-row" onclick="deleteTickerRow(this)" title="Delete Coin">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty coin row to active editor
function addNewTickerRow() {
  const container = document.getElementById('ticker-coins-container');
  if (!container) return;

  // Clear empty state text if present
  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-symbol" placeholder="Symbol" required>
    </div>
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-name" placeholder="Name" required>
    </div>
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-price" placeholder="Price" required>
    </div>
    <div class="form-group" style="margin-bottom: 0;">
      <input type="text" class="ticker-change" placeholder="24h Change" required>
    </div>
    <button type="button" class="btn-delete-row" onclick="deleteTickerRow(this)" title="Delete Coin">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete coin row from DOM
function deleteTickerRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('ticker-coins-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No coins in marquee. Click "Add Dynamic Coin" to start!</div>`;
    }
  }
}

// Expose ticker editor functions globally
window.renderTickerCoinsEditor = renderTickerCoinsEditor;
window.addNewTickerRow = addNewTickerRow;
window.deleteTickerRow = deleteTickerRow;

// Render Dynamic Gallery Paragraphs Editor Rows
function renderGalleryParagraphsEditor(paragraphs) {
  const container = document.getElementById('gallery-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="gallery-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty paragraph row
function addNewParagraphRow() {
  const container = document.getElementById('gallery-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="gallery-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete paragraph row
function deleteParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('gallery-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

// Expose functions globally
window.renderGalleryParagraphsEditor = renderGalleryParagraphsEditor;
window.addNewParagraphRow = addNewParagraphRow;
window.deleteParagraphRow = deleteParagraphRow;

// Render Dynamic Owner 1 Paragraphs Editor Rows
function renderOwner1ParagraphsEditor(paragraphs) {
  const container = document.getElementById('owner1-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="owner1-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteOwner1ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty Owner 1 paragraph row
function addNewOwner1ParagraphRow() {
  const container = document.getElementById('owner1-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="owner1-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteOwner1ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete Owner 1 paragraph row
function deleteOwner1ParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('owner1-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

// Render Dynamic Owner 2 Paragraphs Editor Rows
function renderOwner2ParagraphsEditor(paragraphs) {
  const container = document.getElementById('owner2-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="owner2-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteOwner2ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

// Add empty Owner 2 paragraph row
function addNewOwner2ParagraphRow() {
  const container = document.getElementById('owner2-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="owner2-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteOwner2ParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

// Delete Owner 2 paragraph row
function deleteOwner2ParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('owner2-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No bio paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

// Expose owner functions globally
window.renderOwner1ParagraphsEditor = renderOwner1ParagraphsEditor;
window.addNewOwner1ParagraphRow = addNewOwner1ParagraphRow;
window.deleteOwner1ParagraphRow = deleteOwner1ParagraphRow;
window.renderOwner2ParagraphsEditor = renderOwner2ParagraphsEditor;
window.addNewOwner2ParagraphRow = addNewOwner2ParagraphRow;
window.deleteOwner2ParagraphRow = deleteOwner2ParagraphRow;

// Render Ecosystem Paragraphs

function renderEcosystemParagraphsEditor(paragraphs) {
  const container = document.getElementById('ecosystem-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="ecosystem-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteEcosystemParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

function addNewEcosystemParagraphRow() {
  const container = document.getElementById('ecosystem-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="ecosystem-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteEcosystemParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

function deleteEcosystemParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('ecosystem-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

window.renderEcosystemParagraphsEditor = renderEcosystemParagraphsEditor;
window.addNewEcosystemParagraphRow = addNewEcosystemParagraphRow;
window.deleteEcosystemParagraphRow = deleteEcosystemParagraphRow;


// Normalize paragraph arrays (handles legacy JSON-string storage)
function normalizeParagraphs(paragraphs) {
  if (!paragraphs) return [];
  if (typeof paragraphs === 'string') {
    try {
      const parsed = JSON.parse(paragraphs);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) { /* fall through */ }
    return paragraphs.trim() ? [paragraphs] : [];
  }
  if (Array.isArray(paragraphs)) {
    if (paragraphs.length === 1 && typeof paragraphs[0] === 'string') {
      const first = paragraphs[0].trim();
      if (first.startsWith('[')) {
        try {
          const parsed = JSON.parse(first);
          if (Array.isArray(parsed)) return parsed;
        } catch (e) { /* fall through */ }
      }
    }
    return paragraphs;
  }
  return [];
}

window.normalizeParagraphs = normalizeParagraphs;

// Render Contact Global Presence Paragraphs
function renderContactGlobalParagraphsEditor(paragraphs) {
  const container = document.getElementById('contact-global-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';
  paragraphs = normalizeParagraphs(paragraphs);

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="contact-global-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content..." required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deleteContactGlobalParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

function addNewContactGlobalParagraphRow() {
  const container = document.getElementById('contact-global-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="contact-global-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content..." required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deleteContactGlobalParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

function deleteContactGlobalParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('contact-global-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

window.renderContactGlobalParagraphsEditor = renderContactGlobalParagraphsEditor;
window.addNewContactGlobalParagraphRow = addNewContactGlobalParagraphRow;
window.deleteContactGlobalParagraphRow = deleteContactGlobalParagraphRow;

// Render Contact Help Paragraphs

function rendercontacthelpParagraphsEditor(paragraphs) {
  const container = document.getElementById('contacthelp-paragraphs-container');
  if (!container) return;

  container.innerHTML = '';
  paragraphs = normalizeParagraphs(paragraphs);

  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    return;
  }

  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = `
      <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
        <textarea class="contacthelp-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required>${text || ''}</textarea>
      </div>
      <button type="button" class="btn btn-danger" onclick="deletecontacthelpParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    container.appendChild(row);
  });
}

function addNewcontacthelpParagraphRow() {
  const container = document.getElementById('contacthelp-paragraphs-container');
  if (!container) return;

  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }

  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div class="form-group" style="margin-bottom: 0; flex-grow: 1;">
      <textarea class="contacthelp-paragraph-textarea" rows="2" style="width: 100%; min-height: auto; resize: vertical;" placeholder="Enter paragraph content... (HTML tags like span, b are supported)" required></textarea>
    </div>
    <button type="button" class="btn btn-danger" onclick="deletecontacthelpParagraphRow(this)" title="Delete Paragraph" style="margin-bottom: 0; padding: 10px 12px; height: 100%;">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;
  container.appendChild(row);
}

function deletecontacthelpParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('contacthelp-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>`;
    }
  }
}

window.rendercontacthelpParagraphsEditor = rendercontacthelpParagraphsEditor;
window.addNewcontacthelpParagraphRow = addNewcontacthelpParagraphRow;
window.deletecontacthelpParagraphRow = deletecontacthelpParagraphRow;


// Render Spotlight Paragraphs
function renderSpotlightParagraphsEditor(paragraphs) {
  const container = document.getElementById('spotlight-paragraphs-container');
  if (!container) return;
  container.innerHTML = '';
  if (!paragraphs || paragraphs.length === 0) {
    container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>';
    return;
  }
  paragraphs.forEach(text => {
    const row = document.createElement('div');
    row.className = 'ticker-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';
    row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required>" + text + "</textarea></div><button type='button' class='btn btn-danger' onclick='deleteSpotlightParagraphRow(this)' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-trash-can'></i></button>";
    container.appendChild(row);
  });
}

function addNewSpotlightParagraphRow() {
  const container = document.getElementById('spotlight-paragraphs-container');
  if (!container) return;
  if (container.children.length === 1 && !container.firstChild.classList.contains('ticker-row')) {
    container.innerHTML = '';
  }
  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required></textarea></div><button type='button' class='btn btn-danger' onclick='deleteSpotlightParagraphRow(this)' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-trash-can'></i></button>";
  container.appendChild(row);
}

function deleteSpotlightParagraphRow(button) {
  const row = button.closest('.ticker-row');
  if (row) {
    row.remove();
    const container = document.getElementById('spotlight-paragraphs-container');
    if (container && container.children.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">No paragraphs. Click "Add Paragraph" to start!</div>';
    }
  }
}

window.renderSpotlightParagraphsEditor = renderSpotlightParagraphsEditor;
window.addNewSpotlightParagraphRow = addNewSpotlightParagraphRow;
window.deleteSpotlightParagraphRow = deleteSpotlightParagraphRow;


function addParagraphField(containerId) {
  const container = document.getElementById(containerId + '-container');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='" + containerId + "-textarea spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required></textarea></div><button type='button' class='btn btn-danger' onclick='this.closest(\".ticker-row\").remove()' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-xmark'></i></button>";
  container.appendChild(row);
}

function renderDynamicParagraphs(containerId, paragraphsArr) {
  const container = document.getElementById(containerId + '-container');
  if (!container) return;
  container.innerHTML = '';
  if (paragraphsArr && paragraphsArr.length) {
    paragraphsArr.forEach(p => {
      const row = document.createElement('div');
      row.className = 'ticker-row';
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '10px';
      row.style.marginBottom = '10px';
      row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='" + containerId + "-textarea spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required>" + p.replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</textarea></div><button type='button' class='btn btn-danger' onclick='this.closest(\".ticker-row\").remove()' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-xmark'></i></button>";
      container.appendChild(row);
    });
  }
}

function collectDynamicParagraphs(containerId) {
  const textareas = document.querySelectorAll('.' + containerId + '-textarea');
  const arr = [];
  textareas.forEach(t => arr.push(t.value));
  return arr;
}

function addDynamicParagraph(containerId, baseId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'ticker-row';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '10px';
  row.style.marginBottom = '10px';
  row.innerHTML = "<div class='form-group' style='margin-bottom: 0; flex-grow: 1;'><textarea class='" + baseId + "-textarea spotlight-paragraph-textarea' rows='2' style='width: 100%; min-height: auto; resize: vertical;' required></textarea></div><button type='button' class='btn btn-danger' onclick='this.closest(\".ticker-row\").remove()' style='margin-bottom: 0; padding: 10px 12px; height: 100%;'><i class='fa-solid fa-xmark'></i></button>";
  container.appendChild(row);
}

window.addParagraphField = addParagraphField;
window.renderDynamicParagraphs = renderDynamicParagraphs;
window.collectDynamicParagraphs = collectDynamicParagraphs;
window.addDynamicParagraph = addDynamicParagraph;

