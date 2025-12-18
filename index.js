import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRoute.js'
import contactRoute from './Routes/contactRoute.js'
import { config } from 'dotenv';
const app  = express();


app.use(express.json());

config({path:'.env'})

mongoose.connect(process.env.MONGO_URI,{
    dbName: 'Contact_base'
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res)=> {
    res.json({message: 'on home page'});
})

app.use('/api/user', userRouter);
app.use('/api/contact',contactRoute);



app.listen(process.env.PORT, () => {console.log('server started on port 3000')});