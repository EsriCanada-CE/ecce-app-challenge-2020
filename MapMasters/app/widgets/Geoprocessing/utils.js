// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/array","dojo/Deferred","esri/request"],function(f,h,e){var b={},g=0;b.promisifyGetValue=function(a){var c=a.getValue;a.getValue=function(){var d=c.apply(a);if(null!==d&&d.then)return d;var b=new h;b.resolve(d);return b}};b.allowShareResult=function(a){return f.some(a.outputParams,function(a){return"GPRecordSet"===a.dataType||"GPFeatureRecordSetLayer"===a.dataType&&a.defaultValue&&a.defaultValue.geometryType})};b.getServiceDescription=function(a){var c;return e({url:a,content:{f:"json"},
handleAs:"json",callbackParamName:"callback"}).then(function(d){c=d;return b.getGPServerDescription(a).then(function(a){c.serverInfo=a;c.useResultMapServer=a.hasResultMapServer;return b.uploadSupported(a).then(function(a){c.serverInfo.supportsUpload=a.supportsUpload;"maxUploadFileSize"in a&&(c.serverInfo.maxUploadFileSize=a.maxUploadFileSize);return c})})})};b.getGPServerDescription=function(a){var c={url:b.getGPServerUrl(a),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return e(c,
{useProxy:!1}).then(function(a){var b={};b.currentVersion=a.currentVersion||0;b.url=c.url;b.hasResultMapServer="esriExecutionTypeAsynchronous"===a.executionType&&"resultMapServerName"in a&&""!==a.resultMapServerName;b.resultMapServerName=a.resultMapServerName;return b})};b.getGPServerUrl=function(a){if(!/\/GPServer\/.+$/.test(a))return"";var b=a.lastIndexOf("/");return a.substr(0,b+1)};b.getResultMapServerUrl=function(a,b){if(!/\/rest\/services\//.test(a))return"";var c=a.search(/\/rest\/services\//);
return a.substr(0,c+15)+b+"/MapServer"};b.uploadSupported=function(a){if(10.1<=a.currentVersion)return e({url:a.url+"uploads/info",content:{f:"json"},handleAs:"json"}).then(function(a){return{supportsUpload:!0,maxUploadFileSize:a.maxUploadFileSize}},function(){return{supportsUpload:!1}});a=new h;a.resolve({supportsUpload:!1});return a};b.getResultMapLayers=function(a,c){a={url:b.getResultMapServerUrl(a,c),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return e(a,{useProxy:!1}).then(function(a){var b=
f.map(a.layers,function(a){return a.name});f.forEach(a.tables,function(a){b.push(a.name)});return b})};b.useDynamicSchema=function(a,b){return"useDynamicSchema"in a?!0===a.useDynamicSchema:!0===b.useDynamicSchema};b.uniqueId=function(){var a=Date.now();a<=g?a=++g:g=a;return a};return b});