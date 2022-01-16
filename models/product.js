// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Product = new Schema({
    name: String,
    model: String,
    manufacturer: String,
    category: String,
    subCategory: String,
    new: String,
    popular: String,
    image: [],
    price_action: Number,
    price_normal: Number,
    description: String,
    description_full: String,
    characteristics: [],
 });

// Экспортируем модель нашего студента
module.exports = mongoose.model("Product", Product);