

function display(number) {
    var result = document.getElementById("result")
    if (result.value == 0) {
        result.value = '';
    }
    result.value += number;
}
function clearScreen(val) {
    result.value=val;
}

function calculate() {
    try{
        clearScreen(eval(result.value))
    }catch(err){
       id="red", clearScreen("ERROR")
    }
}
function sin() {
    result.value = Math.sin(result.value);
}

function cos() {
    result.value = Math.cos(result.value);
}

function tan() {
    result.value = Math.tan(result.value);
}

function pow() {
    result.value = Math.pow(result.value, 2);
}

function sqrt() {
    result.value = Math.sqrt(result.value, 2);
}

function log() {
    result.value = Math.log(result.value);
}

function pi() {
    result.value += 3.14159265359;
}

function e() {
    result.value += 2.71828182846;
}
function ln() {
    result.value = Math.ln(result.value);
}


function backspc() {
    result.value = result.value.substr(0, result.value.length - 1)
}
function percentage() {
    result.value=result.value/100
}
function exp() {
    result.value = Math.exp(result.value);
    
}