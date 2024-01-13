const input = document.getElementById(`input`);
const copybtn = document.getElementById(`copybtn`);
const genbtn = document.getElementById(`genbtn`);
const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
const symbol = `$$!@#$%&?`
const number = `0123456789`
const symbolCheckbox = document.getElementById(`symbol`);
const numberChekbox = document.getElementById(`number`)
const rangeValue = document.getElementById(`range`);
const rangeDisplay = document.getElementById(`rangeDisplay`);


let password =``;
let length = rangeValue.value;

//event listeners
rangeValue.addEventListener(`change`,updateValue);
 genbtn.addEventListener(`click`,showpassword);

// functions
 function genratepassword() {
    const includeSymbols = symbolCheckbox.checked;
const includeNumbers = numberChekbox.checked;
    for (let i = 0; i < length; i++) {
        let resource = letters
         const random =  Math.floor(Math.random()* letters.length);
         if (includeNumbers && includeSymbols) {
            resource = symbol + number + letters
         }
         else if (includeSymbols) {
            resource =  symbol + letters;
         }
         else if (includeNumbers) {
            resource = number + letters
         }
          
         password += resource.charAt(random);
        

         
    }
     
     
 }
 function showpassword() {
    input.value = password
 }
 
function updateValue() {
 
    rangeDisplay.innerHTML = `length[${rangeValue.value}]`
    
}
//loops and password genrate engine


// update timers
setInterval(()=>{
    updateValue()
    password = ``
    length = rangeValue.value
    genratepassword()
},10 );
