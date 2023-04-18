'use client'

import { inter } from '@/fonts';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ItemsProps } from '.';
import { useDate } from './useDate';
import { FcAlarmClock, FcCalendar, FcClock, FcOvertime } from 'react-icons/fc'
import { MdTimerOff } from 'react-icons/md'

const List: React.FC<{ items: ItemsProps, setItems: Dispatch<SetStateAction<any>> }> = ({ items, setItems }) => {
  const date = new Date(items.date);
  const { formatedDate } = useDate(date)


  const handleInputChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    setItems((prev: any) =>
      prev.map((item: any) =>
        item.id === items.id ? { ...item, todo: e.target.innerText } : item
      )
    );
  };
  const handleCheckboxChange = (id: any) => {
    const today = new Date();
    const diffTime = Math.abs(date.getTime() - today.getTime());
    const diffDate = new Date(diffTime);
    const hour = today.getHours().toString().padStart(2, "0");
    const minute = today.getMinutes().toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear().toString().slice(2);

    setItems((prevItems: any) =>
      prevItems.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
            finished: `${hour}:${minute} - ${day}/${month}/${year}`,
            duration: diffDate.toISOString().substring(11, 19)
          };
        }
        return item;
      })
    )
  };

  return (
    <ul className='flex gap-y-5'>
      <li className={`
      flex
      items-center
      gap-x-3
      sm:gap-x-5
      ${items.completed ? 'opacity-70' : ''}
      `}>
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="absolute h-0 w-0 opacity-0"
            checked={items.completed}
            onChange={() => handleCheckboxChange(items.id)}
          />
          <div
            className="
           sm:h-7 sm:w-7
           h-[23px] w-[23px]
           rounded-full border-2
          border-gray-300
            dark:border-gray-600
            flex items-center
            justify-center"
          >
            {items.completed && (
              <div className="
              w-[11px] h-[11px]
              sm:w-4 sm:h-4
              rounded-full bg-teal-500"></div>
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
              onBlur={handleInputChange}
              className={
                `${inter.className}
              ${items.completed ? 'line-through text-[#8F98A8]' : 'hover:bg-slate-300 dark:hover:bg-slate-900 cursor-pointer'}
              inline-block
              w-full
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
              transition-colors
              ease-in-out
              `} >{items.todo}</span>
          </div>
          <div className={`${items.completed ? 'text-[#8F98A8]' : ''}
            text-gray-500
            text-sm
            inline-flex
            item-center
            gap-x-3
            `}>
            <div className='flex items-center flex-nowrap gap-x-1'>
              <FcCalendar />
              <span className='antialiased font-bold text-inherit'>Created: </span>
              <span className={`
            text-inherit
            font-semibold
            antialiased
            pr-3
            ${items.completed ? 'border-r' : ''}
            border-x-[#afb2b9]
            dark:border-x-[#383838]
            `
              }>{formatedDate}
              </span>
            </div>
            {items.completed &&
              <>
                <div className='flex items-center flex-nowrap gap-x-1'>
                  <FcOvertime />
                  <span className='antialiased font-bold text-inherit'>Finished: </span>
                  <span className={`
            text-inherit
            font-semibold
            antialiased
            pr-3
            border-r
            border-x-[#afb2b9]
            dark:border-x-[#383838]
            `
                  }>{items.finished}
                  </span>
                </div>
                <div className='flex items-center flex-nowrap gap-x-1'>
                  <FcAlarmClock />
                  <span className='antialiased font-bold text-inherit'>Duration: </span>
                  <span className={`
            text-inherit
            font-semibold
            antialiased
            `
                  }>{items.duration}
                  </span>
                </div>
              </>
            }
          </div>
        </div>
      </li>
    </ul >
  )
}

export default List