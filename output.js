const fromLocation = localStorage.getItem('from-location');
const toLocation = localStorage.getItem('to-location');
const departureDate = localStorage.getItem('departure-date');
const returnDate = localStorage.getItem('return-date');
const vipSeats = localStorage.getItem('no of VIP seats');
const vipPrice = localStorage.getItem('vip-price');
const fcSeats = localStorage.getItem('no of First class seats');
const fcPrice = localStorage.getItem('fc-price');
const economySeats = localStorage.getItem('no of Economy seats');
const economyPrice = localStorage.getItem('economy-price');
const totalPrice = localStorage.getItem('total');


const fromSlot = document.querySelector('#output-from-location');
const toSlot = document.querySelector('#output-to-location');
const departDateSlot = document.querySelector('#output-departure-date');
const returnDateSlot = document.querySelector('#output-return-date');
const vipSeatSlot = document.querySelector('#output-vip-seat-no');
const vipPriceSlot = document.querySelector('#output-vip-price');
const fcSeatSlot = document.querySelector('#output-first-class-seat-no');
const fcPriceSlot = document.querySelector('#output-first-class-price');
const economySeatSlot = document.querySelector('#output-economy-seat-no');
const economyPriceSlot = document.querySelector('#output-economy-price');
const totalPriceSlot = document.querySelector('#output-total-price');



// assigning local storage values to page

//cruising from
fromSlot.textContent = fromLocation;

//cruising to
toSlot.textContent = toLocation;

//departure date slot
departDateSlot.textContent = departureDate;

//return date slot
returnDateSlot.textContent = returnDate;

//VIP seat slot
vipSeatSlot.textContent = vipSeats;

//VIP price slot
vipPriceSlot.textContent = `$${vipPrice}`;

//First class seat slot 
fcSeatSlot.textContent = fcSeats;

//First class price slot
fcPriceSlot.textContent = `$${fcPrice}`;

//Economy seat slot
economySeatSlot.textContent = economySeats;

//Economy price slot
economyPriceSlot.textContent = `$${economyPrice}`;

//Total price
totalPriceSlot.textContent = `$${totalPrice}`;