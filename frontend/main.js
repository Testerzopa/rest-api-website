async function addMember() {
    const inputName = document.getElementById("input-name").value
    const inputAge = document.getElementById("input-age").value
    const response = await fetch("http://localhost:3000/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:inputName,
            age:inputAge,
        })
    })
    const data = await response.json();
    loadMember();
}

async function loadMember() {
    const response = await fetch("http://localhost:3000/")
    const user = await response.json()
    const userUI = document.getElementById("listUser")
    userUI.innerText = "";
    user.forEach(user => {
        let li = document.createElement("li")

        li.innerHTML = `<span>ชื่อ: ${user.name} อายุ:${user.age}</span>
        <button onclick="deleteMember('${user.id}')">ลบ</button>
        `;
        userUI.appendChild(li)
    });
    
}

async function deleteMember(id) {
    const response = await fetch(`http://localhost:3000/${id}`,{
        method:"DELETE"
    })
    const data = await response.json()
    loadMember();
}