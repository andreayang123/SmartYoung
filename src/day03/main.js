/**
	比较两个字符串A和B，确定A中是否包含B中所有的字符。字符串A和B中的字符都是 大写字母
*/

function stringtest(A,B){
	var upperA = A.toUpperCase();
	var upperB = B.toUpperCase();
	if(upperA.indexOf(upperB) == -1){
		return false;
	}else{
		return true;
	}
}

console.log(stringtest('abcdef','ab'));


/*
给定一个字符串，逐个翻转字符串中的每个单词。
++和--
for循环，循环语句
for(var i = 0; i<data.length; i++){
	


}
*/
function reversalStr(data){
	var dealData = "";
	for(var i = data.length-1; i>=0;i--){
		dealData = dealData.concat(data.charAt(i));
		
	}
	console.log(dealData);
}

reversalStr("ABCDEFG");


/*var test  = "ABCDE";
for(var i = 0 ; i < test.length; i++){

	console.log(test.charAt(i));

}
*/

/*
自增自减运算符
++和--
var a = 0;
var b = a++;
var c = ++a;


*/

/*var a = 0;
var b = a++;
var c = ++a;
console.log(a);*/