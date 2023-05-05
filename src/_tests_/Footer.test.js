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
        const footerLink = screen.getByText(/created by apple & nikki/i)
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
        userEvent.click(screen.getByText("Created by Apple & Nikki", { exact: false }))
        expect(screen.getByText("Created by Apple & Nikki")).toBeInTheDocument()
    })
}) 