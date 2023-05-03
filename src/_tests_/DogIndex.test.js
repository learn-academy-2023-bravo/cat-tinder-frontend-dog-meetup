import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import DogIndex from '../pages/DogIndex'
import mockDogs from '../mockDogs'

describe("<DogIndex/>", () => {
    it("renders dog cards", () => {
        render(
            <BrowserRouter>
            (<DogIndex dogs={mockDogs}/>)
            </BrowserRouter>
        )
        mockDogs.forEach(dog => {
            const dogName = screen.getByText(dog.name)
            expect(dogName).toBeInTheDocument()
        })
    })
})