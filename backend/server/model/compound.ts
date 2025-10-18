import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.ts'; 
//import { sequelize } from '../config/db'; 

export const Compound = sequelize.define('Compound', {

    id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
   },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageAttribution: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   dateModified:{
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  timestamps: true,
});
