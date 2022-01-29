const express=require('express');
const router=express.Router();

const controllers=require('./controllers');

router.get('/',controllers.getMain);
router.post('/join',controllers.postJoin);
router.post('/host',controllers.postHost);

module.exports=router;