const simulateRace = function () {
  let sign1 = '.';
  let sign2 = '>';

  let man1 = '';
  let man2 = '';

  const startRace = setInterval(() => {
    man1 += sign1.repeat(Math.random() * 5);
    man2 += sign2.repeat(Math.random() * 5);

    console.clear();

    console.log(man1);
    console.log(man2);
  }, 300)

  setTimeout(() => {
    clearInterval(startRace);
    console.log(man1.length);
    console.log(man2.length);

    if (man1.length > man2.length) {
      console.log('man1 won the race');
    }

    if (man1.length < man2.length) {
      console.log('man2 won the race');
    }
  }, 5000)
};

simulateRace();

class Racers {
  constructor(name) {
    this.name = name;
    this.position = position;
  };

  updatePosition() {
    this.position += Math.random() * 4;
  }

}