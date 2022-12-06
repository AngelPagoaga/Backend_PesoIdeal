import express from 'express';
const router = express.Router();
import {Users} from  '@libs/Users';

const users = new Users();

router.post('/setBmi',async(req,res)=>{
    const {_id} = req['user'];
  let lastChecked = new Date()
  console.log(lastChecked)
  const {edad,estatura,peso,IMC } = req.body;
  users.updateUser(_id,{lastAge:edad,lastHeight:estatura,lastWeight:peso,lastChecked:lastChecked,lastBMI:IMC})
  res.status(200).json({'msg':"El usuario tiene un nuevo BMI Asignado"})
})

router.get('/getBmi',async (req,res)=>{
    console.log()
    const {_id} = req['user'];
    await users.getUserBMI(_id).then(
    (data)=>{ 
        res.status(200).json(data)
    })

})


export default router;
