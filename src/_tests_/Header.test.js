import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Header/>", () => {
    it("renders without error", () => {
        render (
            <BrowserRouter>
            (<Header/>)
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/Meet the Dogs/i)
        expect(indexLink).toBeInTheDocument()
    })

    it('Header has clickable links', () => {
        // Arrange
        render (
            <BrowserRouter>
            (<Header/>)
            </BrowserRouter>
        )

        // Act
        // set up section action
        userEvent.click(screen.getByText("Meet the Dogs"))
        expect(screen.getByText("Meet the Dogs")).toBeInTheDocument()
    })
}) 