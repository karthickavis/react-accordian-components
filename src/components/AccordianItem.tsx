import React from 'react'

interface AccordianItemProps{
    title:string;
    content:string;
    isOpen:boolean;
    onClick:()=>void;
}
const AccordianItem:React.FC<AccordianItemProps> = ({title,content,isOpen,onClick}) => {
  return (
    <div className='border-b bg-white'>
        <button onClick={onClick} aria-expanded={isOpen} className='w-full text-left p-4 font-medium flex justify-between items-center focus:outine-none focus:ring-blue-500'>
            {title}
            <span>{isOpen?'-':'+'}</span>
        </button>
        {isOpen&&(
            <div className='p-4 text-gray-700 bg-blue-100 transition-all'>
                {content}
            </div>
        )}
    </div>
  )
}

export default AccordianItem