const {v4:uuid4}=require('uuid');

module.exports.getMain=(req,res,next)=>{
    res.render('index');
}

module.exports.postJoin=(req,res,next)=>{
    const id=req.body.roomId;
    res.render('meet',{
        admin:false,
        meetId:id
    })
}

module.exports.postHost=(req,res,next)=>{
    const id=uuid4();
    res.render('meet',{
        admin:true,
        meetId:id
    })
}