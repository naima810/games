let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("three");
let fourth = document.getElementById("four");
let fifth = document.getElementById("five");
let alpha = document.getElementById("words");
let msg = document.getElementById("msg");
let win = document.querySelector(".winScreen");
let audio = new Audio("mistake.mp3");
let music = new Audio("music.mp3");
let winning = new Audio("winning.mp3");


music.play();

// let a = document.getElementById("a");
// let b = document.getElementById("b");
// let c = document.getElementById("c");
// let d = document.getElementById("d");
// let e = document.getElementById("e");
// let f = document.getElementById("f");
// let g = document.getElementById("g");
// let h = document.getElementById("h");
// let i = document.getElementById("i");
// let j = document.getElementById("j");
// let k = document.getElementById("k");
// let l = document.getElementById("l");
// let m = document.getElementById("m");
// let n = document.getElementById("n");
// let o = document.getElementById("o");
// let p = document.getElementById("p");
// let q = document.getElementById("q");
// let r = document.getElementById("r");
// let s = document.getElementById("s");
// let t = document.getElementById("t");
// let u = document.getElementById("u");
// let v = document.getElementById("v");
// let w = document.getElementById("w");
// let x = document.getElementById("x");
// let y = document.getElementById("y");
// let z = document.getElementById("z");

//Words Array
const arr = [
  "apple",
  "table",
  "house",
  "chair",
  "happy",
  "music",
  "water",
  "woman",
  "child",
  "earth",
  "light",
  "space",
  "knife",
  "bread",
  "juice",
  "mouse",
  "snake",
  "cloud",
  "dream",
  "laugh",  "apple", "berry", "cloud", "dance", "early", "fancy", "glass", "happy", "jolly", "knife",
  "lemon", "magic", "noble", "ocean", "piano", "queen", "river", "sunny", "toast", "unity",
  "vivid", "witty", "xenon", "yacht", "zebra"
]

//Random declaration


let randnum = Math.floor(Math.random()*arr.length);
let word = arr[randnum];
let WORD = word.toUpperCase();
console.log(word);
let error = 0;
let guesses = 0;



// Stand Of HangMAn
ctx.beginPath();
ctx.moveTo(30, 149);
ctx.lineTo(230, 149)
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(50, 149);
ctx.lineTo(50, 40);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(50, 40);
ctx.lineTo(150, 40)
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(150, 40);
ctx.lineTo(150, 60)
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();
ctx.closePath();

//function for Hangman

//head
const head = () =>{
  ctx.beginPath();
  ctx.arc(150,70,10,0, Math.PI * 2, false);
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
  audio.play();

}
//body
const body = () =>{
  ctx.beginPath();
  ctx.moveTo(150, 80);
  ctx.lineTo(150, 120)
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  audio.play();

}

// Arm 1
const arm1 = () =>{
  ctx.beginPath();
ctx.moveTo(150, 85);
ctx.lineTo(180, 100)
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fill();
ctx.closePath();
audio.play();

}

//arm 2
const arm2 = () =>{
  ctx.beginPath();
ctx.moveTo(150, 85);
ctx.lineTo(120, 100)
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fill();
ctx.closePath();
audio.play();

}

// Leg 1
const leg1=() =>{
  ctx.beginPath();
ctx.moveTo(150, 120);
ctx.lineTo(180, 135)
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fill();
ctx.closePath();
audio.play();

}

// Leg 2

const leg2 = () =>{
  ctx.beginPath();
ctx.moveTo(150, 120);
ctx.lineTo(120, 135)
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fill();
ctx.closePath();
audio.play();
music.pause();
}

//Winner Function
 const winner = (word) =>{
  console.log("Winner");
  win.style.backgroungImage("url('winbg.jpg')")
  win.classList.remove("hide");
  msg.innerText = `Congratulations, You Won. The word was "${WORD}" (^^)`;
  winning.play();
  music.stop();
  audio.currentTime = 0;

 }
 const lose = (word) =>{
  win.classList.remove("hide");
  msg.innerText = `Sorry, You lost. The word was "${WORD}"`;
 }






document.addEventListener('keydown', (evt) =>{
  music.play();
  var key = evt.key;
  var code = evt.keyCode;
  console.log("the key is :",key);  
  console.log("the code is:",code);
  for(i=65; i<91; i++){
    if(code == i){
      if(key == word.charAt(0) || key == word.charAt(2)|| key == word.charAt(3) || key == word.charAt(4) || key == word.charAt(1)){
        let pehla = word.charAt(0) ;
        let dosra = word.charAt(1);
        let tesra = word.charAt(2);
        let chohtha = word.charAt(3);
        let panchwan = word.charAt(4) ;
          if(key == pehla){
            first.innerText = `${key}`.toUpperCase();
            `${key}`.disabled = true;
            alpha.disabled = true;
            guesses++;
          }
          if(key == dosra){
            second.innerText = `${key}`.toUpperCase();
            guesses++;
          }
          if(key == tesra){
            third.innerText = `${key}`.toUpperCase();
            guesses++;
          }
          if(key == chohtha){
            fourth.innerText = `${key}`.toUpperCase();
            guesses++;
          }
          if(key == panchwan){
            fifth.innerText = `${key}`.toUpperCase();
            guesses++;
          }
        }
          else{
            console.log("not correct");
            error++;
            if(error == 1){
              head();
              audio.play();
             }
            else if(error == 2){
              body();
              audio.play();

            }
            if(error == 3){
              arm1();
              audio.play();

            }
            if(error == 4){
              arm2();
              audio.play();

            }
            if(error== 5){
              leg1();
              audio.play();

            }
            if(error == 6){
              leg2();
              audio.play();
              lose(word);
            }
         
          }
          console.log(guesses);
          if(guesses == 5){
            winner(word);
          }
          
        }
      
        }
    
 
});
const plays = (guesses, error, music) =>{
  if(guesses !== 5 || error == 6){ 
    console.log("hello");
}}
setTimeout (plays ,2000);





































































// //array
// // const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina"
// // , "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
// // "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei"
// // , "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
// // "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", 
// // "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
// // "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
// // "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
// // "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
// // "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan"
// // , "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
// // "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
// // "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
// // "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
// // "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
// // "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
// // "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
// // "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
// // "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
// // "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
// //  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
// //  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
// //  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
// //   "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
// const words = [
//   "apple",
//   "table",
//   "house",
//   "chair",
//   "happy",
//   "music",
//   "water",
//   "woman",
//   "child",
//   "earth",
//   "light",
//   "space",
//   "knife",
//   "bread",
//   "juice",
//   "mouse",
//   "snake",
//   "cloud",
//   "dream",
//   "laugh"
// ]


// //array length
//   const arrLength = countries.length;

//   //Random country
// let randarr =Math.floor(Math.random()*arrLength);
// let randCountries = countries[randarr];

// //random string index of the country chosen
// let countryLength = randCountries.length;
// let randstring = Math.floor(Math.random()*countryLength);
    
// //testings
//     console.log(randCountries);
//     console.log(randCountries.charAt(0));
//     console.log(countryLength);

//         const span = document.createElement('span');

// // Set attributes and styles for the new div (optional)
// span.textContent = '-';
// span.style.backgroundColor = 'aliceblue';



//   //Logic
// let first = document.getElementById("first");
//     var keyCode = event.keyCode || event.key;


    


//   });