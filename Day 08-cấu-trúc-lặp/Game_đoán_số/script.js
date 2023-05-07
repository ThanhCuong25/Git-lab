let starBtnEl = document.querySelector('.start-btn');
let answerEl = document.querySelector('.answer');
let answerBtn = document.querySelector('.answer-btn');
let numberEl = document.querySelector('.number');
let countEl = document.querySelector('.count');
let resBtnEl = document.querySelector('.res-btn');


const ANSWER = 'abc';
let count = 0;

function hideContent() {
    hideAnswer();
    hideNumber();
    hideRes();
}
hideContent()

// ẩn
function hidestar(){
starBtnEl.style.display = 'none';
}
function hideAnswer() {
    answerEl.style.display = 'none';
}
function hideNumber() {
    numberEl.style.display = 'none';
}
function hideRes() {
    resBtnEl.style.display = 'none';
}

//hiện
function showStar(){
    starBtnEl.style.display = 'block';
    }
function showAnswer() {
    answerEl.style.display = 'block';
}
function showNumber() {
    numberEl.style.display = 'block';
}
function showRes() {
    resBtnEl.style.display = 'block';
}


// nút
starBtnEl.addEventListener('click', function () {
    hidestar()
    showAnswer();
    showNumber();
    hideNumber();
    hideRes()
})

answerBtn.addEventListener('click', function () {
    let userAnswer = '';
    let question ='Nhập đáp án';
    while (userAnswer != ANSWER) {
        if(count>0){
            question ='Đáp án không đúng, nhập lại';
        }
        userAnswer = prompt(question);
        count++;
    }
    countEl.innerHTML = count;
    showNumber() 
    showRes()
});

resBtnEl.addEventListener('click', function () {
    hideContent()
    showStar()
});
