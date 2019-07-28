$('.my-datepicker').datepicker({
  weekStart: 1,
  format: 'mm.dd.yyyy',
  startDate: new Date(),
  templates: {
    leftArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    rightArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
  },
});

$('.my-datepicker').datepicker('update', new Date());

let myCities = [
  "Mumbai", 
  "New Delhi", 
  "Panjin", 
  "Pune", 
  "Mysore", 
  "Indore", 
  "New York", 
  "Los Angeles", 
  "Manhattan", 
  "Tokyo", 
  "New Jersey"
];

$('.city__input').autocomplete({
  source: myCities,
  autoFocus: true,
});

$('.persons').click(function(e){
  // e.stopPropagation();
  $('.persons__block').toggle('persons__block_active');
});


$( "#persons-select" ).selectmenu({
  select: function( event, ui ) {
    persons.innerText = total + ', ' + personsSelect.value;
  }
});

let persons = document.querySelector('.persons');
let personsSelect = document.querySelector('#persons-select');
let adults = parseInt(document.querySelector('.adults__value').innerText);
let children = parseInt(document.querySelector('.children__value').innerText);
let infants = parseInt(document.querySelector('.infants__value').innerText);
let total = adults + children + infants;

let adultsBtnMinus = document.querySelector('.adults__btn-minus');
let adultsBtnPlus = document.querySelector('.adults__btn-plus');

adultsBtnPlus.addEventListener('click', function(){
  adults += 1;
  document.querySelector('.adults__value').innerText = adults;
  if (adults > 1) {
    adultsBtnMinus.style.backgroundColor = '#3399ff';
  }
  total = adults + children + infants;
  persons.innerText = total + ', ' + personsSelect.value;
});

adultsBtnMinus.addEventListener('click', function() {
  if (adults != 1) {
    adults -= 1;
    document.querySelector('.adults__value').innerText = adults;
  } 
  if (adults === 1) {
    adultsBtnMinus.style.backgroundColor = 'grey';
  }
  total = adults + children + infants;
  persons.innerText = total + ', ' + personsSelect.value;
});


let childrenBtnMinus = document.querySelector('.children__btn-minus');
let childrenBtnPlus = document.querySelector('.children__btn-plus');

childrenBtnPlus.addEventListener('click', function(){
  children += 1;
  document.querySelector('.children__value').innerText = children;
  if (children > 0) {
    childrenBtnMinus.style.backgroundColor = '#3399ff';
  }
  total = adults + children + infants;
  persons.innerText = total + ', ' + personsSelect.value;
});

childrenBtnMinus.addEventListener('click', function() {
  if (children != 0) {
    children -= 1;
    document.querySelector('.children__value').innerText = children;
  } 
  if (children === 0) {
    childrenBtnMinus.style.backgroundColor = 'grey';
  }
  total = adults + children + infants;
  persons.innerText = total + ', ' + personsSelect.value;
});

let infantsBtnMinus = document.querySelector('.infants__btn-minus');
let infantsBtnPlus = document.querySelector('.infants__btn-plus');

infantsBtnPlus.addEventListener('click', function(){
  infants += 1;
  document.querySelector('.infants__value').innerText = infants;
  if (children > 0) {
    infantsBtnMinus.style.backgroundColor = '#3399ff';
  }
  total = adults + children + infants;
  persons.innerText = total + ', ' + personsSelect.value;
});

infantsBtnMinus.addEventListener('click', function() {
  if (infants != 0) {
    infants -= 1;
    document.querySelector('.infants__value').innerText = infants;
  } 
  if (infants === 0) {
    infantsBtnMinus.style.backgroundColor = 'grey';
  }
  total = adults + children + infants;
  persons.innerText = total + ', ' + personsSelect.value;
});




console.log(adults);
console.log(children);
console.log(infants);
console.log(total);

