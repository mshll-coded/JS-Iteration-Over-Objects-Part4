const cars = [
  {
    id: 401,
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    color: 'Blue',
  },
  {
    id: 402,
    make: 'Honda',
    model: 'Civic',
    year: 2020,
    color: 'Silver',
  },
  {
    id: 403,
    make: 'Ford',
    model: 'Mustang',
    year: 2019,
    color: 'Red',
  },
  {
    id: 404,
    make: 'Chevrolet',
    model: 'Tahoe',
    year: 2022,
    color: 'Black',
  },
  {
    id: 405,
    make: 'Nissan',
    model: 'Altima',
    year: 2020,
    color: 'White',
  },
];

/**********
Question 1:
You have a function getCarMake(car) that:
- receives a car object
- returns the make (brand) of the car
Don't forget to uncomment the console.log
===
ANSWER: Toyota
**********/
// Yousef
function getCarMake(car) {
  return car.make;
}
// console.log(getCarMake(cars[0]));

/**********
Question 2:
You have a function that:
- receives a car object
- receives a car color (string)
- returns true if the car's color matches the provided color, otherwise returns false
===
ANSWER: false
**********/
// Meshal
function isCarColorMatching(car, color) {
  return car.color === color;
}
// console.log(isCarColorMatching(cars[1], 'Blue'));

/**********
Question 3:
addCar(cars, car):
- receives an array of car objects
- receives a new car object (with id, make, model, year, and color)
- adds the new car to the array
- returns the updated array
===
ANSWER:
[
  {
    "id": 401,
    "make": "Toyota",
    "model": "Camry",
    "year": 2021,
    "color": "Blue"
  },
  {
    "id": 402,
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "color": "Silver"
  },
  {
    "id": 403,
    "make": "Ford",
    "model": "Mustang",
    "year": 2019,
    "color": "Red"
  },
  {
    "id": 404,
    "make": "Chevrolet",
    "model": "Tahoe",
    "year": 2022,
    "color": "Black"
  },
  {
    "id": 405,
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "color": "White"
  },
  {
    "id": 406,
    "make": "Kia",
    "model": "Sorento",
    "year": 2021,
    "color": "Green"
  }
]
**********/
// Y
function addCar(cars, newCar) {
  cars.push(newCar);
  return cars;
}

// const newCar = {
//   id: 406,
//   make: 'Kia',
//   model: 'Sorento',
//   year: 2021,
//   color: 'Green',
// };

// console.log(addCar(cars, newCar));

/**********
Question 4:
countCarsMadeInYear(cars, year):
- receives an array of car objects
- receives a manufacturing year (number)
- returns the number of cars made in the specified year
===
ANSWER: 2
**********/
// Y
function countCarsMadeInYear(cars, year) {
  return cars.filter((car) => car.year === year).length;
}
// console.log(countCarsMadeInYear(cars, 2020));

/**********
Question 5:
removeCarById(cars, id):
- Receives an array of car objects.
- Receives an id (number) as an argument.
- Removes the car with the matching id from the array.
- Returns the updated array.
===
/**********
ANSWER:
[
  {
    "id": 401,
    "make": "Toyota",
    "model": "Camry",
    "year": 2021,
    "color": "Blue"
  },
  {
    "id": 402,
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "color": "Silver"
  },
  {
    "id": 403,
    "make": "Ford",
    "model": "Mustang",
    "year": 2019,
    "color": "Red"
  },
  {
    "id": 405,
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "color": "White"
  }
]
**********/
// M
function removeCarById(cars, id) {
  return cars.filter((car) => car.id !== id);
}
// console.log(removeCarById(cars, 404));

/**********
Question 6:
updateCarColor(cars, id, newColor):
- Receives an array of car objects.
- Receives an id (number) and a newColor (string).
- Updates the color of the car with the given id to the new color.
- Returns the updated car object. If no car is found with the given id, return "No Car Found".
===

ANSWER:
{
  "id": 401,
  "make": "Toyota",
  "model": "Camry",
  "year": 2021,
  "color": "Yellow"
}
**********/
// Y
function updateCarColor(cars, id, newColor) {
  const updatedCars = cars.filter((car) => {
    const foundCar = car.id === id;
    if (foundCar) car.color = newColor;
    return foundCar;
  });

  return updatedCars.length === 1 ? updateCars[0] : 'No Car Found';
}

// M
function updateCarColor(cars, id, newColor) {
  const car = cars.find((car) => car.id === id);
  if (car) car.color = newColor;
  return car ?? 'No Car Found';
}

// console.log(updateCarColor(cars, 401, 'Yellow'));
