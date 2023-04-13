import Image from 'next/image'
import { Inter } from 'next/font/google'
import ButtonToggleTheme from '@/components/button-toggle-theme'
import Window from '@/components/window'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='
    flex
    justify-center
    items-center
    h-full
    '>
      <ButtonToggleTheme />
      <Window />
    </main>
  )
}
