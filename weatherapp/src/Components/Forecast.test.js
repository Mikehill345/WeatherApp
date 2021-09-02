import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App'
import Forecast from './Forecast'
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

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn()
    })
}));

describe('testing forecast renders', () => {

    test('app renders without errors', async () => {
        render(<RecoilRoot><App /></RecoilRoot>)
    })


    test('can close modal and renders CurrentTemp', async () => {
        render(<RecoilRoot><App /></RecoilRoot>)
        const LeBox = await screen.findByTestId(/forecast/i)
        await userEvent.click(LeBox)
        render(<RecoilRoot> <Forecast /> </RecoilRoot>)

    })
})