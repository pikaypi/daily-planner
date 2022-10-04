// Set current date
var dateEl = $('#currentDay');
dateEl.text(moment().format('dddd, MMMM Do'))

// Get current hour and format coloring for descriptions
var hourNow = parseInt(moment().format('H'));
var descriptionEls = $('.description');

for (var i = 0; i < descriptionEls.length; i++) {
    var descriptionHour = parseInt(descriptionEls[i].dataset.hour);

    if (hourNow > descriptionHour) {
        descriptionEls[i].classList.add('past');
    } else if (hourNow === descriptionHour) {
        descriptionEls[i].classList.add('present');
    } else {
        descriptionEls[i].classList.add('future');
    }
};

// A function to store a saved agendum into local storage
const saveAgendum = (event) => {
    var index;
    if (event.target.classList.value.split(' ').includes('saveBtn')) {
        index = event.target.dataset.partner
    } else {
        index = event.target.parentElement.dataset.partner
    }

    const inputSelected = document.getElementById(index)
    localStorage[inputSelected.id] = inputSelected.value
};

const loadAgenda = () => {
    for (let i=9; i<18; i++) {
        if (localStorage[i]) {
            const inputSelected = document.getElementById(i);
            inputSelected.value = localStorage[i];
        }
    }
};

const saveBtns = document.querySelectorAll('.saveBtn');
for (let i=0; i<saveBtns.length; i++) {   
    saveBtns[i].addEventListener('click', saveAgendum)
};

loadAgenda();