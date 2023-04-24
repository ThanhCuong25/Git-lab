let duongElements = document.getElementById('duong');
let checkElements = document.getElementById('check');
let kqElements = document.getElementById('kq');

checkElements.addEventListener('click', function () {
    console.log('dffds');
    let duong = duongElements.value;
    let can = duong % 10;
    let chi = duong % 12;
    let strCan
    let strChi
    switch (Number(can)) {
        case 0:
            strCan = "Canh";
            break;
        case 1:
            strCan = "Tân";
            break;
        case 2:
            strCan = "Nhâm";
            break;
        case 3:
            strCan = "Quý";
            break;
        case 4:
            strCan = "Giáp";
            break;
        case 5:
            strCan = "Ất";
            break;
        case 6:
            strCan = "Bính";
            break;
        case 7:
            strCan = "Đinh";
            break;
        case 8:
            strCan = "Mậu";
            break;
        case 9:
            strCan = "Kỷ";
            break;
    }
    switch (Number(chi)) {
        case 0:
            strChi = "Thân";
            break;
        case 1:
            strChi = "Dậu";
            break;
        case 2:
            strChi = "Tuất";
            break;
        case 3:
            strChi = "Hợi";
            break;
        case 4:
            strChi = "Tý";
            break;
        case 5:
            strChi = "Sửu";
            break;
        case 6:
            strChi = "Dần";
            break;
        case 7:
            strChi = "Mẹo";
            break;
        case 8:
            strChi = "Thìn";
            break;
        case 9:
            strChi = "Tỵ";
            break;
            case 10:
            strChi = "Ngọ";
            break;
            case 11:
            strChi = "Mùi";
            break;
    }
    kqElements.innerHTML= `Năm âm là ${strCan} ${strChi}`;
})