import { useEffect, useRef } from 'react';

export default function SparkleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle structure
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      fadeSpeed: number;
      color: string;
    }

    const particles: Particle[] = [];
    const maxParticles = 90;

    const createParticle = (isInitial = false): Particle => {
      const colors = [
        'rgba(212, 175, 55, ', // Gold
        'rgba(243, 229, 171, ', // Champagne
        'rgba(250, 249, 246, '  // Ivory
      ];
      const randomColorBase = colors[Math.floor(Math.random() * colors.length)];

      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + 10,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.8, // Increased side drift speed
        speedY: -(Math.random() * 1.2 + 0.4), // Higher rising speed (upward)
        alpha: Math.random() * 0.7 + 0.3,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        color: randomColorBase,
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

      let tick = 0;
      // Animation Loop
      const animate = () => {
        tick++;
        ctx.clearRect(0, 0, width, height);

        // Soft ambient dark burgundy vignettes in corners
        const grad = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, Math.max(width, height));
        grad.addColorStop(0, 'rgba(10, 1, 3, 0.4)');
        grad.addColorStop(0.8, 'rgba(28, 5, 11, 0.8)');
        grad.addColorStop(1, 'rgba(10, 1, 3, 0.95)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          // Add a waving offset to the x movement
          p.x += p.speedX + Math.sin(tick * 0.01 + i) * 0.25;
          p.y += p.speedY;

        // Subtle alpha breathing
        p.alpha += (Math.random() - 0.5) * 0.04;
        if (p.alpha <= 0.05) p.alpha = 0.05;
        if (p.alpha >= 0.8) p.alpha = 0.8;

        // Draw particle with gold glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        
        // Add subtle glow to larger particles
        if (p.size > 1.8) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#D4AF37';
        }
        
        ctx.fill();
        ctx.restore();

        // Recycle particles when they drift off screen or get too small
        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="sparkle-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
