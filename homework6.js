// 5.* 用函数计算三个数字的大小，按从小到大顺序输出,
function order(a,b,c){
	var temp;
	if(a>b){
		temp=a;
		a=b;
		b=temp;
	}
	if(a>c){
		temp=a;
		a=c;
		c=temp;
	}
	if(b>c){
		temp=c;
		c=b;
		b=temp;
	}
	console.log(a,b,c);
}
order(4,1,9);