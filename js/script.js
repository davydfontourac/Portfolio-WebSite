// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navMobile = document.getElementById('nav-mobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
  });
  // Fecha o menu mobile ao clicar em um link
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.add('hidden');
    });
  });
}

// Efeito de surgir na imagem do perfil ao entrar na tela
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('profile-img');
  if (img) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            img.classList.remove('opacity-0', 'translate-y-8');
            img.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(img); // só anima uma vez
          }
        });
      },
      { threshold: 0.5 } // 50% da imagem visível já ativa a animação
    );
    observer.observe(img);
  }
});

// Animação do título e subtítulo do header
const title = document.getElementById('main-title');
const subtitle = document.getElementById('main-subtitle');
const nav = document.querySelector('nav');
if (title && subtitle) {
  setTimeout(() => {
    title.classList.remove('opacity-0', 'translate-y-10');
    title.classList.add('opacity-100', 'translate-y-0');
  }, 100);
  setTimeout(() => {
    subtitle.classList.remove('opacity-0', 'translate-y-10');
    subtitle.classList.add('opacity-100', 'translate-y-0');
  }, 400);
}

// Animação e funcionalidade dos indicadores de rolagem
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-indicator').forEach((indicator) => {
    setTimeout(() => {
      indicator.classList.remove('opacity-0');
      indicator.classList.add('opacity-100');
    }, 900);

    indicator.addEventListener('click', () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const currentSection = indicator.closest('section');
      const idx = sections.indexOf(currentSection);
      if (idx > -1 && idx < sections.length - 1) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
      }
    });

    indicator.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = indicator.closest('section');
        const idx = sections.indexOf(currentSection);
        if (idx > -1 && idx < sections.length - 1) {
          sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Animação das barras de habilidades
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar');
  if (skillBars.length) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percent = bar.getAttribute('data-skill');
          bar.style.width = percent + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
    skillBars.forEach(bar => observer.observe(bar));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ...outros scripts...

  // Modal de skills
  const modal = document.getElementById('skill-modal');
  const modalTitle = document.getElementById('skill-modal-title');
  const modalDesc = document.getElementById('skill-modal-desc');
  const closeModal = document.getElementById('close-skill-modal');

  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
      modalTitle.textContent = card.getAttribute('data-title');
      modalDesc.textContent = card.getAttribute('data-desc');
      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Fecha modal ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

// Animação de surgir nas seções ao rolar
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Smooth scroll para todos os links do nav que começam com #
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Botão de modo escuro
document.addEventListener('DOMContentLoaded', () => {
  const darkBtn = document.getElementById('toggle-dark');
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      // Salva preferência no localStorage
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
    // Carrega preferência ao abrir
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
});

// Feedback visual no formulário de contato
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[action*="formspree"]');
  const feedback = document.getElementById('form-feedback');
  if (form && feedback) {
    form.addEventListener('submit', function (e) {
      setTimeout(() => {
        feedback.textContent = "Mensagem enviada com sucesso!";
        feedback.classList.remove('hidden');
        feedback.classList.remove('text-red-600');
        feedback.classList.add('text-green-600');
        form.reset();
      }, 1000);
    });
  }
});
// Animação de scroll suave para o botão de rolagem
document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scroll-down-btn');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#sobre');
        if (target) {
          window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 20,
          behavior: 'smooth'
        });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  function drawStars() {
    const canvas = document.getElementById('stars-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = Math.random() * 1.2 + 0.2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.7 + 0.2) + ')';
      ctx.fill();
    }
  }
  // Só desenha se estiver no dark
  function handleBg() {
    const isDark = document.documentElement.classList.contains('dark');
    const bg = document.getElementById('dark-bg-animated');
    if (bg) bg.style.opacity = isDark ? '1' : '0';
    if (isDark) drawStars();
  }
  window.addEventListener('resize', () => {
    if (document.documentElement.classList.contains('dark')) drawStars();
  });
  // Detecta troca de tema
  const darkBtn = document.getElementById('toggle-dark');
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      setTimeout(handleBg, 10);
    });
  }
  // Inicializa
  handleBg();
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.classList.add('nav-visible');
    } else {
      nav.classList.remove('nav-visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hiThere = document.getElementById('intro-greeting');
  const intro = document.getElementById('intro-name');
  const mainTitleBlock = document.getElementById('main-title-block');
  const nav = document.getElementById('main-nav');

  // Novos textos
  const hiThereText = "Olá! Prazer em te ver por aqui";
  const introText = "Me chamo Davyd, como posso ajudar?";

  // Esconde todos inicialmente
  hiThere.innerHTML = "";
  intro.innerHTML = "";
  mainTitleBlock.style.opacity = 0;
  if (nav) nav.classList.add('opacity-0');

  // Cria o cursor piscando
  function getCursorHTML() {
    return '<span class="type-cursor" style="display:inline-block;width:1ch;animation:blink 1s steps(1) infinite;">|</span>';
  }

  // Efeito de máquina de escrever com fade-in em cada letra
  function typeEffect(element, text, delay = 65, callback) {
    element.innerHTML = "";
    let i = 0;
    function type() {
      if (i <= text.length) {
        // Cria um span para cada letra para animar o fade-in
        let html = "";
        for (let j = 0; j < i; j++) {
          html += `<span style="opacity:1;transition:opacity 0.2s">${text[j]}</span>`;
        }
        // Letra atual (fade-in)
        if (i < text.length) {
          html += `<span style="opacity:0;transition:opacity 0.2s">${text[i]}</span>`;
        }
        element.innerHTML = html + getCursorHTML();
        // Faz a letra atual aparecer suavemente
        if (i < text.length) {
          setTimeout(() => {
            const spans = element.querySelectorAll('span');
            if (spans[i]) spans[i].style.opacity = 1;
          }, 10);
        }
        i++;
        setTimeout(type, delay);
      } else {
        // Remove cursor após um tempo
        setTimeout(() => {
          element.innerHTML = text;
          if (callback) setTimeout(callback, 400);
        }, 600);
      }
    }
    type();
  }

  // Inicia animação
  setTimeout(() => {
    hiThere.style.opacity = 1;
    hiThere.style.transform = 'translateY(0)';
    typeEffect(hiThere, hiThereText, 65, () => {
      setTimeout(() => {
        hiThere.style.opacity = 0;
        intro.style.opacity = 1;
        intro.style.transform = 'translateY(0)';
        typeEffect(intro, introText, 65, () => {
          setTimeout(() => {
            intro.style.opacity = 0;
            mainTitleBlock.style.opacity = 1;
            // Só mostra o nav depois de tudo
            if (nav) {
              nav.classList.remove('opacity-0');
              nav.classList.add('opacity-100');
            }
          }, 900);
        });
      }, 600);
    });
  }, 400);
});

// Adicione o CSS do cursor piscando (no JS para garantir que funcione)
(function() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes blink {
      0%,100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .type-cursor { font-weight: bold; color: inherit; }
  `;
  document.head.appendChild(style);
})();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
