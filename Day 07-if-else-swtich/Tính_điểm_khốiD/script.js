let toanElement = document.getElementById('toan');
let vanElement = document.getElementById('van');
let anhElement = document.getElementById('anh');
let areaElement = document.getElementById('area');
let tinhDiemElement = document.getElementById('tinhDiem');
let tongDiemElement = document.getElementById('tongDiem');
const KV1 = "kv1";
const KV2 = "kv2";
const KV2_NT = "kv2-NT";
const KV3 = "kv3";
tinhDiemElement.addEventListener('click', function () {
    let toan = toanElement.value;
    let van = vanElement.value;
    let anh = anhElement.value;
    let area = areaElement.value;
    let areaPoint
    switch (area) {
        case KV1:
           areaPoint = 0.75
            break;
        case KV2:
            areaPoint= 0.25
            break;
        case KV2_NT:
            areaPoint=0.5
            break;
        case KV3:
            areaPoint = 0;      
            break;
    }

           let total = +toan + +van + +anh + Number(areaPoint);
            tongDiemElement.innerHTML = `Tổng điểm ĐH khối D của bạn là: ${total}`;

})
