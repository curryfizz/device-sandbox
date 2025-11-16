import { useState, useEffect, useRef } from 'react';
import FanBlade from './FanParts/FanBlade';
import Motor from './FanParts/Motor';

const FanWithRotation = ({ size = 640, isOn = false, speed = 1 }) => {
  const [currentSpeed, setCurrentSpeed] = useState(speed); // smoothly animate speed
  const [angle, setAngle] = useState(0); // rotation angle

  const speedRef = useRef(currentSpeed);
  speedRef.current = currentSpeed;

  // Animation loop
  useEffect(() => {
    let frame;
    let lastTime = performance.now();

    const animate = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const target = isOn ? speed : 0;
      setCurrentSpeed(prev => prev + (target - prev) * 0.01); // smooth transition
      setAngle(a => a + speedRef.current * 5 * dt); // update rotation

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed, isOn]);

  const scale = size / 328;
  const scaledSize = 328 * scale;

  // CSS keyframes for motion trail effect
  const trailStyle = `
    @keyframes trailSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  const trailDuration = currentSpeed > 0 ? 1 / currentSpeed : 1000;
  const trailSteps = 15;

  // Blade positions around motor
  const width = 156;
  const height = 72;
  const motorRadius = 156 / 2;
  const motorInnerRadius = 56;
  const motorPadding = 12;

  const positions = [
    { x: -width + motorInnerRadius + motorPadding, y: -motorInnerRadius + height },
    { x: motorRadius, y: -motorRadius / 2 - motorInnerRadius * 2 },
    { x: motorRadius + width + motorPadding, y: height - motorInnerRadius },
    { x: motorRadius, y: width + motorRadius / 2 - motorPadding }
  ];

  const renderBlades = () =>
    [0, 1, 2, 3].map((index) => {
      const pos = positions[index];
      return (
        <g key={index} transform={`translate(${pos.x} ${pos.y}) rotate(${index * 90} 0 36)`}>
          <FanBlade />
        </g>
      );
    });

  return (
    <svg
      width={scaledSize}
      height={scaledSize}
      viewBox={`0 0 ${scaledSize} ${scaledSize}`}
      fill="none"
    >
      <style>{trailStyle}</style>

      <g transform={`scale(${scale})`}>
        {/* Motion trail effect */}
        <g
          style={{
            transformOrigin: 'center',
            transformBox: 'fill-box',
            animationName: 'trailSpin',
            animationDuration: `${trailDuration}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: `steps(${trailSteps}, end)`,
            opacity: `${currentSpeed * 0.006}`,
            pointerEvents: 'none',
          }}
        >
          <g transform="translate(86, 110)">
            {renderBlades()}
          </g>
        </g>

        {/* Actual fan blades rotation */}
        <g
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'center',
            transformBox: 'fill-box',
          }}
        >
          <g transform="translate(86, 110)">
            {renderBlades()}
          </g>
        </g>

        {/* Motor at center */}
        <g transform="translate(86, 110)">
          <Motor />
        </g>
      </g>
    </svg>
  );
};

export default FanWithRotation;
