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

// A function to store the content of the description in localStorage
function storeAgendum(element) {
    localStorage.setItem(element[0].id, element[0].value)
}

// Add an event listener to the save buttons
var saveBtns = document.querySelectorAll('.saveBtn');
for (var i = 0; i < saveBtns.length; i++) {
    var partnerId = '#' + saveBtns[i].dataset.partner;
}