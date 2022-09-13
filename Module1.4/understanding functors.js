/* 
Functors are essentially objects we can map and apply to a function in order to generate another object of the same time.
In other words, containers that can be used with "map" functions to achieve specific results. 
*/

[1, 2, 3].map((val) => val * 2);

//Creating a Functor

class Train {
  constructor(connectedWagons = []) {
    this.wagons = ["engine", "coal", ...connectedWagons];
    this.metersSize = 8 * this.wagons.length;
  }

  map(func) {
    const [engine, coal, ...others] = this.wagons;
    return new Train(others.map(func));
  }

  beep() {
    console.log("Beeeeeeeeep! Beeeeeep!");
  }
}

const heavytrain = new Train(["lead", "lead", "people"]);
const alchemistTrain = heavytrain.map((wagon) =>
  wagon === "lead" ? "gold" : wagon
);

console.log(alchemistTrain.wagons);

//This will return a image (another train, with the same number of connections) with the wagons content.
