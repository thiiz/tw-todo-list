'use client'

import { inter } from '@/fonts';
import { Dispatch, SetStateAction, useState } from 'react';
import { ItemsProps } from '.';
import { useDate } from './useDate';
import { useForm } from 'react-hook-form';

const List: React.FC<{ items: ItemsProps, setItems: Dispatch<SetStateAction<any>> }> = ({ items, setItems }) => {
  const date = new Date(items.date);
  const { formatedDate } = useDate(date)
  const { register, handleSubmit, setFocus, setValue, formState: { errors } } = useForm({ defaultValues: { input: items.todo } })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setValue(name, value)
  }

  const handleEditTodo = () => {
    setFocus('input')
    return
  }

  const handleCheckboxChange = (id: any) => {
    setItems((prevItems: any) =>
      prevItems.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    )
  };
  const onSubmit = () => {
  }
  return (
    <ul className='flex gap-y-5'>
      <li className={`
      flex
      items-center
      gap-x-5
      ${items.completed ? 'opacity-70' : ''}
      `}>
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="absolute h-0 w-0 opacity-0"
            checked={items.completed}
            onChange={() => handleCheckboxChange(items?.id)}
          />
          <div
            className="h-7 w-7
           rounded-full border-2
          border-gray-300
            dark:border-gray-600
            flex items-center
            justify-center"
          >
            {items.completed && (
              <div className=" w-4 h-4 rounded-full bg-teal-500"></div>
            )}
          </div>
        </label>
        <div className='
        flex
        flex-col
        '>
          <div className='max-w-lg'>
            <span
              contentEditable={!items.completed}
              onChange={handleInputChange}
              className={
                `${inter.className}
              ${items.completed ? 'line-through text-[#8F98A8]' : ''}
              bg-transparent
              outline-1
              outline-offset-6
              tracking-2
              font-medium
              text-2xl
              antialiased
              flex-shrink-0
              rounded-lg
              break-words
              p-1
              `} >{items.todo}</span>
          </div>
          <div className={`${items.completed ? 'text-[#8F98A8]' : ''}
            text-gray-500 text-sm`}>
            <span className='antialiased font-bold text-inherit'>Created: </span>
            <span className={`
            text-inherit
            font-semibold
            antialiased
            `
            }>{formatedDate}
            </span>
          </div>
        </div>
      </li>
    </ul >
  )
}

export default List