import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import DogShow from '../pages/DogShow'
import mockDogs from '../mockDogs'

const renderShow = () => {
    render(
    <MemoryRouter initialEntries={["/dogshow/1"]}>
        <Routes>
            <Route path="/dogshow/:id" element={<DogShow dogs={mockDogs}/>} />
            </Routes>
    </MemoryRouter>
    )
}

describe("<DogShow/>", () => {
    it("renders dog card with enjoy", () => {
        renderShow()
            expect(screen.getByText(`${mockDogs[0].name} likes ${mockDogs[0].enjoys}`,{exact: false})).toBeInTheDocument()
        })
    })
