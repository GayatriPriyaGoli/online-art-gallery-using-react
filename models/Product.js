const mongoose = require('mongoose');

// Define the product schema with additional fields and validation
const productSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true  // Remove extra spaces around the title
    },
    artist: { 
        type: String, 
        required: true, 
        trim: true  // Remove extra spaces around the artist's name
    },
    price: { 
        type: Number, 
        required: true, 
        min: [0, 'Price cannot be negative'],  // Ensure price is non-negative
    },
    image: { 
        type: String, 
        required: true, 
        validate: {
            validator: function(v) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(v); // Simple URL validation
            },
            message: props => `${props.value} is not a valid image URL!`
        }
    },
    category: { 
        type: String, 
        required: false,
        trim: true
    },
    description: { 
        type: String, 
        required: false, 
        trim: true
    }
}, {
    timestamps: true  // Automatically add createdAt and updatedAt fields
});

// Create and export the Product model
module.exports = mongoose.model('Product', productSchema);
