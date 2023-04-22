let loaiQuaElement = document.getElementById('loaiQua');
let xemGiaElement = document.getElementById('xemGia');
let giaElement = document.getElementById('gia');

xemGiaElement.addEventListener('click', function () {
    let loaiQua = loaiQuaElement.value;
    switch (loaiQua) {
        case 'Măng cụt':
            giaElement.innerHTML = "50000 VNĐ/kg";
            break;
        case 'Dưa hấu':
            giaElement.innerHTML = "20000 VNĐ/kg";
            break;
        case 'Ổi':
            giaElement.innerHTML = "20000 VNĐ/kg";
            break;
        case 'Táo':
            giaElement.innerHTML = "30000 VNĐ/kg";
            break;
        case 'Xoài':
            giaElement.innerHTML = "30000 VNĐ/kg";
            break;
        case 'Cam':
            giaElement.innerHTML = "40000 VNĐ/kg";
            break;
        case 'Chôm chôm':
            giaElement.innerHTML = "50000 VNĐ/kg";
            break;
    }
})