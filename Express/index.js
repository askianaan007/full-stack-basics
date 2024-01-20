const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req,res,next)=>{ // use is a middleware
//     console.log('first middleware');
//     next(); // next is a function which allows the request to continue to the next middleware in line
// })

// app.use('/second',(req,res,next) => {
//     res.send('<h1>hello second page</h1>')
//     console.log("second middleware");
// });

// app.use('/',(req,res,next) => {
//     res.send('<h1>hello first page</h1>')
//     console.log("first middleware");
// use is a middleware
//   console.log("second middleware");
//   res.send('<h1>hello from express!</h1>') // like a res.write method // express js automatically identify the content type
// }); //we should place the root element in the bottom of the page

// const http = require('http');
// const server = http.createServer(app);
// server.listen(3000); instead of these node core values we can use app.listen(3000) in express.js

//for receive request data--

app.use(adminRoutes); 
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('404 page not found')
})

app.use(bodyParser.urlencoded());



// use not a router method


app.listen(3000);
