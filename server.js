const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoute')
const eventRoutes = require('./routes/eventRoute')
const userEventRoutes = require('./routes/userEventRoute')


app.use(express.json())
app.use('/',userRoutes)
app.use('/',eventRoutes)
app.use('/',userEventRoutes)


const listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});