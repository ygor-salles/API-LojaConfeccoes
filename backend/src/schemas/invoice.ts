import mongoose from 'mongoose'
const { Schema } = mongoose

export const InvoiceSchema = new Schema({
    codigo: String,
    cliente: String,
    produtos: Array,
})

export const Invoice = mongoose.model('Invoice', InvoiceSchema)
