import React, { useState, useEffect, useRef } from 'react';
import FanBlade from './FanParts/FanBlade';
import Motor from './FanParts/Motor';

const FanWithRotation = ({ size = 640, isOn = false, speed = 1 }) => {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [angle, setAngle] = useState(0);

  const speedRef = useRef(currentSpeed);
  speedRef.current = currentSpeed;

  useEffect(() => {
    let frame;
    let lastTime = performance.now();

    const animate = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const target = isOn ? speed : 0;
      setCurrentSpeed(prev => prev + (target - prev) * 0.01);
      setAngle(a => a + speedRef.current * 3.6 * dt);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed, isOn]);

  const scale = size / 328;
  const scaledSize = 328 * scale;

  // Inline keyframes
  const trailStyle = `
    @keyframes trailSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;


  const trailDuration = currentSpeed > 0 ? 1 / currentSpeed : 1000;
  const trailSteps = 15;

  const width = 156;
  const height = 72;
  const motorRadius = 156 / 2;
  const motorInnerRadius = 56;
  const motorPadding = 12;

  const positions = [
    { x: -width + motorInnerRadius + motorPadding, y: -motorInnerRadius + height },
    { x: motorRadius, y: -motorRadius / 2 - motorInnerRadius * 2 },
    { x: motorRadius + width + motorPadding, y: height - motorInnerRadius },
    { x: motorRadius, y: width + motorRadius / 2 - motorPadding }]


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
      width={size}
      height={size}
      viewBox={`0 0 ${scaledSize} ${scaledSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{trailStyle}</style>

      <g transform={`scale(${scale})`}>
        <g
          style={{
            transformOrigin: 'center',
            transformBox: 'fill-box',
            animationName: 'trailSpin',
            animationDuration: `${trailDuration}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: `steps(${trailSteps}, end)`,
            opacity: `${currentSpeed * 0.0015}`,
            pointerEvents: 'none',
          }}
        >
          <g transform="translate(86, 110)">
            {renderBlades()}
          </g>
        </g>

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

        <g transform="translate(86, 110)">
          <Motor />
        </g>
      </g>
    </svg>
  );
};

export default FanWithRotation;
