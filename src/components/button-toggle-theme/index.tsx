'use client'

import { useEffect, useState } from "react"
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes'
type ThemeProps = 'light' | 'dark' | 'system';
const ButtonToggleTheme: React.FC = () => {
  const { setTheme, theme } = useTheme()
  const toggleTheme = () => {
    const t: ThemeProps = theme === 'light' ? 'dark' : 'light';
    setTheme(t);
  };
  useEffect(() => {
    if (theme === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return (
    <button
      type='button'
      title='Theme toggle'
      onClick={toggleTheme}
      className='relative
      flex
      items-center
      justify-center
      w-6
      h-6
      rounded-full
      text-2xl
      '>

      <FaMoon className='absolute
      rotate-90
      scale-0
      transition-all
      duration-2000
      text-yellow-400
      dark:rotate-0
      dark:scale-100' />
      <FaSun className='absolute
        antialiased
        rotate-0
        scale-100
        duration-2000
        transition-all
      text-yellow-400
        dark:rotate-90
        dark:scale-0'
      />
    </button>
  )
}

export default ButtonToggleTheme