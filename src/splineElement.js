import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineElement() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate defer by loading the scene after the component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <Spline loading="lazy" defer scene="https://prod.spline.design/8M4rPC5vFy0XKwT7/scene.splinecode" />
      )}
    </>
  );
}