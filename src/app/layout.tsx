import Theme from '@/components/context/Theme'
import './styles/globals.css'
import { inter } from '@/fonts';
import Footer from '@/components/footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Todo List - THIZ',
  description: 'Organize your daily tasks with ease using Thiz Daily To Do List. Join now and start planning your day!',
  keywords: [
    'todo',
    'to',
    'do',
    'todo list',
    'to do list',
    'daily planner',
    'list',
    'th',
    'thiz',
    'lista de tarefas',
    'lista',
    'gerenciador de tarefas',
    'organizador de tarefas',
    'tarefas',
    'pessoais'
  ],
  authors: [{ name: 'Vitor' }, { name: 'Thiz', url: 'https://github.com/thiiz' }],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='text-[55%] sm:text-[75%] md:text-[85%] lg:text-[100%]'>
      <body className={
        `${inter.className}
      h-screen
      bg-light-p
      dark:bg-dark-p
      flex
      flex-col
        `}>
        <Theme>
          {children}
          <Footer />
        </Theme>
      </body>
    </html >
  )
}
