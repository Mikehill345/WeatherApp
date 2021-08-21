import { atom } from 'recoil';


export const loading = atom({
    key: "loading",
    default: true,
});

export const userLat = atom({
    key: "userLocation",
    default: 0,
});

export const userLong = atom({
    key: "userLong",
    default: 0,
});