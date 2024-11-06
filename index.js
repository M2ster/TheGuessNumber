let ButtonRandomNum = document.querySelector('.random-num');
let InputUserNum = document.querySelector('.user-num');
let ButtonValueGran = document.querySelector('.gran-value')
let LeftGranInput = document.querySelector('.left-gran');
let RightGranInput = document.querySelector('.right-gran');
let ButtonVerifNum = document.querySelector('.verif-num');
let OutputUserNum = document.querySelector('.num-user-out');
let SpanGranValue = document.querySelector('.finally-gran');
let OutPod = document.querySelector('.pod');
let CountTry = document.querySelector('.try-count')

let RandomNum = 0;
let UsNum = 0;
let count = 0;


let minnum = 20;
let maxnum = 100;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ButtonValueGran.onclick = function () {
    minnum = LeftGranInput.value
    maxnum = RightGranInput.value
    ans = 'Ваши границы: ' + minnum + ' --- ' + maxnum
    SpanGranValue.textContent = ans
}


ButtonRandomNum.onclick = function () {
    RandomNum = getRandomInt(minnum, maxnum);
    OutPod.textContent = '*** '
    count = 0;
    CountTry.textContent = '0';
}


InputUserNum.oninput = function () {
    UsNum = InputUserNum.value;
    if (UsNum.toString().length > 0) {
        OutputUserNum.textContent = UsNum;
    } else {
        OutputUserNum.textContent = '***'
    }
}

ButtonVerifNum.onclick = function(){
    if (UsNum < RandomNum) {
        count += 1
        OutPod.textContent = ' Ваше число меньше загаданного! Попробуйте побольше';
    } else if (UsNum > RandomNum) {
        count += 1
        OutPod.textContent = 'Ваше число больше загаданного! Попробуйте поменьше';
    } else if (UsNum == RandomNum) {
        OutPod.textContent = 'Поздравляю, Вы угадали!'
    }
    CountTry.textContent = count;

}
