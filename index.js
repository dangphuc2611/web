console.log('run')

window.onload = function hiddenImage() {
  let imageResult = document.getElementById('image-result')
  imageResult.style.visibility = 'hidden';
}

function showAlert() {
    alert('dangphuc')
  }
function showResult(){
  let imageResult = document.getElementById('image-result')
  imageResult.style.visibility = 'visible';
}
