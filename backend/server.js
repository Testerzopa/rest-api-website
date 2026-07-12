const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json())
app.use(cors())

let saveData = [];

app.post('/', (req,res)=>{
    const newUsers = {
        id:Date.now().toString(),
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
    }
    saveData.push(newUsers);
    res.json({message:"เก็บข้อมูลเรียบร้อยแล้ว"})
})

app.get('/',(req,res)=>{
   res.json(saveData);
})

app.delete('/:id',(req,res)=>{
    const targetId = req.params.id;
    const someId = saveData.some(item => item.id === targetId)
    if(!someId){
        return res.status(404).json({massage:"หาข้อมูลไม่เจอ"})
    }

    saveData = saveData.filter(item => item.id !== targetId);
    res.json({massage:"ลบข้อมูลเรียบร้อบแล้ว"})
})

// 5. สั่งให้เซิร์ฟเวอร์เริ่มทำงานและรอรับผู้ใช้งาน
app.listen(PORT, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานอยู่ที่: http://localhost:${PORT}`);
});