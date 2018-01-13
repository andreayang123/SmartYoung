/*
回调函数：回调函数就是一个通过函数指针调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数.
*/

/*function sort(callback){
	//..............
	callback(a,b);

}


sort(function(){
	console.log(arg);
});*/

var  arr = ["abc", 'bvv', 'tdd', 'mimm', 'jach'];
//arguments参数对象

arr.sort(function(a,b){
	return a-b;
});
console.log(arr);