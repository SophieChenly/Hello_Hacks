import data from "./peopleData.json" assert {type: 'json'};
let people = data;

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
    headgear: "None"
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
  if (input.country) {
    result = result.filter((person) => {
      return person.demographics.country === input.country;
    });
  }
  return result;
}

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