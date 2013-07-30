function removeQuotes(string){
	if(string === operations[string]){
		return string.charAt(0);
	}
	else{
		return JSON.parse(string);
	}
};
function combineNumbers(array){
	for(i=0; i<array.length; i++){
		while((array[i+1] != undefined) && array[i].match(/\d/) && array[i+1].match(/\d/)){
			array[i] = array[i] + array[i+1];
			array.splice(i+1,1);
		}
	}
	return array;
};
function addToArray(array,item){
	if (item != undefined && item != operations[item]){
		array.push(item);
	}
};
function removeSpace(array){
	return array.filter(function(x){return x != " ";});
};
function objectify(elm){
	if(operations[elm] !== undefined){
		return elm;
	}
	else{
  		return JSON.parse(elm);
  	}
}
var operations = {
	"+": function(x,y){
		return x + y;
	},
	"-": function(x,y){
		return x - y;
	},
	"/": function(x,y){
		return x/y;
	},
	"*": function(x,y){
		return x*y;
	},
	"^": function(x,y){
		return Math.pow(x,y);
	}
}

P - parentheses
E - exponent
M - multiplication
D - division
A - addition 
S - subtraction