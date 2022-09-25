import data from "./peopleData.json" assert {type: 'json'};
import shop from "./prizeShop.json" assert {type: 'json'};
let itemShop = shop
let people = data;
 


// Gives item to player and deletes item from shop
export function buyItem(input,userName) {
  const index = people.findIndex((person) => {
    return person.name === userName;
  });
  if (index === -1) {
    return people;
  }
  const person = people[index];

  if(Object.values(itemShop).includes(input.name)) {
    person.other = person.other + ", " + input.name
    itemShop.splice(itemShop.indexOf(input.name),1)
  }

   return itemShop
}

export function showShop()  {
  return itemShop
}

export function createPeople(input) {
  const idExists = people.find((person) => {
    return person.name === input.name;
  }); 
  if (idExists) {
    return people; 
  }
  const newPerson = {
    name: input.name,
    score: 0,
    headgear: "None",
    other: "Infinity Gauntlet"
  };
  people.push(newPerson);
  return people;
}

export function readPeople(input) {
  let result = people;
  if (input.name) {
    result = result.filter((person) => {
      return person.name === input.name;
    });
  }
  
  return result;
}

// Gives players a new headgear
export function updateHeadgear(input,userNameField) {
  const index = people.findIndex((person) => {
    return person.name === userNameField;
  });
  if (index === -1) {
    return people;
  }
  const person = people[index];

  if(input.name)
    person.headgear = input.name


  people[index] = person;
  return people;
}

// Updates the scores of player's profile according to score gained
export function changeScores(score,user)  {
  const index = people.findIndex((person) => {
    return person.name === user;
  });

  const person = people[index];

  person.score += score
  
}


export function deletePeople(input) {
  people = people.filter((person) => {
    return person.name !== input.name;
  });
  return people;
}