// const simulateRace = function () {
//   let sign1 = '.';
//   let sign2 = '>';

//   let man1 = '';
//   let man2 = '';

//   const raceTimeout = setInterval(() => {
//     man1 += sign1.repeat(Math.random() * 5);
//     man2 += sign2.repeat(Math.random() * 5);

//     console.clear();

//     console.log(man1);
//     console.log(man2);
//   }, 300)

//   setTimeout(() => {
//     clearInterval(raceTimeout);
//     console.log(man1.length);
//     console.log(man2.length);

//     if (man1.length > man2.length) {
//       console.log('man1 won the race');
//     }

//     if (man1.length < man2.length) {
//       console.log('man2 won the race');
//     }
//   }, 5000)
// };

// simulateRace();

class Racer {
  #name;
  #distanceCovered;
  #symbol;

  constructor(name, symbol) {
    this.#name = name;
    this.#distanceCovered = 0;
    this.#symbol = symbol;
  };

  run() {
    this.#distanceCovered += Math.round(Math.random() * 4);
  };

  get name() {
    return this.#name;
  }

  get position() {
    return this.#distanceCovered;
  };

  get symbol() {
    return this.#symbol;
  };
};

const conductRace = function (raceTime, ...candidates) {
  const runLap = () => {
    candidates.forEach((candidate) => candidate.run());
    console.clear();

    candidates.forEach((candidate) => {
      console.log(candidate.symbol.repeat(candidate.position), candidate.name);
    })
  }
  const raceTimeout = setInterval(runLap, 300);

  const stopRace = () => {
    clearInterval(raceTimeout);
    
    const winner = candidates.reduce((winner, candidate) => {
      if (candidate.position > winner.position) {
        return candidate;
      }
      return winner;
    }).name;

    console.log(`${winner} won the race`);
  };
  setTimeout(stopRace, raceTime * 1000);
};

const main = function () {
  const nike = new Racer('nike', '>');
  const mike = new Racer('mikey', '>');
  const kalie = new Racer('kalie', '>');
  conductRace(5, nike, mike, kalie);
};

main();
// conductRace(person1);