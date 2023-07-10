// den här projekt är en exempel för hur man ska hantera
// en buttom listener

document.querySelector("button").addEventListener("click",handleClick);
// notera: när man koda för en eventListener då man ska inte parentes i slutet av 
// funktion, om man gör det ska det exekvera funktionen direkt när man laddar 
// hemsidan, utan att vänta för en event 
// det innebär att man bara skickar in namnet av funktionen...

var buttons = document.querySelectorAll("button");
// man kan selecta button med hjälp av deras klass, t.ex: .drum i 
// querySelectorAll funktion. 
for(var buttom of buttons){
    buttom.addEventListener("click", handleClick);

}

document.addEventListener("keydown", function(event) {
    makeSounds(event.key);
    buttonAnimation(event.key);
  });

function handleClick(){
    //var audio = new Audio("sounds/tom-1.mp3");
    // skapa en audio obj
    //audio.play();
    //this.style.color ="white";
    var name = this.innerHTML;
    makeSounds(name);
    buttonAnimation(name);
    // this används för att ta reda på vilket element som utlöser listener
    // man kan använda switch för att matcha olika ljudeffekt 
}
// begreppet av en anonymous funtion (namnlös funktion) är en funktion som 
// ska används en gång 

// Contructor function är för att skapa olika obj, namnet anges till dessa 
// Contructor funktion måste vara versalt 

// i en obj kan man ha definera även funktion kopplad till själva objektet. 
function makeSounds(key){
    var audio = null; 
    switch(key){
        case 'w':
            audio = new Audio("sounds/crash.mp3");          
            break;
        case 'a':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            console.log("some things else")
            break;  
    }
    if (audio !== null){
        audio.play();
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},300);
}