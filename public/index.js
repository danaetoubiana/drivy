'use strict';

//list of cars
//useful for ALL exercises

var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//Exercice 1

function UpdatePrice ()
{
 for ( var i = 0 ; i < rentals.length ; i++)
	{
	var day = new Date();
	var id = rentals[i].carId;
	var distance = rentals[i].distance;
  var beginingDate = new Date(rentals[i].pickupDate);
	var returnDate = new Date (rentals[i].returnDate);
	var priceDay = 0;
	var priceKm = 0;

			for ( var j =0; j < cars.length ; j++)
			{
				if ( cars[j].id == id )
				{
					   priceDay = cars[j].pricePerDay;
					   priceKm = cars[j].pricePerKm;
				}
			}
		day = 1+ (returnDate - beginingDate )/(24*3600*1000) ;
		rentals[i].price = distance * priceKm + day * priceDay ;
	}
}

function getRental( id )
{
	for ( var i = 0 ; i < rentals.length ; i++)
	{
			if ( id == rentals[i].id)
			{
				return rentals[i];
			}
	}
	return ;
}

function getDate(id)
{
	var rental = getRental(id);
	var returnDate = new Date (rental.returnDate);
	var pickupDate = new Date(rental.pickupDate);
	var time = 1+ (returnDate - pickupDate )/(24*3600*1000) ;
	return time ;
}


function rental_time(time,price)
{
	var rentaltime_result=time*price;
	return rentaltime_result;
}

function rental_distance(distance, price){
	var rentaldistance_result=distance*price;
	return rentaldistance_result;
}

//Exercice 2
function decrease_rentalPrice()
{

	for(var i=0; i<rentals.length;i++){

		var time_day = getDate(rentals[i].id);
		var rental_discount;

		if(time_day==1)
		{
			rental_discount = rentals[i].price;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price (no discount) : '  + rental_discount  + ' euros');
		}

		else if(time_day>1 && time_day<=4)
		{
			rental_discount = rentals[i].price*0.90;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price Discount (-10%) : ' + rental_discount + ' euros');
			rentals[i].price= rental_discount;
		}

		else if(time_day>4 && time_day<=10) {

			rental_discount =rentals[i].price*0.70;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price Discount (-30%) : ' + rental_discount + ' euros');
			rentals[i].price= rental_discount;
		}

		else if(time_day>10) {

			rental_discount = rentals[i].price*0.50;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price Discount(-50%) : ' + rental_discount + ' euros');
			rentals[i].price= rental_discount;
		}

	}
}


/*function Decreasing ()
{
  for ( var i = 0 ; i < rentals.length ; i++)
 	{
 	var day = new Date();
  var beginingDate = new Date(rentals[i].pickupDate);
	var returnDate = new Date (rentals[i].returnDate);
  day = 1+(returnDate - beginingDate )/(24*3600*1000);
  var newpriceperday;

    if(day > 1)
    {
      newpriceperday = cars[i].pricePerDay*0.90;
    }

    if(day > 4)
    {
      newpriceperday = cars[i].pricePerDay*0.70;
    }

    if(day > 10)
    {
      newpriceperday = cars[i].pricePerDay*0.50;
    }
 	}

}
*/
/* Fonction test avec un forEach
function getPrice()
{
  rentals.forEach{
    function (EachRentals){
      cars.forEach{
        function(EachCars)
        {
          if(EachCars.id == EachRentals.carId){
            var time = new Date(EachRentals.returnDate) = new Date(EachRentals.pickupDate))/(24*3600*1000));

            var newpriceperday;

            /*if(t > 1)
            {
              newpriceperday = EachCars.pricePerDay*0.90;
            }

            var kilometers = EachRentals.distance+EachCars.pricePerKm;
            EachRentals.price = time * newpriceperday +kilometers;
          }
        }
      }
    }
  }
}
*/



//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

UpdatePrice();
//Decreasing();
decrease_rentalPrice();
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
