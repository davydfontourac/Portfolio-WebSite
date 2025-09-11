// tabs-projetos.js
// Alternância de tabs para seção Projetos

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.projetos-tab');
  const tabPanels = document.querySelectorAll('.projetos-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Remove active de todos os botões
      tabButtons.forEach((b) => b.classList.remove('active'));
      // Esconde todos os painéis
      tabPanels.forEach((panel) => panel.classList.add('hidden'));
      // Ativa o botão clicado
      btn.classList.add('active');
      // Mostra o painel correspondente
      const panelName = btn.getAttribute('data-tab');
      document
        .querySelector('.projetos-panel[data-panel="' + panelName + '"]')
        .classList.remove('hidden');
    });
  });

  // Inicializa mostrando o primeiro painel
  if (tabButtons.length && tabPanels.length) {
    tabButtons[0].classList.add('active');
    tabPanels[0].classList.remove('hidden');
    for (let i = 1; i < tabPanels.length; i++) {
      tabPanels[i].classList.add('hidden');
    }
  }
});
