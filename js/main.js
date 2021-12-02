window.onload = () => {
    'use strict';
    //alert("Hi this is me sending something interesting, cOOL!")

  // get the form
  let form = document.forms.my; // <form name="my"> element

  // get the element
  let elem = form.elements.one; // <input name="one"> element

  //alert(elem.value); // 1

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js')
               .then(() => console.log("registerd service worker!"));
    }

  }


function clickHandler(event) {
    console.log('Button Clicked');
 }

const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', clickHandler);

function clickHandlerSubmit(event) {
  console.log('Submit Clicked');
  var el = document.getElementById("mail");
  console.log(el.value);
}

var form = document.getElementById("submit");
console.log(form);
form.addEventListener('click', clickHandlerSubmit);