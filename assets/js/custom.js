/* National Services */ 
let national_form = document.getElementById('national_form');
let nationalButton = document.getElementById('national_button');

function hideNationalForm() {
    national_form.classList.remove('d-none');
    nationalButton.classList.add('d-none');
}

function cancelNationalForm() {
    national_form.classList.add('d-none');
    nationalButton.classList.remove('d-none');
}


/* Airport Services */
let booking_form = document.getElementById('booking_form');
let display = 0;
let buttonForm = document.getElementById('button_form');

function hideForm() {
    booking_form.classList.remove('d-none');
    buttonForm.classList.add('d-none');
    display = 1;
}

function cancelForm() {
    booking_form.classList.add('d-none');
    buttonForm.classList.remove('d-none');
}

/* Renfe Services */ 
let renfe_form = document.getElementById('renfe_form');
let renfeButton = document.getElementById('renfe_button');

function hideRenfeForm() {
    renfe_form.classList.remove('d-none');
    renfeButton.classList.add('d-none');
}

function cancelRenfeForm() {
    renfe_form.classList.add('d-none');
    renfeButton.classList.remove('d-none');
}

let originSelect = document.getElementById('origin-select');
let dropSelect = document.getElementById('drop-select');

originSelect.addEventListener('change', function() {
    let selectedValue = originSelect.value;
    dropSelect.innerHTML = '';
    let option = document.createElement('option');
    option.text = 'Select drop location';
    dropSelect.add(option);

    for (let i = 1; i < originSelect.options.length; i++) {
        let option = document.createElement('option');
        option.value = originSelect.options[i].value;
        option.text = originSelect.options[i].text;
        dropSelect.add(option);
    }

    for (let i = 0; i < dropSelect.options.length; i++) {
        if (dropSelect.options[i].value === selectedValue) {
          dropSelect.remove(i);
          break;
        }
    }
});

let originStation = document.getElementById('origin-station');
let dropStation = document.getElementById('drop-station');

originStation.addEventListener('change', function() {
    let selectedValue = originStation.value;
    dropStation.innerHTML = '';
    let option = document.createElement('option');
    option.text = 'Select drop location';
    dropStation.add(option);

    for (let i = 1; i < originStation.options.length; i++) {
        let option = document.createElement('option');
        option.value = originStation.options[i].value;
        option.text = originStation.options[i].text;
        dropStation.add(option);
    }

    for (let i = 0; i < dropStation.options.length; i++) {
        if (dropStation.options[i].value === selectedValue) {
            dropStation.remove(i);
          break;
        }
    }
});

let adult = document.getElementById('adult_selection');
let children = document.getElementById('child_selection');
const taxi_passengers = 7

adult.addEventListener('change', function() {
    let adultSelected = adult.value;
    children.innerHTML = '';
    let option = document.createElement('option');
    option.text = 'Select Children';
    children.add(option);
    for(let i = 1; i <= taxi_passengers - adultSelected; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = ''+i;
        children.add(option);
    }
});

