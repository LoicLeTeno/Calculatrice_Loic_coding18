// CORP
let body = document.body;
let script_insert_before = document.querySelectorAll('script')[0];

let div_1 = document.createElement('div');
div_1.id = "corps";
body.insertBefore(div_1, script_insert_before)


// TETE
let input_tete = document.createElement('input');
input_tete.id = "tete";
input_tete.placeholder = 0;
div_1.appendChild(input_tete);


// INTERIEUR
let div_2_intern = document.createElement('div');
div_2_intern.id = "intern";
div_1.appendChild(div_2_intern);

// BUTTON
let array_button = ["+", "-", "x", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "=", "C"];
let compt = 0;

array_button.forEach(e => {
    let button = document.createElement('button');
    button.innerHTML = e;
    div_2_intern.appendChild(button)
});


// MUSCLE
let number_1 = "";
let operator = "";
let number_2 = ""; 
let re_compt = 0;

body.addEventListener('click', (e) => {

    if (number_1 != "" && number_2 != "" && operator != "" && e.target.innerHTML == "=") {
        input_tete.value = "";

        switch (operator) {
            case "+":
                input_tete.value = parseFloat(number_1) + parseFloat(number_2);
                break;

            case "-":
                input_tete.value = parseFloat(number_1) - parseFloat(number_2);
                break;

            case "x":
                input_tete.value = parseFloat(number_1) * parseFloat(number_2);
                break

            default:
                input_tete.value = parseFloat(number_1) / parseFloat(number_2);
                break;
        }

    } else if (e.target.innerHTML == "C") {
        number_1 = "";
        operator = "";
        number_2 = ""; 

        input_tete.value = "";

    } else if (number_1 != "" && operator != ""){

        while (re_compt < 1) {
            input_tete.value = "";

            re_compt = re_compt + 1
        }

        input_tete.value += e.target.innerHTML;
        number_2 = input_tete.value;

    } else if (number_1 != "" && (e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "x" || e.target.innerHTML == "/") ) {
        input_tete.value = "";
        input_tete.value += e.target.innerHTML;
        operator = input_tete.value;

    } else{
        input_tete.value += e.target.innerHTML;
        number_1 = input_tete.value;

    }        
});


// KEY
window.addEventListener('keydown', (e) => {
    if (number_1 != "" && number_2 != "" && operator != "" && e.key == "=") {
        input_tete.value = "";

        switch (operator) {
            case "+":
                input_tete.value = parseFloat(number_1) + parseFloat(number_2);
                break;

            case "-":
                input_tete.value = parseFloat(number_1) - parseFloat(number_2);
                break;

            case "x":
                input_tete.value = parseFloat(number_1) * parseFloat(number_2);
                break

            default:
                input_tete.value = parseFloat(number_1) / parseFloat(number_2);
                break;
        }

    } else if (e.key == "C") {
        number_1 = "";
        operator = "";
        number_2 = ""; 

        input_tete.value = "";

    } else if (number_1 != "" && operator != ""){

        while (re_compt < 1) {
            input_tete.value = "";

            re_compt = re_compt + 1
            console.log(re_compt);
        }

        input_tete.value += e.key;
        number_2 = input_tete.value;
        console.log(number_2);

    } else if (number_1 != "" && (e.key == "+" || e.key == "-" || e.key== "x" || e.key== "/") ) {
        input_tete.value = "";
        input_tete.value += e.key;
        operator = input_tete.value;
        console.log(operator);

    } else {
        input_tete.value += e.key;
        number_1 = input_tete.value;

    }        
        console.log(number_1);
});