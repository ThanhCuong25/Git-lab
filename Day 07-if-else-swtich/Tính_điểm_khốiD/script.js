let toanElement = document.getElementById('toan');
let vanElement = document.getElementById('van');
let anhElement = document.getElementById('anh');
let lcElement = document.getElementById('lc');
let kv1Element = document.getElementById('kv1');
let kv2Element = document.getElementById('kv2');
let kvNT2Element = document.getElementById('kvNT2');
let kv3Element = document.getElementById('kv3');
let tinhDiemElement = document.getElementById('tinhDiem');
let tongDiemElement = document.getElementById('tongDiem');

tinhDiemElement.addEventListener('click',function() {
    console.log('sfdf');
    let toan = toanElement.value;
    let van = vanElement.value;
    let anh = anhElement.value;
    let lc = lcElement.value;
    
    switch(lc){
        case kv1Element:
            let total = +toan + +van + +anh +0.75;
            tongDiemElement.innerHTML =`Tổng điểm ĐH khối D của bạn là: ${total}`;
    }

})
