const modal = document.getElementById('modal')

const img = document.getElementsByClassName('image')
const modalImg = document.getElementById('img01')
const captionText = document.getElementById('caption')

img.onclick = function () {
  modal.style.display = 'block'
  modalImg.src = this.src
  captionText.innerHTML = this.alt
}

var span = document.getElementsByClassName('close')[0]

span.onclick = function () {
  modal.style.display = 'none'
}
