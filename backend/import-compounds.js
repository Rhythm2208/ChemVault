import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { sequelize } from './server/config/db.ts';
import { Compound } from './server/model/compound.ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvFilePath = path.join(__dirname, 'compounds1.csv');




const importCSV = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // Don't drop existing tables

    const compounds = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        compounds.push({
          id: row.id ? parseInt(row.id) : null,
           name: row.CompoundName,
           description: row.CompounrDescription || null,
           image: row.strImageSource || null,
           imageAttribution: row.strImageAttribution || null,
           dateModified: row.dateModified || null,
        });
      })
      .on('end', async () => {
        try {
          await Compound.bulkCreate(compounds, { validate: true });
          console.log(' Data imported successfully!');
        } catch (err) {
          console.error(' Error inserting data:', err);
        } finally {
          await sequelize.close();
          console.log(' Database connection closed');
        }
      });
  } catch (err) {
    console.error(' Database connection failed:', err);
  }
};

importCSV();









