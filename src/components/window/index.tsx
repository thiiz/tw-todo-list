'use client'
import WindowContainer from './WindowContainer'
import Form from './Form'
import List from './List'
import Title from './Title'
import ListContainer from './ListContainer'
import { useEffect, useState } from 'react'

export interface ItemsProps {
  id: number;
  todo: string;
  completed: boolean;
  date: number;
}

const Window = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    console.log(items)
    items.sort((a: ItemsProps, b: ItemsProps) => a.date - b.date)
  }, [items])
  return (
    <WindowContainer>
      <Title />
      <Form setItems={setItems} />
      <ListContainer>
        {items.reverse().map((item: ItemsProps,) => {
          return <List key={item.id} items={item} setItems={setItems} />
        })}
      </ListContainer>
    </WindowContainer>
  )
}

export default Window