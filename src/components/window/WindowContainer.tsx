import { ReactNode } from "react";

const WindowContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="
    w-[95%]
    sm:w-[90%]
    md:w-[88%]
    lg:w-[94%]
    xl:w-[62.5rem]
    h-[55rem]
    sm:h-[45rem]
    rounded-3xl
    bg-slate-200
    dark:bg-black
    drop-shadow-xl
    py-[3.31rem]
    px-[1.3rem]
    sm:px-[5rem]
    lg:px-[12rem]
    xl:px-[9rem]">
      {children}
    </div>
  )
}

export default WindowContainer