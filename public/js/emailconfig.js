emailjs.init("s5Ww3Z4qxpc20MHT_"); /*YOURPUBLICKEY*/
function sendData(e){
  console.log(e)
}

emailjs.sendForm('gmail', 'template_7d4ag1g', document.getElementById('#myForm'))
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });