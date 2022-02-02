const input = document.querySelector('input'),
box = document.querySelector('.color-box'),
text = document.querySelector('.color-box p');

function generate(color){
  box.style.backgroundColor = color;
  text.innerHTML = color;
}

generate('#F10F');