/* 
* Admin JavaScript for the ABOUT page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Inject values into the DOM safely
  const el_aboutHeroBadge = document.getElementById('aboutHeroBadge'); if (el_aboutHeroBadge && el_aboutHeroBadge.type !== 'file') el_aboutHeroBadge.value = data.aboutHeroBadge || '';
  const el_aboutHeroTitle = document.getElementById('aboutHeroTitle'); if (el_aboutHeroTitle && el_aboutHeroTitle.type !== 'file') el_aboutHeroTitle.value = data.aboutHeroTitle || '';
  const el_aboutHeroDescription = document.getElementById('aboutHeroDescription'); if (el_aboutHeroDescription && el_aboutHeroDescription.type !== 'file') el_aboutHeroDescription.value = data.aboutHeroDescription || '';
  const el_galleryLeftImage_preview = document.getElementById('galleryLeftImage-preview'); if (el_galleryLeftImage_preview && el_galleryLeftImage_preview.type !== 'file') el_galleryLeftImage_preview.value = data['galleryLeftImage-preview'] || '';
  const el_galleryLeftImage = document.getElementById('galleryLeftImage'); if (el_galleryLeftImage && el_galleryLeftImage.type !== 'file') el_galleryLeftImage.value = data.galleryLeftImage || '';
  const el_remove_galleryLeftImage = document.getElementById('remove_galleryLeftImage'); if (el_remove_galleryLeftImage && el_remove_galleryLeftImage.type !== 'file') el_remove_galleryLeftImage.value = data.remove_galleryLeftImage || '';
  const el_galleryCenterImage_preview = document.getElementById('galleryCenterImage-preview'); if (el_galleryCenterImage_preview && el_galleryCenterImage_preview.type !== 'file') el_galleryCenterImage_preview.value = data['galleryCenterImage-preview'] || '';
  const el_galleryCenterImage = document.getElementById('galleryCenterImage'); if (el_galleryCenterImage && el_galleryCenterImage.type !== 'file') el_galleryCenterImage.value = data.galleryCenterImage || '';
  const el_remove_galleryCenterImage = document.getElementById('remove_galleryCenterImage'); if (el_remove_galleryCenterImage && el_remove_galleryCenterImage.type !== 'file') el_remove_galleryCenterImage.value = data.remove_galleryCenterImage || '';
  const el_galleryRightImage_preview = document.getElementById('galleryRightImage-preview'); if (el_galleryRightImage_preview && el_galleryRightImage_preview.type !== 'file') el_galleryRightImage_preview.value = data['galleryRightImage-preview'] || '';
  const el_galleryRightImage = document.getElementById('galleryRightImage'); if (el_galleryRightImage && el_galleryRightImage.type !== 'file') el_galleryRightImage.value = data.galleryRightImage || '';
  const el_remove_galleryRightImage = document.getElementById('remove_galleryRightImage'); if (el_remove_galleryRightImage && el_remove_galleryRightImage.type !== 'file') el_remove_galleryRightImage.value = data.remove_galleryRightImage || '';
  const el_galleryTitle = document.getElementById('galleryTitle'); if (el_galleryTitle && el_galleryTitle.type !== 'file') el_galleryTitle.value = data.galleryTitle || '';
  const el_gallery_paragraphs_container = document.getElementById('gallery-paragraphs-container'); if (el_gallery_paragraphs_container && el_gallery_paragraphs_container.type !== 'file') el_gallery_paragraphs_container.value = data['gallery-paragraphs-container'] || '';
  const el_owner1Image_preview = document.getElementById('owner1Image-preview'); if (el_owner1Image_preview && el_owner1Image_preview.type !== 'file') el_owner1Image_preview.value = data['owner1Image-preview'] || '';
  const el_owner1Image = document.getElementById('owner1Image'); if (el_owner1Image && el_owner1Image.type !== 'file') el_owner1Image.value = data.owner1Image || '';
  const el_remove_owner1Image = document.getElementById('remove_owner1Image'); if (el_remove_owner1Image && el_remove_owner1Image.type !== 'file') el_remove_owner1Image.value = data.remove_owner1Image || '';
  const el_owner1Badge = document.getElementById('owner1Badge'); if (el_owner1Badge && el_owner1Badge.type !== 'file') el_owner1Badge.value = data.owner1Badge || '';
  const el_owner1Name = document.getElementById('owner1Name'); if (el_owner1Name && el_owner1Name.type !== 'file') el_owner1Name.value = data.owner1Name || '';
  const el_owner1_paragraphs_container = document.getElementById('owner1-paragraphs-container'); if (el_owner1_paragraphs_container && el_owner1_paragraphs_container.type !== 'file') el_owner1_paragraphs_container.value = data['owner1-paragraphs-container'] || '';
  const el_owner2Image_preview = document.getElementById('owner2Image-preview'); if (el_owner2Image_preview && el_owner2Image_preview.type !== 'file') el_owner2Image_preview.value = data['owner2Image-preview'] || '';
  const el_owner2Image = document.getElementById('owner2Image'); if (el_owner2Image && el_owner2Image.type !== 'file') el_owner2Image.value = data.owner2Image || '';
  const el_remove_owner2Image = document.getElementById('remove_owner2Image'); if (el_remove_owner2Image && el_remove_owner2Image.type !== 'file') el_remove_owner2Image.value = data.remove_owner2Image || '';
  const el_owner2Badge = document.getElementById('owner2Badge'); if (el_owner2Badge && el_owner2Badge.type !== 'file') el_owner2Badge.value = data.owner2Badge || '';
  const el_owner2Name = document.getElementById('owner2Name'); if (el_owner2Name && el_owner2Name.type !== 'file') el_owner2Name.value = data.owner2Name || '';
  const el_owner2_paragraphs_container = document.getElementById('owner2-paragraphs-container'); if (el_owner2_paragraphs_container && el_owner2_paragraphs_container.type !== 'file') el_owner2_paragraphs_container.value = data['owner2-paragraphs-container'] || '';
  const el_visionImage_preview = document.getElementById('visionImage-preview'); if (el_visionImage_preview && el_visionImage_preview.type !== 'file') el_visionImage_preview.value = data['visionImage-preview'] || '';
  const el_visionImage = document.getElementById('visionImage'); if (el_visionImage && el_visionImage.type !== 'file') el_visionImage.value = data.visionImage || '';
  const el_remove_visionImage = document.getElementById('remove_visionImage'); if (el_remove_visionImage && el_remove_visionImage.type !== 'file') el_remove_visionImage.value = data.remove_visionImage || '';
  const el_visionHeading = document.getElementById('visionHeading'); if (el_visionHeading && el_visionHeading.type !== 'file') el_visionHeading.value = data.visionHeading || '';
  const el_visionDescription = document.getElementById('visionDescription'); if (el_visionDescription && el_visionDescription.type !== 'file') el_visionDescription.value = data.visionDescription || '';
  const el_missionImage_preview = document.getElementById('missionImage-preview'); if (el_missionImage_preview && el_missionImage_preview.type !== 'file') el_missionImage_preview.value = data['missionImage-preview'] || '';
  const el_missionImage = document.getElementById('missionImage'); if (el_missionImage && el_missionImage.type !== 'file') el_missionImage.value = data.missionImage || '';
  const el_remove_missionImage = document.getElementById('remove_missionImage'); if (el_remove_missionImage && el_remove_missionImage.type !== 'file') el_remove_missionImage.value = data.remove_missionImage || '';
  const el_missionHeading = document.getElementById('missionHeading'); if (el_missionHeading && el_missionHeading.type !== 'file') el_missionHeading.value = data.missionHeading || '';
  const el_missionDescription = document.getElementById('missionDescription'); if (el_missionDescription && el_missionDescription.type !== 'file') el_missionDescription.value = data.missionDescription || '';
  const el_ecosystemTitle = document.getElementById('ecosystemTitle'); if (el_ecosystemTitle && el_ecosystemTitle.type !== 'file') el_ecosystemTitle.value = data.ecosystemTitle || '';
  const el_ecosystem_paragraphs_container = document.getElementById('ecosystem-paragraphs-container'); if (el_ecosystem_paragraphs_container && el_ecosystem_paragraphs_container.type !== 'file') el_ecosystem_paragraphs_container.value = data['ecosystem-paragraphs-container'] || '';
  const el_ecosystemImage_preview = document.getElementById('ecosystemImage-preview'); if (el_ecosystemImage_preview && el_ecosystemImage_preview.type !== 'file') el_ecosystemImage_preview.value = data['ecosystemImage-preview'] || '';
  const el_ecosystemImage = document.getElementById('ecosystemImage'); if (el_ecosystemImage && el_ecosystemImage.type !== 'file') el_ecosystemImage.value = data.ecosystemImage || '';
  const el_remove_ecosystemImage = document.getElementById('remove_ecosystemImage'); if (el_remove_ecosystemImage && el_remove_ecosystemImage.type !== 'file') el_remove_ecosystemImage.value = data.remove_ecosystemImage || '';
  const el_ecosystemBgImage_preview = document.getElementById('ecosystemBgImage-preview'); if (el_ecosystemBgImage_preview && el_ecosystemBgImage_preview.type !== 'file') el_ecosystemBgImage_preview.value = data['ecosystemBgImage-preview'] || '';
  const el_ecosystemBgImage = document.getElementById('ecosystemBgImage'); if (el_ecosystemBgImage && el_ecosystemBgImage.type !== 'file') el_ecosystemBgImage.value = data.ecosystemBgImage || '';
  const el_remove_ecosystemBgImage = document.getElementById('remove_ecosystemBgImage'); if (el_remove_ecosystemBgImage && el_remove_ecosystemBgImage.type !== 'file') el_remove_ecosystemBgImage.value = data.remove_ecosystemBgImage || '';
  const el_spotlightTopIcon_preview = document.getElementById('spotlightTopIcon-preview'); if (el_spotlightTopIcon_preview && el_spotlightTopIcon_preview.type !== 'file') el_spotlightTopIcon_preview.value = data['spotlightTopIcon-preview'] || '';
  const el_spotlightTopIcon = document.getElementById('spotlightTopIcon'); if (el_spotlightTopIcon && el_spotlightTopIcon.type !== 'file') el_spotlightTopIcon.value = data.spotlightTopIcon || '';
  const el_remove_spotlightTopIcon = document.getElementById('remove_spotlightTopIcon'); if (el_remove_spotlightTopIcon && el_remove_spotlightTopIcon.type !== 'file') el_remove_spotlightTopIcon.value = data.remove_spotlightTopIcon || '';
  const el_spotlightShapeImage_preview = document.getElementById('spotlightShapeImage-preview'); if (el_spotlightShapeImage_preview && el_spotlightShapeImage_preview.type !== 'file') el_spotlightShapeImage_preview.value = data['spotlightShapeImage-preview'] || '';
  const el_spotlightShapeImage = document.getElementById('spotlightShapeImage'); if (el_spotlightShapeImage && el_spotlightShapeImage.type !== 'file') el_spotlightShapeImage.value = data.spotlightShapeImage || '';
  const el_remove_spotlightShapeImage = document.getElementById('remove_spotlightShapeImage'); if (el_remove_spotlightShapeImage && el_remove_spotlightShapeImage.type !== 'file') el_remove_spotlightShapeImage.value = data.remove_spotlightShapeImage || '';
  const el_spotlightTitle = document.getElementById('spotlightTitle'); if (el_spotlightTitle && el_spotlightTitle.type !== 'file') el_spotlightTitle.value = data.spotlightTitle || '';
  const el_spotlight_paragraphs_container = document.getElementById('spotlight-paragraphs-container'); if (el_spotlight_paragraphs_container && el_spotlight_paragraphs_container.type !== 'file') el_spotlight_paragraphs_container.value = data['spotlight-paragraphs-container'] || '';
  const el_spotlightPrimaryBtnText = document.getElementById('spotlightPrimaryBtnText'); if (el_spotlightPrimaryBtnText && el_spotlightPrimaryBtnText.type !== 'file') el_spotlightPrimaryBtnText.value = data.spotlightPrimaryBtnText || '';
  const el_spotlightPrimaryBtnLink = document.getElementById('spotlightPrimaryBtnLink'); if (el_spotlightPrimaryBtnLink && el_spotlightPrimaryBtnLink.type !== 'file') el_spotlightPrimaryBtnLink.value = data.spotlightPrimaryBtnLink || '';
  const el_spotlightSecondaryBtnText = document.getElementById('spotlightSecondaryBtnText'); if (el_spotlightSecondaryBtnText && el_spotlightSecondaryBtnText.type !== 'file') el_spotlightSecondaryBtnText.value = data.spotlightSecondaryBtnText || '';
  const el_spotlightSecondaryBtnLink = document.getElementById('spotlightSecondaryBtnLink'); if (el_spotlightSecondaryBtnLink && el_spotlightSecondaryBtnLink.type !== 'file') el_spotlightSecondaryBtnLink.value = data.spotlightSecondaryBtnLink || '';
  const el_spotlightBgImage_preview = document.getElementById('spotlightBgImage-preview'); if (el_spotlightBgImage_preview && el_spotlightBgImage_preview.type !== 'file') el_spotlightBgImage_preview.value = data['spotlightBgImage-preview'] || '';
  const el_spotlightBgImage = document.getElementById('spotlightBgImage'); if (el_spotlightBgImage && el_spotlightBgImage.type !== 'file') el_spotlightBgImage.value = data.spotlightBgImage || '';
  const el_remove_spotlightBgImage = document.getElementById('remove_spotlightBgImage'); if (el_remove_spotlightBgImage && el_remove_spotlightBgImage.type !== 'file') el_remove_spotlightBgImage.value = data.remove_spotlightBgImage || '';
  const el_spotlightLetter1Image_preview = document.getElementById('spotlightLetter1Image-preview'); if (el_spotlightLetter1Image_preview && el_spotlightLetter1Image_preview.type !== 'file') el_spotlightLetter1Image_preview.value = data['spotlightLetter1Image-preview'] || '';
  const el_spotlightLetter1Image = document.getElementById('spotlightLetter1Image'); if (el_spotlightLetter1Image && el_spotlightLetter1Image.type !== 'file') el_spotlightLetter1Image.value = data.spotlightLetter1Image || '';
  const el_remove_spotlightLetter1Image = document.getElementById('remove_spotlightLetter1Image'); if (el_remove_spotlightLetter1Image && el_remove_spotlightLetter1Image.type !== 'file') el_remove_spotlightLetter1Image.value = data.remove_spotlightLetter1Image || '';
  const el_spotlightLetter2Image_preview = document.getElementById('spotlightLetter2Image-preview'); if (el_spotlightLetter2Image_preview && el_spotlightLetter2Image_preview.type !== 'file') el_spotlightLetter2Image_preview.value = data['spotlightLetter2Image-preview'] || '';
  const el_spotlightLetter2Image = document.getElementById('spotlightLetter2Image'); if (el_spotlightLetter2Image && el_spotlightLetter2Image.type !== 'file') el_spotlightLetter2Image.value = data.spotlightLetter2Image || '';
  const el_remove_spotlightLetter2Image = document.getElementById('remove_spotlightLetter2Image'); if (el_remove_spotlightLetter2Image && el_remove_spotlightLetter2Image.type !== 'file') el_remove_spotlightLetter2Image.value = data.remove_spotlightLetter2Image || '';
  const el_spotlightLetter3Image_preview = document.getElementById('spotlightLetter3Image-preview'); if (el_spotlightLetter3Image_preview && el_spotlightLetter3Image_preview.type !== 'file') el_spotlightLetter3Image_preview.value = data['spotlightLetter3Image-preview'] || '';
  const el_spotlightLetter3Image = document.getElementById('spotlightLetter3Image'); if (el_spotlightLetter3Image && el_spotlightLetter3Image.type !== 'file') el_spotlightLetter3Image.value = data.spotlightLetter3Image || '';
  const el_remove_spotlightLetter3Image = document.getElementById('remove_spotlightLetter3Image'); if (el_remove_spotlightLetter3Image && el_remove_spotlightLetter3Image.type !== 'file') el_remove_spotlightLetter3Image.value = data.remove_spotlightLetter3Image || '';
  const el_spotlightLetter4Image_preview = document.getElementById('spotlightLetter4Image-preview'); if (el_spotlightLetter4Image_preview && el_spotlightLetter4Image_preview.type !== 'file') el_spotlightLetter4Image_preview.value = data['spotlightLetter4Image-preview'] || '';
  const el_spotlightLetter4Image = document.getElementById('spotlightLetter4Image'); if (el_spotlightLetter4Image && el_spotlightLetter4Image.type !== 'file') el_spotlightLetter4Image.value = data.spotlightLetter4Image || '';
  const el_remove_spotlightLetter4Image = document.getElementById('remove_spotlightLetter4Image'); if (el_remove_spotlightLetter4Image && el_remove_spotlightLetter4Image.type !== 'file') el_remove_spotlightLetter4Image.value = data.remove_spotlightLetter4Image || '';
  const el_spotlightLetter5Image_preview = document.getElementById('spotlightLetter5Image-preview'); if (el_spotlightLetter5Image_preview && el_spotlightLetter5Image_preview.type !== 'file') el_spotlightLetter5Image_preview.value = data['spotlightLetter5Image-preview'] || '';
  const el_spotlightLetter5Image = document.getElementById('spotlightLetter5Image'); if (el_spotlightLetter5Image && el_spotlightLetter5Image.type !== 'file') el_spotlightLetter5Image.value = data.spotlightLetter5Image || '';
  const el_remove_spotlightLetter5Image = document.getElementById('remove_spotlightLetter5Image'); if (el_remove_spotlightLetter5Image && el_remove_spotlightLetter5Image.type !== 'file') el_remove_spotlightLetter5Image.value = data.remove_spotlightLetter5Image || '';
  const el_spotlightLetter6Image_preview = document.getElementById('spotlightLetter6Image-preview'); if (el_spotlightLetter6Image_preview && el_spotlightLetter6Image_preview.type !== 'file') el_spotlightLetter6Image_preview.value = data['spotlightLetter6Image-preview'] || '';
  const el_spotlightLetter6Image = document.getElementById('spotlightLetter6Image'); if (el_spotlightLetter6Image && el_spotlightLetter6Image.type !== 'file') el_spotlightLetter6Image.value = data.spotlightLetter6Image || '';
  const el_remove_spotlightLetter6Image = document.getElementById('remove_spotlightLetter6Image'); if (el_remove_spotlightLetter6Image && el_remove_spotlightLetter6Image.type !== 'file') el_remove_spotlightLetter6Image.value = data.remove_spotlightLetter6Image || '';
  const el_spotlightLetter7Image_preview = document.getElementById('spotlightLetter7Image-preview'); if (el_spotlightLetter7Image_preview && el_spotlightLetter7Image_preview.type !== 'file') el_spotlightLetter7Image_preview.value = data['spotlightLetter7Image-preview'] || '';
  const el_spotlightLetter7Image = document.getElementById('spotlightLetter7Image'); if (el_spotlightLetter7Image && el_spotlightLetter7Image.type !== 'file') el_spotlightLetter7Image.value = data.spotlightLetter7Image || '';
  const el_remove_spotlightLetter7Image = document.getElementById('remove_spotlightLetter7Image'); if (el_remove_spotlightLetter7Image && el_remove_spotlightLetter7Image.type !== 'file') el_remove_spotlightLetter7Image.value = data.remove_spotlightLetter7Image || '';
  const el_spotlightLetter8Image_preview = document.getElementById('spotlightLetter8Image-preview'); if (el_spotlightLetter8Image_preview && el_spotlightLetter8Image_preview.type !== 'file') el_spotlightLetter8Image_preview.value = data['spotlightLetter8Image-preview'] || '';
  const el_spotlightLetter8Image = document.getElementById('spotlightLetter8Image'); if (el_spotlightLetter8Image && el_spotlightLetter8Image.type !== 'file') el_spotlightLetter8Image.value = data.spotlightLetter8Image || '';
  const el_remove_spotlightLetter8Image = document.getElementById('remove_spotlightLetter8Image'); if (el_remove_spotlightLetter8Image && el_remove_spotlightLetter8Image.type !== 'file') el_remove_spotlightLetter8Image.value = data.remove_spotlightLetter8Image || '';
  const el_spotlightLetter9Image_preview = document.getElementById('spotlightLetter9Image-preview'); if (el_spotlightLetter9Image_preview && el_spotlightLetter9Image_preview.type !== 'file') el_spotlightLetter9Image_preview.value = data['spotlightLetter9Image-preview'] || '';
  const el_spotlightLetter9Image = document.getElementById('spotlightLetter9Image'); if (el_spotlightLetter9Image && el_spotlightLetter9Image.type !== 'file') el_spotlightLetter9Image.value = data.spotlightLetter9Image || '';
  const el_remove_spotlightLetter9Image = document.getElementById('remove_spotlightLetter9Image'); if (el_remove_spotlightLetter9Image && el_remove_spotlightLetter9Image.type !== 'file') el_remove_spotlightLetter9Image.value = data.remove_spotlightLetter9Image || '';
  const el_inquiries_panel = document.getElementById('inquiries-panel'); if (el_inquiries_panel && el_inquiries_panel.type !== 'file') el_inquiries_panel.value = data['inquiries-panel'] || '';
  const el_inquiries_count_tag = document.getElementById('inquiries-count-tag'); if (el_inquiries_count_tag && el_inquiries_count_tag.type !== 'file') el_inquiries_count_tag.value = data['inquiries-count-tag'] || '';
  const el_inquiries_loading = document.getElementById('inquiries-loading'); if (el_inquiries_loading && el_inquiries_loading.type !== 'file') el_inquiries_loading.value = data['inquiries-loading'] || '';
  const el_inquiries_empty = document.getElementById('inquiries-empty'); if (el_inquiries_empty && el_inquiries_empty.type !== 'file') el_inquiries_empty.value = data['inquiries-empty'] || '';
  const el_inquiries_table = document.getElementById('inquiries-table'); if (el_inquiries_table && el_inquiries_table.type !== 'file') el_inquiries_table.value = data['inquiries-table'] || '';
  const el_inquiries_table_body = document.getElementById('inquiries-table-body'); if (el_inquiries_table_body && el_inquiries_table_body.type !== 'file') el_inquiries_table_body.value = data['inquiries-table-body'] || '';
  const el_inquiry_modal = document.getElementById('inquiry-modal'); if (el_inquiry_modal && el_inquiry_modal.type !== 'file') el_inquiry_modal.value = data['inquiry-modal'] || '';
  const el_inquiry_modal_body = document.getElementById('inquiry-modal-body'); if (el_inquiry_modal_body && el_inquiry_modal_body.type !== 'file') el_inquiry_modal_body.value = data['inquiry-modal-body'] || '';
  const el_inquiry_modal_mark_read = document.getElementById('inquiry-modal-mark-read'); if (el_inquiry_modal_mark_read && el_inquiry_modal_mark_read.type !== 'file') el_inquiry_modal_mark_read.value = data['inquiry-modal-mark-read'] || '';
  const el_inquiry_modal_delete = document.getElementById('inquiry-modal-delete'); if (el_inquiry_modal_delete && el_inquiry_modal_delete.type !== 'file') el_inquiry_modal_delete.value = data['inquiry-modal-delete'] || '';
  if (data.galleryParagraphs) renderGalleryParagraphsEditor(data.galleryParagraphs);
  if (data.owner1Paragraphs) renderOwner1ParagraphsEditor(data.owner1Paragraphs);
  if (data.owner2Paragraphs) renderOwner2ParagraphsEditor(data.owner2Paragraphs);
  if (data.ecosystemParagraphs) renderEcosystemParagraphsEditor(data.ecosystemParagraphs);
  if (data.spotlightParagraphs) renderSpotlightParagraphsEditor(data.spotlightParagraphs);
};

window.appendPageFormData = function(formData) {
  // Collect values from the DOM
  formData.append('aboutHeroBadge', document.getElementById('aboutHeroBadge').value);
    formData.append('aboutHeroTitle', document.getElementById('aboutHeroTitle').value);
    formData.append('aboutHeroDescription', document.getElementById('aboutHeroDescription').value);

    // Gallery Title
    formData.append('galleryTitle', document.getElementById('galleryTitle').value);

    // Gallery Files
    const leftFile = document.getElementById('galleryLeftImage').files[0];
    if (leftFile) formData.append('galleryLeftImage', leftFile);

    const centerFile = document.getElementById('galleryCenterImage').files[0];
    if (centerFile) formData.append('galleryCenterImage', centerFile);

    const rightFile = document.getElementById('galleryRightImage').files[0];
    if (rightFile) formData.append('galleryRightImage', rightFile);

    // Gallery Paragraphs serialization
    const paragraphs = [];
    document.querySelectorAll('.gallery-paragraph-textarea').forEach(textarea => {
      paragraphs.push(textarea.value);
    });
    formData.append('galleryParagraphs', JSON.stringify(paragraphs));

    // Gallery Image Remove hidden flags
    formData.append('remove_galleryLeftImage', document.getElementById('remove_galleryLeftImage').value);
    formData.append('remove_galleryCenterImage', document.getElementById('remove_galleryCenterImage').value);
    formData.append('remove_galleryRightImage', document.getElementById('remove_galleryRightImage').value);

    // Leadership Fields (Owner 1 & Owner 2)
    formData.append('owner1Badge', document.getElementById('owner1Badge').value);
    formData.append('owner1Name', document.getElementById('owner1Name').value);
    formData.append('owner2Badge', document.getElementById('owner2Badge').value);
    formData.append('owner2Name', document.getElementById('owner2Name').value);

    // Owner File Uploads
    const o1File = document.getElementById('owner1Image').files[0];
    if (o1File) formData.append('owner1Image', o1File);

    const o2File = document.getElementById('owner2Image').files[0];
    if (o2File) formData.append('owner2Image', o2File);

    // Owner Paragraph Serializations
    const o1Paragraphs = [];
    document.querySelectorAll('.owner1-paragraph-textarea').forEach(textarea => {
      o1Paragraphs.push(textarea.value);
    });
    formData.append('owner1Paragraphs', JSON.stringify(o1Paragraphs));

    const o2Paragraphs = [];
    document.querySelectorAll('.owner2-paragraph-textarea').forEach(textarea => {
      o2Paragraphs.push(textarea.value);
    });
    formData.append('owner2Paragraphs', JSON.stringify(o2Paragraphs));

    // Owner image removals flags
    formData.append('remove_owner1Image', document.getElementById('remove_owner1Image').value);
    formData.append('remove_owner2Image', document.getElementById('remove_owner2Image').value);

    const visionFile = document.getElementById('visionImage').files[0];
    if (visionFile) formData.append('visionImage', visionFile);
    const missionFile = document.getElementById('missionImage').files[0];
    if (missionFile) formData.append('missionImage', missionFile);

    const ecosystemImg = document.getElementById('ecosystemImage').files[0];
    if (ecosystemImg) formData.append('ecosystemImage', ecosystemImg);
    const ecosystemBg = document.getElementById('ecosystemBgImage').files[0];
    if (ecosystemBg) formData.append('ecosystemBgImage', ecosystemBg);

    formData.append('remove_visionImage', document.getElementById('remove_visionImage').value);
    formData.append('remove_missionImage', document.getElementById('remove_missionImage').value);
    formData.append('remove_ecosystemImage', document.getElementById('remove_ecosystemImage').value);
    formData.append('remove_ecosystemBgImage', document.getElementById('remove_ecosystemBgImage').value);

    formData.append('remove_spotlightTopIcon', document.getElementById('remove_spotlightTopIcon').value);
    formData.append('remove_spotlightShapeImage', document.getElementById('remove_spotlightShapeImage').value);
    formData.append('remove_spotlightBgImage', document.getElementById('remove_spotlightBgImage').value);
    for (let i = 1; i <= 9; i++) {
      formData.append('remove_spotlightLetter' + i + 'Image', document.getElementById('remove_spotlightLetter' + i + 'Image').value);
    }

    formData.append('visionHeading', document.getElementById('visionHeading').value);
    formData.append('visionDescription', document.getElementById('visionDescription').value);
    formData.append('missionHeading', document.getElementById('missionHeading').value);
    formData.append('missionDescription', document.getElementById('missionDescription').value);

    formData.append('ecosystemTitle', document.getElementById('ecosystemTitle').value);

    const ecosystemParagraphs = [];
    document.querySelectorAll('.ecosystem-paragraph-textarea').forEach(textarea => {
      ecosystemParagraphs.push(textarea.value);
    });
    formData.append('ecosystemParagraphs', JSON.stringify(ecosystemParagraphs));

    const sTopIcon = document.getElementById('spotlightTopIcon').files[0];
    if (sTopIcon) formData.append('spotlightTopIcon', sTopIcon);
    const sShape = document.getElementById('spotlightShapeImage').files[0];
    if (sShape) formData.append('spotlightShapeImage', sShape);
    const sBg = document.getElementById('spotlightBgImage').files[0];
    if (sBg) formData.append('spotlightBgImage', sBg);
    for (let i = 1; i <= 9; i++) {
      const sLet = document.getElementById('spotlightLetter' + i + 'Image').files[0];
      if (sLet) formData.append('spotlightLetter' + i + 'Image', sLet);
    }

    formData.append('spotlightTitle', document.getElementById('spotlightTitle').value);

    formData.append('spotlightPrimaryBtnText', document.getElementById('spotlightPrimaryBtnText').value);
    formData.append('spotlightPrimaryBtnLink', document.getElementById('spotlightPrimaryBtnLink').value);
    formData.append('spotlightSecondaryBtnText', document.getElementById('spotlightSecondaryBtnText').value);
    formData.append('spotlightSecondaryBtnLink', document.getElementById('spotlightSecondaryBtnLink').value);

    const spotlightParagraphs = [];
    document.querySelectorAll('.spotlight-paragraph-textarea').forEach(textarea => {
      spotlightParagraphs.push(textarea.value);
    });
    formData.append('spotlightParagraphs', JSON.stringify(spotlightParagraphs));

    // formData.append('teamDescription', document.getElementById('teamDescription').value);
};

