//--------------Made By Shray Sagar------------//
let text = document.querySelector(".container");

const arr = ["Bike Lover","Programmer","Web Developer","Human"];
let arrIndex = 0;
let character = 0;
update();

function update(){
    character++;
    text.innerHTML =`
    <h1>I am a ${arr[arrIndex].slice(0,character)}</h1>
    `
    if(character==arr[arrIndex].length){
        arrIndex++
        character=0;
    }
    setTimeout(update,400);
};
//--------------Made By Shray Sagar------------//

