const fs = require('fs');
let file = fs.readFileSync('d:/iic-metaverse-backend/public/admin.js', 'utf8');

file += `
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
`;

fs.writeFileSync('d:/iic-metaverse-backend/public/admin.js', file);
