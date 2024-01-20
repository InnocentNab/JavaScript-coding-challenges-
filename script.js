// "use strict";
// // //Java Script Fundamentals Part 1
// // //CODING CHALLENGE 1
// // const MarksWeight = 78;
// // const MarksHeight = 1.69;
// // const JohnWeight = 92;
// // const JohnHeight = 1.95;

// // let BMImark = (MarksWeight / MarksHeight) ** 2;
// // let BMIjohn = JohnWeight / JohnHeight ** 2;
// // console.log(BMImark, BMIjohn);
// // let markHigherBMI = BMImark > BMIjohn;
// // console.log(markHigherBMI);

// // const MarkWeight = 95;
// // const MarkHeight = 1.88;
// // const JohnsWeight = 85;
// // const JohnsHeight = 1.76;

// // let BmiMark = (MarkWeight / MarkHeight) ** 2;
// // console.log(BmiMark);
// // let Bmijohn = JohnsWeight / JohnsHeight ** 2;
// // console.log(BmiMark, Bmijohn);

// // let markHigherBmi = BmiMark > Bmijohn;
// // console.log(markHigherBmi);

// // //CODING CHALLENGE 2

// // if (BMImark > BMIjohn) {
// //     console.log(`Mark's BMI (${BMImark}) is higher than John's (${BMIjohn})!`);
// // } else {
// //     console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`)
// // }

// // //CODING CHALLENGE 3

// // const Dolphins = [96 + 108 + 89]/3;
// // const Koalas = [88 + 91 + 110]/3;
// // const Bonus1Dolphins = [97 + 112 + 101]/3;
// // const Bonus1Koalas = [109 + 95 + 123]/3;
// // const Bonus2Dolphins = [97 + 112 + 101]/3;
// // const Bonus2Koalas = [109 + 95 + 106]/3;
// // console.log(Dolphins, Koalas, Bonus1Dolphins, Bonus1Koalas, Bonus2Dolphins, Bonus2Koalas);

// // if (Dolphins > Koalas) {
// //     console.log("DOLPHINS WINS")
// // }else if (Koalas > Dolphins){
// //     console.log("KOALAS WINS")
// // } else if (Dolphins === Koalas){
// //     console.log("It Is a Draw Game")
// // }

// // if(Bonus1Dolphins > Bonus1Koalas && Bonus1Dolphins >= 100){
// //     console.log("DOLPHINS WINS")
// // }else if (Bonus1Koalas > Bonus1Dolphins && Bonus1Koalas >= 100){
// //     console.log("KOALAS WINS")
// // }

// // if (Bonus2Dolphins >= 100 && Bonus2Koalas >=100){
// //     console.log("BOTH TEAM WINS")
// // }else{
// //     console.log("NO TEAM WIN'S THE TROPHY");
// // }

// // // random work

// // const day = "wednesday";

// // if (day === "monday"){
// //     console.log("Plan Course Structure");
// //     console.log("Go to coding metting")
// // }else if(day === "tuesday"){
// //     console.log("prepare theory videos");
// // }else if( day=== "wednesday" || day=== "thursday"){
// //     console.log("write code examples");
// // }else if(day=== "friday"){
// //     console.log("record videos");
// // }else if(day === "saturday" || day === 'sunday'){
// //     console.log("enjot the weekend");
// // } else{
// //     console.log("Not a valid day");
// // }

// // // CODING CHALLENGE 4
// // const bill = 275;
// // const tip = bill <=300 && bill >=50 ? bill *0.15: bill * 0.2;
// // console.log(tip)
// // console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);

// // const bill2 = 40;
// // const tip2 = bill2 <=300 && bill2 >=50 ? bill2 *0.15: bill2 * 0.2;
// // console.log(tip2)
// // console.log(`The bill was ${bill2}, the tip was ${tip2} and the total value is ${bill2 + tip2}`);

// // const bill3 = 430;
// // const tip3 = bill3 <=300 && bill3 >=50 ? bill3 *0.15: bill3 * 0.2;
// // console.log(tip3)
// // console.log(`The bill was ${bill3}, the tip was ${tip3} and the total value is ${bill3 + tip3}`);

// // //Java Script Fundamentals Part 2
// // //CODING CHALLENGE 1

// // const calcAverage = (a, b, c) => (a + b + c)/3;
// // //console.log(calcAverage(a, b, c));

// // const AvgDolphins1 = calcAverage(44, 23, 71);
// // const AvgDolphins2 = calcAverage(85, 54, 41);
// // const AvgKoalas1 = calcAverage(65, 54, 49)
// // const AvgKoalas2 = calcAverage(23, 34, 27)

// // let scoreDolphins  = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49)
// // console.log(AvgDolphins1, AvgDolphins2, AvgKoalas1, AvgKoalas2);

// // function checkWinner(AvgDolphins1, AvgKoalas1) {
// //     if(AvgDolphins1 >= 2 * AvgKoalas1){
// //         console.log(`Dolphins wins (${AvgDolphins1} vs ${AvgKoalas1})`);
// //     }else if (AvgKoalas1 >= 2 * AvgDolphins1){
// //         console.log(`Koalas wins (${AvgKoalas1} vs ${AvgDolphins1})`);
// //     } else{
// //         console.log("Nobody wins");
// //     }
// // }

// //  checkWinner(scoreDolphins, scoreKoalas);

// //  console.log(winner);

// // Coding Challenge 2

// // function calcTip(bill) {
// //     if(bill <=300 && bill >= 50){
// //         return bill * 0.15;
// //     }else{
// //         return bill * 0.2;
// //     }

// // }
// // const bills = [125, 555, 44];

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length-1])];
// // console.log(tips);

// // const total =  [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(total);

// // Cooding Challenge 3

// // const Mark ={
// //     Fullname: 'Mark Miller',
// //     mass: 78,
// //     height: 1.69,
// //     CalcBmi: function(){
// //         this.bmi = this.mass / this.height **2;
// //         return this.bmi;
// //     }
// // }

// // const John ={
// //     Fullname: 'John Smith',
// //     mass: 92,
// //     height: 1.95,
// //     CalcBmi: function(){
// //         this.bmi = this.mass / this.height **2;
// //         return this.bmi;

// //     }
// // }
// // console.log(Mark.CalcBmi(), John.CalcBmi());
// // console.log(John.bmi, Mark.bmi);

// // if (Mark.bmi > John.bmi) {
// //     console.log(`${Mark.Fullname}'s BMI (${Mark.bmi}) is higher than ${John.Fullname}'s (${John.bmi})!`)
// //   } else if (John.bmi > Mark.bmi) {
// //     console.log(`${John.Fullname}'s BMI (${John.bmi}) is higher than ${Mark.Fullname}'s (${Mark.bmi})!`)
// //   }

// // Coding Challenge 4

// // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // const tips = [];
// // const totals = [];

// // for (let i = 0; i < bills.length; i++) {
// //   function calcTip(bills) {
// //     if (bills <= 300 && bills >= 50) {
// //       return bills * 0.15;
// //     } else {
// //       return bills * 0.2;
// //     }
// //   }
// // }

// //   const tip = calcTip(bills[i]);
// //   tips.push(tip);
// //   totals.push(tip + bills[i]);
// // }

// // console.log(tips, totals);

// //Developer Skills & Editor Setup
// // Coding Challenge 1

// // const data1 = [17, 21, 23];
// // const data2 = [12, 5, -5, 0, 4];

// // function printForecast(arr) {
// //     let str = "";
// //     for (let i = 0; i < arr.length; i++) {
// //         str += `${arr[i]}ºC in ${i + 1} days ... `;
// // }
// // console.log("..." + str);
// // }
// // printForecast(data1);
// // printForecast(data2);

// // Data Structures, Modern Operators and Strings

// // const game = {
// //   team1: "Bayern Munich",
// //   team2: "Borrussia Dortmund",
// //   players: [
// //     [
// //       "Neuer",
// //       "Pavard",
// //       "Martinez",
// //       "Alaba",
// //       "Davies",
// //       "Kimmich",
// //       "Goretzka",
// //       "Coman",
// //       "Muller",
// //       "Gnarby",
// //       "Lewandowski",
// //     ],
// //     [
// //       "Burki",
// //       "Schulz",
// //       "Hummels",
// //       "Akanji",
// //       "Hakimi",
// //       "Weigl",
// //       "Witsel",
// //       "Hazard",
// //       "Brandt",
// //       "Sancho",
// //       "Gotze",
// //     ],
// //   ],
// //   score: "4:0",
// //   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// //   date: "Nov 9th, 2037",
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // const [players1, players2] = game.players;
// // console.log(players1, players2);
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk);
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // const players1Final = [...players1, "Thiago", "Countinho", "Perisic"];
// // console.log(players1Final);

// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // console.log(team1, team2, draw);

// // const printGoals = function (...players) {
// //   console.log(`${players.length} goals were scored`);
// // };

// // printGoals(...game.scored);

// // team1 < team2 && console.log(`Team1 is more likely to win`);
// // team2 < team1 && console.log(`Team2 is more likely to win`);

// // for (const [i, player] of game.scored.entries()) {
// //   console.log(`Goal ${i + 1}:${player}`);
// // }

// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamstr = team === "x" ? "draw" : "victory${game[team]}";
// //   console.log(`odd of ${teamstr} ${odd}`);
// // }
// // console.log(`Odd of victory ${game.team1}: ${team1}`);
// // console.log(`Odd of Draw : ${draw}`);
// // console.log(`Odd of victory ${game.team2}: ${team2}`);

// // const scorers = {
// //   Gnabry: 1,
// //   Hummels: 1,
// //   Lewandowski: 2,
// // };
// // console.log(scorers);

// // const gameEvents = new Map([
// //   [17, "⚽ GOAL"],
// //   [36, "� Substitution"],
// //   [47, "⚽ GOAL"],
// //   [61, "� Substitution"],
// //   [64, "� Yellow card"],
// //   [69, "� Red card"],
// //   [70, "� Substitution"],
// //   [72, "� Substitution"],
// //   [76, "⚽ GOAL"],
// //   [80, "⚽ GOAL"],
// //   [92, "� Yellow card"],
// // ]);
// // const events = new Set(gameEvents.values());
// // console.log(events);

// // gameEvents.delete(64);
// // console.log(gameEvents.values());
// // // console.log(gameEvents.size);

// // console.log(
// //   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// // );

// // for (const [min, event] of gameEvents) {
// //   const half = min <= 54 ? "First" : "Second";
// //   console.log(`[${half} half] ${min}:${event}`);
// // }

// // document.body.append(document.createElement("textarea"));
// // document.body.append(document.createElement("button"));

// // document.querySelector("button").addEventListener("click", function () {
// //   const text = document.querySelector("textarea").value;
// //   const rows = text.split("\n");
// //   for (const [i, row] of rows.entries()) {
// //     const [first, second] = row.toLocaleLowerCase().trim().split("_");
// //     const output = `${first} ${second.replace(
// //       second[0],
// //       second[0].toUpperCase()
// //     )}`;
// //     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
// //   }
// // });

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === "number" &&
//       answer < this.answer.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`poll result are ${this.answers.join(", ")}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // const checkMiddleSeat = function (seat) {
// //   const s = seat.slice(-1);
// //   if (s === "B" || s === "E") {
// //     console.log("You got the middle seat");
// //   } else {
// //     console.log("You got lucky");
// //   }
// // };

// // checkMiddleSeat("11E");
// // checkMiddleSeat("23C");
// // checkMiddleSeat("15E");

// // const fixName = function (name) {
// //   const passengerLower = name.toLowerCase();
// //   const passengerCorrect =
// //     passengerLower[0].toUpperCase() + passengerLower.slice(1);
// //   console.log(passengerCorrect);
// // };

// // fixName("solomON");

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("body").addEventListener("click", function () {
      header.style.color = "blue";
    });
  });
})();

// prompt("HEllo");

// const checkDogs1 = function (dogsJulia, dogsKate) {
//   const juliaCopy = dogsJulia.slice();
//   juliaCopy.splice(0, 1);
//   juliaCopy.splice(-2);
//   const both = [...juliaCopy, ...dogsKate];
//   console.log(both);

//   both.forEach(function (dog, i) {
//     let age = dog >= 3 ? "an Adult" : "a Puppy";
//     console.log(`Dog number ${i + 1} is ${age} , and is ${dog} years old`);
//   });
// };

// const checkDogs2 = function (dogsJulia, dogsKate) {
//   const juliaCopy = dogsJulia.slice();
//   juliaCopy.splice(0, 1);
//   juliaCopy.splice(-2);
//   const both = [...juliaCopy, ...dogsKate];
//   console.log(both);

//   both.forEach(function (dog, i) {
//     let age = dog >= 3 ? "an Adult" : "a Puppy";
//     console.log(`Dog number ${i + 1} is ${age} , and is ${dog} years old`);
//   });
// };

// checkDogs1([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log("_____________");
// checkDogs2([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (age) {
//     if (age <= 2) {
//       return age * 2;
//     } else {
//       return 16 + age * 4;
//     }
//   });

//   const AdulthumanAge = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   const average =
//     AdulthumanAge.reduce(function (acc, cur) {
//       return acc + cur;
//     }, 0) / AdulthumanAge.length;
//   console.log(humanAge);
//   console.log(AdulthumanAge);
//   console.log(average);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg);
