let num1Element =document.getElementById("num1");
let num2Element =document.getElementById("num2");
let kqElement = document.getElementById("kq");
let addElement = document.getElementById("add");
let subElement = document.getElementById("sub");
let multiElement = document.getElementById("multi");
let divisElement = document.getElementById("divis");
let removeElement = document.getElementById("remove");

//hàm cộng
addElement.addEventListener("click", function(){  
let num1 = num1Element.value;
let num2 = num2Element.value;
let total = +num1 + +num2;
kqElement.innerHTML = total;
console.log(total);
})
//hàm trừ
subElement.addEventListener("click", function(){  
    let num1 = num1Element.value;
    let num2 = num2Element.value;
    let total = +num1 - +num2;
    kqElement.innerHTML = total;
    console.log(total);
    })
//hàm nhân
multiElement.addEventListener("click", function(){  
    let num1 = num1Element.value;
    let num2 = num2Element.value;
    let total = +num1 * +num2;
    kqElement.innerHTML = total;
    console.log(total);
    })
//hàm chia
divisElement.addEventListener("click", function(){  
    let num1 = num1Element.value;
    let num2 = num2Element.value;
    let total = +num1 / +num2;
    kqElement.innerHTML = total;
    console.log(total);
    })
//hàm remove
removeElement.addEventListener("click", function(){
    num1Element.value = "";
    num2Element.value ="";
});
