// Parallax background effect
(function() {
  const body = document.body;
  window.addEventListener('scroll', function() {
    // Only apply on large screens
    if(window.innerWidth > 800) {
      const offset = window.pageYOffset;
      body.style.backgroundPosition = `center ${offset * 0.3}px`;
    } else {
      body.style.backgroundPosition = '';
    }
  });
})();

// Fade-in animation for containers and cards
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.container, .menu-item, .order-item, .orders-table').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 150);
  });
});

// Button ripple effect
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// Add ripple CSS dynamically
(function() {
  const style = document.createElement('style');
  style.innerHTML = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      background-color: rgba(69,123,157,0.3);
      pointer-events: none;
      z-index: 2;
    }
    @keyframes ripple {
      to {
        transform: scale(2.5);
        opacity: 0;
      }
    }
    .btn {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
})();

// Subtle hover scaling for main buttons
(function() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.045)';
      btn.style.boxShadow = '0 8px 24px rgba(69,123,157,0.18)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.boxShadow = '';
    });
  });
})(); 