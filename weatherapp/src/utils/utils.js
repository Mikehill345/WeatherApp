import axios from 'axios'

export const APIKEY = 'df9d99f36141c9595b5b65b2d2f832a3'


export const kelvinToF = (k) => {
  let sum = Math.round((k - 273.15) * 9 / 5 + 32)
  return sum
}