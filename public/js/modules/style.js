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
let array_button = ["+", "-", "x", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "C"];
let compt = 0;

array_button.forEach(e => {
  let button = document.createElement('button');
  button.innerHTML = e;
  div_2_intern.appendChild(button)
});


// MUSCLE
body.addEventListener('click', (e) => {
  console.log(e.target.innerHTML);

  
});