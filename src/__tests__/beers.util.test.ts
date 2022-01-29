import { BeerOMeter } from "@/utils/beers.util";

describe("Beer-o-meter expects a temperature and number of people, returns number of beers", () => {
  it("serve 10 beers for 10 people at 10 degrees", () => {
    const beers = BeerOMeter(10, 10);
    expect(beers).toBe(10);
  });

  it("serve 6 beers for 2 people at 30 degrees", () => {
    const beers = BeerOMeter(30, 2);
    expect(beers).toBe(6);
  });


  it("serve 12 beers for 6 people at 23 degrees", () => {
    const beers = BeerOMeter(23, 6);
    expect(beers).toBe(12);
  });

    it("serve 12 beers for 6 people at 24 degrees", () => {
    const beers = BeerOMeter(24, 6);
    expect(beers).toBe(12);
    });

  it("serve 12 beers for 6 people at 20 degrees", () => {
    const beers = BeerOMeter(20, 6);
    expect(beers).toBe(12);
  });

    it("serve 18 beers for 6 people at 25 degrees", () => {
    const beers = BeerOMeter(25, 6);
    expect(beers).toBe(18);
  });
});
