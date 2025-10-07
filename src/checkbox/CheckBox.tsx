import React from 'react'
import NestedCheckBox from './NestedCheckBox'

const data = [
  {
    id: "fruits",
    label: "Fruits",
    children: [
      { id: "apple", label: "Apple" },
      { id: "banana", label: "Banana" },
      { id: "mango", label: "Mango" },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    children: [
      { id: "carrot", label: "Carrot" },
      { id: "broccoli", label: "Broccoli" },
      { id: "spinach", label: "Spinach" },
    ],
  },
];
const CheckBox = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
        <NestedCheckBox data={data}/>
    </div>
  )
}

export default CheckBox