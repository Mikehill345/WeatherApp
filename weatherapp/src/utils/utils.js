// api key for weather

export const APIKEY = 'df9d99f36141c9595b5b65b2d2f832a3'

// conversion of kevlin to farenheight 
export const kelvinToF = (k) => {
  let sum = Math.round((k - 273.15) * 9 / 5 + 32)
  return sum
}