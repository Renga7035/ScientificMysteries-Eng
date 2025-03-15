// src/utils/useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);
};

export default useAOS;