const videoDiv = document.querySelector('.play-button');

// eslint-disable-next-line
const playVideo = function () {
    videoDiv.insertAdjacentHTML('beforebegin', '<iframe class="iframe" src="https://www.youtube.com/embed/G1IbRujko-A?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    videoDiv.style.display = 'none';
};

const oleg = document.querySelector('#oleg');
const vlad = document.querySelector('#vlad');
const sasha = document.querySelector('#sasha');
const dima = document.querySelector('#dima');
const miron = document.querySelector('#miron');
const olegText = document.querySelector('.oleg-info');
const vladText = document.querySelector('.vlad-info');
const sashaText = document.querySelector('.sasha-info');
const dimaText = document.querySelector('.dima-info');
const mironText = document.querySelector('.miron-info');
const buttons = document.querySelector('.info-buttons');

const names = [oleg, vlad, sasha, dima, miron];
const texts = [olegText, vladText, sashaText, dimaText, mironText];

const changeText = function () {
    names.forEach((item) => {
        if (item.classList.contains('picked') && item.classList.contains('oleg')) {
            texts.forEach((thing) => {
                thing.classList.add('invisible');
            });
            olegText.classList.remove('invisible');
        } else if (item.classList.contains('picked') && item.classList.contains('vlad')) {
            texts.forEach((thing) => {
                thing.classList.add('invisible');
            });
            vladText.classList.remove('invisible');
        } else if (item.classList.contains('picked') && item.classList.contains('sasha')) {
            texts.forEach((thing) => {
                thing.classList.add('invisible');
            });
            sashaText.classList.remove('invisible');
        } else if (item.classList.contains('picked') && item.classList.contains('dima')) {
            texts.forEach((thing) => {
                thing.classList.add('invisible');
            });
            dimaText.classList.remove('invisible');
        } else if (item.classList.contains('picked') && item.classList.contains('miron')) {
            texts.forEach((thing) => {
                thing.classList.add('invisible');
            });
            mironText.classList.remove('invisible');
        }
    });
};

// eslint-disable-next-line
const pickPrevious = function () {
    for (let i = 0; i < names.length; i++) {
        if (names[i].classList.contains('picked') && i !== 0) {
            names[i].classList.remove('picked');
            names[i - 1].classList.add('picked');
            changeText();
        }
    }
};

// eslint-disable-next-line
const pickNext = function () {
    for (let i = 0; i < names.length; i++) {
        if (names[i].classList.contains('picked') && i !== (names.length - 1)) {
            names[i].classList.remove('picked');
            names[++i].classList.add('picked');
            changeText();
        }
    }
};

buttons.onclick = function (event) {
    const item = event.target;
    names.forEach((element) => {
        element.classList.remove('picked');
    });
    item.classList.add('picked');
    changeText();
};
