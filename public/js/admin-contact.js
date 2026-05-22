/* 
* Admin JavaScript for the CONTACT page.
* This file contains ONLY the logic for retrieving, parsing, and saving data for this specific page.
*/

window.populatePageForm = function(data) {
  // Safe image preview setter
  const setImg = (previewId, url) => {
    if (typeof setImagePreview === 'function') {
      setImagePreview(previewId, url);
    } else {
      const el = document.getElementById(previewId);
      if (el) el.src = url || '';
    }
  };

  // Helper to set text/textarea values safely
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && el.type !== 'file') {
      el.value = val || '';
    }
  };

  // Hero section
  setVal('contactHeroTopDescription', data.contactHeroTopDescription);
  setVal('contactHeroTitle', data.contactHeroTitle);
  setVal('contactHeroDescription', data.contactHeroDescription);

  // Global section
  setVal('contactGlobalBadge', data.contactGlobalBadge);
  setVal('contactGlobalTitle', data.contactGlobalTitle);

  // Help section
  setVal('contacthelpTitle', data.contacthelpTitle);
  setImg('contacthelpImage-preview', data.contacthelpImage);
  setVal('remove_contacthelpImage', 'false');
  setImg('contacthelpBgImage-preview', data.contacthelpBgImage);
  setVal('remove_contacthelpBgImage', 'false');

  // Contact Cards
  setImg('ContactCard1Icon-preview', data.ContactCard1Icon);
  setVal('remove_ContactCard1Icon', 'false');
  setVal('ContactCard1Title', data.ContactCard1Title);
  setVal('ContactCard1Desc', data.ContactCard1Desc);
  setVal('ContactCard1Email', data.ContactCard1Email);

  setImg('ContactCard2Icon-preview', data.ContactCard2Icon);
  setVal('remove_ContactCard2Icon', 'false');
  setVal('ContactCard2Title', data.ContactCard2Title);
  setVal('ContactCard2Desc', data.ContactCard2Desc);
  setVal('ContactCard2Email', data.ContactCard2Email);

  // Social Links
  setVal('telegramLink', data.telegramLink);
  setVal('twitterLink', data.twitterLink);
  setVal('discordLink', data.discordLink);

  // Dynamic paragraphs rendering
  if (data.contactGlobalParagraphs) renderContactGlobalParagraphsEditor(data.contactGlobalParagraphs);
  if (data.contacthelpParagraphs) rendercontacthelpParagraphsEditor(data.contacthelpParagraphs);
};

window.appendPageFormData = function(formData) {
  const appendVal = (key, id) => {
    const el = document.getElementById(id);
    if (el) formData.append(key, el.value);
  };
  const appendFile = (key, id) => {
    const el = document.getElementById(id);
    if (el && el.files && el.files[0]) {
      formData.append(key, el.files[0]);
    }
  };

  // Collect values from the DOM
  appendVal('contactHeroTitle', 'contactHeroTitle');
  appendVal('contactHeroDescription', 'contactHeroDescription');
  appendVal('contactHeroTopDescription', 'contactHeroTopDescription');

  appendVal('contactGlobalBadge', 'contactGlobalBadge');
  appendVal('contactGlobalTitle', 'contactGlobalTitle');

  const contactGlobalParagraphs = [];
  document.querySelectorAll('.contact-global-paragraph-textarea').forEach(textarea => {
    contactGlobalParagraphs.push(textarea.value);
  });
  formData.append('contactGlobalParagraphs', JSON.stringify(contactGlobalParagraphs));

  appendVal('contacthelpTitle', 'contacthelpTitle');

  const contacthelpParagraphs = [];
  document.querySelectorAll('.contacthelp-paragraph-textarea').forEach(textarea => {
    contacthelpParagraphs.push(textarea.value);
  });
  formData.append('contacthelpParagraphs', JSON.stringify(contacthelpParagraphs));

  appendVal('ContactCard1Title', 'ContactCard1Title');
  appendVal('ContactCard1Desc', 'ContactCard1Desc');
  appendVal('ContactCard1Email', 'ContactCard1Email');

  appendVal('ContactCard2Title', 'ContactCard2Title');
  appendVal('ContactCard2Desc', 'ContactCard2Desc');
  appendVal('ContactCard2Email', 'ContactCard2Email');

  appendFile('contacthelpImage', 'contacthelpImage');
  appendFile('contacthelpBgImage', 'contacthelpBgImage');
  appendFile('ContactCard1Icon', 'ContactCard1Icon');
  appendFile('ContactCard2Icon', 'ContactCard2Icon');

  appendVal('remove_contacthelpImage', 'remove_contacthelpImage');
  appendVal('remove_contacthelpBgImage', 'remove_contacthelpBgImage');
  appendVal('remove_ContactCard1Icon', 'remove_ContactCard1Icon');
  appendVal('remove_ContactCard2Icon', 'remove_ContactCard2Icon');
};
