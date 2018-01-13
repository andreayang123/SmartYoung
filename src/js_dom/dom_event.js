/*
javascript绑定事件的三种方式：

01.通过元素属性的形式绑定事件：
<button onclick="alert(123);"></button>
02.在javascript代码中直接绑定事件：
document.getElementById("btn-clickme").onclick = function(){
		alert(123);
}
03.通过事件监听器绑定事件：
对于IE浏览器使用：attachEvent和detachEvent
对于其他浏览器：addEventListener和removeEventListener（不需要在事件名称前面加“on”）
*/


// // 01 
// var test=function(){
// 	alert(123);
// }


// 02
// window.onload=function(){
// document.getElementById("click-btn").onclick=function(){
// 		alert(123);
// }
// }

// 03

// window.onload=function(){document.getElementById("click-btn").addEventListener("click",function(){
// 	alert(123);
// })
// }

// var test=function(){
// 	alert(123);
// }
/*
window.onload=function(){
	document.getElementById("click-btn").addEventListener("click",test);
	document.getElementById("rem-btn").addEventListener("click",function(){
		document.getElementById("click-btn").removeEventListener("click",test);
	});
}
*/

/*
事件流，分为三个阶段：
01.捕获阶段
02.目标阶段
03.冒泡阶段


*/

var test01 = function(e){
	alert("找到div01了，我要发动了");
}

var test02 = function(e){
	alert("找到span01了，我要发动了");
	e.stopPropagation();
}

var test03 = function(e){
	alert("找到div02了，我要发动了");
		e.stopPropagation();
}

// window.onload=function(){
// 	document.getElementById("div01").addEventListener("click",test1,false);
// 	document.getElementById("div02").addEventListener("click",test3,false);
// 	document.getElementById("span01").addEventListener("click",test2,false);	
// }

// var test1 = function(){
// 	alert("找到div01了，我要发动了");
// }

// var test2 = function(e){
// 	alert("找到span01了，我要发动了");
// 	// e.stopPropagation();
// }

// var test3 = function(e){
// 	alert("找到div02了，我要发动了");
// 	// e.stopPropagation();
// }

// 在javascript代码中直接绑定事件：事件触发阶段默认在冒泡阶段
// window.onload=function(){
// 	document.getElementById("div01").onclick=function(){
// 	alert("找到div01了，我要发动了");
// 	}
// 	document.getElementById("div02").onclick= function(e){
// 	alert("找到div02了，我要发动了");
// 	e.stopPropagation();
// 	}
// 	document.getElementById("span01").onclick=function(e){
// 	alert("找到span01了，我要发动了");
// 	e.stopPropagation();
// 	}

// }

