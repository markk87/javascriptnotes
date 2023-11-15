const cars = [
  { brand: 'Mercedes', model: 'S-Class', property: 'Luxury' },
  { brand: 'Ferrari', model: '488 GTB', property: 'Sport' },
  { brand: 'Toyota', model: 'Yaris', property: 'Cheap' },
  { brand: 'Tesla', model: 'Model S', property: 'Fast' },
  // Add more cars...
];

const carContainer = document.getElementById('car-container');

function clearCarContainer() {
  while (carContainer.firstChild) {
      carContainer.removeChild(carContainer.firstChild);
  }
}

function renderCars(carsToRender) {
  carsToRender.forEach(car => {
      const card = document.createElement('div');
      card.className = 'car-card';
      card.insertAdjacentHTML('beforeend', `<p>${car.brand} ${car.model}</p><p>${car.property}</p>`);
      carContainer.appendChild(card);
  });
}

function filterCars(property) {
  clearCarContainer();
  const filteredCars = cars.filter(car => car.property === property);
  renderCars(filteredCars);
}

function showAllCars() {
  clearCarContainer();
  renderCars(cars);
}

document.getElementById('luxuryBtn').addEventListener('click', function() {
  filterCars('Luxury');
});

document.getElementById('sportBtn').addEventListener('click', function() {
  filterCars('Sport');
});

document.getElementById('cheapBtn').addEventListener('click', function() {
  filterCars('Cheap');
});

document.getElementById('fastBtn').addEventListener('click', function() {
  filterCars('Fast');
});

document.getElementById('showAllBtn').addEventListener('click', function() {
  showAllCars();
});

// Initial render
renderCars(cars);
