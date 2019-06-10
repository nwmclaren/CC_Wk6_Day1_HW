// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Murderer is declared as as Miss Scarlet at the start and not re-assigned
// confirmed as correct after running !
//

// Episode 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Murderer is declared as a constant (Professor Plum) at the start
// Error returned on running ! This is due to the function changeMurderer
// trying to change a constant string set as Professor Plum.


// Episode 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first murderer will be Mrs Peacock as the murderer is declared as
// a let in the block. The 2nd will be Professor Plum as that is declared
// as a let outside the block at the start.

// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// This will first return - The suspects are Miss Scarlet, Prof Plum,
// Col Mustard as suspectThree is changed as a let within the block.
// It will then return - Suspect three is Mrs Peacock as this was
// declared as a let outwith the aforementioned block at the start.
// confirmed as correct after running !

//
// // Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// calling changeWeapon function will change the weapon to revolver.
// verdict is set to the call of declareWeapon which returns...
// The weapon is the revolver.
// confirmed as correct after running !

//
// // Episode 6
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//calling changeMurderer will change the murderer to Mrs White. Although
// the functions are const the murderer is being changed due to being
// declared as a let at the start of the block. As such the final response
// will be... The murderer is Mrs White.
// confirmed as correct after running !


//
// // Episode 7
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//calling changeMurderer will chnage the murderer from Mr. Green to
//Col Mustard then to Miss Scarlet, then stay as Miss Scarlet and then
// back to Col Mustard.
// Got this one wrong. Can't see how it's Mr Green


// // Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// The murderer and room are changed to be Mrs. Peacock and Dining Room
// With plotTwist being called upon with the argument Dining Room the
// murderer is changed to Col Mustard. Then as unexpectedOutcome is a
// function within this and the argument passed through is Col Mustard
// the weapon is changed to Candle Stick which is retrned.
// // confirmed as correct after running ! Although on review not sure
// if my reasoning was correct

// // Episode 9
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Even though muderer is changed due to the murderer === Prof Plam
// the let murderer is only relevant to that block. As such the let
// murderer at the top of the code is the obly relevant murderer. As
// such the return will be the murderer is Professor Plum.
// confirmed as correct after running !
