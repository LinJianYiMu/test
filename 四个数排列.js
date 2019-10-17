
<script type="text/javascript">
	// 9.输入4个数，按照由小到大的顺序输出  (锻炼逻辑性，难)
	// 和13题类似,先设置一个中间的转换变量i;
	var a,b,c,d,e;
	a=18;
	b=45;
	c=32;
	d=14;
	console.log("比较前");
	console.log(a,b,c,d);
	/*首先让a和b,c,d进行比较*/
	if(a>b)
	{
	e=a;
	a=b;
	b=e;
	}
	if(a>c)
	{
	e=a;
	a=c;
	c=e;
	}
	if(a>d)
	{
	e=a;
	a=d;
	d=e;
	}
	/*再让b和c,d进行比较*/
	if(b>c)
	{
	e=b;
	b=c;
	c=e;
	}
	if(b>d)
	{
	e=b;
	b=d;
	d=e;
	}
	/*再让c和d进行比较*/
	if(c>d)
	{
	e=c;
	c=d;
	d=e;
	}
	console.log("比较后");
	console.log(a,b,c,d);
</script>
