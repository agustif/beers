const BeerOMeter = (temperature: number, people: number): number => {
  let beers = 0
  // Frontend will never call the API with least than 2 people, but just in case.
  if (people <= 1)
    throw Error('🍺 Not a real meeting, you have to be with at least 2 people to have a beer 🍺')
  // Beer calculations go here, if it grew it could be a switch statement instead of a bunch of if statements.
  if (temperature < 20)
    beers = people * 1
  else if (temperature >= 20 && temperature <= 24)
    beers = people * 2
  else if (temperature > 24)
    beers = people * 3
  // returns number of beers
  return beers;
}

export { BeerOMeter }
