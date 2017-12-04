/*创建对象的三种方式：
①构造函数:方法名称必须是大驼峰形式的
*/

function Person(name, age, job){

	console.log(this);

}

/*
这个过程包含三个过程：
1.通过Person这个构造函数创建一个Person的实例对象
2.通过var 创建一个变量
3.把刚才创建的那个Person的实例对象赋值给liming这个变量
*/


var liming = new Person();

/*
最顶层的普通方法都会挂在window对象下面
当你想创建一个普通的方法的时候你就用小驼峰，当你想创建一个对象的时候你就用大驼峰

*/
function test(){
	console.log(this);
}

test();

var test1 = new test();

/**
Object

Person
*/


function Dog(name,age){
	this.name=name;
	this.age=age;
    this.sayHello=function(){
		alert("nihao");
	}
	this.run=function(){
		console.log(this);
	}
}

var dog1=new Dog("wangcai",8);
dog1.sayHello();




function CustomizedMath(){
	this.sum=function(number1,number2){
		return number1 + number2;
	}
	this.chengfa= function(number1,number2){
		return number1* number2;
	}
	this.chufa=function(){
		return number1/number2;
	}
	this.jianfa=function(){
		return number1-number2;
	}
}

var math1=new CustomizedMath();
var sumResult = math1.sum(12,12);
console.log(math1.sum(12,12));






function Test(){
	this.max=function(a,b,c){
		if(a>b){
			if(a>c){
				return a;
			}else{
				return c;
			}
		}else{
			if(b>c){
				return b;
			}else{
				return c;
			}
		}	
	}
	this.min=function(a,b,c){
		if(a<b){
			if(a<c){
				return a;
			}else{
				return c;
			}
		}else{
			if(b<c){
				return b;
			}else{
				return c;
			}
		}
	}
}

var test1 = new Test();
console.log(test1.min(15,21,8));














