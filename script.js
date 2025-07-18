// 1. SMOOTH SCROLLING (REQUIRES NO CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
});

// 2. LIGHTWEIGHT PROGRESS BAR (4 LINES)
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  height:3px;background:#4A90E2;position:fixed;
  top:0;left:0;z-index:1000;width:0%;transition:width 0.05s linear;
`;
document.body.prepend(progressBar);
window.addEventListener('scroll', () => {
  progressBar.style.width = `${window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100}%`;
});

// 3. EFFICIENT PARTICLES (MINIMAL VERSION)
// Add this at the very bottom of your script
setTimeout(() => {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText = `
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    pointer-events:none;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.3 + 0.1
    });
  }
  
  function animate() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.speed;
      if (p.x > canvas.width) p.x = 0;
      
      ctx.fillStyle = '#6e8efb';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  animate();
}, 500); // Slight delay ensures DOM is ready