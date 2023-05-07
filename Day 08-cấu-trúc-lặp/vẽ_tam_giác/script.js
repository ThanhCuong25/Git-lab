let i
let j
width = 5;
height = 5;

tamgiacvuong2()
function tamgiacvuong2() {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            if (j <= i) {
                document.write('*');
            }
        }
        document.write('<br />');
    }
}

tamgiacvuong1()
function tamgiacvuong1() {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            if (i <= j) {
                document.write('*');
            }
        }
        document.write('<br />');
    }
}

tamgiacvuong3()
function tamgiacvuong3() {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            if (j < height - i) {
                document.write('+');
            } else {
                document.write('*');
            }
        }
        document.write('<br />');
    }
}

tamgiacvuong4()
function tamgiacvuong4() {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++){
            if (j < i) {
                document.write('+');
            }else {
                document.write('*');
            }
        }
        document.write('<br />');
    }
}
