const imgContainer = document.getElementById('img-container');

function changeImg(img) {
  imgContainer.src = img.src;
}

function favorite(icon) {
  if (icon.classList.contains('liked')) {
    icon.classList.remove('liked');
  } else {
    icon.classList.add('liked');
  }
}
