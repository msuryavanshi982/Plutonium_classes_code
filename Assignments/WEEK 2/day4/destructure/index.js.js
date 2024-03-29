const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']
const [a, ...r] = ['delhi', 'gurgaon', 'jaipur', 'pune']
console.log(r);
output: [ 'gurgaon', 'jaipur', 'pune' ]

const [b, ...s] = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
console.log(s);
output:  [ 'hyderabad', 'Shimla', 'Srinagar' ]

// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
let result = morePlaces.unshift(a);
console.log(result);
output: [ 'delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar' ]

// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
let res = (morePlaces.concat(places)).slice(2, -1);
console.log(res);
output: [ 'hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur' ]



const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
// destructure and store pincode into a variable named myPincode
const {name, age, gender, address, likes} = myData;
  const {pinCode, city} = address;
  const myPincode = "pinCode: " + pinCode;  
  console.log(myPincode);   
  // pinCode: 123455
  
  
// 5.
// destructure and store second like into a vaiable named myLike
const [data, myLike] = ["music", "movies"];
const like = "myLike: " + myLike;
console.log(myLike);
// output: myLike: movies
  