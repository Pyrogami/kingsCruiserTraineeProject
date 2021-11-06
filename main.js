// from and to location form
const fromCruising = document.querySelector('#from-location-select');
const toCruising = document.querySelector('#to-location-select');
// departure and return date form
const departureDate = document.querySelector('#form-departure-date');
const returnDate = document.querySelector('#form-return-date');
// VIP seats
const vipSeats = document.querySelector('#form-vip');
const vipAdd = document.querySelector('#vip-add');
const vipMinus = document.querySelector('#vip-minus');
// First class seats
const firstClassSeats = document.querySelector('#form-first-class');
const firstClassAdd = document.querySelector('#first-class-add');
const firstClassMinus = document.querySelector('#first-class-minus');
// Economy class seats
const economySeats = document.querySelector('#form-economy');
const economyAdd = document.querySelector('#economy-add');
const economyMinus = document.querySelector('#economy-minus');
// price values
const subtotalValue = document.querySelector('#subtotal-value');
const vatValue = document.querySelector('#vat-value');
const totalValue = document.querySelector('#total-value');
// book button
const bookButton = document.querySelector('#book-now-button');



// from location: setting item to local storage
fromCruising.addEventListener('change', function(e){
    localStorage.setItem('from-location', e.target.value);
})

// to location: setting item to local storage
toCruising.addEventListener('change', function(e){
    if(toCruising.value === fromCruising.value){
        alert("Departure and Arrival locations have the same value. Select different locations");
    }
    else{
        localStorage.setItem('to-location', e.target.value);
    }
})



// setting departure date 
departureDate.addEventListener('change', function(e){
    localStorage.setItem('departure-date', e.target.value);
})

// setting return date and criteria for the return date to be after departure date
returnDate.addEventListener('change', function(e){
    // finding difference of days
    const depSplitDate = departureDate.value.split('-');
    const retSplitDate = returnDate.value.split('-');
    if((retSplitDate[0] - depSplitDate[0]) < 0 ) {
        alert("negative return date");
    }
    else if((retSplitDate[0] - depSplitDate[0]) === 0 && (retSplitDate[1] - depSplitDate[1]) < 0){
        alert("negative return date");
    }
    else if((retSplitDate[0] - depSplitDate[0]) === 0 && (retSplitDate[1] - depSplitDate[1]) === 0 && (retSplitDate[2] - depSplitDate[2]) < 0){
        alert("negative return date");
    }
    else if((retSplitDate[0] - depSplitDate[0]) === 0 && (retSplitDate[1] - depSplitDate[1]) === 0 && retSplitDate[2] <= (parseInt(depSplitDate[2]) + 3)){
        alert("can't book return trip within 3 days of departure");
    }
    else{
        //setting return date
        localStorage.setItem('return-date', e.target.value);
    }
})


// seats and class booking section

//subtotal function for the pricing section
let subTotal = 0;
function subTotalCal(){
    let vipPrice = parseInt(vipSeats.value) * 7000;
    let fcPrice = parseInt(firstClassSeats.value) * 1500;
    let economyPrice = parseInt(economySeats.value) * 1000;

    // converting NaN to 0
    vipPrice = vipPrice || 0;
    fcPrice = fcPrice || 0;
    economyPrice = economyPrice || 0;

    // adding seat prices to local storage by class
    localStorage.setItem('vip-price', vipPrice);
    localStorage.setItem('fc-price', fcPrice);
    localStorage.setItem('economy-price', economyPrice);

    subTotal = vipPrice + fcPrice + economyPrice;
    //localStorage.setItem('subtotal', subTotal);
    subtotalValue.textContent = `$${subTotal}`;

    //calculate vat value
    let vatCalc = 0.1 * subTotal;
    vatValue.textContent = `$${vatCalc}`;

    //calculate Total value
    let totalCalc = vatCalc + subTotal;
    localStorage.setItem('total', totalCalc);
    totalValue.textContent = `$${totalCalc}`;
}

// 1) VIP segment

vipSeats.addEventListener('change', function(e){
    if (vipSeats.value < 0){
        vipSeats.value = 0;
    }
    else if(vipSeats.value > 150){
        alert('You cannot book beyond 150 VIP seats');
        vipSeats.value = 150;
    }
    else{
        localStorage.setItem('no of VIP seats', e.target.value);
        subTotalCal();
    }
})

vipAdd.addEventListener('click', function(e){
    vipSeats.value++;
    if(vipSeats.value > 150){
        alert('You cannot book beyond 150 VIP seats');
        vipSeats.value = 150;
    }
    else{
    localStorage.setItem('no of VIP seats', vipSeats.value);
    subTotalCal();
    }
})

vipMinus.addEventListener('click', function(e){
    vipSeats.value--;
    if(vipSeats.value < 0){
        vipSeats.value = 0;
    }
    else{
        localStorage.setItem('no of VIP seats', vipSeats.value);
        subTotalCal();
    }
})

// 2) First class segment

firstClassSeats.addEventListener('change', function(e){
    if (firstClassSeats.value < 0){
        firstClassSeats = 0;
    }
    else if(firstClassSeats.value > 850){
        alert('You cannot book beyond 850 First class seats');
        firstClassSeats.value = 850;
    }
    else{
        localStorage.setItem('no of First class seats', e.target.value);
        subTotalCal();
    } 
})

firstClassAdd.addEventListener('click', function(e){
    firstClassSeats.value++;

    if(firstClassSeats.value > 850){
        alert('You cannot book beyond 850 First class seats');
        firstClassSeats.value = 850;
    }
    else{
        localStorage.setItem('no of First class seats', firstClassSeats.value);
        subTotalCal();
    }
})

firstClassMinus.addEventListener('click', function(e){
    firstClassSeats.value--;
    if(firstClassSeats.value < 0){
        firstClassSeats.value = 0;
    }
    else{
        localStorage.setItem('no of First class seats', firstClassSeats.value);
        subTotalCal();
    }
})

// 3) Economy class segment

economySeats.addEventListener('change', function(e){
    if(economySeats.value < 0){
        economySeats.value = 0;
    }
    else if(economySeats.value > 2000){
        alert('You cannot book beyond 2000 First class seats');
        economySeats.value = 2000;
    }
    else{
        localStorage.setItem('no of Economy seats', e.target.value);
        subTotalCal();
    }
})

economyAdd.addEventListener('click', function(e){
    economySeats.value++;
    if(economySeats.value > 2000){
        alert('You cannot book beyond 2000 First class seats');
        economySeats.value = 2000;
    }
    else{
        localStorage.setItem('no of Economy seats', economySeats.value);
        subTotalCal();
    }
})

economyMinus.addEventListener('click', function(e){
    economySeats.value--;
    if(economySeats.value < 0){
        economySeats.value = 0;
    }
    else{
        localStorage.setItem('no of Economy seats', economySeats.value);
        subTotalCal();
    }
})

// Book ticket now

bookButton.addEventListener('click', function(e){
    e.preventDefault();
    if(fromCruising.value === 'Select Location' || toCruising.value === 'Select Location'){
        alert("to/from form incomplete");
    }
    else if(departureDate.value === '' || returnDate.value === ''){
        alert("departure/return date form incomplete");
    }
    else{
        window.location.replace("KcPage2.html");
    }
})


















