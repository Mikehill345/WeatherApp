// api key for weather

export const APIKEY = 'c2b4ff4be94265ccd71f978ee6c98815'

// conversion of kevlin to farenheight 
export const kelvinToF = (k) => {
  let sum = Math.round((k - 273.15) * 9 / 5 + 32)
  return sum
}