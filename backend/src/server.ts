import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { Invoice } from './schemas/invoice'
import { Product } from './schemas/product'

import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/invoice-api-web', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

app.get('/product', async (_req, res) => {
    const products = await Product.find()
    return res.json(products)
})

app.post('/product', async (req, res) => {
    const product = new Product(req.body)
    const newProduct = await Product.create(product)
    return res.json(newProduct)
})

app.post('/invoice', async (req, res) => {
    const invoice = new Invoice(req.body)
    const newInvoice = await Invoice.create(invoice)
    return res.json(newInvoice)
})

app.get('/invoice', async (_req, res) => {
    const invoices = await Invoice.find()
    return res.json(invoices)
})

app.listen(3000, async () => {
    const produtos = [
        {
            codigo: 101,
            descricao: 'Calça jeans masculina Levis nro 40',
            valor: 150,
            disconto: 10,
        },
        {
            codigo: 102,
            descricao: 'Saia jeans nro 8000',
            valor: 8000,
            disconto: 90,
        },
        {
            codigo: 103,
            descricao: 'Xbox Series X',
            valor: 5000,
            disconto: 0,
        },
        {
            codigo: 104,
            descricao: 'Playstation 5',
            valor: 5000,
            disconto: 0,
        },
    ]
    await Product.deleteMany({})
    for (const iterator of produtos) {
        await Product.create(iterator)
    }
    console.log('Server running on http://localhost:3000')
})
