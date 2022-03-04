function printMsg() {
    document.getElementById("op").innerHTML="10 seconds have passed";
}

function start() {
 window.setTimeout(printMsg,500);
}
function stop (){
    window.clearTimeout(ID);
}