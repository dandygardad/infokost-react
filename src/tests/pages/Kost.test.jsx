import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import * as axios from "axios"

import App from '../../App'

jest.mock("axios")
describe('Tests for InfoKost kost page.', () => {
    test('Check places data not empty.', async () => {
        // Jest mock
        axios.post.mockResolvedValue({
            data: {
                "kost": [
                    {
                        "id": 2010,
                        "name": "Kathryn Braun",
                        "slug": "ratione-voluptates-qui",
                        "price": "551.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Autem dolor nulla facere accusamus aut possimus. Enim recusandae sit et voluptates magni et facilis. Libero sed ea necessitatibus.\nLaborum excepturi sunt et ducimus. Similique incidunt reprehenderit blanditiis consectetur ipsam incidunt ab temporibus sit. Debitis consequuntur ea quo veritatis maiores quae commodi est.",
                        "alamat": "Lizeth Stravenue",
                        "notel": "788-407-8050 x9267",
                        "long": "89.3617",
                        "lat": "-55.3691",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2011,
                        "name": "Hugh Kuphal",
                        "slug": "provident-accusamus-ad",
                        "price": "710.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Dolorem possimus occaecati distinctio expedita eveniet ipsa nesciunt. Vero quibusdam iste voluptas. Ut consequatur totam. Laboriosam praesentium vel quia consequatur doloremque fuga necessitatibus aliquam impedit. Sunt et quis similique.\nConsequuntur non mollitia. Ut itaque exercitationem officia sunt dolorem esse. Quasi beatae vero soluta explicabo est.",
                        "alamat": "Fae Corners",
                        "notel": "1-278-551-7003",
                        "long": "-83.2066",
                        "lat": "8.0523",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2012,
                        "name": "Jan Feeney",
                        "slug": "ipsa-facilis-consectetur",
                        "price": "3.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Et provident et ea deleniti sapiente aut sunt laboriosam velit. Perspiciatis cum consectetur dolorem expedita quisquam maxime. Ut fugit reiciendis recusandae velit vel quam.\nRem porro quia aut voluptatem quidem. Impedit quia aut nihil. Nobis a quibusdam voluptas. Ut non adipisci a sed officiis maxime nihil. Suscipit magnam amet. Nam similique nemo corrupti neque delectus repellendus corrupti.",
                        "alamat": "Damion Green",
                        "notel": "(639) 712-7627 x599",
                        "long": "165.5108",
                        "lat": "6.1815",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2013,
                        "name": "Bethany Pfeffer",
                        "slug": "qui-dolores-ut",
                        "price": "217.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Unde inventore odit quaerat ducimus aperiam repudiandae. Dolorem illum et. Quis quos ipsa ut cumque consequatur consequatur non labore consectetur. Rerum quia voluptatem iure rerum vel amet error.\nPlaceat et voluptates amet necessitatibus optio dolore voluptas. Perspiciatis minima voluptatem qui cum est numquam voluptatem nemo. Qui vitae laborum nam in sapiente fugit. Aut in excepturi est officiis occaecati sit sint est qui. Voluptas rem error ipsum ut. Accusamus quis eum.",
                        "alamat": "Lulu Stravenue",
                        "notel": "464-339-9594",
                        "long": "-123.0381",
                        "lat": "-28.2397",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2014,
                        "name": "Jerome Turner",
                        "slug": "incidunt-autem-et",
                        "price": "674.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Vel iusto dolores nam cumque molestiae mollitia perferendis iure a. Quo nihil et laudantium incidunt voluptas eligendi quo. Et magnam facilis et enim. Dolores voluptas veritatis.\nAssumenda est corporis culpa. Itaque quam ullam aperiam soluta ut nulla adipisci quidem consequuntur. Aut sint voluptates et.",
                        "alamat": "Jude Vista",
                        "notel": "1-707-911-2837",
                        "long": "-159.4279",
                        "lat": "-72.6060",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2015,
                        "name": "Kate Ziemann",
                        "slug": "provident-dolore-voluptatem",
                        "price": "27.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Esse saepe doloribus harum. Sunt error commodi harum praesentium ducimus. Aut qui architecto ex fugiat atque officiis voluptates reprehenderit et. Est id at eos aut temporibus dignissimos tempore. Ducimus illo quasi natus nesciunt doloremque.\nDolor tempora id quae pariatur est commodi mollitia harum. Et autem modi ipsum perspiciatis beatae. In voluptatem quis est reiciendis cupiditate nihil quia voluptas. Impedit dolorem nostrum quo maxime. Soluta qui animi incidunt.",
                        "alamat": "Reinhold Falls",
                        "notel": "711-494-6375 x6397",
                        "long": "97.6077",
                        "lat": "-73.9028",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2016,
                        "name": "Mr. Kellie McCullough",
                        "slug": "eum-ad-laudantium",
                        "price": "641.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Sit et commodi. Et ea facere dicta. Fugiat fuga unde beatae voluptatem molestias dignissimos aut sint.\nDolorem cumque impedit molestias. Ullam numquam molestiae laboriosam dolorem id quam. Aut mollitia non ut repudiandae totam velit amet sit. Laborum aspernatur ab et delectus deserunt repellat odio esse molestiae. Perspiciatis ut non ullam. Culpa iusto rerum veniam illum sit placeat.",
                        "alamat": "Kerluke Dam",
                        "notel": "833.833.0523 x61780",
                        "long": "99.0282",
                        "lat": "-29.8122",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2017,
                        "name": "Edmund Bernier",
                        "slug": "quas-fugiat-consequuntur",
                        "price": "886.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Voluptatem temporibus velit eum soluta ut excepturi deserunt aut. Ut ad doloremque laborum enim facilis reiciendis. Et recusandae dolorum. Dolorem sunt officia alias et.\nVelit labore quo modi placeat ullam dolores in facere. Harum eum est unde reiciendis vero deleniti dolorum. Qui voluptatem rem delectus. Consectetur magnam est hic labore consequatur. Quae eos excepturi a perspiciatis.",
                        "alamat": "Don Street",
                        "notel": "381-928-3195 x8081",
                        "long": "-60.9163",
                        "lat": "-55.6337",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    },
                    {
                        "id": 2018,
                        "name": "Velma Kulas PhD",
                        "slug": "quidem-minima-expedita",
                        "price": "370.00",
                        "img_depan": "https://loremflickr.com/1280/720/business",
                        "img_1": "https://loremflickr.com/1280/720/business",
                        "img_2": "https://loremflickr.com/1280/720/business",
                        "img_depan2": "https://loremflickr.com/1280/720/business",
                        "desc": "Earum saepe molestias voluptatem eaque inventore dolorem eos deleniti beatae. Sunt qui sit hic debitis. Pariatur quidem quisquam qui animi debitis nihil.\nEst sed eum consequuntur pariatur ipsam quis. Delectus animi vel optio. Dolor et deserunt voluptatem doloremque officiis earum nihil qui. Nesciunt aut veritatis aspernatur quia quia iure tempore omnis vel. Ut perferendis laborum eum voluptatibus odio voluptates.",
                        "alamat": "Boris Ways",
                        "notel": "800.361.6909",
                        "long": "-74.4934",
                        "lat": "-38.3258",
                        "link_gmaps": "https://goo.gl/maps/6JxjNGVL9VeWzWez7",
                        "createdAt": "2022-08-24T13:13:07.000Z",
                        "updatedAt": "2022-08-24T13:13:07.000Z"
                    }
                ]
            }
        })

        // Arrange (visit link by using react-router-dom)
        const urlPage = '/kost/provident-accusamus-ad'
        render(
            <MemoryRouter initialEntries={[urlPage]}>
                <App />
            </MemoryRouter>
        )

        // Assert
        expect(await screen.findByText('Hugh Kuphal')).toBeInTheDocument()
        expect(await screen.findByText('Dolorem possimus occaecati distinctio expedita eveniet ipsa nesciunt. Vero quibusdam iste voluptas. Ut consequatur totam. Laboriosam praesentium vel quia consequatur doloremque fuga necessitatibus aliquam impedit. Sunt et quis similique. Consequuntur non mollitia. Ut itaque exercitationem officia sunt dolorem esse. Quasi beatae vero soluta explicabo est.')).toBeInTheDocument()
    })
})