var document = window.document;
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;


function typeWriter() {
  if (i < txt.length) {
    document.getElementsByI("demo").innerHTML += txt.charAt(i);
    i++;
    document.setTimeout(typeWriter, speed);
  }
}

document.onload = typeWriter(); 