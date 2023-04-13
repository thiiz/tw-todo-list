import { rubik } from '@/fonts'

export default function Title() {
  return (
    <h1 className={`${rubik.className}
    text-5xl
    font-semibold
    text-[#11175E]
    dark:text-[#2D70FD]
    mb-[1.5rem]
  `}>
      Daily To Do List
    </h1>
  )
}