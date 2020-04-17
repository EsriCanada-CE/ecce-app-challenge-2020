// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Print/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Print/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n\r\n        \x3ctd class\x3d"first"\x3e*${nls.serviceURL}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"serviceURL"\r\n            required\x3d"true" data-dojo-props\x3d"style:{width:\'100%\'}"/\x3e\r\n          \x3c/td\x3e\r\n\r\n          \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"checkProcessDiv" style\x3d"display:none"\x3e\r\n            \x26nbsp;\x26nbsp;\x3cimg data-dojo-attach-point\x3d"checkImg" width\x3d"20px" height\x3d"20px" src\x3d""\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultTitle}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n            data-dojo-attach-point\x3d"defaultTitle" data-dojo-attach-event\x3d"Blur:_onTitleBlur" placeHolder\x3d"ArcGIS WebMap"\r\n            data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultAuthor}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" placeHolder\x3d"Web AppBuilder for ArcGIS"\r\n            data-dojo-attach-point\x3d"defaultAuthor" data-dojo-attach-event\x3d"Blur:_onAuthorBlur" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultCopyright}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3ctextarea data-dojo-attach-point\x3d"defaultCopyright" name\x3d"copyright"\r\n                      data-dojo-attach-event\x3d"Blur:_onCopyrightBlur"\r\n                      data-dojo-type\x3d"dijit/form/SimpleTextarea"\r\n                      style\x3d"width:100%;height:60px;resize:none;font-size:14px;"\x3e\x3c/textarea\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"copyrightEditableChk" class\x3d"jimu-float-leading"\r\n            data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-props\x3d"label:\'${nls.editable}\'"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultFormat}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultFormat"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.defaultLayout}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultLayout"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr style\x3d"display: none"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.advancedOption}\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"showAdvancedOptionChk"\r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n                data-dojo-props\x3d"checked:true"\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Print/setting/css/style.css":".jimu-widget-print-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-print-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-print-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-print-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px; min-width: 200px;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .second{width:650px;}.jimu-widget-print-setting .jimu-checkbox .checkbox {margin: 12px 0;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/Print/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/Deferred dojo/dom-style dojo/dom-attr esri/request jimu/dijit/Message jimu/portalUtils jimu/portalUrlUtils jimu/utils dojo/store/Memory dijit/form/ValidationTextBox dijit/form/ComboBox jimu/dijit/CheckBox dijit/form/SimpleTextarea".split(" "),function(g,t,u,b,v,w,e,x,y,q,z,p,d,r){return g([t,u],{baseClass:"jimu-widget-print-setting",memoryFormat:new r,memoryLayout:new r,_portalPrintTaskURL:null,
validUrl:!0,startup:function(){this.inherited(arguments);this.setConfig(this.config);x.set(this.checkImg,"src",require.toUrl("jimu")+"/images/loading.gif");this.serviceURL.validator=b.hitch(this,this.validator);this.own(v(this.serviceURL,"Change",b.hitch(this,this.onUrlChange)))},validator:function(a){if(!this.validUrl)return this.serviceURL.invalidMessage=this.nls.urlNotAvailable,!1;var c=p.getNewPrintUrl(this.appConfig.portalUrl);if(a===c||/^https?:\/\/.+sharing\/tools\/newPrint$/.test(a)||/^https?:\/\/.+\/GPServer\//.test(a))return!0;
this.serviceURL.invalidMessage=this.nls.notPrintTask;return!1},onUrlChange:function(){this.validUrl=!0;if(this.serviceURL.validate()){var a=this.serviceURL.get("value");if(a){e.set(this.checkProcessDiv,"display","");this.memoryFormat.data={};this.memoryLayout.data={};this.defaultFormat.set("store",this.memoryFormat);this.defaultLayout.set("store",this.memoryLayout);this.defaultFormat.set("value","");this.defaultLayout.set("value","");e.set(this.defaultFormat.domNode.parentNode.parentNode,"display",
"none");e.set(this.defaultLayout.domNode.parentNode.parentNode,"display","none");var c=p.setHttpProtocol(this.serviceURL.get("value")),h=p.getNewPrintUrl(this.appConfig.portalUrl);c===h||/sharing\/tools\/newPrint$/.test(c)?e.set(this.checkProcessDiv,"display","none"):this._getPrintTaskInfo(a)}}},_getPrintTaskInfo:function(a){y({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback",timeout:6E4,load:b.hitch(this,this._handlePrintInfo),error:b.hitch(this,this._handleError)})},_handleError:function(){e.set(this.checkProcessDiv,
"display","none");this.validUrl=!1;this.serviceURL.validate()},_handlePrintInfo:function(a){e.set(this.checkProcessDiv,"display","none");e.set(this.defaultFormat.domNode.parentNode.parentNode,"display","");e.set(this.defaultLayout.domNode.parentNode.parentNode,"display","");var c=!1,h=!1;if(a&&a.parameters)for(var d=a.parameters.length,b=0;b<d;b++){var f=a.parameters[b];if("Format"===f.name||"Layout_Template"===f.name){var k=a.parameters[b].choiceList,l=a.parameters[b].defaultValue,m=[];if(k)for(var g=
k.length,n=0;n<g;n++)m.push({name:k[n],id:k[n]});else m.push({name:l,id:l});"Format"===f.name?(this.memoryFormat.data=m,this.defaultFormat.set("store",this.memoryFormat),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultFormat?this.defaultFormat.set("value",this.config.defaultFormat):this.defaultFormat.set("value",l)):(this.memoryLayout.data=m,this.defaultLayout.set("store",this.memoryLayout),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultLayout?
this.defaultLayout.set("value",this.config.defaultLayout):this.defaultLayout.set("value",l))}"string"===typeof f.name&&"web_map_as_json"===f.name.toLowerCase()&&(c=!0);"string"===typeof f.name&&"output_file"===f.name.toLowerCase()&&(h=!0)}c&&h||(this.validUrl=!1,this.serviceURL.validate())},setConfig:function(a){this.config=a;this.loadPrintURL(a);a.defaultTitle?this.defaultTitle.set("value",d.stripHTML(a.defaultTitle)):this.defaultTitle.set("value","ArcGIS WebMap");a.defaultAuthor?this.defaultAuthor.set("value",
d.stripHTML(a.defaultAuthor)):this.defaultTitle.set("value","Web AppBuilder for ArcGIS");a.defaultCopyright&&this.defaultCopyright.set("value",d.stripHTML(a.defaultCopyright));this.copyrightEditableChk.setValue(!1!==a.copyrightEditable)},_onTitleBlur:function(){this.defaultTitle.set("value",d.stripHTML(this.defaultTitle.get("value")))},_onAuthorBlur:function(){this.defaultAuthor.set("value",d.stripHTML(this.defaultAuthor.get("value")))},_onCopyrightBlur:function(){this.defaultCopyright.set("value",
d.stripHTML(this.defaultCopyright.get("value")))},getConfig:function(){if(!this.serviceURL.validate()){var a=new q({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:b.hitch(this,function(){a.close()})}]});return!1}this.config.serviceURL=this.serviceURL.get("value");this.config.defaultTitle=d.stripHTML(this.defaultTitle.get("value"));this.config.defaultAuthor=d.stripHTML(this.defaultAuthor.get("value"));this.config.defaultCopyright=d.stripHTML(this.defaultCopyright.get("value"));this.config.defaultFormat=
this.defaultFormat.get("value");this.config.defaultLayout=this.defaultLayout.get("value");this.config.copyrightEditable=this.copyrightEditableChk.getValue();return this.config},loadPrintURL:function(){this._getPrintTaskURL(this.appConfig.portalUrl).then(b.hitch(this,function(a){this.serviceURL.set("value",a)}))},_getPrintTaskURL:function(a){var c=new w;if(this.config&&this.config.serviceURL)return c.resolve(this.config.serviceURL),c;z.getPortalSelfInfo(a).then(b.hitch(this,function(a){(a=a&&a.helperServices&&
a.helperServices.printTask&&a.helperServices.printTask.url)?c.resolve(a):c.reject("error")}),b.hitch(this,function(a){new q({message:this.nls.portalConnectionError||a&&a.message||"portal connection error"});c.reject("error");console.error(a)}));return c}})});