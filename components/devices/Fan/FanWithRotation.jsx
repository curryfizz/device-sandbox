
import React, { useState } from 'react';
import FanBlade from './FanParts/FanBlade';
import Motor from './FanParts/Motor';

const FanWithRotation = ({
  size = 640,
  isOn = false,
  speed = 0
}) => {

  const getRotationDuration = () => {
    if (!isOn) return 0;
    // Map 1-100 to 5s-0.5s (slower to faster)
    const minDuration = 0.5;
    const maxDuration = 5;
    return maxDuration - ((speed / 100) * (maxDuration - minDuration));
  };

  const scale = size / 328;
  const scaledSize = 328 * scale;
  const duration = getRotationDuration();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${scaledSize} ${scaledSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {isOn && <>
          <filter id="motionBlur" filterUnits="objectBoundingBox" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation=".001 .001" />
          </filter>
        </>}
      </defs>
      <g transform={`scale(${scale})`}>
        <g style={{
          animationName: "spin",
          animationPlayState: isOn ? "running" : "paused",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationFillMode: "both",
          transformOrigin: 'center',
          transformBox: 'fill-box',
          animationTimingFunction: 'linear',
          filter: isOn ? 'url(#motionBlur)' : 'none',
          opacity: isOn ? Math.max(0.4, 1 - (speed / 100)) : 1
        }}>
          <g transform="translate(86, 110)">
            {[0, 1, 2, 3].map((index) => {
              const width = 156;
              const height = 72;
              const motorRadius = 156 / 2;
              const motorInnerRadius = 56;
              const motorPadding = 12;

              const positions = [
                {
                  x: -width + motorInnerRadius + motorPadding,
                  y: -motorInnerRadius + height
                },
                {
                  x: motorRadius,
                  y: -motorRadius / 2 - motorInnerRadius * 2
                },
                {
                  x: motorRadius + width + motorPadding,
                  y: height - motorInnerRadius
                },
                {
                  x: motorRadius,
                  y: width + motorRadius / 2 - motorPadding
                }
              ];
              const pos = positions[index];
              return (
                <g
                  key={index}
                  transform={`translate(${pos.x} ${pos.y}) rotate(${index * 90} ${0} ${height / 2}) `}
                >
                  <FanBlade />
                </g>
              );
            })}
            <Motor />
          </g>
        </g>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </g>
    </svg>
  );
};

export default FanWithRotation;