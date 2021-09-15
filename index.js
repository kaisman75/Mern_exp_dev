
const app= require('./src/app')
require('dotenv').config()
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server is ready to connect in port ${PORT}`)
});

