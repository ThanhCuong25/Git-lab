let txtElement = document.getElementById('txtValue');
let addElement = document.getElementById('addBtn');
let disElement = document.getElementById('disBtn');
let resultElement = document.getElementById('result');
let x =0
let array =[];
function add_element_to_array() {
 array[x] = txtElement.value;
alert("Element: " +array[x] + " Added at item " + x);
x++;
txtElement.value = ""
}

addElement.addEventListener('click',function(){
    add_element_to_array()
})

function display_array() {
let e =""
    for (let i = 0; i < array.length; i++) {
 e+="Element: " + i + " = " + array[i] + "<br/>" 
    }
    resultElement.innerHTML = e
}
disElement.addEventListener('click',function(){
    display_array()
})