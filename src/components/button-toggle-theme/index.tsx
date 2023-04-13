'use client'

import { FaSun, FaMoon } from 'react-icons/fa';
import { useToggleTheme } from './useToggleTheme';

const ButtonToggleTheme: React.FC = () => {
  const { toggleTheme } = useToggleTheme()
  return (
    <button
      type='button'
      title='Theme toggle'
      onClick={toggleTheme}
      className='fixed
      right-5
      top-4
      flex
      items-center
      justify-center
      w-6
      h-6
      rounded-full
      text-2xl
    text-yellow-400
      '>
      <FaMoon className='absolute
      rotate-90
      scale-0
      transition-all
      duration-2000
      dark:rotate-0
      dark:scale-100' />
      <FaSun className='absolute
        antialiased
        rotate-0
        scale-100
        duration-2000
        transition-all
        dark:rotate-90
        dark:scale-0'
      />
    </button>
  )
}

export default ButtonToggleTheme