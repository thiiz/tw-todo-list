import Image from 'next/image'
import { Inter } from 'next/font/google'
import ButtonToggleTheme from '@/components/button-toggle-theme'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className='text-black dark:text-white'>HELLO TAILWIND!</h1>
      <ButtonToggleTheme />
    </>
  )
}
