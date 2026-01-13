import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// A robust hook to track global mouse position normalized (-1 to +1)
const useGlobalMouse = () => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse from -1 to +1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
};

const FlowFieldParticles = ({ globalMouse }) => {
    const pointsRef = useRef();
    const { viewport } = useThree();

    // Create a precise grid of particles
    const { positions, originalPositions } = useMemo(() => {
        const countX = 100; // Optimal density
        const countY = 60;
        const positions = new Float32Array(countX * countY * 3);
        const originalPositions = new Float32Array(countX * countY * 3);
        
        // Create a plane of particles centered in the view
        const width = 40; 
        const height = 24;
        
        for (let i = 0; i < countX; i++) {
            for (let j = 0; j < countY; j++) {
                const x = (i / countX - 0.5) * width;
                const y = (j / countY - 0.5) * height;
                const z = 0;
                
                const index = (i * countY + j) * 3;
                positions[index] = x;
                positions[index + 1] = y;
                positions[index + 2] = z;

                originalPositions[index] = x;
                originalPositions[index + 1] = y;
                originalPositions[index + 2] = z;
            }
        }
        return { positions, originalPositions };
    }, []);

    useFrame(({ clock }) => {
        if (!pointsRef.current) return;
        
        const time = clock.getElapsedTime();
        const positionsArray = pointsRef.current.geometry.attributes.position.array;
        
        // Project gloal mouse Coordinates to world units roughly matching the plane size
        // This bypasses raycasting issues entirely
        const targetX = globalMouse.current.x * (viewport.width / 2); // Approximation of view width at z=0
        const targetY = globalMouse.current.y * (viewport.height / 2);

        for (let i = 0; i < positionsArray.length / 3; i++) {
            const index = i * 3;
            const ox = originalPositions[index];
            const oy = originalPositions[index + 1];
            const oz = originalPositions[index + 2];

            // 1. Organic Flow Movement (Simplex-like noise simulation)
            // We shift X and Y based on time to create a "flowing water" feel
            const noise = Math.sin(ox * 0.5 + time * 0.5) * Math.cos(oy * 0.3 + time * 0.3);
            
            // 2. Mouse Interaction Physics
            // Calculate distance between particle and mouse position
            const dx = ox - targetX;
            const dy = oy - targetY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Interaction Radius
            const radius = 6;
            let displacementX = 0;
            let displacementY = 0;
            let displacementZ = 0;

            if (dist < radius) {
                const force = (radius - dist) / radius;
                const angle = Math.atan2(dy, dx);
                
                // Repulsion effect (push away)
                const pushStrength = 2.0 * force;
                displacementX = Math.cos(angle) * pushStrength;
                displacementY = Math.sin(angle) * pushStrength;
                
                // Lift effect (bring closer to camera)
                displacementZ = force * 3; 
            }

            // Apply positions with smooth falloff
            // We combine the base "breathing" wave with the mouse interaction
            positionsArray[index] = ox + Math.sin(oy * 0.5 + time) * 0.2 + displacementX;
            positionsArray[index + 1] = oy + Math.cos(ox * 0.5 + time) * 0.2 + displacementY;
            
            // Z-axis wave for depth
            // Base slowly rolling wave + Mouse interaction lift
            positionsArray[index + 2] = oz + Math.sin(ox * 0.2 + oy * 0.2 + time) * 1.0 + displacementZ;
        }
        
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            {/* Using a sprite or generic circle for better aesthetic */}
            <pointsMaterial
                size={0.15}
                color="#808080" // Lighter grey for visibility
                transparent={true}
                opacity={0.6} // Increased opacity
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

// Graceful Fallback for non-WebGL environments
const FallbackBackground = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    // Premium dark gradient as fallback
    background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)',
  }} />
);

class WebGLBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL failed to initialize:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ParticleBackground = () => {
  // We lift the mouse tracking up here to the React component level
  const globalMouse = useGlobalMouse();
  const [canRender, setCanRender] = React.useState(true);

  // Pre-check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setCanRender(false);
        console.warn("WebGL not supported in this environment.");
      }
    } catch (e) {
      setCanRender(false);
    }
  }, []);

  if (!canRender) {
    return <FallbackBackground />;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: '#0a0a0a',
      pointerEvents: 'none'
    }}>
      <WebGLBoundary fallback={<FallbackBackground />}>
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 60 }}
          dpr={[1, 2]} 
          gl={{ 
            alpha: true, 
            antialias: true,
            powerPreference: "default",
            failIfMajorPerformanceCaveat: false 
          }}
          // Handle context creation errors explicitly
          onCreated={({ gl }) => {
            if (!gl) setCanRender(false);
          }}
        >
          <color attach="background" args={['#0a0a0a']} />
          <fog attach="fog" args={['#0a0a0a', 10, 40]} />
          
          <FlowFieldParticles globalMouse={globalMouse} />
        </Canvas>
      </WebGLBoundary>
    </div>
  );
};

export default ParticleBackground;
