window.onload = function() {
  Chart.defaults.global.defaultFontFamily = 'Open Sans';
  Chart.defaults.global.defaultColor = '#000000';

  var afstand = document.getElementById('afstand').getContext('2d');
  var afstandLine = new Chart(afstand, {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5, 6, 7],
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        labels: 'afgelegde afstand',
        data: calcDistance(),
      }]
    },
    options: {
      reponsive: false,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
          },
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tijd in dagen'
          }
        }],
      },
      title:{
        display: true,
        text: 'Afgelegde afstand in miljoenen kilometer'
      },
      legend:{
        display: false
      }
    }
  });

  var snelheid = document.getElementById('snelheid').getContext('2d');
  var snelheidLine = new Chart(snelheid, {
    type: 'line',
    data: {
      labels: [0,1,2,3,4,5,6,7],
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        labels: 'snelheid in m/s',
        data: calcSpeed()
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Snelheid van het ruimteschip in km/s'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
          },
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tijd in dagen'
          }
        }],
      },
      maintainAspectRatio: false,
      reponsive: false,
      legend: {
        display: false
      }
    }
  });

  var percentageVoedsel = document.getElementById('percentageVoedsel').getContext('2d');
  var percentageVoedselLine = new Chart(percentageVoedsel, {
    type: 'line',
    data: {
      labels: [0,1,2,3,4,5,6,7],
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        data: calcFood()
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Percentage voedsel op het ruimteschip'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'percentage'
          },
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tijd in dagen'
          }
        }],
      },
      maintainAspectRatio: false,
      reponsive: false,
      legend: {
        display: false
      }
    }
  });

  var waterPercentage = document.getElementById('percentageWater').getContext('2d');
  var waterPercentageLine = new Chart(waterPercentage, {
    type: 'line',
    data: {
      labels: [0,1,2,3,4,5,6,7],
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        data: calcWater()
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Percentage water op het ruimteschip'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'percentage'
          },
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tijd in dagen'
          }
        }],
      },
      maintainAspectRatio: false,
      reponsive: false,
      legend: {
        display: false
      }
    }
  });

  var afstandMars = document.getElementById('afstandMars').getContext('2d');
  var afstandMarsLine = new Chart(afstandMars, {
    type: 'line',
    data: {
      labels: [0,1,2,3,4,5,6,7],
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        data: calcDistanceToMars()
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Afstand naar mars in miljoenen km'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'afstand in miljoen km'
          },
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tijd in dagen'
          }
        }],
      },
      maintainAspectRatio: false,
      reponsive: false,
      legend: {
        display: false
      }
    }
  });

  var foodAndWater = document.getElementById('foodwaterbar').getContext('2d');
  var foodAndWaterBars = new Chart(foodAndWater, {
    type: 'bar',
    data: {
      labels: ['food', 'water'],
      datasets: [{
        backgroundColor: ['green', 'blue'],
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
        data: [50, 25]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Voedsel en Water in miljoenen kilo'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: false,
            labelString: ''
          },
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: false,
            labelString: '',
          }
        }],
      },
      maintainAspectRatio: false,
      reponsive: false,
      legend: {
        display: false
      }
    }
  });
}

var versnelling = 100;

function calcFood(){
  var food = 100;
  var foodPerDay = 0.1;
  var foodArray = [];
  for (i=0; i<8; i++){
    foodArray.push(food);
    var food = food - foodPerDay;
  }
  return foodArray;
}

function calcDistance(){
  var distanceArray = [];
  for(i=0; i<8; i++){
    var d = 3.6 * 24 * 0.5 * versnelling * squareNumber(i) /1000000;
    distanceArray.push(d);
  }
  return distanceArray;
}

function calcDistanceToMars(){
  var distanceMars = 56000000;
  var distanceMarsArray = [];
  for(i=0; i<8; i++){
    var d = 3.6 * 24 * 0.5 * versnelling * squareNumber(i);
    var dm = (distanceMars - d) / 1000000;
    distanceMarsArray.push(dm.toFixed(3));
  }
  return distanceMarsArray;
}

function calcSpeed(){
  var snelheidArray = [];
  for(i=0; i<8; i++){
    var v = 3.6 * 24 * versnelling * i;
    snelheidArray.push(v);
  }
  return snelheidArray;
}

function squareNumber(number){
  return number * number;
}

function calcFuel(){
  var fuelstep = 0.25;
  var fuelArray = [];
  for (i=0; i < 14; i++){
    fuelArray.push(100 - fuelstep * i);
  }
  return fuelArray;
}

function getNextTwoWeeks(){
  var dateArray = [];
  for (i=1; i<15; i++){
    var d = new Date(2030, 1, i);
    dateArray.push(d);
  }
  return dateArray;
}

function calcWater(){
  var water = 100;
  var waterStep = 0.25
  var waterArray = [];

  for(i=0; i<8; i++){
    waterArray.push(water);
    water = water - waterStep;
  }

  return waterArray;
}
