const wheel = document.querySelector('.wheel');
const btn = document.querySelector('.btn');
const startInfo = document.querySelector('.start-info');
const bannerInfo = document.querySelector('.banner-info');
const secondInfo = document.querySelector('.second-info');
const winInfo = document.querySelector('.wins-info');

///href btn get money
function getMoney() {
    window.location.href = '#'
}
// btn.addEventListener('click', ()=> {setFirstSpin()});
bannerInfo.addEventListener('click', setFirstSpin);
function setFirstSpin() {
    bannerInfo.removeEventListener('click', setFirstSpin);
    startInfo.classList.add('hidden');
    wheel.classList.add('first');
    setTimeout(() => {
        document.getElementById('spin-count').textContent = 2;
        bannerInfo.addEventListener('click', setSecondSpin);
        secondInfo.classList.remove('hidden')
    }, 3500);
};
function setSecondSpin() {
    bannerInfo.removeEventListener('click', setSecondSpin);;
    wheel.classList.add('second');
    secondInfo.classList.add('hidden');
    setTimeout(() => {
        winInfo.classList.remove('hidden');
        startTimer();
        document.getElementById('attacment').style.opacity = '0';
        btn.innerHTML= 'Get money'
        bannerInfo.addEventListener('click', getMoney);
    }, 3500);
};

const nameWins = document.getElementById('name-wins');
const oldNameWins = document.getElementById('old-name');
let names = [
    'Hamza5454 won <span class="green-text">666</span>$',
    'the_habib won  <span class="green-text">439</span>$',
    'alexulaev won <span class="green-text">534</span>$',
    'amra_w won <span class="green-text">534</span>$',
    'tukaevvv won <span class="green-text">214</span>$',
    'fiza_tonik won <span class="green-text">244</span>$',
    'Ismail321 won <span class="green-text">343</span>$'
];
countName = 0;
function setWinsName() {
    let oldName = nameWins.innerHTML;
    let newName = names[countName];
    countName++;
    if (countName === names.length) {
        countName = 0;
    };
    nameWins.classList.remove('anim');
    oldNameWins.classList.remove('anim');
    setTimeout(() => {
        nameWins.classList.add('anim');
        oldNameWins.classList.add('anim');
        nameWins.innerHTML = newName;
        oldNameWins.innerHTML = oldName;
    }, 100);



}

setInterval(() => {
    setWinsName()
}, 3000);

let timerId;
const secTimer = document.getElementById("sec-timer");
const mSecTimer = document.getElementById("m-sec-timer");
function updateTime() {
    let seconds = parseInt(secTimer.innerText);
    let mSeconds = parseInt(mSecTimer.innerText);
    mSeconds--
    if(mSeconds < 10) {
        mSeconds = '0' + mSeconds
    }
    if(mSeconds === '00') {
        if(seconds != '00') {
           mSeconds = 99;
            seconds--; 
        } else {
            mSeconds = 0;
        }
        
    }
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    if(seconds === '00') {
        seconds = '00';
        mSeconds = '00';
        stopTimer();
    }
    mSecTimer.innerHTML = mSeconds;
    secTimer.innerHTML = seconds;
    
}

function startTimer() {
    timerId = setInterval(updateTime, 10);
}

function stopTimer() {
    clearInterval(timerId);
}
