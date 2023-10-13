/* Constantes para lenguajes */
const language = document.documentElement.lang;
const email_es = "Por favor, introduce una dirección de correo electrónico válida.";
const email_en = "Please enter a valid email address.";
const email_fr = "Veuillez entrer une adresse e-mail valide.";
const email_de = "Bitte geben Sie eine gültige E-Mail-Adresse ein."
const email_no = "Vennligst skriv inn en gyldig e-postadresse.";
const email_sw = "Vänligen ange en giltig e-postadress.";
const date_es = "Introduce una fecha mayor que la actual";
const date_en = "Please enter a date greater than the current one.";
const date_fr = "Veuillez entrer une date ultérieure à la date actuelle.";
const date_de = "Bitte geben Sie ein Datum ein, das größer ist als das aktuelle Datum.";
const date_no = "Vennligst skriv inn en dato som er senere enn dagens dato.";
const date_sw = "Ange ett datum som är senare än dagens datum.";


/* Constantes para email */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let fechaActual = new Date(); 



/* Iniciando app*/ 
let maxDate = new Date(fechaActual.getFullYear(), fechaActual.getMonth() +2, fechaActual.getUTCDate());
let maxDateAirport = document.getElementById('dateAirport');
maxDateAirport.setAttribute('max', maxDate.toISOString().split('T')[0]);
let maxDateAirport_2 = document.getElementById('dateAirport_2');
maxDateAirport_2.setAttribute('max', maxDate.toISOString().split('T')[0]);
let maxDateStation = document.getElementById('DateStation');
maxDateStation.setAttribute('max', maxDate.toISOString().split('T')[0]);
let maxDateRenfe = document.getElementById('dateRenfe');
maxDateRenfe.setAttribute('max', maxDate.toISOString().split('T')[0]);


fechaActual = fechaActual.toISOString().split('T')[0];

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

/* Airport Services Murcia */
let booking_form_2 = document.getElementById('booking_form_2');
let buttonForm_2 = document.getElementById('button_form_2');

function hideForm2() {
    booking_form_2.classList.remove('d-none');
    buttonForm_2.classList.add('d-none');
    national_form.classList.add('d-none');
    renfe_form.classList.add('d-none');
    
}

function cancelForm2() {
    booking_form_2.classList.add('d-none');
    buttonForm_2.classList.remove('d-none');
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


/* Seleccion de niños airport 1 */
let checkbok_ninos_1 = document.getElementById('bebe_selection_1');
let formNinos = document.getElementById('formNinos');
checkbok_ninos_1.addEventListener('change', function() {
    if(checkbok_ninos_1.checked){
        formNinos.classList.remove('d-none');
    } else {
        formNinos.classList.add('d-none');
    }
});

/* Seleccion de niños airport 2 */
let checkbok_ninos_2 = document.getElementById('bebe_selection_2');
let formNinos_2 = document.getElementById('formNinos_2');
checkbok_ninos_2.addEventListener('change', function() {
    if(checkbok_ninos_2.checked){
        formNinos_2.classList.remove('d-none');
    } else {
        formNinos_2.classList.add('d-none');
    }
});

/* Seleccion de niños national */
let checkbok_ninos_station = document.getElementById('bebe_selection_station');
let formNinos_station = document.getElementById('formNinos_station');
checkbok_ninos_station.addEventListener('change', function() {
    if(checkbok_ninos_station.checked){
        formNinos_station.classList.remove('d-none');
    } else {
        formNinos_station.classList.add('d-none');
    }
});

/* Seleccion de niños renfe */
let checkbok_ninos_renfe = document.getElementById('bebe_selection_renfe');
let formNinos_renfe = document.getElementById('formNinos_renfe');
checkbok_ninos_renfe.addEventListener('change', function() {
    if(checkbok_ninos_renfe.checked){
        formNinos_renfe.classList.remove('d-none');
    } else {
        formNinos_renfe.classList.add('d-none');
    }
});

/* Checkbox validation */

let disable_1 = document.getElementById('disable_1');
disable_1.addEventListener('change', function() {
    if(disable_1.checked){
        disable_1.value = 'Si';
    } else {
        disable_1.value = 'No';
    }
});

let disable_2 = document.getElementById('disable_2');
disable_2.addEventListener('change', function() {
    if(disable_2.checked){
        disable_2.value = 'Si';
    } else {
        disable_2.value = 'No';
    }
});

let disable_station = document.getElementById('disable_station');
disable_station.addEventListener('change', function() {
    if(disable_station.checked){
        disable_station.value = 'Si';
    } else {
        disable_station.value = 'No';
    }
});

let disable_renfe = document.getElementById('disable_renfe');
disable_renfe.addEventListener('change', function() {
    if(disable_renfe.checked){
        disable_renfe.value = 'Si';
    } else {
        disable_renfe.value = 'No';
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
    let payment = document.getElementById('paymentStation').value;
    let surname = document.getElementById('surnameStation').value;
    let baby = document.getElementById('babies_selection_station').value;
    let infants = document.getElementById('infants_selection_station').value;
    let child = document.getElementById('children_selection_station').value;
    let disabled = document.getElementById('disable_station').value;
    let extra = document.getElementById('descripcion_1').value;
    


    if (!emailRegex.test(email)) {
        if(language === 'en') {
            alert(email_en);
        } else if (language === 'es') {
            alert(email_es);
        } else if (language === 'fr') {
            alert(email_fr);
        } else if (language === 'de') {
            alert(email_de);
        } else if (language === 'no') {
            alert(email_no);
        } else if (language === 'sw') {
            alert(email_sw);
        }
        return; // Evita que el formulario se envíe si la validación falla
    }

    if (date < fechaActual) {
        if(language === 'en') {
            alert(date_en);
        } else if (language === 'es') {
            alert(date_es);
        } else if (language === 'fr') {
            alert(date_fr);
        } else if (language === 'de') {
            alert(date_de);
        } else if (language === 'no') {
            alert(date_no);
        } else if (language === 'sw') {
            alert(date_sw);
        }
        return;
    }

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
    formData.append("surname", surname);
    formData.append("baby", baby);
    formData.append("infants", infants);
    formData.append("disabled", disabled);
    formData.append("extra", extra);

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
    let payment = document.getElementById('paymentAirport').value;
    let surname = document.getElementById('surnameAirport').value;
    let baby = document.getElementById('babies_selection_1').value;
    let infants = document.getElementById('infants_selection_1').value;
    let child = document.getElementById('children_selection_1').value;
    let disabled = document.getElementById('disable_1').value;
    let extra = document.getElementById('descripcion_1').value;


    if (!emailRegex.test(email)) {
        if(language === 'en') {
            alert(email_en);
        } else if (language === 'es') {
            alert(email_es);
        } else if (language === 'fr') {
            alert(email_fr);
        } else if (language === 'de') {
            alert(email_de);
        } else if (language === 'no') {
            alert(email_no);
        } else if (language === 'sw') {
            alert(email_sw);
        }
        return; // Evita que el formulario se envíe si la validación falla
    }

    if (date < fechaActual) {
        if(language === 'en') {
            alert(date_en);
        } else if (language === 'es') {
            alert(date_es);
        } else if (language === 'fr') {
            alert(date_fr);
        } else if (language === 'de') {
            alert(date_de);
        } else if (language === 'no') {
            alert(date_no);
        } else if (language === 'sw') {
            alert(date_sw);
        }
        return;
    }

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
    formData.append("surname", surname);
    formData.append("baby", baby);
    formData.append("infants", infants);
    formData.append("disabled", disabled);
    formData.append("extra", extra);



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


/* Enviar Mail Airport Murcia */
let submitForm_airport_2 = document.getElementById('airport_form_2');
let airport_mensaje_ok_2 = document.getElementById('airport_success_2');
let airport_mensaje_error_2 = document.getElementById('airport_error_2');

function procesarDatosFormAirport2() {
    let nombre = document.getElementById('nameAirport_2').value;
    let phone = document.getElementById('numberAirport_2').value;
    let email = document.getElementById('emailAirport_2').value;
    let flight = document.getElementById('flightAirport_2').value;
    let origin = document.getElementById('origin-select_2').value;
    let drop = document.getElementById('drop-select_2').value;
    let date = document.getElementById('dateAirport_2').value;
    let time = document.getElementById('timeAirport_2').value;
    let adults = document.getElementById('adult_selection_airport_2').value;
    let payment = document.getElementById('paymentAirport_2').value;
    let surname = document.getElementById('surnameAirport_2').value;
    let baby = document.getElementById('babies_selection_2').value;
    let infants = document.getElementById('infants_selection_2').value;
    let child = document.getElementById('children_selection_2').value;
    let disabled = document.getElementById('disable_2').value;
    let extra = document.getElementById('descripcion_1').value;


    if (!emailRegex.test(email)) {
        if(language === 'en') {
            alert(email_en);
        } else if (language === 'es') {
            alert(email_es);
        } else if (language === 'fr') {
            alert(email_fr);
        } else if (language === 'de') {
            alert(email_de);
        } else if (language === 'no') {
            alert(email_no);
        } else if (language === 'sw') {
            alert(email_sw);
        }
        return; // Evita que el formulario se envíe si la validación falla
    }

    if (date < fechaActual) {
        if(language === 'en') {
            alert(date_en);
        } else if (language === 'es') {
            alert(date_es);
        } else if (language === 'fr') {
            alert(date_fr);
        } else if (language === 'de') {
            alert(date_de);
        } else if (language === 'no') {
            alert(date_no);
        } else if (language === 'sw') {
            alert(date_sw);
        }
        return;
    }

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
    formData.append("surname", surname);
    formData.append("baby", baby);
    formData.append("infants", infants);
    formData.append("disabled", disabled);
    formData.append("extra", extra);



   fetch("https://www.taxitimetorreviejatoairport.com/mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data=> {
        if(data.mensaje === 'OK') {
            airport_mensaje_ok_2.classList.remove('d-none');
        } else {
            airport_mensaje_error_2.classList.remove('d-none');
        }
        booking_form_2.classList.add('d-none');
        buttonForm_2.classList.remove('d-none');
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
    let extra = document.getElementById('descripcion_1').value;


    if (!emailRegex.test(email)) {
        if(language === 'en') {
            alert(email_en);
        } else if (language === 'es') {
            alert(email_es);
        } else if (language === 'fr') {
            alert(email_fr);
        } else if (language === 'de') {
            alert(email_de);
        } else if (language === 'no') {
            alert(email_no);
        } else if (language === 'sw') {
            alert(email_sw);
        }
        return; // Evita que el formulario se envíe si la validación falla
    }

    if (date < fechaActual) {
        if(language === 'en') {
            alert(date_en);
        } else if (language === 'es') {
            alert(date_es);
        } else if (language === 'fr') {
            alert(date_fr);
        } else if (language === 'de') {
            alert(date_de);
        } else if (language === 'no') {
            alert(date_no);
        } else if (language === 'sw') {
            alert(date_sw);
        }
        return;
    }

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
    formData.append("extra", extra);

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

});

let buttonAlicanteOrigin = document.getElementById('AlicanteOrigin');
let buttonAlicanteDrop = document.getElementById('AlicanteDrop');


function AddOrigin() {
    let alicanteOrigin = document.getElementById('origin-select');
    let AlicanteDrop = document.getElementById('drop-select');
    alicanteOrigin.value = 'Airport Alicante';
    alicanteOrigin.readOnly = true;
    AlicanteDrop.readOnly = false;
    AlicanteDrop.value = '';
    buttonAlicanteDrop.classList.remove('location-background');
    buttonAlicanteOrigin.classList.add('location-background');
    hideForm();
    cancelForm2();
}

function AddDrop() {
    let alicanteOrigin = document.getElementById('origin-select');
    let AlicanteDrop = document.getElementById('drop-select');
    AlicanteDrop.value = 'Alicante Airport';
    AlicanteDrop.readOnly = true;
    alicanteOrigin.readOnly = false;
    alicanteOrigin.value = '';
    buttonAlicanteOrigin.classList.remove('location-background');
    buttonAlicanteDrop.classList.add('location-background');
    hideForm();
    cancelForm2();
}


let buttonMurciaOrigin = document.getElementById('MurciaOrigin');
let buttonMurciaDrop = document.getElementById('MurciaDrop');


function AddOriginMurcia() {
    let murciaOrigin = document.getElementById('origin-select_2');
    let murciaDrop = document.getElementById('drop-select_2');
    murciaOrigin.value = 'Murcia Airport';
    murciaOrigin.readOnly = true;
    murciaDrop.readOnly = false;
    murciaDrop.value = '';
    buttonMurciaDrop.classList.remove('location-background');
    buttonMurciaOrigin.classList.add('location-background');
    hideForm2();
    cancelForm();
}

function AddDropMurcia() {
    let murciaOrigin = document.getElementById('origin-select_2');
    let murciaDrop = document.getElementById('drop-select_2');
    murciaDrop.value = 'Murcia Airport';
    murciaOrigin.readOnly = false;
    murciaDrop.readOnly = true;
    murciaOrigin.value = '';
    buttonMurciaOrigin.classList.remove('location-background');
    buttonMurciaDrop.classList.add('location-background');
    hideForm2();
    cancelForm();
}