import { atom } from 'recoil'

// state for the modal window to ask for permission for location

export const modalState = atom({
    key: 'modalState',
    default: false,
  });

  export const weatherState = atom({
    key: 'weatherState',
    default:[],
  });