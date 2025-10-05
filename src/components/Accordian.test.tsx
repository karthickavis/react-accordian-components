import { render, screen ,fireEvent} from '@testing-library/react';
import { describe,it,expect } from 'vitest';
import Accordian from './Accordian';
import { accordianData } from '../data/accordianData';

describe('accrodian components ',()=>{
    it('renders all accordian title',()=>{
        render(<Accordian items={accordianData}/>);
        accordianData.map((item)=>{
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })

    it('open and close when click',()=>{
        render(<Accordian items={accordianData}/>)

        const first =screen.getByText(accordianData[0].title);

        //initial content not visible
        expect(screen.queryByText(accordianData[0].content)).toBeNull();

        //click to open
        fireEvent.click(first);
        expect(screen.getByText(accordianData[0].content)).toBeInTheDocument();

        //click to close
        fireEvent.click(first);
        expect(screen.queryByText(accordianData[0].content)).toBeNull();
    })

    it('only one section is open',()=>{
        render(<Accordian items={accordianData}/>)

        const first = screen.getByText(accordianData[0].title);
        const second= screen.getByText(accordianData[1].title);

        fireEvent.click(first);
        expect(screen.getByText(accordianData[0].content)).toBeInTheDocument();

        fireEvent.click(second);
        expect(screen.queryByText(accordianData[0].content)).toBeNull();
        expect(screen.getByText(accordianData[1].content)).toBeInTheDocument()
    })
})