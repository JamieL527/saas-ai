"use client";

import { useState, useEffect } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState<boolean>(false); // Define type for mounted state

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center bg-transparent rounded-2xl dark:bg-transparent ease-in transition-all duration-300 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <RiMoonLine size={30} />
      ) : (
        <RiSunLine size={30} color="black" />
      )}
    </button>
  );
};

export default ThemeChanger;
