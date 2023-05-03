import { render, screen } from '@testing-library/react'
import NotFound from '../pages/NotFound'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<NotFound/>", () => {
    it("renders without error", () => {
        render (
            <BrowserRouter>
            (<NotFound/>)
            </BrowserRouter>
        )
        const notFoundLink = screen.getByText(/No doggos found/i)
        expect(notFoundLink).toBeInTheDocument()
    })

    it('Footer has clickable links', () => {
        // Arrange
        render (
            <BrowserRouter>
            (<NotFound/>)
            </BrowserRouter>
        )

        // Act
        // set up section action
        userEvent.click(screen.getByText("No doggos found"))
        expect(screen.getByText("No doggos found")).toBeInTheDocument()
    })
}) 