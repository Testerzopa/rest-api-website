const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json())
app.use(cors())

let saveData = { name:"",age:"" };

app.post('/', (req,res)=>{
    saveData.name = req.body.name;
    saveData.age = req.body.age;
    res.json({message:"เก็บข้อมูลเรียบร้อยแล้ว"})
})

app.get('/',(req,res)=>{
   res.json({
    name:saveData.name,
    age:saveData.age
   })
})

// 5. สั่งให้เซิร์ฟเวอร์เริ่มทำงานและรอรับผู้ใช้งาน
app.listen(PORT, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานอยู่ที่: http://localhost:${PORT}`);
});