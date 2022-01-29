const BeerOMeter = (temperature: number, people: number): number => {
  let beers = 0
  if (people <= 1) throw Error('🍺 Not a real meeting, you have to be with at least 2 people to have a beer 🍺')
  if (temperature < 20)
    beers = people * 1
  if (temperature >= 20 && temperature <= 24)
    beers = people * 2
  if (temperature > 24)
    beers = people * 3

  return beers;
}

export { BeerOMeter }
