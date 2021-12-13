
//Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
//   Predicted verdict: Miss Scarlet
  
  ////Episode 2
//   const murderer = 'Professor Plum';
  
// //   const changeMurderer = function() {
// //    murderer = 'Mrs. Peacock';
// //   }
  
//   const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
  
// //   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   Predicted verdict: Prof Plum
  
  ////Episode 3
//   let murderer = 'Professor Plum';
  
//   const declareMurderer = function() {
//    let murderer = 'Mrs. Peacock';
//    return `The murderer is ${murderer}.`;
//   }
  
//   const firstVerdict = declareMurderer();
//   console.log('First Verdict: ', firstVerdict);
// // Predicted verdict: Mrs Peacock
  
//   const secondVerdict = `The murderer is ${murderer}.`;
//   console.log('Second Verdict: ', secondVerdict);
// Predicted verdict: Prof Plum   
  
  ////Episode 4
//   let suspectOne = 'Miss Scarlet';
//   let suspectTwo = 'Professor Plum';
//   let suspectThree = 'Mrs. Peacock';
  
//   const declareAllSuspects = function() {
//    let suspectThree = 'Colonel Mustard';
//    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
//   }
  
//   const suspects = declareAllSuspects();
//   console.log(suspects);
// //   Predicted suspects: Miss Scarlet, Prof Plum, Col Mustard
//   console.log(`Suspect three is ${suspectThree}.`);
// //   Predicted suspectThree: Mrs Peacock

  
  ////Episode 5
//   const scenario = {
//    murderer: 'Miss Scarlet',
//    room: 'Kitchen',
//    weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//    scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//    return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
//   Predicted verdict: Revolver
  
  ////Episode 6
//   let murderer = 'Colonel Mustard';
  
//   const changeMurderer = function() {
//    murderer = 'Mr. Green';
  
//    const plotTwist = function() {
//      murderer = 'Mrs. White';
//    }
  
//    plotTwist();
//   }
  
//   const declareMurderer = function () {
//    return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   Predicted verdict: Mrs White
  
  ////Episode 7
//   let murderer = 'Professor Plum';
  
//   const changeMurderer = function() {
//    murderer = 'Mr. Green';
  
//    const plotTwist = function() {
//      let murderer = 'Colonel Mustard';
  
//      const unexpectedOutcome = function() {
//        murderer = 'Miss Scarlet';
//      }
  
//      unexpectedOutcome();
//    }
  
//    plotTwist();
//   }
  
//   const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   Predicted verdict: Miss Scarlet - forgot that it would update the 2nd murderer variable, not the first.
  
  ////Episode 8
//   const scenario = {
//    murderer: 'Mrs. Peacock',
//    room: 'Conservatory',
//    weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//    scenario.murderer = 'Mrs. Peacock';
//    scenario.room = 'Dining Room';
  
//    const plotTwist = function(room) {
//      if (scenario.room === room) {
//        scenario.murderer = 'Colonel Mustard';
//      }
  
//      const unexpectedOutcome = function(murderer) {
//        if (scenario.murderer === murderer) {
//          scenario.weapon = 'Candle Stick';
//        }
//      }
  
//      unexpectedOutcome('Colonel Mustard');
//    }
  
//    plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//    return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);
//   Predicted verdict: Candlestick
  
  //// Episode 9
//   let murderer = 'Professor Plum';
  
//   if (murderer === 'Professor Plum') {
//    let murderer = 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
//   Predicted verdict: Prof Plum

// Episode 10
const scenario = {
    murderer: 'Mrs Peacock',
    room: 'Library',
    weapon: 'lead pipe'
};

const changeMurderer = function() {
       scenario.murderer = 'Mr. Green';
}

const changeWeapon = function() {
    scenario.weapon = 'revolver';
}

if (scenario.room !== 'Library'){
    changeMurderer();
}
else {
    changeWeapon();
}

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const declareWeapon = function() {
    return `The murder weapon is ${scenario.weapon}`;
}

const verdictKiller = declareMurderer();
const verdictWeapon = declareWeapon();
console.log(verdictKiller, verdictWeapon);
