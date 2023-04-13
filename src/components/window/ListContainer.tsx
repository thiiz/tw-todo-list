import { ReactNode } from 'react';

const ListContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col gap-y-5 mt-12'>{children}</div>
  )
}

export default ListContainer