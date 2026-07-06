const express = require('express');
const app = express();
const cors = require('cores');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('สวัสดีครับ! เว็บไซต์แรกของคุณทำงานได้แล้ว');
});

// 5. สั่งให้เซิร์ฟเวอร์เริ่มทำงานและรอรับผู้ใช้งาน
app.listen(PORT, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานอยู่ที่: http://localhost:${PORT}`);
});