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