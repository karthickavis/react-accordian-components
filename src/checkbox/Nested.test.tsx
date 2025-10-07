import { screen ,render ,fireEvent} from '@testing-library/react';

import NestedCheckbox from './NestedCheckBox';
import { describe,it,expect} from 'vitest';

const data = [
  {
    id: "fruits",
    label: "Fruits",
    children: [
      { id: "apple", label: "Apple" },
      { id: "banana", label: "Banana" },
    ],
  },
];

describe('NestedCheckBox',()=>{
    it('selects all children when parent is Checked',()=>{
        render(<NestedCheckbox data={data}/>);
        const parent=screen.getByLabelText('Fruits');

        fireEvent.click(parent);
        expect(screen.getByLabelText('Apple')).toBeChecked();
        expect(screen.getByLabelText('Banana')).toBeChecked();
    })

    it('unchecks parent when one child unchecked',()=>{
        render(<NestedCheckbox data={data}/>)
        const parent =screen.getByLabelText('Fruits');

        fireEvent.click(parent);

        fireEvent.click(screen.getByLabelText('Apple'));
        expect (parent).not.toBeChecked();
    })
})