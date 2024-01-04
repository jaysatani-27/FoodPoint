const dotenv = require("dotenv");

dotenv.config();

global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.food_items = data;
  global.foodCategory = CatData;
})



const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get('/', (req, res) => {
  res.send('WELCOME TO OUR SERVER')
})

app.use(express.json())


app.use('/api',require("./Routes/CreateUser"))                  //for route-----> CreateUser

app.use('/api',require("./Routes/DisplayData"))                // for route------> DisplayData

app.use('/api',require("./Routes/OrderData"))                 // for route------> OrderData


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})