/* 
* Admin JavaScript for the CONTACT page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Inject values into the DOM safely
  const el_contactHeroTopDescription = document.getElementById('contactHeroTopDescription'); if (el_contactHeroTopDescription && el_contactHeroTopDescription.type !== 'file') el_contactHeroTopDescription.value = data.contactHeroTopDescription || '';
  const el_contactHeroTitle = document.getElementById('contactHeroTitle'); if (el_contactHeroTitle && el_contactHeroTitle.type !== 'file') el_contactHeroTitle.value = data.contactHeroTitle || '';
  const el_contactHeroDescription = document.getElementById('contactHeroDescription'); if (el_contactHeroDescription && el_contactHeroDescription.type !== 'file') el_contactHeroDescription.value = data.contactHeroDescription || '';
  const el_contactGlobalBadge = document.getElementById('contactGlobalBadge'); if (el_contactGlobalBadge && el_contactGlobalBadge.type !== 'file') el_contactGlobalBadge.value = data.contactGlobalBadge || '';
  const el_contactGlobalTitle = document.getElementById('contactGlobalTitle'); if (el_contactGlobalTitle && el_contactGlobalTitle.type !== 'file') el_contactGlobalTitle.value = data.contactGlobalTitle || '';
  const el_contact_global_paragraphs_container = document.getElementById('contact-global-paragraphs-container'); if (el_contact_global_paragraphs_container && el_contact_global_paragraphs_container.type !== 'file') el_contact_global_paragraphs_container.value = data['contact-global-paragraphs-container'] || '';
  const el_contacthelpTitle = document.getElementById('contacthelpTitle'); if (el_contacthelpTitle && el_contacthelpTitle.type !== 'file') el_contacthelpTitle.value = data.contacthelpTitle || '';
  const el_contacthelp_paragraphs_container = document.getElementById('contacthelp-paragraphs-container'); if (el_contacthelp_paragraphs_container && el_contacthelp_paragraphs_container.type !== 'file') el_contacthelp_paragraphs_container.value = data['contacthelp-paragraphs-container'] || '';
  const el_contacthelpImage_preview = document.getElementById('contacthelpImage-preview'); if (el_contacthelpImage_preview && el_contacthelpImage_preview.type !== 'file') el_contacthelpImage_preview.value = data['contacthelpImage-preview'] || '';
  const el_contacthelpImage = document.getElementById('contacthelpImage'); if (el_contacthelpImage && el_contacthelpImage.type !== 'file') el_contacthelpImage.value = data.contacthelpImage || '';
  const el_remove_contacthelpImage = document.getElementById('remove_contacthelpImage'); if (el_remove_contacthelpImage && el_remove_contacthelpImage.type !== 'file') el_remove_contacthelpImage.value = data.remove_contacthelpImage || '';
  const el_contacthelpBgImage_preview = document.getElementById('contacthelpBgImage-preview'); if (el_contacthelpBgImage_preview && el_contacthelpBgImage_preview.type !== 'file') el_contacthelpBgImage_preview.value = data['contacthelpBgImage-preview'] || '';
  const el_contacthelpBgImage = document.getElementById('contacthelpBgImage'); if (el_contacthelpBgImage && el_contacthelpBgImage.type !== 'file') el_contacthelpBgImage.value = data.contacthelpBgImage || '';
  const el_remove_contacthelpBgImage = document.getElementById('remove_contacthelpBgImage'); if (el_remove_contacthelpBgImage && el_remove_contacthelpBgImage.type !== 'file') el_remove_contacthelpBgImage.value = data.remove_contacthelpBgImage || '';
  const el_ContactCard1Icon_preview = document.getElementById('ContactCard1Icon-preview'); if (el_ContactCard1Icon_preview && el_ContactCard1Icon_preview.type !== 'file') el_ContactCard1Icon_preview.value = data['ContactCard1Icon-preview'] || '';
  const el_ContactCard1Icon = document.getElementById('ContactCard1Icon'); if (el_ContactCard1Icon && el_ContactCard1Icon.type !== 'file') el_ContactCard1Icon.value = data.ContactCard1Icon || '';
  const el_remove_ContactCard1Icon = document.getElementById('remove_ContactCard1Icon'); if (el_remove_ContactCard1Icon && el_remove_ContactCard1Icon.type !== 'file') el_remove_ContactCard1Icon.value = data.remove_ContactCard1Icon || '';
  const el_ContactCard1Title = document.getElementById('ContactCard1Title'); if (el_ContactCard1Title && el_ContactCard1Title.type !== 'file') el_ContactCard1Title.value = data.ContactCard1Title || '';
  const el_ContactCard1Desc = document.getElementById('ContactCard1Desc'); if (el_ContactCard1Desc && el_ContactCard1Desc.type !== 'file') el_ContactCard1Desc.value = data.ContactCard1Desc || '';
  const el_ContactCard1Email = document.getElementById('ContactCard1Email'); if (el_ContactCard1Email && el_ContactCard1Email.type !== 'file') el_ContactCard1Email.value = data.ContactCard1Email || '';
  const el_ContactCard2Icon_preview = document.getElementById('ContactCard2Icon-preview'); if (el_ContactCard2Icon_preview && el_ContactCard2Icon_preview.type !== 'file') el_ContactCard2Icon_preview.value = data['ContactCard2Icon-preview'] || '';
  const el_ContactCard2Icon = document.getElementById('ContactCard2Icon'); if (el_ContactCard2Icon && el_ContactCard2Icon.type !== 'file') el_ContactCard2Icon.value = data.ContactCard2Icon || '';
  const el_remove_ContactCard2Icon = document.getElementById('remove_ContactCard2Icon'); if (el_remove_ContactCard2Icon && el_remove_ContactCard2Icon.type !== 'file') el_remove_ContactCard2Icon.value = data.remove_ContactCard2Icon || '';
  const el_ContactCard2Title = document.getElementById('ContactCard2Title'); if (el_ContactCard2Title && el_ContactCard2Title.type !== 'file') el_ContactCard2Title.value = data.ContactCard2Title || '';
  const el_ContactCard2Desc = document.getElementById('ContactCard2Desc'); if (el_ContactCard2Desc && el_ContactCard2Desc.type !== 'file') el_ContactCard2Desc.value = data.ContactCard2Desc || '';
  const el_ContactCard2Email = document.getElementById('ContactCard2Email'); if (el_ContactCard2Email && el_ContactCard2Email.type !== 'file') el_ContactCard2Email.value = data.ContactCard2Email || '';
  const el_telegramLink = document.getElementById('telegramLink'); if (el_telegramLink && el_telegramLink.type !== 'file') el_telegramLink.value = data.telegramLink || '';
  const el_twitterLink = document.getElementById('twitterLink'); if (el_twitterLink && el_twitterLink.type !== 'file') el_twitterLink.value = data.twitterLink || '';
  const el_discordLink = document.getElementById('discordLink'); if (el_discordLink && el_discordLink.type !== 'file') el_discordLink.value = data.discordLink || '';
  const el_cms_form_footer = document.getElementById('cms-form-footer'); if (el_cms_form_footer && el_cms_form_footer.type !== 'file') el_cms_form_footer.value = data['cms-form-footer'] || '';
  const el_btn_reset = document.getElementById('btn-reset'); if (el_btn_reset && el_btn_reset.type !== 'file') el_btn_reset.value = data['btn-reset'] || '';
  const el_btn_save = document.getElementById('btn-save'); if (el_btn_save && el_btn_save.type !== 'file') el_btn_save.value = data['btn-save'] || '';
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
  if (data.contactGlobalParagraphs) renderContactGlobalParagraphsEditor(data.contactGlobalParagraphs);
  if (data.contacthelpParagraphs) rendercontacthelpParagraphsEditor(data.contacthelpParagraphs);
};

window.appendPageFormData = function(formData) {
  // Collect values from the DOM
  formData.append('contactHeroTitle', document.getElementById('contactHeroTitle').value);
    formData.append('contactHeroDescription', document.getElementById('contactHeroDescription').value);
    formData.append('contactHeroTopDescription', document.getElementById('contactHeroTopDescription').value);

    formData.append('contactGlobalBadge', document.getElementById('contactGlobalBadge').value);
    formData.append('contactGlobalTitle', document.getElementById('contactGlobalTitle').value);
    const contactGlobalParagraphs = [];
    document.querySelectorAll('.contact-global-paragraph-textarea').forEach(textarea => {
      contactGlobalParagraphs.push(textarea.value);
    });
    formData.append('contactGlobalParagraphs', JSON.stringify(contactGlobalParagraphs));

    formData.append('contacthelpTitle', document.getElementById('contacthelpTitle').value);

    const contacthelpParagraphs = [];
    document.querySelectorAll('.contacthelp-paragraph-textarea').forEach(textarea => {
      contacthelpParagraphs.push(textarea.value);
    });
    formData.append('contacthelpParagraphs', JSON.stringify(contacthelpParagraphs));

    formData.append('ContactCard1Title', document.getElementById('ContactCard1Title').value);
    formData.append('ContactCard1Desc', document.getElementById('ContactCard1Desc').value);
    formData.append('ContactCard1Email', document.getElementById('ContactCard1Email').value);

    formData.append('ContactCard2Title', document.getElementById('ContactCard2Title').value);
    formData.append('ContactCard2Desc', document.getElementById('ContactCard2Desc').value);
    formData.append('ContactCard2Email', document.getElementById('ContactCard2Email').value);

    const contacthelpImg = document.getElementById('contacthelpImage').files[0];
    if (contacthelpImg) formData.append('contacthelpImage', contacthelpImg);
    const contacthelpBg = document.getElementById('contacthelpBgImage').files[0];
    if (contacthelpBg) formData.append('contacthelpBgImage', contacthelpBg);

    const contactCard1IconFile = document.getElementById('ContactCard1Icon').files[0];
    if (contactCard1IconFile) formData.append('ContactCard1Icon', contactCard1IconFile);
    const contactCard2IconFile = document.getElementById('ContactCard2Icon').files[0];
    if (contactCard2IconFile) formData.append('ContactCard2Icon', contactCard2IconFile);

    formData.append('remove_contacthelpImage', document.getElementById('remove_contacthelpImage').value);
    formData.append('remove_contacthelpBgImage', document.getElementById('remove_contacthelpBgImage').value);
    formData.append('remove_ContactCard1Icon', document.getElementById('remove_ContactCard1Icon').value);
    formData.append('remove_ContactCard2Icon', document.getElementById('remove_ContactCard2Icon').value);

    // formData.append('telegramLink', document.getElementById('telegramLink').value);
    // formData.append('twitterLink', document.getElementById('twitterLink').value);
    // formData.append('discordLink', document.getElementById('discordLink').value);
  
};

