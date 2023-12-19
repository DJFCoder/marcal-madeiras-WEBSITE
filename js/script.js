document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    
    window.scrollTo({
      top: 0
    });
  });

  function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function copyLink(linkToCopy) {
  var tempInput = document.createElement("input");
  tempInput.value = linkToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Compartilhe nosso site!\n" + "\n" + linkToCopy + "\n" + "\nLink Copiado!");
  return false;
}