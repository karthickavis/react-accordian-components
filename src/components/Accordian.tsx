import React,{useState} from 'react'
import AccordianItem from './AccordianItem'
import type { AccordianItemType } from '../data/accordianData'


interface AccordianProps{
  items:AccordianItemType[];
}
const Accordian:React.FC<AccordianProps>= ({items}) => {
    const [activeIndex,setActiveIndex]=useState<number | null>(null)

    const handleClick=(index:number)=>{
setActiveIndex(activeIndex === index ? null : index)
    }
  return (
    <div className='max-w-xl mx-auto mt-10 rounded-lg shadow-lg overflow-hidden'>
        {items.map((item,index)=>(
            <AccordianItem key={index} title={item.title} content={item.content} isOpen={activeIndex===index} onClick={()=>handleClick(index)}/>
        ))}
    </div>
  )
}

export default Accordian