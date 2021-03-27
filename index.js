const express = require('express')
const app = express();

app.use('/', (req, res) => {
    res.send('Prueba GCP OK')
} )

app.listen(8080, () => {
    console.log('up and running port 8080')
})