const fs = require('fs');
let html = `
        <!-- COMMUNITY SPOTLIGHT -->
        <section id="sec-spotlight" class="form-card section-block page-section-about">
          <div class="card-header">
            <div class="header-title">
              <i class="fa-solid fa-lightbulb card-icon"></i>
              <h2>Community Spotlight</h2>
            </div>
            <span class="section-tag">Spotlight</span>
          </div>
          <div class="card-body">
            <div class="grid-layout cols-2 mb30">
              <div class="sub-card">
                <h3>Top Icon Image</h3>
                <div class="coin-preview-row">
                  <div class="coin-image-container spec-square">
                    <img id="spotlightTopIcon-preview" src="" alt="Top Icon" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23222%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2210%22>Empty</text></svg>'">
                  </div>
                  <div class="upload-btn-wrapper">
                    <button type="button" class="btn btn-upload"><i class="fa-solid fa-cloud-arrow-up"></i> Upload</button>
                    <input type="file" id="spotlightTopIcon" name="spotlightTopIcon" accept="image/*" onchange="previewImage(this, 'spotlightTopIcon-preview')">
                  </div>
                  <button type="button" class="btn btn-danger" onclick="clearImage('spotlightTopIcon', 'spotlightTopIcon-preview', 'remove_spotlightTopIcon', event)" title="Remove Image"><i class="fa-solid fa-trash-can"></i></button>
                  <input type="hidden" id="remove_spotlightTopIcon" name="remove_spotlightTopIcon" value="false">
                </div>
              </div>
              <div class="sub-card">
                <h3>Flash Light Shape Image</h3>
                <div class="coin-preview-row">
                  <div class="coin-image-container spec-square">
                    <img id="spotlightShapeImage-preview" src="" alt="Flash Light Shape" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23222%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2210%22>Empty</text></svg>'">
                  </div>
                  <div class="upload-btn-wrapper">
                    <button type="button" class="btn btn-upload"><i class="fa-solid fa-cloud-arrow-up"></i> Upload</button>
                    <input type="file" id="spotlightShapeImage" name="spotlightShapeImage" accept="image/*" onchange="previewImage(this, 'spotlightShapeImage-preview')">
                  </div>
                  <button type="button" class="btn btn-danger" onclick="clearImage('spotlightShapeImage', 'spotlightShapeImage-preview', 'remove_spotlightShapeImage', event)" title="Remove Image"><i class="fa-solid fa-trash-can"></i></button>
                  <input type="hidden" id="remove_spotlightShapeImage" name="remove_spotlightShapeImage" value="false">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="spotlightTitle">Title</label>
              <input type="text" id="spotlightTitle" name="spotlightTitle">
            </div>

            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="margin-bottom: 0; font-weight: 600;">Description Paragraphs</label>
                <button type="button" class="btn btn-upload" onclick="addNewSpotlightParagraphRow()" style="padding: 6px 12px; font-size: 13px; margin: 0; width: auto; display: inline-flex; align-items: center; gap: 6px;">
                  <i class="fa-solid fa-plus"></i> Add Paragraph
                </button>
              </div>
              <div id="spotlight-paragraphs-container" class="dynamic-list-container">
              </div>
            </div>

            <div class="grid-layout cols-2 mb30">
              <div class="form-group">
                <label for="spotlightPrimaryBtnText">Primary Button Text</label>
                <input type="text" id="spotlightPrimaryBtnText" name="spotlightPrimaryBtnText">
              </div>
              <div class="form-group">
                <label for="spotlightPrimaryBtnLink">Primary Button Link</label>
                <input type="text" id="spotlightPrimaryBtnLink" name="spotlightPrimaryBtnLink">
              </div>
              <div class="form-group">
                <label for="spotlightSecondaryBtnText">Secondary Button Text</label>
                <input type="text" id="spotlightSecondaryBtnText" name="spotlightSecondaryBtnText">
              </div>
              <div class="form-group">
                <label for="spotlightSecondaryBtnLink">Secondary Button Link</label>
                <input type="text" id="spotlightSecondaryBtnLink" name="spotlightSecondaryBtnLink">
              </div>
            </div>

            <div class="sub-card mb30">
              <h3>Bottom Bg Image</h3>
              <div class="coin-preview-row">
                <div class="coin-image-container spec-square">
                  <img id="spotlightBgImage-preview" src="" alt="Bottom Background" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23222%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2210%22>Empty</text></svg>'">
                </div>
                <div class="upload-btn-wrapper">
                  <button type="button" class="btn btn-upload"><i class="fa-solid fa-cloud-arrow-up"></i> Upload</button>
                  <input type="file" id="spotlightBgImage" name="spotlightBgImage" accept="image/*" onchange="previewImage(this, 'spotlightBgImage-preview')">
                </div>
                <button type="button" class="btn btn-danger" onclick="clearImage('spotlightBgImage', 'spotlightBgImage-preview', 'remove_spotlightBgImage', event)" title="Remove Image"><i class="fa-solid fa-trash-can"></i></button>
                <input type="hidden" id="remove_spotlightBgImage" name="remove_spotlightBgImage" value="false">
              </div>
            </div>

            <h3 class="mt20">Metaverse 9 Letters Images</h3>
            <div class="grid-layout cols-3 mb30">
`;

const letters = ['M','E','T','A','V','E','R','S','E'];
for (let i = 1; i <= 9; i++) {
  html += `              <div class="sub-card">
                <h3>Letter ${i} (${letters[i-1]})</h3>
                <div class="coin-preview-row">
                  <div class="coin-image-container spec-square"><img id="spotlightLetter${i}Image-preview" src="" alt="Letter ${i}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23222%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2210%22>Empty</text></svg>'"></div>
                  <div class="upload-btn-wrapper">
                    <button type="button" class="btn btn-upload"><i class="fa-solid fa-cloud-arrow-up"></i> Upload</button>
                    <input type="file" id="spotlightLetter${i}Image" name="spotlightLetter${i}Image" accept="image/*" onchange="previewImage(this, 'spotlightLetter${i}Image-preview')">
                  </div>
                  <button type="button" class="btn btn-danger" onclick="clearImage('spotlightLetter${i}Image', 'spotlightLetter${i}Image-preview', 'remove_spotlightLetter${i}Image', event)" title="Remove Image"><i class="fa-solid fa-trash-can"></i></button>
                  <input type="hidden" id="remove_spotlightLetter${i}Image" name="remove_spotlightLetter${i}Image" value="false">
                </div>
              </div>\n`;
}

html += `            </div>
          </div>
        </section>

        <!-- TEAM INTRO -->
        <section id="sec-team" class="form-card section-block page-section-about">`;

let file = fs.readFileSync('d:/iic-metaverse-backend/public/admin.html', 'utf8');
file = file.replace(/        <!-- TEAM INTRO -->\r?\n        <section id="sec-team" class="form-card section-block page-section-about">/g, html);
fs.writeFileSync('d:/iic-metaverse-backend/public/admin.html', file);
