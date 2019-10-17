<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
	</body>
</html>
<script type="text/javascript">
	 // 求2/1,3/2,5/3,8/5,13/8,21/13,...  前20项之和。使用while.
	 //
	 var i=2;
	 // 代表分子
	 var j=1;
	 // 代表分母
	 var index=1;
	 var sum=0;
	 var temp=0;
	while(index<=20){
		sum+=i/j;
		temp=j;
		j=i;
		i=i+temp;
		index++;
		console.log(sum);
	}
	console.log(sum);
</script>
