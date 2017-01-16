// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Blue";
// console.log(company);
// console.log("company CEO name is: "
//  +company.ceo.firstName);
// console.log(company["name"]);
// var stockPropName = "stock of company"
// company[stockPropName] = 110;
// console.log("stock:" +company[stockPropName]);

//*****better way: object literal*****
// var facebook ={
// 	name: "facebook",
// 	ceo:{
// 		firstName: "Mark",
// 		favColor: "Blue"
// 	},
// 	"stock of company":110
// };
// console.log(facebook.ceo.firstName);

// functions are first-class data types
// functions are objects

// function multiply (x,y){
// 	return x*y;
// }

// // console.log(multiply(5,4));	
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// // *****Function factory*****

// function makeMultiplier(multiplier){
// 	var myFunc = function(x){
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

//*****copy by reference*****

// var a =7;
// var b = a;
// console.log("a: " +a);
// console.log("b: " +b);

// b=5;
// console.log("after b update:");
// console.log("a: " +a);
// console.log("b: " +b);

// var a = {x:7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);


var stringArray = ["jay", "Jivi", "Kiwi", "para","Jjson","kay", "way", "jack", "Jing", "may"];

var myFunc = function (letter){
	for (var i=0;i<letter.length;i++){

		if(letter[i].charAt(0) == ('j')){
			console.log("Hello " +stringArray[i]);	
		}
		else if(letter[i].charAt(0) == ('J')){
			console.log("Hello " +stringArray[i]);	
		}
		else{
			console.log("Bye " +stringArray[i]);
		}
		
	}
}
myFunc(stringArray);

// alert("hello"[0]);

// for(var i=0;i<arrayLength;i++){

// 	if((stringArray)=="jay"){
// 		console.log("Hello " +stringArray)
// 	}
// 	else{
// 		console.log("Bye " +stringArray)
// 	}
// }