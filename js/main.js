


// //this is an array of objects containing hotels 
// var hotels=[
// 	{
// 		name: "Quay",
// 		rooms: 225,
// 		booked: 170,
// 		price: 350,
// 		rating: 4.3
// 	},
// 	{
// 		name: "Seaside",
// 		rooms: 155,
// 		booked: 135,
// 		price: 270,
// 		rating: 3.7
// 	},
// 	{
// 		name: "Valley",
// 		rooms: 100,
// 		booked: 60,
// 		price: 400,
// 		rating: 4.9
// 	},
// 	{
// 		name: "Gardens",
// 		rooms: 200,
// 		booked: 190,
// 		price: 250,
// 		rating: 3.9
// 	},
// 	{
// 		name: "Ranch",
// 		rooms: 125,
// 		booked: 70,
// 		price: 220,
// 		rating: 4.7
// 	}
// ];

// //creating a function that makes a copy of the original array
// function copyArray(anyArray){
// 	var copy=[];
// 	for (var i=0; i<anyArray.length; i++){
// 		copy.push(anyArray[i]);
// 	}
// 	return copy;
// }

// //creating a copy of an array of objects called hotels
// var hotelsCopy= copyArray(hotels);


// //with this function you can sort any array using any property
// function sortBy(someArray, property){
// 	someArray.sort(
// 		function(a, b){
// 			if (a[property]>b[property]){
// 				return 1;
// 			} else{
// 				return -1;
// 			}
// 		}
// 	);
// 	return someArray;
// }

// //we are testing the function by console logging the rating property of 
// //each hotel in the array
// console.log(sortBy(hotelsCopy, "rating"));

// //array methods
// var fruit =["apple", "banana", "kiwi"] 

// var fruitCopy= copyArray(fruit);

// //in class quiz
// //1 someArray[0] we use the index property
// //2 we use .pop(anyItem)
// //3 we first create a function that copies an array and thn reverses the
// 	//copy, we call the copy by assigning it a variable to hold the output
// 	// of the copied array

// //4 my attempt:
// //here i am trying to find a way to console log the length of each item in an array
// var myArray=["100", "20", "hello", "4", "5", "6"];
// i=0;
// for(i=0; i<myArray.length; i++){
// 	console.log(myArray[i].length);	
// }
// //the only way i was able to do it is by making each item into a string

// //5
// // getElementsByTagName('')
// // getElementById()
// // getElementByClassName()


// //beggining the exercises here
// //here is my array containing five items
// var myArray=["artemis", "oreo", "tuxedo", "luna", "spreaye"]
// //to console.log each item in the array we use a for loop that 
// //runs through each item
// for(i=0; i<myArray.length; i++){
// 	console.log(myArray[i]);
// };

// //here is another function that can be used to copy an array
// function copyAnything(anything){
// 	var copyCat=[];
// 	for (i=0; i<anything.length; i++){
// 		copyCat.push(anything[i]);
// 	}
// 	return copyCat;
// }
// //we console log the function to check if it works
// console.log(copyAnything(myArray));
// //we store the copied array in a variable
// var copiedArray=copyAnything(myArray);

// // we reverse the coppied array
// copiedArray.reverse();

// //we store the copied reversed array in a variable
// var myReversedCopiedArray= copyAnything(copiedArray);

// //to sort myArray alphabetically we use the sort method
// console.log(myArray.sort());

// //to create a new item in an array i am going to use .push()
// myArray.push("Anabelle");

// //creating a new number array
// myNumbers=[22, 100, 66, 99, 11];

// //attempting to sort an array in order smallest to biggest 
// myNumbers.sort(function(a,b){
// 	return a-b
// });

// //now we are going to sort from biggest to smallest
// myNumbers.sort(function (a,b){
// 	return b-a
// });

// //creating another array
// var myFavoriteThings=["coffee", "coding", "cats"];

// //i am going to add 3 new items to my myFavoriteThings
// myFavoriteThings.push("reading", "vegetarian food", "Winter");

// //now I am going to remove a string from the beggining of the array
// myFavoriteThings.shift();


//creating a new empty array
var myNewArray=[];

//OBJECT: when an item is entered in the input it will BE
//added to the empty array AND it will be addec to the screen

//linking myList to the list element
var myList=document.getElementById("myList");

//the PLAN:
//first we write a function that gets the input.value 
function addItem(){
	//right now I can add a new item with this
	var newArrayItem=myNewArray.push(input.value);
	//example wants to clear out the list with:
	//they use a for loop to add items to the list
	//the logic seems to be that there is a LI element 
	//for each item in the array
	
	var newListItem=document.createElement("li");
		//the new list item's content is an item from the array
	newListItem.innerText=input.value;
		//appending the new li to the ul
	myList.appendChild(newListItem);

	input.value="";
}


//this is the code to delete the first item
function deleteFirst(){
	//first we delete the first item in the array
	myNewArray.shift()
	//then we clear the html
	myList.innerHTML="";

	//creating a for loop for my array
	for (var i=0; i<myNewArray.length; i++){
		//creating a list item
		var newListItem=document.createElement("li");
		//the new list item's content is an item from the array
		newListItem.innerText=myNewArray[i];
		//appending the new li to the ul
		myList.appendChild(newListItem);
	}
}



function alpha(){
	//first we sort the array
	myNewArray.sort();
	myList.innerHTML="";
	for (var i=0; i<myNewArray.length; i++){
		//creating a list item
		var newListItem=document.createElement("li");
		//the new list item's content is an item from the array
		newListItem.innerText=myNewArray[i];
		//appending the new li to the ul
		myList.appendChild(newListItem);
	}
}


function deleteLast(){
	myNewArray.pop();
	myList.innerHTML="";
	for (var i=0; i<myNewArray.length; i++){
		//creating a list item
		var newListItem=document.createElement("li");
		//the new list item's content is an item from the array
		newListItem.innerText=myNewArray[i];
		//appending the new li to the ul
		myList.appendChild(newListItem);
	}
}
//then we must store the values in variables
//third we must append the LI elements to the UL element
//then we create 3 more buttons
//one button contains a function that sorts alphabetically
//the second one will delete the last item and "refresh" the list
//the third button will delete the first item and "refresh" the list

