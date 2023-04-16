import { ReactNode } from "react";

const WindowContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="
    w-[62.5rem]
    h-[43.875rem]
    rounded-3xl
    bg-slate-200
    dark:bg-black
    drop-shadow-xl
    py-[4.31rem]
    px-[1.5rem]
    sm:px-[5rem]
    lg:px-[12rem]">
      {children}
    </div>
  )
}

export default WindowContainer