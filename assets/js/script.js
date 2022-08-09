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
