import { ReactNode } from 'react';

const ListContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex
    flex-col
    gap-y-5
    mt-8
    sm:mt-12
    overflow-y-scroll
    h-[69%]
    scrollbar-thin
    scrollbar-thumb-zinc-600
    scrollbar-track-zinc-300
    dark:scrollbar-thumb-gray-500
    dark:scrollbar-track-zinc-800
    pb-9
    '>{children}</div>
  )
}

export default ListContainer