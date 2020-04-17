// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare jimu/utils esri/lang dojo/_base/lang libs/echarts/echarts dojo/i18n!dojo/cldr/nls/number".split(" "),function(q,m,r,k,t,p){var u={curved:{name:"",type:"gauge",center:["50%","60%"],startAngle:200,endAngle:-20,axisLine:{lineStyle:{color:[[.31,"#5CB4CA"],[1,"#E5E5E5"]],shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:0}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{distance:-52,textStyle:{color:"#000"}},pointer:{length:"65%",width:5},itemStyle:{opacity:.7},detail:{show:!0,
offsetCenter:[0,"68%"],textStyle:{color:"#24B5CC"}},title:{show:!1},data:[{value:0}],animationEasingUpdate:"bounceOut",animationDurationUpdate:500},vertical:{yAxis:{show:!0,offset:-10,type:"value",interval:1,scale:!1,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,showMinLabel:!0,showMaxLabel:!0,textStyle:{color:"#949494",fontStyle:"normal",fontWeight:"normal"}},splitLine:{show:!1}},xAxis:{show:!1,type:"category",data:[]},series:[{name:"",type:"bar",barWidth:30,silent:!0,animation:!1,itemStyle:{color:"#E5E5E5"},
barGap:"-100%",data:[100],z:1},{name:"",type:"bar",barWidth:30,label:{show:!0,position:"insideTopLeft",offset:[30,-15],textStyle:{}},data:[{value:40,label:{textStyle:{color:"#24B5CC",fontStyle:"normal",fontWeight:"normal",fontFamily:"Avenir Next",fontSize:12}},itemStyle:{}}],itemStyle:{color:"#24B5CC"},z:10}]},horizontal:{xAxis:{show:!0,offset:-27,type:"value",scale:!1,interval:1,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,showMinLabel:!0,showMaxLabel:!0,textStyle:{color:"#949494",fontStyle:"normal",
fontWeight:"normal",fontFamily:"Avenir Next",fontSize:12}},splitLine:{show:!1}},yAxis:{show:!1,type:"category",data:[]},series:[{name:"",type:"bar",barWidth:30,silent:!0,animation:!1,itemStyle:{color:"#E5E5E5"},barGap:"-100%",data:[100],z:1},{name:"",type:"bar",barWidth:30,label:{show:!0,position:"top",offset:[20,0],textStyle:{}},data:[{value:40,label:{textStyle:{color:"#24B5CC",fontStyle:"normal",fontWeight:"normal",fontFamily:"Avenir Next",fontSize:12}},itemStyle:{}}],itemStyle:{color:"#24B5CC"},
z:10}]}};return q([],{constructor:function(a){this.chart=a&&a.chart;this.horIconUrl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjdweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCA3IDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IkxheW91dC0yTmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkNhcmRXaWRnZXRfTGF5b3V0NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3NS4wMDAwMDAsIC0yOTcuMDAwMDAwKSIgZmlsbD0iIzkzOTM5MyI+DQogICAgICAgICAgICA8ZyBpZD0iQ2FyZDJfSG9yaXpvbnRhbEdhdWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTIuMDAwMDAwLCAxODEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Ikhvcml6b250YWxHYXVnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDY2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjguNTAwMDAwLCA0Mi41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMjguNTAwMDAwLCAtNDIuNTAwMDAwKSB0cmFuc2xhdGUoODYuMDAwMDAwLCAtODYuMDAwMDAwKSIgaWQ9Ik51bWJlcnMrVHJpYW5nbGVzIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNTAwMDAwLCAxNzAuNTQzODAzKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMi41MDAwMDAsIC0xNzAuNTQzODAzKSAiIHBvaW50cz0iNSAxNzAuNTQzODAzIC0xLjcwNTMwMjU3ZS0xMyAxNzQuMDQzODAzIC0xLjY5NjQyMDc4ZS0xMyAxNjcuMDQzODAzIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4\x3d";
this.verIconUrl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjVweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCA1IDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IkxheW91dC0yTmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkNhcmRXaWRnZXRfTGF5b3V0NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3Ni4wMDAwMDAsIC0zMjQuMDAwMDAwKSIgZmlsbD0iIzkzOTM5MyI+DQogICAgICAgICAgICA8ZyBpZD0iQ2FyZDJfSG9yaXpvbnRhbEdhdWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTIuMDAwMDAwLCAxODEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Ikhvcml6b250YWxHYXVnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDY2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjguNTAwMDAwLCA0Mi41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMjguNTAwMDAwLCAtNDIuNTAwMDAwKSB0cmFuc2xhdGUoODYuMDAwMDAwLCAtODYuMDAwMDAwKSIgaWQ9Ik51bWJlcnMrVHJpYW5nbGVzIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjYyODk1MiwgMTcwLjQ1ODY1NCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMzAuNjI4OTUyLCAtMTcwLjQ1ODY1NCkgIiBwb2ludHM9IjMzLjEyODk1MjMgMTcwLjQ1ODY1NCAyOC4xMjg5NTIzIDE3My45NTg2NTQgMjguMTI4OTUyMyAxNjYuOTU4NjU0Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4\x3d";
this.verIconUrlRTL="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjVweCIgaGVpZ2h0PSI3cHgiIHZpZXdCb3g9IjAgMCA1IDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IkxheW91dC0yTmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxLjAwMDAwMCwgLTQ0Ny4wMDAwMDApIiBmaWxsPSIjOTM5MzkzIj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIzLjUwMDAwMCwgNDUwLjUwMDAwMCkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyMy41MDAwMDAsIC00NTAuNTAwMDAwKSAiIHBvaW50cz0iMTI2IDQ1MC41IDEyMSA0NTQgMTIxIDQ0NyI+PC9wb2x5Z29uPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+";
a=k.clone(u);this.curved=a.curved;this.vertical=a.vertical;this.horizontal=a.horizontal;this.unitDistance=23;this.defultGrid={top:10,bottom:10,left:10,right:10,containLabel:!0}},getAxisZeroPosition:function(){if(!this.chart)return!1;var a;try{a=this.chart.convertToPixel({xAxisIndex:0,yAxisIndex:0},[0,0])}catch(e){}if(!a)return{};var b=a[0];a=a[1];var c=this.chart.getHeight(),d=this.chart.getWidth();return{left:b,right:d-b,top:a,bottom:c-a}},getTextWidth:function(a,b){if(!a&&0!==a)return 0;var c=(this.getTextWidth.canvas||
(this.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");c.font=b;return c.measureText(a).width},getHeightByFontSize:function(a){a=Math.round(a);if("number"!==typeof a||6>a||40<a)return 0;var b=0;a-=6;switch(!0){case 7>=a:b=1*a;break;case 8<=a&&11>=a:b=1*(a-1)+2;break;case 12<=a&&15>=a:b=1*(a-2)+4;break;case 16<=a&&19>=a:b=1*(a-3)+6;break;case 20<=a&&21>=a:b=1*(a-4)+8;break;case 22<=a&&23>=a:b=1*(a-5)+8;break;case 24<=a&&27>=a:b=1*(a-6)+10;break;case 28<=a&&31>=a:b=1*(a-7)+12;
break;case 32<=a&&34>=a:b=1*(a-8)+14}return 8+b},tryLocaleNumber:function(a){var b=a;if(r.isDefined(a)&&isFinite(a))try{var c=m.localizeNumber(a);"string"===typeof c&&(b=c)}catch(d){console.error(d)}return b+""},isStrictNaN:function(a){return"number"===typeof a&&isNaN(a)},isNumberString:function(a){if(!a)return!1;a=Number(a);return"number"!==typeof a||isNaN(a)?!1:!0},isLocaleNumberString:function(a){if(!a)return!1;if(this.isNumberString(a))return!0;a=a.replace(new RegExp("\\"+p.group,"g"),"");return this.isNumberString(a)?
!0:!1},localizeNumberForDigitSeparator:function(a,b){if(!this.isLocaleNumberString(a))return a;var c=new RegExp("\\"+p.group,"g");return a.toString().match(c)?b?a:a.toString().replace(c,""):this._localizeNumberForDigitSeparator(a,b)},_localizeNumberForDigitSeparator:function(a,b){a=m.localizeNumber(a);return!1===b?a.toString().replace(new RegExp("\\"+p.group,"g"),""):a},isAxisChart:function(a){return"column"===a.type||"bar"===a.type||"line"===a.type},isBaseChartType:function(a){return this.isAxisChart(a)||
"pie"===a.type},_getTooltipDisplayValue:function(a,b){"number"===typeof Number(a)&&(a=b?m.convertNumberToPercentage(a):this.tryLocaleNumber(a));return a},generateToolTip:function(a,b,c,d,e){var f="",f=c?'\x3cdiv class\x3d"tooltip-tr reverse"\x3e':'\x3cdiv class\x3d"tooltip-tr"\x3e';c="";a.color&&"auto"!==a.color&&(c='\x3cdiv class\x3d"colorEl marginRight5" style\x3d"background-color:'+m.encodeHTML(a.color)+'"\x3e\x3c/div\x3e');f+=c;c="";"radar"!==a.seriesType&&this._isVaildValue(a.seriesName)?c=a.seriesName:
this._isVaildValue(e)&&(c=e);f=""===c?f+("\x3cdiv\x3e"+c+"\x3c/div\x3e"):f+("\x3cdiv\x3e"+c+"\x3c/div\x3e\x3cdiv\x3e : \x3c/div\x3e");e="null";this._isNotZeroBoolean(b)?e=b:this._isVaildValue(a.value)&&(e=a.value);f+="\x3cdiv\x3e"+this._getTooltipDisplayValue(e,d)+"\x3c/div\x3e";"pie"===a.seriesType&&(a=a.percent,a=this._isVaildValue(a)?a/100:0,f+='\x3cdiv class\x3d"space-left"\x3e('+m.convertNumberToPercentage(a)+")\x3c/div\x3e");return f+"\x3c/div\x3e"},handleToolTip:function(a,b,c,d,e){var f='\x3cdiv class\x3d"tooltip-div"\x3e';
Array.isArray(a)||(a=[a]);this._isVaildValue(a[0].name)&&(f+='\x3cdiv class\x3d"tr"\x3e'+a[0].name+"\x3c/div\x3e");a.forEach(function(a){f="radar"!==a.seriesType?f+this.generateToolTip(a,b,c,d,e):f+this._handleRadarTooltip(a,c,d,e)}.bind(this));return f+="\x3c/div\x3e"},_handleRadarTooltip:function(a,b,c,d){var e="";(a.value||[]).forEach(function(f,h){e+=this.generateToolTip(a,f,b,c,d[h])}.bind(this));return e},_isVaildValue:function(a){return"%00-"===encodeURI(a)?!1:this._isNotZeroBoolean(a)},_isNotZeroBoolean:function(a){return 0===
a?!0:!!a},settingAdvanceOption:function(a,b){b.advanceOption&&("object"===typeof b.advanceOption?k.mixin(a,b.advanceOption):"function"===typeof b.advanceOption&&b.advanceOption(a));return a},settingColor:function(a,b){b.color&&b.color[0]&&(a.color=b.color);return a},settingToolTip:function(a,b){var c=b.type;a.tooltip||(a.tooltip={});c={confine:!0,trigger:"radar"===c||"pie"===c?"item":"axis",axisPointer:"pie"!==c?{type:"line"===c?"cross":"shadow",snap:!0}:{type:""}};b=b.tooltip||c;a.tooltip.confine=
b.confine?b.confine:c.confine;a.tooltip.trigger=b.trigger?b.trigger:c.trigger;a.tooltip.axisPointer=b.axisPointer?b.axisPointer:c.axisPointer;return a},settingDataZoom:function(a,b,c){return this.isAxisChart(b)&&b.series&&b.series.length?b.dataZoom&&b.dataZoom.length?a=this._settingDataZoom(b,a,c):(a.dataZoom=[],a):a},_settingDataZoom:function(a,b,c){if(!this.chart)return b;var d=this.chart.getWidth(),e=a.series[0].data.length,f=a.series.length,e=a.stack?e:e*f;if(!e||!d)return b.dataZoom=l,b;var d=
"bar"!==a.type?window.isRTL?c.left:d-c.left-b.grid.right:c.top,h=20>d/e,g=d/(20*e),g=parseFloat(100*g,10).toFixed(3),g=100<g?100:g,g=0===g?.01:g,l=[],n="bar"===a.type?"yAxisIndex":"xAxisIndex",l=a.dataZoom.map(k.hitch(this,function(a){a={type:a,start:0,show:h};a[n]=[0];a.end=g;a.showDataShadow=!1;a.realtime=!1;return a}));b.dataZoom=l;return b},mockChartDataWhenNoData:function(a){a&&Array.isArray(a.labels)&&0===a.labels.length&&a.labels.push("");a&&Array.isArray(a.series)&&0<a.series.length&&a.series.forEach(function(a){a&&
Array.isArray(a.data)&&0===a.data.length&&a.data.push(0)});return a},settingDefaultGrid:function(a){a.grid=k.clone(this.defultGrid);return a},settingGrid:function(a,b){if(!this.isAxisChart(b))return a;a.grid.containLabel=b.yAxis&&b.yAxis.show;var c=b.layout;if(!c||!c.length)return a;var d=0,e=0,f=0,h=0,g=1;c.forEach(function(a){a=a.layout&&a.layout.position;if("xAixsName"===name||"yAixsName"===name)g=.7;"t"===a?d+=g:"b"===a?e+=g:"l"===a?f+=g:"r"===a&&(h+=g)}.bind(this));var l=k.clone(this.defultGrid),
c=l.top||0,n=l.bottom||0,m=l.left||0,l=l.right||0,c=c+this.unitDistance*d,n=n+this.unitDistance*e,m=m+this.unitDistance*f,l=l+this.unitDistance*h;b.yAxis&&!b.yAxis.show&&(n+=this.unitDistance);a.grid.top=c;a.grid.bottom=n;a.grid.left=m;a.grid.right=l;a=this._settingxAxisNameGap(a,b);return a=this._settingGridForMarkName(a,b)},_settingGridForMarkName:function(a,b){var c=b.markLine,d=b.markArea,e=[],f=[];c&&c.data&&c.data.length&&c.data.forEach(function(a){this._hasEndPosName(a)&&e.push(a.name+"");
this._hasStartPosName(a)&&f.push(a.name+"")}.bind(this));d&&d.data&&d.data.length&&d.data.forEach(function(a){a=a[0];this._hasOutRightAxisName(b.type,a)&&e.push(a.name+"");this._hasOutLeftAxisName(b.type,a)&&f.push(a.name+"")}.bind(this));if(!e.length&&!f.length)return a;if("bar"===b.type)return a.grid.top+=15,a;c=this._getyAxisLabelWidth(b);d=this._getMaxLengthString(e);d=this.getTextWidth(d,"normal 12px sans-serif");window.isRTL?a.grid.left+=d:a.grid.right+=d;d=this._getMaxLengthString(f);d=this.getTextWidth(d,
"normal 12px sans-serif");d-=c;if(0>=d)return a;d+=10;window.isRTL?a.grid.right=d:a.grid.left=d;return a},_getyAxisLabelWidth:function(a){var b=a&&a.yAxis;return b&&b.show?(a=this._getMaxData(a))||0===a?this.getTextWidth(a,"normal "+(b&&b.textStyle&&b.textStyle.fontSize||12)+"px sans-serif"):0:0},_getMaxData:function(a){if((a=a.series)&&a.length)return a=a.map(function(a){if((a=a.data)&&a.length)return a.map(function(a){var b;"number"===typeof a?b=a:a&&"undefined"!==typeof a.value&&(b=a.value);return b=
parseInt(b,10)})}).map(function(a){if(a.length)return Math.max.apply(Math,a)}),a.length&&Math.max.apply(Math,a)},_getMaxLengthString:function(a){return a.sort(function(a,c){a=this.getTextWidth(a);c=this.getTextWidth(c);return c-a}.bind(this))[0]},_hasOutRightAxisName:function(a,b){var c=b.name||0===b.name;b=b.label;var d=window.isRTL?"eft":"ight";a=b&&b.position&&-1<b.position.indexOf("bar"===a?"op":d);b=b&&b.position&&-1<b.position.indexOf("inside");return c&&a&&!b},_hasOutLeftAxisName:function(a,
b){var c=b.name||0===b.name;b=b.label;var d=window.isRTL?"ight":"eft";a=b&&b.position&&-1<b.position.indexOf("bar"===a?"op":d);b=b&&b.position&&-1<b.position.indexOf("inside");return c&&a&&!b},_hasEndPosName:function(a){var b=a.label,b=!b||!b.position||"end"===b.position;return(a.name||0===a.name)&&b},_hasStartPosName:function(a){var b=a.label,b=!b||!b.position||"start"===b.position;return(a.name||0===a.name)&&b},_settingxAxisNameGap:function(a,b){if(!this.isAxisChart(b)||!a.xAxis)return a;b=this.getHeightByFontSize(b.xAxis&&
b.xAxis.textStyle&&b.xAxis.textStyle.fontSize||12);a.xAxis.nameGap=10+b;return a},calcDefaultLayout:function(a){if(this.isBaseChartType(a)){var b=a.legend,c=a.xAxis,d=null;a=a.type;"pie"!==a&&(d="bar"!==a?{name:"dataZoom",layout:{position:"t",inner:!1}}:{name:"dataZoom",layout:{position:window.isRTL?"l":"r",inner:!1}});a=null;b&&b.show&&(a={name:"legend",layout:{position:"b",inner:!1}});b=null;c&&c.show&&"undefined"!==typeof c.name&&(b={name:"xAxisName",layout:{position:"b",inner:!1}},a&&(b.layout.inner=
!0));c=[];a&&c.push(a);d&&c.push(d);b&&c.push(b);return c.length&&c}},settingRenderOption:function(a,b){if("curved"===b.shape)return a.animationThreshold=99999999,a.hoverLayerThreshold=99999,a.progressiveThreshold=99999,a;a.hoverLayerThreshold=500;a.progressiveThreshold=500;a.progressive=100;a.animationThreshold=500;return a},settingBackgroundColor:function(a,b){b.backgroundColor&&(a.backgroundColor=b.backgroundColor);return a},settingAxisChartAxis:function(a,b){var c=b.xAxis,d=b.yAxis,e={nameLocation:"center"},
f={nameLocation:"center"};"column"===b.type||"line"===b.type&&b.labels?(e.data=b.labels,e.type="category",f.type="value"):"bar"===b.type&&b.labels&&(f.data=b.labels,f.type="category",e.type="value");if(c){e.name=c.name;e.show=!!c.show;e.axisLabel||(e.axisLabel={});c.textStyle&&(e.axisLabel=c.textStyle);c.nameTextStyle&&(e.nameTextStyle=c.nameTextStyle);var h=c.format;h&&("int"===h.type?e.minInterval=1:"float"===h.type&&(e.minInterval=0),"undefined"!==typeof h.digitSeparator&&(e.axisLabel.formatter=
function(a){return this.localizeNumberForDigitSeparator(a,h.digitSeparator)}.bind(this)))}if(d){f.show=!!d.show;d.textStyle&&(f.axisLabel=d.textStyle);var g=d.format;g&&("int"===g.type?f.minInterval=1:"float"===g.type&&(f.minInterval=0),"undefined"!==typeof g.digitSeparator&&(f.axisLabel.formatter=function(a){return this.localizeNumberForDigitSeparator(a,g.digitSeparator)}.bind(this)))}window.isRTL&&(e.inverse=!0,f.position="right");a.xAxis=e;a.yAxis=f;return a},settingRadar:function(a,b){if("radar"!==
b.type)return a;a.radar={nameGap:6,radius:"70%"};a.radar.axisLabel={show:!0,formatter:function(){}};b.radarShape&&(a.radar.shape=b.radarShape);b.indicator?(this._handleRadarIndicator(b),a.radar.indicator=b.indicator):console.error("No radar indicator");return a},_handleRadarIndicator:function(a){var b=a.series[0].data,c=[];a.indicator.forEach(function(a,e){if("undefined"!==typeof a.max)return a;c=b.map(function(a){c.push(a.value[e])});var d=Math.max.apply(Math,c);a.max=d})},settingArea:function(a,
b){if("line"!==b.type||!b.area)return a;a.series=a.series.map(function(a){a.areaStyle||(a.areaStyle={});"undefined"===typeof a.areaStyle.opacity&&(a.areaStyle.opacity=.4);a.sthisoth=!0;a.smoothMonotone="x";return a});return a},_mockNegativeValue:function(a){return a&&a[0]&&a[0].data?a.map(function(a){a.data=a.data.map(function(a,b){var c=0===b%2;a&&"undefined"!==typeof a.value?(b=a.value,b=Number(b),a.value=c?-b:b):(b=Number(a),a=-(c?-b:b));return a});return a}):a},hasNegativeValue:function(a){if((a=
a.series)&&a[0]&&a[0].data)return a.some(function(a){return a.data.some(function(a){a=a&&"undefined"!==typeof a.value?a.value:a;a=Number(a);return"number"===typeof a&&0>a})})},allNegativeValue:function(a){return(a=a.series)&&a[0]&&a[0].data?a.every(function(a){return a.data.every(function(a){a=a&&a.value?a.value:a;a=Number(a);return"number"===typeof a&&0>a})}):!1},settingStack:function(a,b){b=this._stackForPercent(b);if("percent"===b.stack){var c=this.hasNegativeValue(b),d=this.allNegativeValue(b),
e=0,f=1;c&&(e=-1,d&&(f=0));"bar"===b.type?(a.xAxis.max=f,a.xAxis.min=e):(a.yAxis.max=f,a.yAxis.min=e)}b.stack&&(a.series=a.series.map(function(a){a.stack="stack";return a}));return a},_stackForPercent:function(a){if("percent"!==a.stack)return a;var b=[];a.series.forEach(function(a){k.clone(a.data).forEach(function(a,c){b[c]||(b[c]=[]);(a=a&&"undefined"!==typeof a.value?a.value:a)||(a=0);b[c].push(a)})});var c=[];b.forEach(function(a,b){c[b]||(c[b]=0);a.forEach(function(a){c[b]+=Math.abs(a)})});var d=
b.map(function(a,b){return a.map(function(a){return 0===c[b]?null:0<=a?Math.abs(a)/c[b]:-Math.abs(a)/c[b]})});a.series=a.series.map(function(a,b){var c=k.clone(a.data),c=c.map(function(a,c){if(!a)return a;"undefined"!==typeof a.value?a.value=d[c][b]:a=d[c][b];return a});a.data=c;return a});return a},settingLegend:function(a,b){var c=b.legend;if(!c)return a.legend={show:!1},a;var d={show:c.show,type:"scroll",itemHeight:11,orient:"horizontal",pageButtonPosition:"end",pageTextStyle:{color:"#939393"}};
c.textStyle&&(d.textStyle=c.textStyle);d.formatter=function(a){a=a||"";return 25<a.length?t.format.truncateText(a,140,null,"\u2026"):a};d.tooltip={show:!0,confine:!1,formatter:function(a){a=a&&a.name||"";if(!(25>=a.length))return a}};a.legend=d;return a=this._handleLegendRTL(a,b)},_handleLegendRTL:function(a,b){if(!b.legend)return a;b={};window.isRTL?(b.x="right",b.pageButtonPosition="start"):(b.x="left",b.pageButtonPosition="end");a.legend=k.mixin(a.legend,b);return a},settingScale:function(a,b){if(!b.scale)return a;
if("bar"===b.type)a.xAxis.scale=!0;else if("line"===b.type||"column"===b.type)a.yAxis.scale=!0;return a},pieChartAvoidLegendLabelOverLap:function(a,b){if("pie"!==b.type)return a;var c=b.dataLabel&&b.dataLabel.show?.75:.85;b.legend&&b.legend.show&&(c-=.12);a.series[0].radius[1]=100*c+"%";return a},settingChartLayout:function(a,b){if(!this.isBaseChartType(b))return a;(b=b.layout)&&b.length&&b.forEach(function(b){this._assigneeLayout(a,b)}.bind(this));return a},avoidAdjoiningColorSameForPie:function(a,
b){if("pie"!==b.type||!a.color||2>=a.color.length)return a;a.series&&a.series[0]&&a.series.forEach(k.hitch(this,function(b){var c=b.data.length;0===(c-1)%a.color.length&&(b=b.data[c-1],b.itemStyle||(b.itemStyle={}),b.itemStyle.color||(b.itemStyle.color=a.color[1]))}));return a},_assigneeLayout:function(a,b){var c=b.name;if("xAxisName"!==c&&"yAxisName"!==c){var d=b.layout;b=this._getOperateObjByProperty(a,c);if(!b)return a;var e=this._getSubPosition(d&&d.subPosition),f=d&&d.position,d=d&&d.inner,h=
{};"l"===f?h.left=d?this.unitDistance+this.defultGrid.left-5:this.defultGrid.left-5:"r"===f?h.right=d?this.unitDistance+this.defultGrid.right-5:this.defultGrid.right-5:"t"===f?h.top=d?this.defultGrid.top+this.unitDistance-5:this.defultGrid.top-5:"b"===f&&(h.bottom=d?this.unitDistance+this.defultGrid.bottom-5:this.defultGrid.bottom-5);k.mixin(b,h);k.mixin(b,e);this._specialLegend(b,c,f);this._specialSliderDataZoom(b,c,f);return a}},_getSubPosition:function(a){if("l"===a)return{left:this.defultGrid.left-
5,right:"auto"};if("r"===a)return{right:this.defultGrid.right-5,left:"auto"};if("t"===a)return{top:this.defultGrid.top-5,bottom:"auto"};if("b"===a)return{bottom:this.defultGrid.bottom-5,top:"auto"}},_specialLegend:function(a,b,c){"legend"===b&&(a.orient="l"===c||"r"===c?"vertical":"horizontal")},_specialSliderDataZoom:function(a,b,c){"dataZoom"===b&&("l"===c||"r"===c?(a.orient="vertical",a.width=15):(a.orient="horizontal",a.height=15))},_getOperateObjByProperty:function(a,b){if("dataZoom"===b)return this._getSliderDataZoom(a);
if("legend"===b)return a.legend},_getSliderDataZoom:function(a){var b=null;(a=a.dataZoom)&&a.length&&a.some(function(a){return"slider"===a.type?(b=a,!0):!1});return b},settingAxisSeries:function(a,b){a=this._setTypeToSeries(a,b);a.series=b.series;return a},settingMarks:function(a,b){a=this.settingMarkLine(a,b);return a=this.settingMarkArea(a,b)},settingMarkLine:function(a,b){(b=b.markLine)&&b.data&&(b.silent=!0,b.data.forEach(function(a){a.label||(a.label={show:!1,position:"end"});"undefined"!==typeof a.name&&
(a.label.show=!0,a.label.formatter=a.name)}),a.series[0].markLine=k.clone(b));return a},settingMarkArea:function(a,b){b.markArea&&(this._handleMarkAreaRTL(b.markArea),b.markArea.silent=!0,a.series[0].markArea=b.markArea);return a},_handleMarkAreaRTL:function(a){window.isRTL&&a&&a.data&&a.data.length&&a.data.forEach(function(a){var b=(a=a&&a[0]&&a[0].label)&&a.position;b&&("left"===b?b="right":"right"===b?b="left":"insideLeft"===b?b="insideRight":"insideRight"===b&&(b="insideLeft"),a.position=b)})},
_settingSeriesDataLabel:function(a,b){b=b.dataLabel;if(!b)return a;var c={};c.show=!!b.show;"undefined"!==typeof b.textStyle&&(c.textStyle=b.textStyle);a.series.forEach(function(a){a.label=c});return a},settingRadarSeries:function(a,b){a=this._setTypeToSeries(a,b);a.series=b.series.map(k.hitch(this,function(a){a.data=this._handleSeriesDataForPieLikeType(a,b);return a=this._settingRaderSerie(a,b)}));return a},_settingRaderSerie:function(a,b){if("radar"!==a.type)return a;var c=b.indicator.map(function(a){return a.name});
a.tooltip={};a.tooltip.formatter=function(a){return this.handleToolTip(a,null,!1,!1,c)};return a},settingFunnelSeries:function(a,b){a=this._setTypeToSeries(a,b);a.series=b.series.map(k.hitch(this,function(a){a.data=this._handleSeriesDataForPieLikeType(a,b);return a=this._settingFunnelSerie(a,b)}));return a},_settingFunnelSerie:function(a,b){if("funnel"!==a.type)return a;a.minSize="0%";a.maxSize="100%";a.min=b.min.value;a.max=b.max.value;a.sort=b.funnelSort||"descending";return a},settingPieSeries:function(a,
b){a=this._setTypeToSeries(a,b);a.series=b.series.map(k.hitch(this,function(a){a.data=this._handleSeriesDataForPieLikeType(a,b);return a=this._settingPieSerie(a,b)}));return a},_settingPieSerie:function(a,b){if("pie"!==a.type)return a;var c=b.dataLabel&&b.dataLabel.show;a.selectedMode="single";a.selectedOffset=10;a.hoverOffset=5;a.radius=[0,"70%"];a.labelLine={show:!0,length:5,length2:5};a.labelLine.show="undefined"===typeof b.labelLine?!0:b.labelLine;c||(a.labelLine.show=!1);"number"===typeof b.innerRadius&&
(0>b.innerRadius&&(b.innerRadius=0),60<b.innerRadius&&(b.innerRadius=60),a.radius[0]=b.innerRadius+"%");"rose"===b.pieMode&&(a.roseType=b.roseType||"radius");return a=this._absoluteValueForPieChart(a)},_absoluteValueForPieChart:function(a){if(!a||!a.data||!a.data[0])return a;a.data=a.data.map(function(a){"number"===typeof a?a=Math.abs(a):"object"===typeof a&&"number"===typeof a.value&&(a.value=Math.abs(a.value));return a});return a},_handleSeriesDataForPieLikeType:function(a,b){return a.data.map(k.hitch(this,
function(a,d){var c={};a||"number"===typeof a?(c.value="undefined"!==typeof a.value?a.value:a,a.itemStyle&&(c.itemStyle||(c.itemStyle={}),c.itemStyle=k.mixin(c.itemStyle,a.itemStyle))):c.value=a;c.name=b.labels[d]||"";return c}))},_setTypeToSeries:function(a,b){var c=b.series;if(!c)return a;c.forEach(function(a){a.type||(a.type=b.type);a.type="column"===b.type?"bar":b.type});return a},splitAxisStackColumn:function(a,b){var c=a.series;if(!c||!c.length)return a;var d;c.some(function(a){a=a.data;if(!a||
!a.length)return!0;a.some(function(a){if(a&&a.itemStyle&&"undefined"!==typeof a.itemStyle.color&&"line"!==b.type)return d=b.stack?"stack":"single",!0;d=!1})});var e=0;"single"===d?e=.1:"stack"===d&&(e=1);var f="";"stack"===d&&(f="#fff",b.backgroundColor&&"transparent"!==b.backgroundColor&&(f=b.backgroundColor));a.series=a.series.map(function(a){if("bar"===a.type||"pie"===a.type)a.itemStyle||(a.itemStyle={}),a.emphasis||(a.emphasis={}),a.itemStyle.borderWidth=e,a.emphasis.borderWidth=e,f?(a.itemStyle.borderColor=
f,a.emphasis.borderColor=f):(a.itemStyle.borderColor="transparent",a.emphasis.borderColor="transparent");return a});return a},preProcessConfig:function(a,b){b.min=b.min||{value:0,format:{digitSeparator:!0}};b.max=b.max||{value:1E3,format:{digitSeparator:!0}};return a},settingLabelColor:function(a,b){var c="#000";b.gaugeOption&&b.gaugeOption.labelColor&&(c=b.gaugeOption.labelColor);"curved"===b.shape?a.series[0].axisLabel.textStyle.color=c:"horizontal"===b.shape?a.xAxis.axisLabel.textStyle.color=c:
"vertical"===b.shape&&(a.yAxis.axisLabel.textStyle.color=c);return a},settingValueStyle:function(a,b){var c=b.gaugeOption&&b.gaugeOption.valueStyle,d=c&&c.textStyle,c=c&&c.formatter;d&&k.mixin("curved"===b.shape?a.series[0].detail.textStyle:a.series[1].data[0].label.textStyle,d);c&&("curved"===b.shape?a.series[0].detail.formatter=c:a.series[1].data[0].label.formatter=c);return a},settingGaugeColumnColor:function(a,b){var c=b.gaugeOption&&b.gaugeOption.bgColor;b=b.gaugeOption&&b.gaugeOption.columnColor;
c&&(a.series[0].itemStyle.color=c);b&&(a.series[1].data[0].itemStyle.color=b);return a},initHorizontalOption:function(a){k.mixin(a,this.horizontal);return a},setHorizontalGrid:function(a){a.grid={top:"middle",height:90,left:"10%",right:"10%",containLabel:!0};return a},settingHorizontalAxis:function(a,b){a.xAxis.max=b.max.value;a.xAxis.min=b.min.value;a.xAxis.scale=!0;return a},settingHorizontalSeries:function(a,b){var c=a.series;if(!c||!c.length)return a;var d=c[1];c[0].data[0]=b.max.value;a=this._handleValueDisplayForColumnGauge(a,
b);d.data[0].name=b.labels&&b.labels[0]||"";d.name=b.series[0].name||"";return a},settingHorizontalGaugeRTL:function(a){if(!window.isRTL)return a;a.series[1].label.offset=[-20,0];a.xAxis.inverse=!0;a.yAxis.position="right";return a},initVerticalOption:function(a){k.mixin(a,this.vertical);return a},setVerticalGrid:function(a){a.grid={left:"middle",width:60,top:"10%",bottom:"10%",containLabel:!0};a.grid.left=this._getGridLeftOfVerticalGauge();return a},settingVerticalAxis:function(a,b){a.yAxis.max=
b.max.value;a.yAxis.min=b.min.value;return a},settingVerticalSeries:function(a,b){var c=a.series;if(!c||!c.length)return a;var d=c[1];c[0].data[0]=b.max.value;a=this._handleValueDisplayForColumnGauge(a,b);d.data[0].name=b.labels&&b.labels[0]||"";d.name=b.series[0].name||"";return a},settingVerticalGaugeRTL:function(a,b){if(!window.isRTL)return a;var c=(b.series[0].data[0]+"").length-1;b.gaugeOption&&b.gaugeOption.valueStyle&&"undefined"!==typeof b.gaugeOption.valueStyle.decimalPlaces&&(c+=b.gaugeOption.valueStyle.decimalPlaces);
a.series[1].label.offset=[-17-9*c,-15];a.xAxis.inverse=!0;a.yAxis.position="right";return a},initCurvedOption:function(a){a.series=[this.curved];return a},settingCurvedTooltip:function(a){a.tooltip.formatter=function(a){return this.handleToolTip(a,null,!1)}.bind(this);return a},settingCurvedSeries:function(a,b){var c=a.series&&a.series[0];if(!c)return a;var d=b.max.value,e=b.min.value;c.min=e;c.max=d;var f=b.series&&b.series[0]&&b.series[0].data&&b.series[0].data[0],f=f||0;c.data[0].value=f;d=f<=
e?0:f>=d?1:parseFloat((f-e)/(d-e)).toFixed(2);c.axisLine.lineStyle.color[0][0]=d;if(d=b.labels&&b.labels[0])c.data[0].name=d;c.name=b.series[0]&&b.series[0].name||"";c.axisLine.lineStyle.width=30;a.series=[c];return a},settingCurvedGaugeColor:function(a,b){var c=a.series&&a.series[0];b.gaugeOption&&(b.gaugeOption.bgColor&&(c.axisLine.lineStyle.color[1][1]=b.gaugeOption.bgColor),b.gaugeOption.columnColor&&(c.axisLine.lineStyle.color[0][1]=b.gaugeOption.columnColor,c.itemStyle.color=b.gaugeOption.columnColor));
return a},settingCurvedTargets:function(a,b){if(!a.series)return a;a.series[0].splitNumber=1E3;a.series[0].axisTick.splitNumber=1;a.series[0].axisTick.show=!1;var c=this._getTargetValues(b);return a=this._showTargetsForCurved(a,b,c)},createTargetGraphic:function(a){var b=a.shape,c=[];if("vertical"!==b&&"horizontal"!==b)return c;var d="#000";a.gaugeOption&&a.gaugeOption.labelColor&&(d=a.gaugeOption.labelColor);var e,f=a.min.value,h=a.max.value;a=this._getTargetValues(a);var g=a.range;a.values.forEach(function(a){if(!(a.value>
h||a.value<f)){e=this._calcGraphicPosition(a.value,b);var g=e.top,l=e.textLeft,k=this._createGraphic(e.graphicLeft,g,a,d,"image",b);a=this._createGraphic(l,g,a,d,"text",b);c.push(k);c.push(a)}}.bind(this));g.forEach(function(a){a.value>h||a.value<f||(e=this._calcGraphicPosition(a.value,b),a=this._createGraphic(e.textLeft,e.top,a,d,"text",b),c.push(a))}.bind(this));return c},_calcGraphicPosition:function(a,b){var c,d,e;"vertical"===b?(c=this.chart.convertToPixel({xAxisIndex:0},0),c=parseFloat(c,10).toFixed(2),
c=Number(c),window.isRTL&&(c+=40),d=c-26,e=window.isRTL?d+11:d-11-6*(a.toString().length-1),c=this._getyAxisValueTop(a),c-=2):"horizontal"===b&&(c=this.chart.convertToPixel({yAxisIndex:0},0),c=parseInt(c,10),c=Number(c)+16,d=this._getxAxisValueLeft(a),a=6*(a.toString().length-2),e=d,0<a&&(e=d-a));return{top:c,graphicLeft:d,textLeft:e}},_createGraphic:function(a,b,c,d,e,f){var h=this.horIconUrl;"vertical"===f&&(h=window.isRTL?this.verIconUrlRTL:this.verIconUrl);var g=null;"image"===e?g={z:10,type:"image",
$action:"merge",id:"wab_gid_image-"+m.getRandomString(),left:a,style:{image:h,width:10,height:10},silent:!0,top:b}:"text"===e&&(c=this.localizeNumberForDigitSeparator(c.value,c.format&&c.format.digitSeparator),g={z:10,type:"text",$action:"merge",id:"wab_gid_text-"+m.getRandomString(),left:a,style:{text:c,fill:d,font:"normal 11px sans-serif"},silent:!0});"text"===e&&(g.top="vertical"===f?b-2:b+11);return g},updateGridForVerticalGauge:function(a){if("gauge"===a.type&&"vertical"===a.shape)return{left:this._getGridLeftOfVerticalGauge(),
width:60,top:"10%",bottom:"10%"}},_getTargetValues:function(a){var b=a.gaugeOption&&a.gaugeOption.showTargetValueLabel,c=a.gaugeOption&&a.gaugeOption.showDataRangeLabel,d=a.gaugeOption&&a.gaugeOption.targetValue,e=a.min;a=a.max;var f={values:[],range:[]};d&&b&&d.forEach(function(a){f.values.push(a)});c&&(0>f.values.indexOf(e.value)&&(f.range[0]=e),0>f.values.indexOf(a.value)&&(f.range[1]=a));return f},_showTargetsForCurved:function(a,b,c){var d=c.values.concat(c.range),e=(b.max.value-b.min.value)/
1E3;d.sort(function(a,b){return a.value-b.value});a.series[0].axisLabel.formatter=k.hitch(this,function(a){var b,c;d.forEach(function(d){"undefined"===typeof b&&d.value>=a&&d.value<a+e&&(b=d.value,c=d.format)});"number"===typeof b&&(b=this.localizeNumberForDigitSeparator(b,c&&c.digitSeparator));return b});return a},_handleValueDisplayForColumnGauge:function(a,b){var c=b.min.value,d=b.max.value,e;e=b.series[0].data[0];b=e>=d?d:e<=c?c:e;a.tooltip.formatter=function(a){return this.handleToolTip(a,e,
!1)}.bind(this);a.series[1].data[0].value=b;return a},_getGridLeftOfVerticalGauge:function(){return this.chart.getWidth()/2-30},_getxAxisValueLeft:function(a){a=this.chart.convertToPixel({xAxisIndex:0},a);return parseFloat(a,10)-4},_getyAxisValueTop:function(a){a=this.chart.convertToPixel({yAxisIndex:0},a);return parseFloat(a,10)}})});