//define functions here
function getIt(){
  $('p').on('click', () =>{alert('Hey!'); return;});
}

function frameIt(){
  $('img').on('load', (e) => {$(e.currentTarget).addClass('tasty');});
}

function pressIt(){
  $('#typing').on('keydown', function(e){
    e.which === 71 ? alert('Pressed G!') : null;
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
