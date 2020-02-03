const arr = [2,3,11,4,44,4,20,10]
// [44,44,11,44,-1,20,-1,-1]
let maxVal = 0;
for (let i=(arr.length-1); i=0; i--){
    console.log(i); 
    if (arr[i] > maxVal){
        maxVal = arr[i];
    } 
}
const a = [];
[2,3,11,4,44,4,20,10].map((v, i) => v > arr[i]);




function add (...arg){
	function addR(...arg2){
		return add(...arg, ...arg2);
	}
	let total = arg.reduce( (total, v) => total + v);
	addR.value = total
	return addR;
}



class Array1 {
    constructor(){
        this.length = 0;
        this.data = [];
    }
}

Array1.prototype.push = function (data) {
    this.data[this.length] = data;
    this.length++;
    return this.data;
}

Array1.prototype.pop = function(){
    let item = this.data[this.length-1];
    delete this.data[this.length-1]
    this.length--;
    return this.data;
}

Array1.prototype.insertAt = function(item, index) {
    for (let i = this.length; i >= index; i--){
        this.data[i] = this.data[i-1];
    }
    this.data[index] = item;
    this.length++
    return this.data;
}

Array1.prototype.deleteAt = function(index) {
    for (let i = index; i >= this.length-1; i++){
        this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--
    return this.data;
}


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

const createPromise = (input) => {
    return new Promise((resolve, reject) => {
       setTimeout(()=> resolve('success'), 30);
    })
}

const delay = (time) => new Promise(resolve => setTimeout(()=> resolve({delayOf: time}), time));



