import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Footer/>", () => {
    it("renders without error", () => {
        render (
            <BrowserRouter>
            (<Footer/>)
            </BrowserRouter>
        )
        const footerLink = screen.getByText(/This is the footer/i)
        expect(footerLink).toBeInTheDocument()
    })

    it('Footer has clickable links', () => {
        // Arrange
        render (
            <BrowserRouter>
            (<Footer/>)
            </BrowserRouter>
        )

        // Act
        // set up section action
        userEvent.click(screen.getByText("This is the footer"))
        expect(screen.getByText("This is the footer")).toBeInTheDocument()
    })
}) 