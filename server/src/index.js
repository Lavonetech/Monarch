import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import { Sleeve } from './models/Sleeve.js';

const app = express();

app.get('/', async (req, res) => {
    try {
        const newData = new Sleeve({
            name: 'Sleeve 1',
            price: 100,
            description: 'This is a sleeve',
        });

        // Use `await` to wait for the `save()` method to complete
        await newData.save();
        
        // Send a successful response if the data has been saved
        res.status(200).json({ message: 'Data has been saved' });
    } catch (err) {
        // Send an error response if there was an error during the save operation
        res.status(500).json({ message: err.message });
    }
});



app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});
