// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navMobile = document.getElementById('nav-mobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
  });
  // Fecha o menu mobile ao clicar em um link
  navMobile.querySelectorAll('a').forEach((link) => {
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
        entries.forEach((entry) => {
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
      // Se for o indicador do header, rola para #sobre
      if (indicator.id === 'scroll-indicator-header') {
        const sobre = document.getElementById('sobre');
        if (sobre) sobre.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      // Caso padrão: rola para a próxima seção
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const currentSection = indicator.closest('section');
      const idx = sections.indexOf(currentSection);
      if (idx > -1 && idx < sections.length - 1) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
      }
    });

    indicator.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        // Se for o indicador do header, rola para #sobre
        if (indicator.id === 'scroll-indicator-header') {
          const sobre = document.getElementById('sobre');
          if (sobre) sobre.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        // Caso padrão: rola para a próxima seção
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
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const percent = bar.getAttribute('data-skill');
            bar.style.width = percent + '%';
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );
    skillBars.forEach((bar) => observer.observe(bar));
  }
});

// Animação de surgir nas seções ao rolar
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 20,
          behavior: 'smooth',
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
        feedback.textContent = 'Mensagem enviada com sucesso!';
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
          behavior: 'smooth',
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

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    let loaded = false;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loaded) {
            loaded = true;
            const script = document.createElement('script');
            script.src = 'js/modal-skills.js';
            document.body.appendChild(script);
            observer.unobserve(skillsSection);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(skillsSection);
  }
});

// Indicador de progresso (dots) para o formacao-container
function setupFormacaoDots() {
  const container = document.getElementById('formacao-container');
  const dotsContainer = document.getElementById('formacao-dots');

  if (!container || !dotsContainer) return;

  const items = container.querySelectorAll('.snap-center');
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const groupSize = isMobile ? 1 : 3; // Define o tamanho do grupo com base no dispositivo

  const groups = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groups.push(Array.from(items).slice(i, i + groupSize));
  }

  groups.forEach((group, index) => {
    const dot = document.createElement('button');
    dot.className = 'w-3 h-3 rounded-full bg-gray-400';
    if (index === 0) dot.classList.add('bg-gray-800'); // Primeiro dot ativo

    dot.addEventListener('click', () => {
      const firstItem = group[0];
      firstItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    dotsContainer.appendChild(dot);
  });

  container.addEventListener('scroll', () => {
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;

    groups.forEach((group, index) => {
      const firstItem = group[0];
      const lastItem = group[group.length - 1];

      const groupStart = firstItem.offsetLeft - container.offsetLeft;
      const groupEnd = lastItem.offsetLeft + lastItem.offsetWidth - container.offsetLeft;

      const dot = dotsContainer.children[index];
      if (
        scrollLeft + containerWidth / 2 >= groupStart &&
        scrollLeft + containerWidth / 2 < groupEnd
      ) {
        // Ativa o dot correspondente
        dot.classList.add('bg-gray-800');
        dot.classList.remove('bg-gray-400');
      } else {
        // Desativa os outros dots
        dot.classList.add('bg-gray-400');
        dot.classList.remove('bg-gray-800');
      }
    });
  });

  // Adiciona rolagem automática a cada 5 segundos, se o mouse não estiver sobre o container
  let currentGroupIndex = 0;
  let isMouseOver = false;

  container.addEventListener('mouseenter', () => {
    isMouseOver = true;
  });

  container.addEventListener('mouseleave', () => {
    isMouseOver = false;
  });

  setInterval(() => {
    if (!isMouseOver) {
      currentGroupIndex = (currentGroupIndex + 1) % groups.length;
      const firstItem = groups[currentGroupIndex][0];
      firstItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 5000);
}

document.addEventListener('DOMContentLoaded', setupFormacaoDots);
