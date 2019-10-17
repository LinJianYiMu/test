// 4.一个5位数，判断它是不是回文数。即12621是回文数，个位与万位相同，十位与千位相同。
function judge(number){
		var a,b,c,d,e,j;
		j=number;
		// 个位数;
		a=j%10;
		console.log(a);
		// 十位数;
		j=parseInt(j/10);
		b=j%10;
		console.log(b);
		// 百位数;
		j=parseInt(j/10);
		c=j%10;
		// 千位
		console.log(c);
		j=parseInt(j/10);
		d=j%10;
		// 万位
		console.log(d);
		j=parseInt(j/10);
		e=j%10;
		console.log(e);
		if (a==e && b==d) {
			
			console.log("回文数"+a,b,c,d,e);
		} else{
			console.log("非回文数");
		}
}
judge(12621);