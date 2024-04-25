import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import connectDB from './config/db.js';
import { Part } from './models/Parts.js';


import ClothesRoutes from './routes/ClothesRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.get('/', async (req, res) => {
    try {
        const newData = new Part({
            label: 'Sleeve 1',
            thumbnail: "djvbdhvbhjdfv",
            items: [
                {
                    name: 'Sleeve 1',
                    img: 'djvbdhvbhjdfv',
                }
            ],
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


app.use('/v1/clothe', ClothesRoutes);



app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});
