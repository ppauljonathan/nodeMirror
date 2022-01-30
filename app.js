require('dotenv').config()
const express=require('express');
const {createServer}=require('http');
const {Server}=require('socket.io');

const routes=require('./routes');

const PORT=process.env.PORT||8080;

const app=express()

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/css'));

app.use(routes);

app.use((err,req,res,next)=>{
    res.send(err);
})

const server=createServer(app);
server.listen(PORT,()=>{console.log(`server listening on http://localhost:${PORT}`);})

const io=new Server(server);

io.on('connection',(socket)=>{
    socket.on('joinedMeeting',data=>{
        socket.join(data.meetId);
        io.in(data.meetId).emit('addParticipant',{userId:data.userId});
    })
})