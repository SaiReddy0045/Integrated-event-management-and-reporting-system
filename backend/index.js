import app from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({
    path: '../.env'
});

const startServer = async () => {
    try {
        await connectDB();
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}
startServer();
