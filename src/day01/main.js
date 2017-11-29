/*
题目01：判断一个数是否为偶数？
*/

//判断偶数
var even=function(data){
	if(data==0){
		console.log("我不是偶数也不是奇数");
		return;
	}
	if(data%2==0){
		console.log("我是偶数");
	}else{
		console.log("我是奇数");
	}
}

even();

/*
如何构思一个方法：
第一步：搞明白这个方法是要做什么？
第二步：梳理自己的思路，通过程序的方式表现出来自己的想法
第三步：不断的通过验证来优化自己的方法，毕竟开始考虑的条件（测试用例）肯定不周全


数据模型：
DOM（文档对象模型）-----document
BOM（浏览器对象模型）-------window

window = {
	alert: function(){
		//弹出一个窗体
	},
	console: {
		log: function(data){
			//在浏览器控制台输出data的值
		}
	}

}

//变量和对象

var MyObject = {


}

var myVars = "wfdfe";


*/

var student = {
	name: "",
	age: 0,
	log: function(){
		//window对象下的属性在调用的时候默认可以不带window
		alert("我会说哈!");
	},
	even: function(data){
		if(data==0){
			console.log("我不是偶数也不是奇数");
			return;
		}
		if(data%2==0){
			console.log("我是偶数");
		}else{
			console.log("我是奇数");
		}
	}
}

student.log();
student.even(4);








