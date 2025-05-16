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
if (title && subtitle && nav) {
  setTimeout(() => {
    nav.classList.remove('opacity-0');
    nav.classList.add('opacity-100');
  }, 1600); // tempo suficiente para o título e subtítulo aparecerem
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