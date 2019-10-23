//统计字符串中每个字符的个数
var str="aabccdeefffddd";
document.write(str+"<br/>");
var arr=[];
var count;
var str2="";
for(var i=0;i<str.length;i++){
	arr.push(str[i]);
}
for(var i=0;i<arr.length-1;i++){
	count=1;
	for(var j=i+1;j<arr.length;j++){
		if(arr[j]==arr[i]){
			count++;
			arr.splice(j,1);
			j--;
		}
	}
	str2+=arr[i]+count+" ";
}
document.write(str2+"<br>");
document.write(arr.join(""));