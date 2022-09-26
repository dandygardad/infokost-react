import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'
import * as axios from 'axios'

jest.mock("axios")
describe("Tests for InfoKost home page", () => {
    test("Check total places data on FlatList", async() => {
        // Configure mock
        axios.post.mockResolvedValue({
            data: {
                "kost": [
                    {
                        "id": 2011,
                        "name": "Hugh Kuphal",
                        "desc": "Dolorem possimus occaecati distinctio expedita eveniet ipsa nesciunt. Vero quibusdam iste voluptas. Ut consequatur totam. Laboriosam praesentium vel quia consequatur doloremque fuga necessitatibus aliquam impedit. Sunt et quis similique.\nConsequuntur non mollitia. Ut itaque exercitationem officia sunt dolorem esse. Quasi beatae vero soluta explicabo est.",
                        "alamat": "Fae Corners",
                        "notel": "1-278-551-7003",
                        "long": "-83.2066",
                        "lat": "8.0523",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                    }, 
                ]
            },
            status: 200
        })
        
        // Arrange
        const urlPage = '/'
        render(
            <MemoryRouter initialEntries={[urlPage]}>
                <App />
            </MemoryRouter>
        )
        const FlatCard = await screen.findAllByRole('listitem')


        // Assert
        expect(FlatCard).not.toHaveLength(0)
    })
})