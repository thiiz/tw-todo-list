import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

const Form: React.FC<{ setItems: Dispatch<SetStateAction<any>> }> = ({ setItems }) => {
  const { register, setValue, handleSubmit, resetField } = useForm({ defaultValues: { input: '' } })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValue(name, value)
  }

  const onSubmit = (data: { input: string }) => {
    const dateObj = Date.now();
    setItems((prev: string[]) => [...prev, { id: prev.length + 1, todo: data.input, completed: false, date: dateObj }])
    resetField("input")
  }
  return (
    <form className='relative flex items-center' onSubmit={handleSubmit(onSubmit)}>
      <input {...register('input', { required: true })}
        onChange={handleChange}
        placeholder='Add new list item'
        type='text'
        className='
      w-full
      h-[3.73rem]
      rounded-md
      pl-3.5
      pr-24
      border
      border-[#cacaca]
      dark:border-[#444444]
      bg-slate-200
      outline-[#2D70FD]
      dark:bg-black
      dark:text-slate-100
      dark:placeholder-slate-300
    '>
      </input>
      <button className='
    absolute
    right-2
    bg-[#2D70FD]
    py-[0.75rem]
    px-[1.15rem]
    rounded-lg
    text-gray-50
    font-semibold
    tracking-wide
    '
        type='submit'>Add</button>
    </form>
  )
}
export default Form