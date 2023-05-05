import { render, screen } from '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import DogEdit  from '../pages/DogEdit' 


describe("<DogEdit />", () => {
    it ("renders the edit dog form", () => {
        render(
            <BrowserRouter>
            (<DogEdit />)
            </BrowserRouter>
        )
        const nameInput = screen.getByRole("textbox", { name: /name/i})
        expect(nameInput).toBeInTheDocument()  
        
        const ageInput = screen.getByRole("textbox", { name: /age/i})
        expect(ageInput).toBeInTheDocument()   
        
        const enjoysInput = screen.getByRole("textbox", { name: /enjoys/i})
        expect(enjoysInput).toBeInTheDocument()   

        const imageInput = screen.getByRole("textbox", { name: /picture/i})
        expect(imageInput).toBeInTheDocument()   

    
    })
})