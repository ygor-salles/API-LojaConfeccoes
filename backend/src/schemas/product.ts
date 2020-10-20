import mongoose from 'mongoose'
const { Schema } = mongoose

export const ProductSchema = new Schema({
    codigo: String,
    descricao: String,
    valor: Number,
    disconto: Number,
})

export const Product = mongoose.model('Product', ProductSchema)
