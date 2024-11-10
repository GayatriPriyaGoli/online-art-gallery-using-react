require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;  // Use PORT from .env, default to 5000

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'http://yourproductiondomain.com'], // Adjust as needed
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

// Middleware
app.use(cors(corsOptions));  // Apply CORS configuration
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully.");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Dummy Product Data (replace this with actual MongoDB queries)
const products = [
    // Your products data
];

// Routes

// Get all products with query parameters: search, sort, and price
app.get('/api/products', async (req, res) => {
    const { search, sort, price } = req.query;

    try {
        let filteredProducts = [...products];

        // Filter by search term
        if (search) {
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort by price
        if (sort === 'low_to_high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === 'high_to_low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        // Filter by price range
        if (price) {
            filteredProducts = filteredProducts.filter(product => {
                switch (price) {
                    case 'below_10000':
                        return product.price < 10000;
                    case '10000_25000':
                        return product.price >= 10000 && product.price <= 25000;
                    case '25000_50000':
                        return product.price >= 25000 && product.price <= 50000;
                    case '50000_100000':
                        return product.price >= 50000 && product.price <= 100000;
                    case 'above_100000':
                        return product.price > 100000;
                    default:
                        return true;
                }
            });
        }

        res.json(filteredProducts);
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ message: 'Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
