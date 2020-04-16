// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"libs/usng/usng":function(){define(["dojo/_base/declare","dojo/string"],function(n,d){var w,u,q,v=Math.PI/180,t=180/Math.PI,k,c;k=6378137;c=.006694380023;var r=c/(1-c),p=(1-Math.sqrt(1-c))/(1+Math.sqrt(1-c));return{getZoneNumber:function(a,b){a=parseFloat(a);b=parseFloat(b);(360<b||-180>b||90<a||-90>a)&&console.warn("Bad input. lat: "+a+" lon: "+b);b=b+180-360*parseInt((b+180)/360)-180;var g=parseInt((b+180)/6)+1;56<=a&&64>a&&3<=b&&12>b&&(g=32);72<=a&&84>a&&(0<=b&&9>b?g=31:9<=b&&21>
b?g=33:21<=b&&33>b?g=35:33<=b&&42>b&&(g=37));return g},LLtoUTM:function(a,b,g,m){a=parseFloat(a);b=parseFloat(b);if(84<a||-80>a)return"undefined";(360<b||-180>b||90<a||-90>a)&&console.warn("Bad input. lat: "+a+" lon: "+b);var f=b+180-360*parseInt((b+180)/360)-180,d=a*v,f=f*v;q=m?m:this.getZoneNumber(a,b);var h=(6*(q-1)-180+3)*v;this.UTMLetterDesignator(a);a=k/Math.sqrt(1-c*Math.sin(d)*Math.sin(d));b=Math.tan(d)*Math.tan(d);m=r*Math.cos(d)*Math.cos(d);f=Math.cos(d)*(f-h);h=k*((1-c/4-3*c*c/64-5*c*c*
c/256)*d-(3*c/8+3*c*c/32+45*c*c*c/1024)*Math.sin(2*d)+(15*c*c/256+45*c*c*c/1024)*Math.sin(4*d)-35*c*c*c/3072*Math.sin(6*d));w=.9996*a*(f+(1-b+m)*f*f*f/6+(5-18*b+b*b+72*m-58*r)*f*f*f*f*f/120)+5E5;u=.9996*(h+a*Math.tan(d)*(f*f/2+(5-b+9*m+4*m*m)*f*f*f*f/24+(61-58*b+b*b+600*m-330*r)*f*f*f*f*f*f/720));g[0]=w;g[1]=u;g[2]=q},LLtoUSNG:function(a,b,g){a=parseFloat(a);b=parseFloat(b);var c=[];this.LLtoUTM(a,b,c);var f=c[0],c=c[1];0>a&&(c+=1E7);var d=this.findGridLetters(q,c,f),c=Math.round(c)%1E5,f=Math.round(f)%
1E5,c=Math.floor(c/Math.pow(10,5-g)),f=Math.floor(f/Math.pow(10,5-g));a=this.getZoneNumber(a,b)+this.UTMLetterDesignator(a)+" "+d+" ";for(b=String(f).length;b<g;b++)a+="0";a+=f+" ";for(b=String(c).length;b<g;b++)a+="0";return a+c},UTMLetterDesignator:function(a){a=parseFloat(a);return 84>=a&&72<=a?"X":72>a&&64<=a?"W":64>a&&56<=a?"V":56>a&&48<=a?"U":48>a&&40<=a?"T":40>a&&32<=a?"S":32>a&&24<=a?"R":24>a&&16<=a?"Q":16>a&&8<=a?"P":8>a&&0<=a?"N":0>a&&-8<=a?"M":-8>a&&-16<=a?"L":-16>a&&-24<=a?"K":-24>a&&
-32<=a?"J":-32>a&&-40<=a?"H":-40>a&&-48<=a?"G":-48>a&&-56<=a?"F":-56>a&&-64<=a?"E":-64>a&&-72<=a?"D":-72>a&&-80<=a?"C":"Z"},findSet:function(a){a=parseInt(a);switch(a%6){case 0:return 6;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;default:return-1}},findGridLetters:function(a,b,c){a=parseInt(a);b=parseFloat(b);c=parseFloat(c);var g=1;for(b=Math.round(b);1E5<=b;)b-=1E5,g++;g%=20;b=0;for(c=Math.round(c);1E5<=c;)c-=1E5,b++;b%=8;return this.lettersHelper(this.findSet(a),
g,b)},lettersHelper:function(a,b,c){0===b?b=19:b--;0===c?c=7:c--;switch(a){case 1:return a="ABCDEFGHJKLMNPQRSTUV","ABCDEFGH".charAt(c)+a.charAt(b);case 2:return a="FGHJKLMNPQRSTUVABCDE","JKLMNPQR".charAt(c)+a.charAt(b);case 3:return a="ABCDEFGHJKLMNPQRSTUV","STUVWXYZ".charAt(c)+a.charAt(b);case 4:return a="FGHJKLMNPQRSTUVABCDE","ABCDEFGH".charAt(c)+a.charAt(b);case 5:return a="ABCDEFGHJKLMNPQRSTUV","JKLMNPQR".charAt(c)+a.charAt(b);case 6:return a="FGHJKLMNPQRSTUVABCDE","STUVWXYZ".charAt(c)+a.charAt(b)}},
UTMtoLL:function(a,b,d,m){b=parseFloat(b)-5E5;a=parseFloat(a);d=parseInt(d);a=a/.9996/(k*(1-c/4-3*c*c/64-5*c*c*c/256));a=a+(3*p/2-27*p*p*p/32)*Math.sin(2*a)+(21*p*p/16-55*p*p*p*p/32)*Math.sin(4*a)+151*p*p*p/96*Math.sin(6*a);var f=k/Math.sqrt(1-c*Math.sin(a)*Math.sin(a)),g=Math.tan(a)*Math.tan(a),h=r*Math.cos(a)*Math.cos(a);b/=.9996*f;f=a-f*Math.tan(a)/(k*(1-c)/Math.pow(1-c*Math.sin(a)*Math.sin(a),1.5))*(b*b/2-(5+3*g+10*h-4*h*h-9*r)*b*b*b*b/24+(61+90*g+298*h+45*g*g-252*r-3*h*h)*b*b*b*b*b*b/720);f*=
t;b=(b-(1+2*g+h)*b*b*b/6+(5-2*h+28*g-3*h*h+8*r+24*g*g)*b*b*b*b*b/120)/Math.cos(a);b=6*(d-1)-180+3+b*t;m.lat=f;m.lon=b},USNGtoUTM:function(a,b,c,d,f,k,h){c=1+"ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(c)%8;var g="CDEFGHJKLMNPQRSTUVWX".indexOf(b);d=a%2?"ABCDEFGHJKLMNPQRSTUV".indexOf(d):"FGHJKLMNPQRSTUVABCDE".indexOf(d);d=Number([0,2,2,2,4,4,6,6,8,8,0,0,0,2,2,4,4,6,6,6][g])+d/10;d<[1.1,2,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,0,.8,1.7,2.6,3.5,4.4,5.3,6.2,7,7.9][g]&&(d+=2);h.N=1E6*d+Number(k)*Math.pow(10,5-k.length);
h.E=1E5*c+Number(f)*Math.pow(10,5-f.length);h.zone=a;h.letter=b},USNGtoLL:function(a,b){var c={};this.parseUSNG_str(a,c);a={};this.USNGtoUTM(c.zone,c.let,c.sq1,c.sq2,c.east,c.north,a);"N">c.let&&(a.N-=1E7);this.UTMtoLL(a.N,a.E,c.zone,a);b[0]=a.lat;b[1]=a.lon},parseUSNG_str:function(a,b){var c=0,d,f=[];d=[];d=a.toUpperCase();f=/%20/g;f=d.replace(f,"");f=/ /g;f=d.replace(f,"");if(7>f.length)return console.warn("This application requires minimum USNG precision of 10,000 meters"),0;b.zone=10*f.charAt(c++)+
1*f.charAt(c++);b.let=f.charAt(c++);b.sq1=f.charAt(c++);b.sq2=f.charAt(c++);b.precision=(f.length-c)/2;b.east="";b.north="";for(d=0;d<b.precision;d++)b.east+=f.charAt(c++);" "==f[c]&&c++;for(d=0;d<b.precision;d++)b.north+=f.charAt(c++)},isUSNG:function(a){var b=[],b=a.toUpperCase();a=/%20/g;b=b.replace(a,"");a=/ /g;b=b.replace(a,"");if(15<b.length)return 0;a=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX]$/;if(b.match(a))return console.warn("Input appears to be a UTM zone...more precision is required to display a correct result."),
0;a=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV]([0-9][0-9]){0,5}/;return b.match(a)?7>b.length?(alert(b+" Appears to be a USNG string, but this application requires precision of at least 10,000 meters"),0):b:0},LLtoMGRS:function(a,b,c){var d="";return d=this.LLtoUSNG(a,b,c).replace(/ /g,"")},LLtoUSNG_nad27:function(a,b,d){k=6378206.4;c=.006768658;a=this.LLtoUSNG(a,b,d);k=6378137;c=.006694380023;return a+" (NAD27)"}}})},"widgets/Coordinate/a11y/Widget":function(){define("dojo/_base/lang dojo/on dojo/_base/html dojo/keys jimu/utils dijit/a11yclick".split(" "),
function(n,d,w,u,q,v){var t={a11y_init:function(d){q.initFirstFocusNode(this.domNode,this.locateButton);d&&d.isHidePopmenu?q.initLastFocusNode(this.domNode,this.locateButton):q.initLastFocusNode(this.domNode,this.foldableNode)},a11y_initEvents:function(){this.own(d(this.locateButton,v,n.hitch(this,this.onLocateButtonClick)));this.own(d(this.foldContainer,v,n.hitch(this,this.onFoldContainerClick)));this.own(d(this.foldContainer,"keydown",n.hitch(this,function(d){if(d.keyCode===u.UP_ARROW||d.keyCode===
u.DOWN_ARROW)this.onFoldContainerClick()})))},a11y_setCoordinateInfo:function(d){var c=this.coordinateInfo,k=this.domNode;c&&(c.innerHTML=d);k&&w.setAttr(k,"aria-label",d)},_isKeyEvent:function(d){return d&&d._origType?!0:!1},a11y_initPopMenuEvents:function(){this.own(d(this.popMenu.domNode,"keydown",n.hitch(this,function(d){d.keyCode===u.ESCAPE&&(d.stopPropagation(),d.preventDefault(),this.onFoldContainerClick(),setTimeout(n.hitch(this,function(){this.foldableNode.focus()}),0))})))},a11y_bindMenuItemEvent:function(k){this.own(d(k,
"click",n.hitch(this,function(c){t._isKeyEvent(c)&&setTimeout(n.hitch(this,function(){this.a11y_focusToPopMenuBtn()}),0)})))},a11y_focusMenuItem:function(){this.selectedItem.domNode.focus()},a11y_focusToPopMenuBtn:function(){this.foldableNode.focus()}};return t})},"widgets/Coordinate/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Coordinate/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"coordinateBackground"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateMenuContainer" style\x3d"display:none"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateMenu"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateInfoMenu" class\x3d"coordinate-info-menu jimu-float-leading jimu-align-leading"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading coordinate-locate-container" data-dojo-attach-point\x3d"locateContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"locateButton" class\x3d"coordinate-locate jimu-float-leading" tabindex\x3d"0" role\x3d"button"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateInfo" class\x3d"coordinate-info jimu-float-leading jimu-align-leading"\x3e\r\n        ${nls.loading}\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-float-trailing coordinate-foldable-container" data-dojo-attach-point\x3d"foldContainer"\x3e\r\n      \x3cdiv class\x3d"coordinate-foldable jimu-float-trailing" data-dojo-attach-point\x3d"foldableNode" tabindex\x3d"0" role\x3d"button"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Coordinate/css/style.css":".jimu-widget-coordinate .coordinate-background{line-height: 17px; overflow: hidden; font-size: 10px; color: #fff; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.5);}.jimu-widget-coordinate .display-coordinate-menu{display: block !important; border-bottom: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate{width: 13px; height: 13px; background: url(images/locate.png) center no-repeat; margin: 2px;}.jimu-widget-coordinate .coordinate-locate-container{width: 17px; height: 17px; border-right: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate{background: url(images/locate-hover.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background: url(images/locate-active.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-info{margin: 0 5px; font-size: 11px !important; color: #fff !important;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-info{margin: 0;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-locate-container {border-style: none !important;}.jimu-widget-coordinate .coordinate-foldable-container {border-left: 1px solid rgba(255,255,255,0.4); height: 17px;}.jimu-widget-coordinate .coordinate-foldable{background: url(images/more.png) center no-repeat; cursor: pointer; width: 13px; height: 13px; margin: 2px;}.jimu-widget-coordinate:hover .coordinate-foldable{background-image: url(images/more-hover.png);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container{border-right-style: none; border-left: 1px solid rgba(255,255,255,0.4);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate,.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background-position: right center;}.jimu-rtl .jimu-widget-coordinate .coordinate-foldable-container{border-left-style: none; border-right: 1px solid rgba(255,255,255,0.4);}.claro .jimu-widget-coordinate .dijitMenuTable {background: transparent; border-style: none; padding: 2px;}.claro .jimu-widget-coordinate .dijitMenuItem {color: #fff;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{border-style: none; text-align: left; padding: 4px 2px;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem.selected-item{font-weight: bold; background: #000;}.jimu-rtl .claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{text-align: right;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover {color: #fff; background: #000; border-style: none;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected td{background: #000; color: #fff;}.DartTheme .jimu-widget-coordinate {z-index: 102 !important;}",
"*now":function(n){n(['dojo/i18n!*preload*widgets/Coordinate/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetsInTemplateMixin esri/geometry/Point esri/SpatialReference jimu/BaseWidget jimu/utils jimu/dijit/Message dojo/_base/lang dojo/on dojo/dom-class dijit/DropDownMenu dijit/MenuItem dojo/aspect dojo/Deferred esri/request esri/graphic esri/layers/GraphicsLayer esri/tasks/ProjectParameters esri/geometry/webMercatorUtils esri/symbols/PictureMarkerSymbol jimu/portalUtils esri/config libs/usng/usng jimu/SpatialReference/unitUtils ./a11y/Widget".split(" "),function(n,
d,w,u,q,v,t,k,c,r,p,a,b,g,m,f,C,h,D,E,F,A,G,B,z,H){var I={INCHES:"Inches",FOOT:"Foot",FEET:"Foot",FOOT_US:"Foot_US",YARDS:"Yards",MILES:"Miles",NAUTICAL_MILES:"Nautical_Miles",MILLIMETERS:"Millimeters",CENTIMETERS:"Centimeters",METER:"Meter",METERS:"Meter",KILOMETERS:"Kilometers",DECIMETERS:"Decimeters",DEGREE:"Decimal_Degrees",DECIMAL_DEGREES:"Decimal_Degrees",DEGREES_DECIMAL_MINUTES:"Degrees_Decimal_Minutes",DEGREE_MINUTE_SECONDS:"Degree_Minutes_Seconds",MGRS:"MGRS",USNG:"USNG"},x={esriCentimeters:"CENTIMETERS",
esriDecimalDegrees:"DECIMAL_DEGREES",esriDegreeMinuteSeconds:"DEGREE_MINUTE_SECONDS",esriDecimeters:"DECIMETERS",esriFeet:"FOOT",esriInches:"INCHES",esriKilometers:"KILOMETERS",esriMeters:"METER",esriMiles:"MILES",esriMillimeters:"MILLIMETERS",esriNauticalMiles:"NAUTICAL_MILES",esriPoints:"POINTS",esriUnknownUnits:"UNKNOWN",esriYards:"YARDS"};n=n([v,w],{baseClass:"jimu-widget-coordinate",name:"Coordinate",popMenu:null,selectedWkid:null,selectedItem:null,selectedTfWkid:null,_defaultItem:null,forward:!0,
enableRealtime:!1,geoServiceUrl:null,_mapWkid:null,_configured:!1,_markerGraphic:null,moveTopOnActive:!1,_ENABLE_MAP_POPUP:!1,postMixInProperties:function(){this.nls.enableClick=this.nls.enableClick||"Click to enable clicking map to get coordinates";this.nls.disableClick=this.nls.disableClick||"Click to disable clicking map to get coordinates"},postCreate:function(){this.inherited(arguments);p.add(this.coordinateBackground,"coordinate-background");this.own(r(this.map,"extent-change",c.hitch(this,
this.onExtentChange)));this.own(r(this.map,"mouse-move",c.hitch(this,this.onMouseMove)));this.own(r(this.map,"click",c.hitch(this,this.onMapClick)));this.a11y_initEvents();this.graphicsLayer=new h;this.map.addLayer(this.graphicsLayer)},startup:function(){this.inherited(arguments);this.selectedWkid=this._mapWkid=this.map.spatialReference.isWebMercator()?3857:this.map.spatialReference.wkid;this.config.spatialReferences&&1<this.config.spatialReferences.length?d.setStyle(this.foldableNode,"display","inline-block"):
d.setStyle(this.foldableNode,"display","none")},onOpen:function(){this._processData().then(c.hitch(this,function(e){this.domNode&&(this.initPopMenu(e),(e=1>=this.popMenu.getChildren().length)&&d.setStyle(this.foldContainer,"display","none"),this.a11y_init({isHidePopmenu:e}))}),c.hitch(this,function(e){console.error(e)}))},_processMapUnits:function(e){var a=new m;if(e.units)a.resolve(e);else{var b=e.spatialReference||c.exists("tileInfo.spatialReference",e)&&e.tileInfo.spatialReference,d=e.extent||
e.initialExtent||e.fullExtent,y=b&&(b.latestWkid||b.wkid)||d&&d.spatialReference&&d.spatialReference.wkid,f=this;require(["jimu/SpatialReference/srUtils"],function(b){b.loadResource().then(c.hitch(f,function(){var l=b.getCSUnit(y);e.units=l;a.resolve(e)}))})}return a},_processData:function(){var e=new m,a=this.map.itemInfo.itemData.baseMap.baseMapLayers[0];this.config.spatialReferences&&this.config.spatialReferences.length?(this._configured=!0,e.resolve(this.config.spatialReferences)):A.getUnits(this.appConfig.portalUrl).then(c.hitch(this,
function(b){var l=a&&("BingMapsRoad"===a.type||"BingMapsHybrid"===a.type||"BingMapsAerial"===a.type),d=a&&"WebTiledLayer"===a.type,J=a&&"VectorTileLayer"===a.type;"WMS"===a.type?this._getWMSBaseMapInfo().then(c.hitch(this,function(a){this._configured=!1;e.resolve(a)})):a&&a.url?f({url:a.url,handleAs:"json",callbackParamName:"callback",content:{f:"json"}}).then(c.hitch(this,function(a){this._processMapUnits(a).then(c.hitch(this,function(a){var l=this._getUnconfiguredUnitOptions(a.units,b),c=a.spatialReference,
d=a.extent,c={wkid:c&&(c.latestWkid||c.wkid)||d&&d.spatialReference&&d.spatialReference.wkid,label:"",outputUnit:l.outputUnit};c.options={sameSRWithMap:!0,defaultUnit:x[a.units]||a.units,isGeographicUnit:l.isGeographicUnit,isGeographicCS:l.isGeographicCS,isProjectUnit:l.isProjectUnit,isProjectedCS:l.isProjectedCS,unitRate:l.unitRate};this._configured=!1;e.resolve(c)}))}),c.hitch(this,function(a){console.error(a);e.reject(a)})):a&&("OpenStreetMap"===a.type||l||d||J)?(l=this._getUnconfiguredUnitOptions("esriMeters",
b),d={wkid:3857,label:"",outputUnit:l.outputUnit},d.options={sameSRWithMap:!0,defaultUnit:x.esriMeters,isGeographicUnit:l.isGeographicUnit,isGeographicCS:l.isGeographicCS,isProjectUnit:l.isProjectUnit,isProjectedCS:l.isProjectedCS,unitRate:l.unitRate},this._configured=!1,e.resolve(d)):e.reject(Error("no baseMap"))}));return e},_getUnconfiguredUnitOptions:function(a,b){a=x[a]||a;var e="",l=1,c="",d="",f="",g="";z.isProjectUnit(a)?(f=g=!0,c=d=!1,e="english"===b?x.esriFeet.toUpperCase():x.esriMeters.toUpperCase(),
l=z.getUnitRate(a.toUpperCase(),e)):z.isGeographicUnit(a)&&(f=g=!1,c=d=!0,e=a.toUpperCase());this.map.spatialReference.isWebMercator()&&(e=x.esriDecimalDegrees,d=!0,g=!1,l=1);return{outputUnit:e,unitRate:l,isGeographicUnit:d,isGeographicCS:c,isProjectUnit:g,isProjectedCS:f}},initPopMenu:function(e){this.popMenu=new a({},this.coordinateMenu);g.after(this.popMenu,"onItemClick",c.hitch(this,this.onClickMenu),!0);"[object Array]"!==Object.prototype.toString.call(e)?(this.selectedWkid=parseInt(e.wkid,
10),this.addMenuItem("",this.selectedWkid,e.outputUnit,null,null,e.options,e.isDefault,e.alias),this.selectedItem=this.popMenu.getChildren()[0]):(this._addAllMenuItems(),this._setDefaultItme(),null===this.selectedItem&&(this.selectedItem=this.popMenu.getChildren()[0]));this.selectedWkid=parseInt(this.selectedItem.params.wkid,10);this.selectedTfWkid=this.selectedItem.params.transformationWkid&&parseInt(this.selectedItem.params.transformationWkid,10);this.selectedItem.set({label:this.getStatusString(!0,
this.selectedItem.params.alias||this.selectedItem.params.name,this.selectedItem.params.wkid,this.selectedItem.params.isDefault)});d.addClass(this.selectedItem.domNode,"selected-item");this._adjustCoordinateInfoUI(this.selectedWkid);this.popMenu.startup();this.a11y_initPopMenuEvents()},_addAllMenuItems:function(){for(var a=this.config.spatialReferences.length,b=0;b<a;b++)this.addMenuItem(this.config.spatialReferences[b].label,this.config.spatialReferences[b].wkid,this.config.spatialReferences[b].outputUnit,
this.config.spatialReferences[b].transformationWkid,this.config.spatialReferences[b].transformForward,this.config.spatialReferences[b].options,this.config.spatialReferences[b].isDefault,this.config.spatialReferences[b].alias)},_isWebMercator:function(a){return q.prototype._isWebMercator?q.prototype._isWebMercator.apply({wkid:parseInt(a,10)},[]):(new q(parseInt(a,10))).isWebMercator()},canShowInClient:function(a){a=4326===this._mapWkid&&this._isWebMercator(a)||this._isWebMercator(this._mapWkid)&&4326===
parseInt(a,10);var b=this.selectedItem.get("options");return b&&b.sameSRWithMap||a?!0:!1},onClickMenu:function(a){d.removeClass(this.selectedItem.domNode,"selected-item");this.selectedItem.set({label:this.getStatusString(!1,this.selectedItem.params.alias||this.selectedItem.params.name,this.selectedItem.params.wkid,this.selectedItem.params.isDefault)});this.selectedWkid=parseInt(a.params.wkid,10);this.selectedTfWkid=a.params.tfWkid;this.forward=a.params.forward;a.set({label:this.getStatusString(!0,
a.params.alias||a.params.name,a.params.wkid,a.params.isDefault)});d.addClass(a.domNode,"selected-item");this.selectedItem=a;this._adjustCoordinateInfoUI(this.selectedWkid);d.removeClass(this.coordinateMenuContainer,"display-coordinate-menu")},_adjustCoordinateInfoUI:function(a){d.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(a)?(this.enableRealtime=!0,this._getDefaultPlaceHolder()):(this.enableRealtime=
!1,this.a11y_setCoordinateInfo(""),d.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"));d.setAttr(this.locateButton,"title",this.nls.enableClick);d.removeClass(this.locateContainer,"coordinate-locate-container-active");this.enableWebMapPopup();this.onExtentChange({extent:this.map.extent})},disableWebMapPopup:function(){this._ENABLE_MAP_POPUP=!1;this.map.setInfoWindowOnClick(!1)},enableWebMapPopup:function(){this._ENABLE_MAP_POPUP=!0;this.map.setInfoWindowOnClick(!0)},onLocateButtonClick:function(){if(d.hasClass(this.coordinateMenuContainer,
"display-coordinate-menu"))this.onFoldContainerClick();d.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");d.toggleClass(this.locateContainer,"coordinate-locate-container-active");this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(this.selectedWkid)?this.enableRealtime?(this.enableRealtime=!1,this.a11y_setCoordinateInfo(this.nls.hintMessage),d.setAttr(this.locateButton,"title",this.nls.disableClick),this.disableWebMapPopup()):(this.enableRealtime=
!0,this._getDefaultPlaceHolder(),d.setAttr(this.locateButton,"title",this.nls.enableClick),this.enableWebMapPopup()):d.hasClass(this.locateContainer,"coordinate-locate-container-active")?(this.a11y_setCoordinateInfo(this.nls.hintMessage),this.disableWebMapPopup(),d.setAttr(this.locateButton,"title",this.nls.disableClick)):(this.a11y_setCoordinateInfo(""),d.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"),this.enableWebMapPopup(),d.setAttr(this.locateButton,"title",this.nls.enableClick))},
onActive:function(){this.locateContainer&&d.hasClass(this.locateContainer,"coordinate-locate-container-active")&&(!0===this._ENABLE_MAP_POPUP?this.enableWebMapPopup():this.disableWebMapPopup())},onDeActive:function(){if(d.hasClass(this.locateContainer,"coordinate-locate-container-active"))this.onLocateButtonClick();if(d.hasClass(this.coordinateMenuContainer,"display-coordinate-menu"))this.onFoldContainerClick()},getStatusString:function(a,b,c,d){var e="";c=parseInt(c,10);e=a?"\x3cb\x3e"+e+b+"\x3c/b\x3e\x26nbsp;"+
this._rtlTheBrackets(c)+"\x26nbsp;":e+b+"\x26nbsp;\x26nbsp;"+this._rtlTheBrackets(c)+"\x26nbsp;";d&&(e+=this.nls.defaultLabel);return e},_rtlTheBrackets:function(a){return window.isRTL?"\x26rlm;("+a+")":"("+a+")"},addMenuItem:function(a,c,d,f,y,g,h,k){a={label:this.getStatusString(!1,k||a,c,h)||"",name:a||"",wkid:c||"",outputUnit:d||"",tfWkid:f||"",options:g,isDefault:h,alias:k,ownerDocument:this.ownerDocument};a.tfWkid&&(a.forward=y);y=new b(a);this.a11y_bindMenuItemEvent(y);this.popMenu.addChild(y)},
_toFormat:function(a){return isNaN(a)?"":t.localizeNumberByFieldInfo(a,{format:{places:this.config.decimalPlaces,digitSeparator:this.config.addSeparator}})},onProjectComplete:function(a,b){if(this.selectedWkid&&a===this.selectedWkid&&this.domNode){b=b[0];a=b.x;b=b.y;var c=this.selectedItem.get("outputUnit"),d=this.selectedItem.get("options");"MGRS"===c||"USNG"===c?this._displayUsngOrMgrs(c,b,a):d.isGeographicUnit?this._displayDegOrDms(c,b,a):this._displayProject(c,b,a)}},_unitToNls:function(a){var b=
I[a.toUpperCase()];return this.nls[b]||this.nls[a]||a},onProjectError:function(a){new k({message:a.message||a.toString()});this.a11y_setCoordinateInfo(this.nls.hintMessage)},onExtentChange:function(a){if(this.selectedItem){var b=d.position(this.domNode),c=d.position(this.map.root);if(!window.isRTL)b.x-c.x+b.w+5>=c.w&&("left"in this.position?d.setStyle(this.domNode,"right","5px"):d.setStyle(this.domNode,"left","5px"));else if(0>=b.x-c.x||b.x-c.x+b.w+5>=c.w)"left"in this.position?d.setStyle(this.domNode,
"left","5px"):d.setStyle(this.domNode,"right","5px");window.appInfo.isRunInMobile?(this.graphicsLayer.remove(this._markerGraphic),this._markerGraphic=null,d.setStyle(this.locateContainer,"display","none"),d.removeClass(this.coordinateMenuContainer,"display-coordinate-menu"),this.canShowInClient(this.selectedWkid)?this._displayOnClient(a.extent.getCenter()):this._projectMapPoint(a.extent.getCenter())):(d.setStyle(this.locateContainer,"display","block"),1<this.popMenu.getChildren().length?d.setStyle(this.foldContainer,
"display","block"):d.setStyle(this.foldContainer,"display","none"))}},_getMarkerGraphic:function(a){var b=new F(this.folderUrl+"css/images/esriGreenPin16x26.png",16,26);b.setOffset(0,12);return new C(a,b)},onMapClick:function(a){window.appInfo.isRunInMobile||this.enableRealtime||!this.selectedItem||(!this.canShowInClient(this.selectedWkid)&&!d.hasClass(this.locateContainer,"coordinate-locate-container-active")||this._markerGraphic||(this._markerGraphic=this._getMarkerGraphic(a.mapPoint),this.graphicsLayer.add(this._markerGraphic)),
this.canShowInClient(this.selectedWkid)?(this._markerGraphic.setGeometry(a.mapPoint),this._displayOnClient(a.mapPoint)):d.hasClass(this.locateContainer,"coordinate-locate-container-active")&&(this._markerGraphic.setGeometry(a.mapPoint),a=new u(a.mapPoint.x,a.mapPoint.y,this.map.spatialReference),this._projectMapPoint(a)))},_projectMapPoint:function(a){var b=new D,d=null,e=this.selectedItem.get("options");b.geometries=[a];e.isProjectedCS?d=e.isProjectUnit?this.selectedWkid:e.spheroidCS:e.isGeographicCS&&
(d=this.selectedWkid);this.selectedTfWkid&&(b.transformation=new q(parseInt(this.selectedTfWkid,10)),b.transformForward=JSON.parse(this.forward));b.outSR=new q(parseInt(d,10));this.a11y_setCoordinateInfo(this.nls.computing);G.defaults.geometryService.project(b,c.hitch(this,this.onProjectComplete,this.selectedWkid),c.hitch(this,this.onProjectError))},_displayOnClient:function(a){var b=this.selectedItem.get("outputUnit"),c=a.x,d=a.y,e=null,f=4326===this._mapWkid&&this._isWebMercator(this.selectedWkid)||
this._isWebMercator(this._mapWkid)&&4326===this.selectedWkid,g=this.selectedItem.get("options"),e=a.normalize();g.isGeographicUnit&&(c=e.getLongitude()||c);g.isGeographicUnit&&(d=e.getLatitude()||d);f?4326===a.spatialReference.wkid&&this._isWebMercator(this.selectedWkid)?"MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,e.getLatitude(),e.getLongitude()):g.isGeographicUnit?this._displayDegOrDms(b,d,c):g.isProjectUnit&&(a=E.lngLatToXY(c,d),this._displayProject(b,a[1],a[0])):a.spatialReference.isWebMercator()&&
4326===this.selectedWkid&&("MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,e.getLatitude(),e.getLongitude()):g.isGeographicUnit&&this._displayDegOrDms(b,d,c)):g.defaultUnit===b?(this._displayCoordinatesByOrder(this._toFormat(c),this._toFormat(d)),this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(b))):4326===a.spatialReference.wkid||a.spatialReference.isWebMercator()?"MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,e.getLatitude(),e.getLongitude()):g.isGeographicUnit?
this._displayDegOrDms(b,d,c):g.isProjectedCS&&this._displayProject(b,d,c):g.isProjectedCS?this._displayProject(b,d,c):g.isGeographicCS&&("MGRS"===b||"USNG"===b?this._displayUsngOrMgrs(b,d,c):g.isGeographicUnit&&this._displayDegOrDms(b,d,c))},onMouseMove:function(a){window.appInfo.isRunInMobile||this.enableRealtime&&this.selectedItem&&this._displayOnClient(a.mapPoint)},destroy:function(){this._markerGraphic&&this.graphicsLayer.remove(this._markerGraphic);this.graphicsLayer&&this.map.removeLayer(this.graphicsLayer);
this.inherited(arguments)},_displayUsngOrMgrs:function(a,b,c){"MGRS"===a?this.a11y_setCoordinateInfo(B.LLtoMGRS(b,c,5)):"USNG"===a&&this.a11y_setCoordinateInfo(B.LLtoUSNG(b,c,5));isNaN(b)&&isNaN(c)?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a))},_displayDegOrDms:function(a,b,c){var d="",e="",d=this.selectedItem.get("options");c*=d.unitRate;b*=d.unitRate;"DEGREE_MINUTE_SECONDS"===a?(e=this.degToDMS(c,"LON"),d=this.degToDMS(b,"LAT"),
this._displayCoordinatesByOrder(e,d)):"DEGREES_DECIMAL_MINUTES"===a?(e=this.degToDDM(c),d=this.degToDDM(b),this._displayCoordinatesByOrder(e,d)):(this._displayCoordinatesByOrder(this._toFormat(c),this._toFormat(b)),isNaN(b)&&isNaN(c)?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a)))},_displayProject:function(a,b,c){var d=this.selectedItem.get("options");c*=d.unitRate;b*=d.unitRate;this._displayCoordinatesByOrder(this._toFormat(c),this._toFormat(b));
isNaN(b)&&isNaN(c)?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.coordinateInfo.innerHTML+=" "+this._unitToNls(a))},_displayCoordinatesByOrder:function(a,b){this.config.displayOrderLonLat?this.a11y_setCoordinateInfo(a+"  "+b):this.a11y_setCoordinateInfo(b+"  "+a)},onFoldContainerClick:function(){this._configured&&d.toggleClass(this.coordinateMenuContainer,"display-coordinate-menu");this.a11y_focusMenuItem()},degToDMS:function(a,b){var c=Math.abs(a),d=Math.floor(c),c=c-d,e=Math.floor(60*
c),c=Math.floor(3600*(c-e/60));60===c&&(e++,c=0);60===e&&(d++,e=0);return d+"\x26deg;"+(10>e?"0"+e:e)+"\x26prime;"+(10>c?"0"+c:c)+"\x26Prime;"+("LAT"===b?0>a?"S":"N":0>a?"W":"E")},degToDDM:function(a){var b=Math.abs(a);a=Math.floor(b);var b=b-a,c=Math.floor(60*b),b=Math.floor(3600*(b-c/60));60===b&&(c++,b=0);60===c&&(a++,c=0);c=t.localizeNumberByFieldInfo(c+b/60,{format:{places:this.config.decimalPlaces,digitSeparator:this.config.addSeparator}});return a+"\x26deg;"+c+"\x26prime;"},_getWMSBaseMapInfo:function(){var a=
new m;require(["jimu/SpatialReference/srUtils"],c.hitch(this,function(b){b.loadResource().then(c.hitch(this,function(){var d=this.map.spatialReference.wkid;A.getUnits(this.appConfig.portalUrl).then(c.hitch(this,function(c){if(b.isValidWkid(d)){var e={wkid:b.standardizeWkid(d),label:b.getSRLabel(parseInt(d,10))};b.isProjectedCS(e.wkid)?e.outputUnit="english"===c?"FOOT":"METER":e.outputUnit=e.outputUnit||b.getCSUnit(e.wkid);c={sameSRWithMap:b.isSameSR(e.wkid,this.map.spatialReference.wkid),isGeographicCS:b.isGeographicCS(e.wkid),
isGeographicUnit:b.isGeographicUnit(e.outputUnit),isProjectedCS:b.isProjectedCS(e.wkid),isProjectUnit:b.isProjectUnit(e.outputUnit),spheroidCS:b.isProjectedCS(e.wkid)?b.getGeoCSByProj(e.wkid):e.wkid,defaultUnit:b.getCSUnit(e.wkid),unitRate:b.getUnitRate(b.getCSUnit(e.wkid),e.outputUnit)};this.map.spatialReference.isWebMercator()&&(c.isGeographicUnit=!0,c.isProjectUnit=!1,c.unitRate=1,e.outputUnit="DECIMAL_DEGREES");"DEGREES_DECIMAL_MINUTES"===e.outputUnit&&(c.isGeographicUnit=!0,c.unitRate=1);e.options=
c;a.resolve(e)}}),c.hitch(this,function(b){console.error(b);a.reject(b)}))}))}));return a},_setDefaultItme:function(){var a,b,c;a=0;for(b=this.popMenu.getChildren().length;a<b;a++)if(c=this.popMenu.getChildren()[a],!0===c.params.isDefault){this._defaultItem=this.selectedItem=c;break}var d=this._mapWkid;if(!this._defaultItem)for(a=0,b=this.popMenu.getChildren().length;a<b;a++)if(c=this.popMenu.getChildren()[a],parseInt(c.params.wkid,10)===parseInt(d,10)){c.set({isDefault:!0});c.params.isDefault=!0;
this._defaultItem=c;break}this._defaultItem&&this._setDefaultItemStyle(this._defaultItem)},_setDefaultItemStyle:function(a){a.set({label:this.getStatusString(!1,a.params.alias||a.params.name,a.params.wkid,a.params.isDefault)})},_getDefaultPlaceHolder:function(){t.isMobileUa()?this.a11y_setCoordinateInfo(""):this.a11y_setCoordinateInfo(this.nls.realtimeLabel)}});n.extend(H);return n});