document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "flex"; // Altera para flex para ocupa  toda a tela
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
