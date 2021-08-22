import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App'
import userEvent from '@testing-library/user-event'
import CurrentTemp from './CurrentTemp'
import { RecoilRoot } from 'recoil'

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(success({
            coords: {
                latitude: 51.1,
                longitude: 45.3
            }
        })))
};
global.navigator.geolocation = mockGeolocation;

describe('testing CurrentTemp can make api calls and renders them', () => {

    test('app renders without errors', async () => {
        render(<App />)
    })

    test('shows modal pops up asking for permission', async () => {
        render(<App />)

        const modal = await screen.findAllByText(/Allow Access to Location/i)
    })

    test('can close modal and renders CurrentTemp', async () => {
        render(<App />)

        const modal = await screen.findAllByText(/Allow Access to Location/i)
        const allow = await screen.findByTestId(/allowBtn/i)
        await userEvent.click(allow)

        render(<RecoilRoot><CurrentTemp /></RecoilRoot>)
        const main = await screen.findByText(/GOOOOOOD MOOOOORRRNNNINNNGGG/i)


    })
})