let data = [
    {
        id: 1,
        name: "Nam",
        age: 21,
        gender: "Nam"
    },
    {
        id: 2,
        name: "Thành",
        age: 18,
        gender: "Nữ"
    }
];

let btnEl = document.getElementById("btn")
function add() {
    let idEl = document.getElementById("id").value
    let nameEl = document.getElementById("name").value
    let ageEl = document.getElementById("age").value
    let genEl = document.getElementById("gender").value

    let item = {
        id: idEl,
        name: nameEl,
        age: ageEl,
        gender: genEl
    }


    let index = data.findIndex((c) => c.id == item.id)
    if (index >= 0) {
        data.splice(index, 1, item)
    } else {
        for (let i = 0; i < data.length; i++) {
            var Id = data[i].id + 1;
        }
        item.id = Id;
        data.push(item);
    }
    btnEl.innerHTML = "Thêm"
    render();
    clear()
}

function render() {
    table = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Action</th>
    </tr>`;
    for (let i = 0; i < data.length; i++) {
        table += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].gender}</td>
        <td><button class="me-2" id="" onclick="deleteItem(${data[i].id})">Delete</button><button onclick="editItem(${data[i].id})" id="btnEdit">Edit</button></td>
    </tr>`
    }
    document.getElementById("render").innerHTML = table;
}
render()

//Hàm clear 
function clear() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
}

//Hàm xóa
function deleteItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == x) {
            data.splice(i, 1);
            render()
        }
    }
}

//Hàm edit
function editItem(x) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == x) {
            document.getElementById("id").value = data[i].id;
            document.getElementById("name").value = data[i].name;
            document.getElementById("age").value = data[i].age;
            document.getElementById("gender").value = data[i].gender;
            btnEl.innerHTML = "Update";
        }
    }
}