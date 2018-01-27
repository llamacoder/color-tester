$(document).ready(function() {

  function handleNavColorClick(event) {
    let $button = $(event.target);
    let $navbar = $('.navbar');
    $navbar.css('background-color', $button.css('background-color'));
  }

  function handleImgClick(event) {
    let $button = $(event.target);
    let idTag = $button.attr('id');
    let $main = $('main');
    $main.css('background-image', `url('./assets/${idTag}.jpg')`);
  }

  function addListeners() {
    let $buttons = $('.navbar-buttons');
    console.log($buttons);
    $buttons.click(handleNavColorClick);
    $('.img-buttons').click(handleImgClick);
  }

  addListeners();
});
