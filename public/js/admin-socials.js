/* 
 * Admin JavaScript for the SOCIALS page.
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

  // Helper to set text values safely
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = val || '';
    }
  };

  // Loop and populate the 4 social links
  for (let i = 0; i < 4; i++) {
    const item = (data && data[i]) ? data[i] : {};
    setVal(`name${i}`, item.name);
    setVal(`link${i}`, item.link);
    setImg(`image${i}-preview`, item.image);
    setVal(`remove_image${i}`, 'false');
  }
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

  // Append values and file uploads to the FormData instance
  for (let i = 0; i < 4; i++) {
    appendVal(`name${i}`, `name${i}`);
    appendVal(`link${i}`, `link${i}`);
    appendFile(`image${i}`, `image${i}`);
    appendVal(`remove_image${i}`, `remove_image${i}`);
  }
};
