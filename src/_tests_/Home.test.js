import { screen, render } from '@testing-library/react'
import Home from '../pages/Home'

// generic test structure
// describe('my function or component', () => {
//     it('it does the following', () => {
//         expect()
//     })
// })

// Arrange, Act, Assert

// Arrange
describe("<Home />", () => {
    it("renders the home page for the user", () => {
        render (<Home/>)
// Act - act on that condition
        const element = screen.getByText("It's Like Tinder, but for Dogs")
// Assert - what is expected
        expect(element).toBeInTheDocument()
    })
})