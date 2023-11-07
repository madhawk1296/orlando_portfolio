'use client'

import { useEffect, useState } from "react";

export default function useMobile() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      // Function to check screen size and set state
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Example: 768px is a common breakpoint for small screens
      };
  
      // Check on initial load
      checkScreenSize();
  
      // Add event listener for window resize
      window.addEventListener('resize', checkScreenSize);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isSmallScreen
}