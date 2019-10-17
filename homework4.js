// 3.某公司用电话传递数据（如：6234），需要加密，规则如下
// 	a.每位数字都加上5然后用除以10的余数代替（如：1789）
// 	b.将第一和第四位交换，第二和第三位交换（如：9871）
function password(i){
	if(i>0){
		var a,b,c,d,j;
		var k,n;
		j=i;
		a=j%10;
		// 个位
		a+=5;
		// 新的个位数
		a=a%10;
		j=parseInt(j/10);
		b=j%10;
		// 十位
		b+=5;
		// 新的十位数
		b=b%10;
		j=parseInt(j/10);
		c=j%10;
		// 百位
		c+=5;
		// 新的百位数
		c=c%10;
		// 千位
		j=parseInt(j/10);
		d=j%10;
		d+=5;
		d=d%10;1
		console.log("原始密文数据为"+d,c,b,a)
		k=a;
		a=d;
		d=k;
		n=c;
		c=b;
		b=n;
		console.log("交换密文数据为"+d,c,b,a)
		
	}else{
		console.log("输入的数据位数不对")
	}
}
password(6234)