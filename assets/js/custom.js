/* National Services */ 
let national_form = document.getElementById('national_form');
let nationalButton = document.getElementById('national_button');

function hideNationalForm() {
    national_form.classList.remove('d-none');
    nationalButton.classList.add('d-none');
    booking_form.classList.add('d-none');
    renfe_form.classList.add('d-none');
}

function cancelNationalForm() {
    national_form.classList.add('d-none');
    nationalButton.classList.remove('d-none');
}


/* Airport Services */
let booking_form = document.getElementById('booking_form');
let buttonForm = document.getElementById('button_form');

function hideForm() {
    booking_form.classList.remove('d-none');
    buttonForm.classList.add('d-none');
    national_form.classList.add('d-none');
    renfe_form.classList.add('d-none');
    
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
    booking_form.classList.add('d-none');
    national_form.classList.add('d-none');
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


let adultAiport = document.getElementById('adult_selection_airport');
let childrenAirport = document.getElementById('child_selection_airport');

adultAiport.addEventListener('change', function() {
    let adultSelected = adultAiport.value;
    childrenAirport.innerHTML = '';
    let option = document.createElement('option');
    option.text = 'Select Children';
    childrenAirport.add(option);
    for(let i = 1; i <= taxi_passengers - adultSelected; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = ''+i;
        childrenAirport.add(option);
    }
});

let adultRenfe = document.getElementById('adult_selection_renfe');
let childrenRenfe = document.getElementById('child_selection_renfe');

adultRenfe.addEventListener('change', function() {
    let adultSelectedRenfe = adultRenfe.value;
    childrenRenfe.innerHTML = '';
    let option = document.createElement('option');
    option.text = 'Select Children';
    childrenRenfe.add(option);
    for(let i = 1; i <= taxi_passengers - adultSelectedRenfe; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = ''+i;
        childrenRenfe.add(option);
    }
});


/*Enviar Mail National*/
let submitForm_national = document.getElementById('mailNational_form');
let mensajeRespuesta_ok = document.getElementById('national_success');
let mensajeRespuesta_error = document.getElementById('national_error');

function procesarDatosFormStation() {
    let nombre = document.getElementById('nameStation').value;
    let phone = document.getElementById('numberStation').value;
    let email = document.getElementById('emailStation').value;
    let origin = document.getElementById('originStation').value;
    let drop = document.getElementById('dropStation').value;
    let date = document.getElementById('DateStation').value;
    let time = document.getElementById('TimeStation').value;
    let adults = document.getElementById('adult_selection').value;
    let child = document.getElementById('child_selection').value;
    let payment = document.getElementById('paymentStation').value;


    var formData = new FormData();
    formData.append("nameStation", nombre);
    formData.append("numberStation", phone);
    formData.append("emailStation", email);
    formData.append("originStation", origin);
    formData.append("dropStation", drop);
    formData.append("DateStation", date);
    formData.append("TimeStation", time);
    formData.append("adultStation", adults);
    formData.append("childStation", child);
    formData.append("paymentStation", payment);

    fetch("https://www.taxitimetorreviejatoairport.com/mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data=> {
        if(data.mensaje === 'OK') {
            mensajeRespuesta_ok.classList.remove('d-none');
        } else {
            mensajeRespuesta_error.classList.remove('d-none');
        }
        national_form.classList.add('d-none');
        nationalButton.classList.remove('d-none');
    });

}

submitForm_national.addEventListener('submit', function(event) {
    event.preventDefault();

    procesarDatosFormStation();

})

/*Enviar Mail Airport*/

let submitForm_airport = document.getElementById('airport_form');
let airport_mensaje_ok = document.getElementById('airport_success');
let airport_mensaje_error = document.getElementById('airport_error');

function procesarDatosFormAirport() {
    let nombre = document.getElementById('nameAirport').value;
    let phone = document.getElementById('numberAirport').value;
    let email = document.getElementById('emailAirport').value;
    let flight = document.getElementById('flightAirport').value;
    let origin = document.getElementById('origin-select').value;
    let drop = document.getElementById('drop-select').value;
    let date = document.getElementById('dateAirport').value;
    let time = document.getElementById('timeAirport').value;
    let adults = document.getElementById('adult_selection_airport').value;
    let child = document.getElementById('child_selection_airport').value;
    let payment = document.getElementById('paymentAirport').value;


    var formData = new FormData();
    formData.append("name", nombre);
    formData.append("number", phone);
    formData.append("email", email);
    formData.append("flight", flight);
    formData.append("origin", origin);
    formData.append("drop", drop);
    formData.append("Date", date);
    formData.append("Time", time);
    formData.append("adult", adults);
    formData.append("child", child);
    formData.append("payment", payment);

    fetch("https://www.taxitimetorreviejatoairport.com/mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data=> {
        if(data.mensaje === 'OK') {
            airport_mensaje_ok.classList.remove('d-none');
        } else {
            airport_mensaje_error.classList.remove('d-none');
        }
        booking_form.classList.add('d-none');
        buttonForm.classList.remove('d-none');
    });

}

submitForm_airport.addEventListener('submit', function(event) {
    event.preventDefault();

    procesarDatosFormAirport();

})

/*Enviar Mail Renfe*/
let submitForm_renfe = document.getElementById('renfe_form_data');
let renfe_mensaje_ok = document.getElementById('renfe_success');
let renfe_mensaje_error = document.getElementById('renfe_error');

function procesarDatosFormRenfe() {
    let nombre = document.getElementById('nameRenfe').value;
    let phone = document.getElementById('numberRenfe').value;
    let email = document.getElementById('emailRenfe').value;
    let origin = document.getElementById('origin-station').value;
    let drop = document.getElementById('drop-station').value;
    let date = document.getElementById('dateRenfe').value;
    let time = document.getElementById('timeRenfe').value;
    let adults = document.getElementById('adult_selection_renfe').value;
    let child = document.getElementById('child_selection_renfe').value;
    let payment = document.getElementById('paymentRenfe').value;


    var formData = new FormData();
    formData.append("name", nombre);
    formData.append("number", phone);
    formData.append("email", email);
    formData.append("origin", origin);
    formData.append("drop", drop);
    formData.append("Date", date);
    formData.append("Time", time);
    formData.append("adult", adults);
    formData.append("child", child);
    formData.append("payment", payment);

    fetch("https://www.taxitimetorreviejatoairport.com/mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data=> {
        if(data.mensaje === 'OK') {
            renfe_mensaje_ok.classList.remove('d-none');
        } else {
            renfe_mensaje_error.classList.remove('d-none');
        }
        renfe_form.classList.add('d-none');
        renfeButton.classList.remove('d-none');
    });

}

submitForm_renfe.addEventListener('submit', function(event) {
    event.preventDefault();

    procesarDatosFormRenfe();

})