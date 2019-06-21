const express= require('express')
const app = express();

app.get('/', (req,res) => res.send({Hi: "there I deployed and made a change!"}))

const PORT = process.env.PORT || 5000

app.listen(PORT)


