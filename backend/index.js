const express = require('express')
require('./config')
const Stock = require('./schema')
const fetchStockData = require('./fetchStockData')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors())

app.post('/stock', async (req, resp) => {
    let result = ""
    setInterval(async () => {
        let stockData = await fetchStockData();
        if (stockData.length > 0) {
            stockData.forEach(async (item) => {
                let stock = new Stock({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    current_price: item.current_price,
                    last_updated: item.last_updated
                })
                result = await stock.save();
            });
        }
    }, 3000)
    resp.send("stockData")
})

app.get('/stock/:name', async (req, resp) => {
    let stockData = await Stock.find({ name: req.params.name }).sort({ 'last_updated': -1 }).limit(20)
    resp.send(stockData)
})
app.listen(3000)