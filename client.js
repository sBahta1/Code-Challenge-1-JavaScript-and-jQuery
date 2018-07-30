console.log('JS');
$(readyNow);
function readyNow() {
    console.log('JQ');
    $('#generatebtn').on('click', counterFunc)
    $('#generatebtn').on('click', clickFunc)
}

let clicks = 0

function counterFunc() {
    $('#generatebtn').append('<div id="buttonDiv"><p id=counter></p></div>')   
    if (clicks ===1 ){
        $('.container').append('<button id="swapBtn">swap</button>');
        $('.container').append('<button id="deletebtn">Delete</button>')
   
    }
}

function clickFunc() {
    $('#counter').text(++clicks);
   $('#counter').text(Number(clicks));
    console.log(clicks);
}

$('.container').on('click','#swapBtn', swapFunc);
function swapFunc() {
   console.log("swappy");
}//still need to connect swap button and delete button 