'use client'
import WindowContainer from './WindowContainer'
import Form from './Form'
import List from './List'
import Title from './Title'
import ListContainer from './ListContainer'
import { useEffect, useState } from 'react'
import WindowFooter from './WindowFooter'

export interface ItemsProps {
  id: number;
  todo: string;
  completed: boolean;
  date: number;
  duration?: string,
  finished?: string
}

const Window = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const savedList = localStorage.getItem("ToDo");
    if (savedList) {
      setItems(JSON.parse(savedList));
    }
  }, [])
  useEffect(() => {
    console.log(items)
    if (items.length === 0) return localStorage.removeItem('ToDo')
    items.sort((a: ItemsProps, b: ItemsProps) => a.date - b.date)
    localStorage.setItem("ToDo", JSON.stringify(items))
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
      <WindowFooter items={items} setItems={setItems} />
    </WindowContainer>
  )
}

export default Window