const express = require('express')
const cors= require('cors')
const app = express();
const indexRouter=require('./Router/index')
app.use(cors())
app.use(express.json())

app.use('/',indexRouter)
app.listen(3000, () => {
    console.log("server started on port 3000")
});
