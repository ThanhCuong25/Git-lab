let nameElement = document.getElementById('nameUser');
let ageElement = document.getElementById('ageUser');
let saveElement =document.getElementById('save');
let tbodyElement = document.getElementById('tbody');

saveElement.addEventListener('click', function(){
    let nameValue=nameElement.value;
    let age=ageElement.value;
   tbodyElement.innerHTML = `<tr id="row">
   <td>${nameValue}</td>
   <td>${age}</td>
   <td>
     <button class="edit" id="editbtn">Edit</button>
     <button class="delete" id="deletebtn">Delete</button>
   </td>
 </tr>`;
 nameElement.value='';
 ageElement.value='';

 let deletebtnElement = document.getElementById('deletebtn');
 deletebtnElement.addEventListener('click', function(){
    let rowElement =document.getElementById('row');
    rowElement.remove();
 });

 let editbtnElement = document.getElementById('editbtn');
 editbtnElement.addEventListener('click',function(){
    nameElement.value= nameValue;
    ageElement.value= age;
 });

});

