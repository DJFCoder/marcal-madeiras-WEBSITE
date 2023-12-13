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

document.getElementById('shareLink').addEventListener('click', function(event) {
  // Impede o comportamento padrão do link
  event.preventDefault();

  // Obtém a URL atual do navegador
  var currentURL = window.location.href;

  // Cria um elemento de input temporário para copiar o texto
  var tempInput = document.createElement('input');
  tempInput.value = currentURL;
  document.body.appendChild(tempInput);

  // Seleciona o texto no campo de input
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto para a área de transferência
  document.execCommand('copy');

  // Remove o campo de input temporário
  document.body.removeChild(tempInput);

  // Alerta o usuário que o link foi copiado (pode ser substituído por uma notificação ou modal)
  alert('Link copiado: ' + currentURL);
});

