const updateContentHelper = async (req, res, Model, pageKey, jsonFields) => {
  try {
    let content = await Model.findOne({ key: pageKey });
    
    if (!content) {
      content = new Model({ key: pageKey });
    }

    const fields = req.body;

    // Dynamically update fields that are provided in the request body
    Object.keys(fields).forEach(field => {
      if (fields[field] !== undefined && field !== 'key') {
        if (jsonFields.includes(field)) {
          try {
            content[field] = JSON.parse(fields[field]);
          } catch (parseErr) {
            console.error("Failed to parse dynamic JSON for " + field, parseErr);
          }
        } else if (!field.startsWith('featureTitle') && !field.startsWith('remove_')) { 
          content[field] = fields[field];
        }
      }
    });

    // Handle Explicit Image Removal Requests
    Object.keys(fields).forEach(field => {
      if (field.startsWith('remove_') && fields[field] === 'true') {
        const imageField = field.replace('remove_', '');
        if (content[imageField] !== undefined) {
          content[imageField] = '';
        }
      }
    });

    // Handle File Upload paths if files were submitted
    if (req.files) {
      req.files.forEach(file => {
        // fieldname corresponds to the model field name
        if (content[file.fieldname] !== undefined) {
          content[file.fieldname] = '/uploads/' + file.filename;
        }
      });
    }

    // Special logic for Home Page dynamic finance features array
    if (pageKey === 'home') {
      const features = [];
      const currentFeatures = content.financeFeatures || [];
      
      for (let i = 0; i < 4; i++) {
        const defaultTitle = currentFeatures[i] ? currentFeatures[i].title : "Feature " + (i+1);
        const defaultImage = currentFeatures[i] ? currentFeatures[i].image : '';
        
        let title = fields["featureTitle" + i] !== undefined ? fields["featureTitle" + i] : defaultTitle;
        let image = defaultImage;
        
        let uploadedFeatureImage = null;
        if (req.files) {
          uploadedFeatureImage = req.files.find(f => f.fieldname === "featureImage" + i);
        }

        if (uploadedFeatureImage) {
          image = "/uploads/" + uploadedFeatureImage.filename;
        } else if (fields["remove_featureImage" + i] === 'true') {
          image = '';
        }
        
        features.push({ title, image });
      }
      content.financeFeatures = features;
    }

    await content.save();
    res.json({ success: true, message: pageKey.toUpperCase() + " content updated successfully!", data: content });
  } catch (error) {
    console.error("Error updating content for " + pageKey + ":", error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
};

module.exports = { updateContentHelper };
