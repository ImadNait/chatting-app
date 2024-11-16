import express, { NextFunction, Request, Response } from 'express';
import { Server } from 'socket.io';
import { config } from 'dotenv'
import userRouter from './routes/users'
import { user } from './types/response';
config();
const ioPORT = process.env.ioPORT;
const io = new Server(ioPORT)
const PORT = process.env.PORT;
const app: express.Express = express();
io.on("connection", ()=>{
    console.log(socket.id);
})
app.use('/users', userRouter)
app.use(express.json())
app.get('/',(req: Request, res: Response, next: NextFunction)=>{
    res.send('GET')
})
app.get('/home',(req: Request, res: Response, next: NextFunction)=>{
    res.send('Home Page')
})
app.get('/about',(req: Request, res: Response, next: NextFunction)=>{
    res.send('about us')
})
app.get('/contacts',(req: Request, res: Response, next: NextFunction)=>{
    res.send('contacts')
})

app.listen(PORT,()=>{
    console.log(`Server runnin on port ${PORT}`);
    
})
