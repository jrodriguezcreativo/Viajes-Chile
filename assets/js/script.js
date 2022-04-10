$(document).ready(function (){

  $(window).scroll(function() {

    var height = $('.first-container').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 20) {
        $('.nav-container').addClass('solid-nav');
    } else {
        $('.nav-container').removeClass('solid-nav');
    }

});
    
  $('#cambio1').click(function(){
    $(this).css({ 'background-color': '#17A088' });
  });

  $('#cambio1').dblclick(function(){
    $(this).css({ 'background-color': '#598FDF' });
  });

  $('#cambio2').click(function(){
    $(this).css({ 'background-color': '#17A088' });
  });

  $('#cambio2').dblclick(function(){
    $(this).css({ 'background-color': '#598FDF' });
  });

  $('#cambio3').click(function(){
    $(this).css({ 'background-color': '#17A088' });
  });

  $('#cambio3').dblclick(function(){
    $(this).css({ 'background-color': '#598FDF' });
  });

  $('.clic').click(function () {
    $('.efecto').toggle();
});



const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('name');
  const direcciónEmail = document.getElementById('email');
  const Phone = document.getElementById('phone');
  const message = document.getElementById('message');

  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);



  
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel)

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
  });