## 表单脚本
如果您熟悉脚本的编写，可以通过使用JavaScript脚本语言在表单中添加脚本。除了使用我们提供的公式、条件等格式之外，您还可以通过添加脚本来实现自定义功能。

例如，为了实现对数值型金额字段自动转换成大写金额，可以在表单脚本中输入以下语句:

CoreForm.custom_numToCny = function (num) {

if(isNaN(num))return "无效数值！";

var strPrefix="";

if(num<0)strPrefix ="(负)";

num=Math.abs(num);

if(num>=1000000000000)return "无效数值！";

var strOutput = "";

var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';

var strCapDgt='零壹贰叁肆伍陆柒捌玖';

num += "00";

var intPos = num.indexOf('.');

if (intPos >= 0){

num = num.substring(0, intPos) + num.substr(intPos + 1, 2);

}

strUnit = strUnit.substr(strUnit.length - num.length);

for (var i=0; i < num.length; i++){

strOutput += strCapDgt.substr(num.substr(i,1),1) + strUnit.substr(i,1);

}

return strPrefix+strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");

};

字段脚本

CoreForm.custom_numToCny({total});
