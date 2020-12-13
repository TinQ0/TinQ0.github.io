
var txt = 'Lorem ipsum typing effect!'; /* The text */


function type() {
    for(var i = 0; i < txt.length; i++){
        setTimeout(addLetter(txt.charAt(i)), 250)
        
    }
}
function addLetter(char) {
            document.getElementById("demo").innerHTML += char;
        }