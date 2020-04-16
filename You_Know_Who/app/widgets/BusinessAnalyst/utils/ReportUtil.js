// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/Deferred dojo/promise/all dojo/when dojo/_base/array esri/request jimu/portalUtils dojo/i18n!../nls/strings".split(" "),function(n,t,r,g,h,u,k){STANDARD_INFOGRAPHIC_TYPEKEYWORD="esriReportPlayerStandardInfographic";var p=[];p.US=["LANDSCAPESUMMARYREPORT"];return{_ownedCachedCustomReports:null,_sharedCachedCustomReports:null,_cachedCountryClassicReports:[],_cachedInfographicReports:null,_countryInitDfds:[],getAvailableClassicReports:function(b,f){var d=this,c=[],a=new n,e;f&&g.forEach(f.countryConfig,
function(c){b==c.countryID&&(e=c)});e||(e={countryID:b,allowEsriReports:!0,allowEsriInfographics:!0,allowMyReports:!0,allowMyInfographics:!0,allowSharedReports:!0,allowSharedInfographics:!0,disabledReports:[],disabledInfographics:[]});var h=null,l=null,m=null;e.allowEsriReports&&(h=c.length,c.push({value:"esriReports",label:k.esriReports,children:[]}));e.allowMyReports&&(l=c.length,c.push({value:"myReports",label:k.myReports,children:[]}));e.allowSharedReports&&(m=c.length,c.push({value:"sharedReports",
label:k.sharedReports,children:[]}));r(this._initReports(b),function(){e.allowEsriReports&&d._cachedCountryClassicReports[b]&&0<d._cachedCountryClassicReports[b].length&&g.forEach(d._cachedCountryClassicReports[b],function(a){e.disabledReports.includes(a.reportID)||p[b]&&p[b].includes(a.reportID.toUpperCase())||c[h].children.push(d._formatClassicReportsForDropDown(a))});var f=["esriWebInfographicReport","esriWebSingleInfographic","esriWebBlankInfographic","esriWebHiddenInfographic","esriWebComparisonReport"];
e.allowMyReports&&g.forEach(d._ownedCachedCustomReports,function(a){a.properties.countries.includes(b)&&!e.disabledReports.includes(a.id)&&(a.typeKeywords.some(function(b){return 0<=f.indexOf(b)})||c[l].children.push(d._formatClassicReportsForDropDown(a)))});e.allowSharedReports&&g.forEach(d._sharedCachedCustomReports,function(a){a.properties.countries.includes(b)&&!e.disabledReports.includes(a.id)&&(a.typeKeywords.some(function(b){return 0<=f.indexOf(b)})||c[m].children.push(d._formatClassicReportsForDropDown(a)))});
var q=function(b,c){b=b.label.toUpperCase();c=c.label.toUpperCase();var a=0;b>c?a=1:b<c&&(a=-1);return a};0<c.length&&c[0].children.sort(q);1<c.length&&c[1].children.sort(q);2<c.length&&c[2].children.sort(q);a.resolve(c)});return a},_formatClassicReportsForDropDown:function(b){return b.metadata?{label:b.metadata.title,value:b.reportID,reportType:b.metadata.type}:{label:b.title,value:b.id,reportType:b.properties.type,item:{itemid:b.id,url:portalUrl,token:esri.id.credentials[0].token}}},getAvailableInfographicReports:function(b,
f){var d=this,c=[],a=new n,e;f&&g.forEach(f.countryConfig,function(c){b==c.countryID&&(e=c)});e||(e={countryID:b,allowEsriReports:!0,allowEsriInfographics:!0,allowMyReports:!0,allowMyInfographics:!0,allowSharedReports:!0,allowSharedInfographics:!0,disabledReports:[],disabledInfographics:[]});var h=null,l=null,m=null;e.allowEsriInfographics&&(h=c.length,c.push({value:"esriReports",label:k.esriInfographics,children:[]}));e.allowMyInfographics&&(l=c.length,c.push({value:"myReports",label:k.myInfographics,
children:[]}));e.allowSharedInfographics&&(m=c.length,c.push({value:"sharedReports",label:k.sharedInfographics,children:[]}));r(this._initReports(b),function(){e.allowEsriInfographics&&g.forEach(d._cachedInfographicReports,function(a){a.properties.countries.includes(b)&&!e.disabledInfographics.includes(a.id)&&c[h].children.push(d._formatInfographicReportsForDropDown(a))});e.allowMyInfographics&&g.forEach(d._ownedCachedCustomReports,function(a){a.properties.countries.includes(b)&&!e.disabledInfographics.includes(a.id)&&
(a.typeKeywords.includes("esriWebInfographicReport")||d._isOldPortalInfographic(a))&&c[l].children.push(d._formatInfographicReportsForDropDown(a))});e.allowSharedInfographics&&g.forEach(d._sharedCachedCustomReports,function(a){a.properties.countries.includes(b)&&!e.disabledInfographics.includes(a.id)&&(a.typeKeywords.includes("esriWebInfographicReport")||d._isOldPortalInfographic(a))&&c[m].children.push(d._formatInfographicReportsForDropDown(a))});var f=function(a,b){a=a.label.toUpperCase();b=b.label.toUpperCase();
var c=0;a>b?c=1:a<b&&(c=-1);return c};0<c.length&&c[0].children.sort(f);1<c.length&&c[1].children.sort(f);2<c.length&&c[2].children.sort(f);a.resolve(c)});return a},_isOldPortalInfographic:function(b){return b.properties&&b.properties.isHidden&&"true"===b.properties.isHidden?!1:b.properties&&b.properties.isGraphicReport&&"true"===b.properties.isGraphicReport?!0:!1},_formatInfographicReportsForDropDown:function(b){return{label:b.title,value:b.id}},_initReports:function(b){var f=[],d=this;if(this._countryInitDfds[b])return this._countryInitDfds[b];
this._countryInitDfds[b]=new n;u.getPortal(portalUrl).loadSelfInfo().then(function(c){c=c&&c.helperServices&&c.helperServices.geoenrichment&&c.helperServices.geoenrichment.url?c.helperServices.geoenrichment.url:"https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver";d._cachedCountryClassicReports[b]||f.push(h({url:c+"/Geoenrichment/reports/"+b,content:{appID:"webappbuilder",f:"json",langCode:"en-us"}}).then(function(a){d._cachedCountryClassicReports[b]=a.reports},function(a){alert(a)}));
d._cachedInfographicReports||(d._cachedInfographicReports=[],f.push(h({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:"typekeywords:(esriReportPlayerStandardInfographic jsapiVersion3.31)"}}).then(function(a){g.forEach(a.results,function(a){d._cachedInfographicReports.push(a)})},function(a){alert(a)})));d._ownedCachedCustomReports||(d._ownedCachedCustomReports=[],f.push(h({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",
f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:'type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) owner:'+esri.id.credentials[0].userId}}).then(function(a){g.forEach(a.results,function(a){d._ownedCachedCustomReports.push(a)})},function(a){alert(a)})));d._sharedCachedCustomReports||(d._sharedCachedCustomReports=[],f.push(h({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",
q:'access:shared type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) NOT owner:'+esri.id.credentials[0].userId}}).then(function(a){g.forEach(a.results,function(a){d._sharedCachedCustomReports.push(a)})},function(a){alert(a)})),f.push(h({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:'access:org type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) NOT owner:'+
esri.id.credentials[0].userId}}).then(function(a){g.forEach(a.results,function(a){d._sharedCachedCustomReports.push(a)})},function(a){alert(a)})));0===f.length?d._countryInitDfds[b].resolve():t(f).then(function(){d._countryInitDfds[b].resolve()})});return this._countryInitDfds[b]}}});