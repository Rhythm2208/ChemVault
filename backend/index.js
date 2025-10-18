import express from 'express';
import cors from 'cors';
import compoundRoutes from './server/route/compound.ts';
import userRoutes from './server/route/user.ts';
import { connectDB, sequelize } from './server/config/db.ts';
import { configDotenv } from 'dotenv';

configDotenv();
const app = express();
const PORT = 9002;
 
app.use(cors());
app.use(express.json());
app.use('/compounds', compoundRoutes);
app.use('/users', userRoutes);
console.log(' Backend server is starting...');

const startServer = async () => {
  try {
    await connectDB();                  
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(' Server failed to start:', err);
  }
};

startServer();
