import { Dispatch, SetStateAction } from "react"
import { ItemsProps } from "."


const WindowFooter: React.FC<{ items?: ItemsProps[], setItems: Dispatch<SetStateAction<any>> }> = ({ items, setItems }) => {
  const selectedItems = items?.filter((item) => !!item.completed)
  const handleClear = () => {
    setItems(items?.filter((item) => item.completed === false))
    return
  }
  return (
    <>
      {selectedItems?.length !== 0 &&
        <div className={`flex
    justify-between
    px-5
    pt-3.5
    border-t
    border-[#cacaca]
    dark:border-[#444444]
    `}>
          <span>{selectedItems?.length} item selected</span>
          <button onClick={handleClear} className="hover:underline">Clear All</button>
        </div>
      }
    </>
  )
}
export default WindowFooter