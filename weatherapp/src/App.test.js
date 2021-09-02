import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'
import userEvent from '@testing-library/user-event'
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

describe('testing app renders header and nav', () => {

    test('app renders without errors', async () => {
        render(<RecoilRoot><App /></RecoilRoot>)
    })

    test('Checking for header rendering', async () => {
        render(<RecoilRoot><App /></RecoilRoot>)
        const modal = await screen.findAllByText(/Allow Access to Location/i)
        const allow = await screen.findByTestId(/allowBtn/i)
        await userEvent.click(allow)

        const nav = await screen.findAllByText(/Todays Weather/i)
        const Title = await screen.findAllByText(/The best weather ever/i)
    })
})