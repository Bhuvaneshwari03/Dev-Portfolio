import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Grid animation settings
    let offsetY = 0;
    const speed = 0.5;     // Speed of the grid movement
    const gridSize = 60;   // Size of the grid squares in pixels

    const draw = () => {
        // 1. Clear with deep dark background
        ctx.fillStyle = '#050505'; 
        ctx.fillRect(0, 0, width, height);
        
        // 2. Set Grid Style
        ctx.lineWidth = 1;

        // 3. Draw Vertical Lines (Static)
        // Center the grid horizontally
        const centerX = width / 2;
        const startX = centerX % gridSize; 

        for (let x = startX; x <= width; x += gridSize) {
             // Distance from center for opacity fade (optional, keeps it clean)
            const dist = Math.abs(x - width/2);
            const opacity = Math.max(0.02, 0.08 - (dist / (width * 0.8))); // Fade edges slightly
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        // Fill left side too if centering logic leaves gaps (simple loop covers it usually, but let's just stick to simple 0 to width for robustness)
        // Actually, simple 0 loop is safer to fill screen effortlessly:
         for (let x = 0; x <= width; x += gridSize) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'; // Uniform subtle color
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }


        // 4. Draw Horizontal Lines (Moving Downwards)
        // Use modulus to loop the position
        const yOffset = offsetY % gridSize;
        
        for (let y = yOffset; y <= height; y += gridSize) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // 5. Update Physics
        offsetY += speed;
    };
    
    const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    
    let animationFrameId;
    const render = () => {
        draw();
        animationFrameId = requestAnimationFrame(render);
    };
    render();
    
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Behind all content
            background: '#050505',
        }}
    />
  );
};

export default TechBackground;
