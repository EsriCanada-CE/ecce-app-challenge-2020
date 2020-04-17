// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/OverviewMap":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/html dojo/has dojo/dom-class dojo/dom-style dojo/dnd/Moveable dijit/_Widget dijit/_Templated ../map ../geometry/Point ../geometry/ScreenPoint ../layers/TiledMapServiceLayer ../layers/DynamicMapServiceLayer ../layers/VectorTileLayer ../layers/ArcGISTiledMapServiceLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/ArcGISImageServiceLayer ../layers/OpenStreetMapLayer ../virtualearth/VETiledLayer ../kernel ../config ../domUtils dojo/text!./templates/OverviewMap.html dojo/i18n!../nls/jsapi".split(" "),
function(h,e,c,p,m,k,g,q,u,v,w,r,t,n,b,d,a,l,A,B,y,C,z,x,D,E){h=h([u,v],{declaredClass:"esri.dijit.OverviewMap",widgetsInTemplate:!0,templateString:D,constructor:function(f,a){e.mixin(this,E.widgets.overviewMap);f=f||{};if(f.map){var d={};a&&(this._detached=!0,d=p.coords(a,!0));this.map=f.map;this.baseLayer=f.baseLayer;this.width=f.width||d.w||this.map.width/4;this.height=f.height||d.h||this.map.height/4;this.attachTo=f.attachTo||"top-right";this.expandFactor=f.expandFactor||2;this.color=f.color||
"#000000";this.opacity=f.opacity||.5;this.maximizeButton=!!f.maximizeButton;this.visible=!!f.visible;if(this.map.loaded)this._initialSetup();else var b=c.connect(this.map,"onLoad",this,function(){c.disconnect(b);b=null;this._initialSetup()});this._detached&&(this.visible=!0);this._maximized=!1}else console.error("esri.dijit.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments);(!this.domNode.parentNode||9>m("ie")&&"DIV"!==this.domNode.parentNode.nodeName)&&this.map.container.appendChild(this.domNode);
this._detached?(g.set(this._body,"display","block"),g.set(this._controllerDiv,"display","none"),g.set(this._maximizerDiv,"display","none"),this.map.loaded?this._initialize():c.connect(this.map,"onLoad",this,this._initialize)):("bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||k.add(this._maximizerDiv,"ovwDisabledButton"),k.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),
k.add(this._controllerDiv,"ovwShow"),k.add(this._maximizerDiv,"ovwMaximize"),this.visible&&this.map.loaded&&(this.visible=!1,this.show()));g.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate();this.overviewMap&&this.overviewMap.destroy();this.overviewMap=this.baseLayer=null;this.inherited(arguments)},resize:function(f){!f||0>=f.w||0>=f.h||this._resize(f.w,f.h)},show:function(){if(!this.visible){var f=this._controllerDiv;f.title=this.NLS_hide;k.remove(f,"ovwShow");k.add(f,
"ovwHide");x.show(this._body);x.show(this._maximizerDiv);this._initialize();this.visible=!0}},hide:function(){if(this.visible){var f=this._controllerDiv;f.title=this.NLS_show;k.remove(f,"ovwHide");k.add(f,"ovwShow");this._maximized&&this._maximizeHandler();x.hide(this._body);x.hide(this._maximizerDiv);this._deactivate();this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0])){var f=this.baseLayer||this._mainMapLayer,g=this.map.spatialReference,e=f.spatialReference;
if(e.wkid!==g.wkid&&e.wkt!==g.wkt)console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR);else{g=f.declaredClass;if(f instanceof n)if(-1!==g.indexOf("VETiledLayer"))this.baseLayer=new y({resourceInfo:f.getResourceInfo(),culture:f.culture,mapStyle:f.mapStyle,bingMapsKey:f.bingMapsKey});else if(-1!==g.indexOf("OpenStreetMapLayer"))this.baseLayer=new B({tileServers:f.tileServers});else if(-1!==g.indexOf("WebTiledLayer")){var g=f.initialExtent,e=f.fullExtent,h=f.tileInfo;this.baseLayer=new f.constructor(f.urlTemplate,
{initialExtent:g&&new g.constructor(g.toJson()),fullExtent:e&&new e.constructor(e.toJson()),tileInfo:h&&new h.constructor(h.toJson()),tileServers:f.tileServers&&f.tileServers.slice(0)})}else this.baseLayer=new a(f.url,{resourceInfo:f.getResourceInfo()});else if(f instanceof b)-1!==g.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new A(f.url):(this.baseLayer=new l(f.url),this.baseLayer.setImageFormat("png24"));else if(f instanceof d)this.baseLayer=new a("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
{});else{console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);return}!this._detached&&this.visible&&this._controllerDiv&&(f=function(){this.visible=!1;this.show()},this.baseLayer.loaded?f.call(this):c.connect(this.baseLayer,"onLoad",this,f))}}else console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var f=this._maximizerDiv;this._maximized?(f.title=this.NLS_maximize,k.remove(f,"ovwRestore"),
k.add(f,"ovwMaximize"),this._resize(this.width,this.height)):(f.title=this.NLS_restore,k.remove(f,"ovwMaximize"),k.add(f,"ovwRestore"),this._resize(this.map.width,this.map.height));this._maximized=!this._maximized},_resize:function(f,a){g.set(this._body,{width:f+"px",height:a+"px"});f=z.defaults.map.panDuration;a=this.overviewMap;z.defaults.map.panDuration=0;a&&(a.resize(!0),a.centerAt(this._focusExtent.getCenter()));z.defaults.map.panDuration=f},_initialize:function(){if(this.overviewMap)this._activate();
else{var a,d;d=9>m("ie")?this._body.firstChild:this._body.firstElementChild;this.overviewMap=a=new w(d,{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180});c.connect(a,"onLoad",this,function(){this._map_resize_override=e.hitch(a,this._map_resize_override);a.disableMapNavigation();this._activate()});a.addLayer(this.baseLayer)}},_activate:function(){var a=this.map,d=this.overviewMap;this._moveableHandle=new q(this._focusDiv);this._soeConnect=c.connect(a,
"onExtentChange",this,this._syncOverviewMap);this._ufoConnect=c.connect(a,"onPan",this,this._updateFocus);this._oecConnect=c.connect(d,"onExtentChange",this,this._ovwExtentChangeHandler);this._opaConnect=c.connect(d,"onPan",this,this._ovwPanHandler);this._ozsConnect=c.connect(d,"onZoomStart",this,function(){x.hide(this._focusDiv)});this._ozeConnect=c.connect(d,"onZoomEnd",this,function(){x.show(this._focusDiv)});this._omsConnect=c.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler);
this._syncOverviewMap(a.extent,null,null,null)},_deactivate:function(){c.disconnect(this._soeConnect);c.disconnect(this._ufoConnect);c.disconnect(this._oecConnect);c.disconnect(this._opaConnect);c.disconnect(this._ozsConnect);c.disconnect(this._ozeConnect);c.disconnect(this._omsConnect);this._moveableHandle&&(this._moveableHandle.destroy(),this._moveableHandle=null)},_syncOverviewMap:function(a,d,b,l){this._suspendPanHandling?this._suspendPanHandling=!1:(this._focusExtent=a,this.overviewMap.setExtent(a.expand(this.expandFactor),
!0))},_updateFocus:function(a){this._suspendPanHandling||(this._focusExtent=a,this._drawFocusDiv(a))},_drawFocusDiv:function(a,d){var b=this.overviewMap,f=b.toScreen(new r(a.xmin,a.ymax,b.spatialReference)),b=b.toScreen(new r(a.xmax,a.ymin,b.spatialReference));a=b.x-f.x;var b=b.y-f.y,l=!0;a>this.overviewMap.width&&b>this.overviewMap.height&&(l=!1);g.set(this._focusDiv,{left:f.x+(d?d.x:0)+"px",top:f.y+(d?d.y:0)+"px",width:a+"px",height:b+"px",display:l?"block":"none"})},_moveStopHandler:function(a){var d=
this._moveableHandle.node.style;a=this._focusExtent;var b=this.overviewMap,d=b.toMap(new t(parseInt(d.left,10),parseInt(d.top,10))),f=new r(a.xmin,a.ymax,b.spatialReference);this._focusExtent=a.offset(d.x-f.x,d.y-f.y);this._maximized?this._maximizeHandler():b.centerAt(this._focusExtent.getCenter());this._suspendPanHandling=!0;this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},_ovwPanHandler:function(a,d){this._drawFocusDiv(this._focusExtent,
d)}});m("extend-esri")&&e.setObject("dijit.OverviewMap",h,C);return h})},"esri/layers/VectorTileLayer":function(){(function(){var h=function(){var c;try{c=window.WebGLRenderingContext}catch(u){c=!1}var e;try{for(var h=document.createElement("canvas"),k=["webgl","experimental-webgl","webkit-3d","moz-webgl"],g=null,q=0;q<k.length;++q){try{g=h.getContext(k[q])}catch(u){}if(g)break}e=g}catch(u){e=!1}return c&&e?!0:!1}(),e=["dojo/_base/lang","dojo/has","dojo/Deferred","../sniff","./layer"];h&&e.push("./VectorTileLayerImpl");
define(e,function(c,e,m,k,g,q){g=q?q:g.createSubclass({declaredClass:"esri.layers.VectorTileLayer",constructor:function(){var g=new m;g.reject(Error("esri.layers.VectorTileLayer is not supported"));g.promise.otherwise(c.hitch(this,function(c){this._errorHandler(c)}))}});g.ACCESS_TOKEN=null;g.supported=function(){return h};e("extend-esri")&&c.setObject("layers.VectorTileLayer",g,k);return g})})()},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),
function(h,e,c,p,m,k,g,q,u,v,w,r,t,n,b){h=h(t,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(d){try{if(d=e.mixin({bingMapsKey:null,culture:"en-US"},d||{}),this.url=v.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=v.urlToObject(this.url),this.spatialReference=new w({wkid:102100}),this.tileInfo=new r({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},
{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,
scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,
scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=this.fullExtent=new n(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new w({wkid:102100})),e.mixin(this,d),this.hasAttributionData=this.showAttribution,this._initLayer=e.hitch(this,this._initLayer),this._errorHandler=e.hitch(this,this._errorHandler),this._getTileInfo=e.hitch(this,this._getTileInfo),this.bingMapsKey)this._getTileInfo();else throw Error("BingMapsKey must be provided.");
}catch(a){throw this.onError(a),a;}},_unsetMap:function(d,a){this.inherited("_unsetMap",arguments)},_getTileInfo:function(){if(this.mapStyle){var d=this._url.path+"/Imagery/Metadata/"+this.mapStyle,a=window.location.protocol;if(this.bingMapsKey){var l=this.resourceInfo;!this.loaded&&l?this._initLayer(l):b({url:d,content:e.mixin({},{uriScheme:"https:"===a?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,
error:this._errorHandler})}}},_initLayer:function(d,a){if(200!==d.statusCode)a=Error(),a.code=d.statusCode,a.message=d.statusDescription,a.details=d.errorDetails,a.authenticationResultCode=d.authenticationResultCode,this.onError(a);else try{this.resourceInfo=c.toJson(d);var b=d.resourceSets[0].resources[0],e=b.imageUrl.replace("{","${");this.tileServers=p.map(b.imageUrlSubdomains,function(a){var d=v.getProtocolForWebResource();return g.substitute(e,{subdomain:a}).replace("http:",d)});this._tsLength=
this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=this.copyright||"\x26copy; 2017 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var n=this.loadCallback;n&&(delete this.loadCallback,n(this))}}catch(y){this.onError(y)}},getAttributionData:function(){var d=new q,a=c.fromJson(this.resourceInfo),b;this.hasAttributionData&&a&&(b=e.getObject("resourceSets.0.resources.0.imageryProviders",!1,a));b?d.callback({contributors:b}):
(a=Error("Layer does not have attribution data"),a.log=m.isDebug,d.errback(a));return d},getTileUrl:function(d,a,b){return g.substitute(this.tileServers[a%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(d,a,b),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(d,a,b){var c="",g,l;for(l=d;0<l;l--)d="0",g=1<<l-1,0!=(b&g)&&d++,0!=(a&g)&&(d++,d++),c+=d;return c},setMapStyle:function(d){this.mapStyle=d;this._getTileInfo()},setCulture:function(d){this.culture=d;this._getTileInfo()},
setBingMapsKey:function(d){this.bingMapsKey=d},onMapStyleChange:function(){}});e.mixin(h,{MAP_STYLE_AERIAL:"aerial",MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabelsOnDemand",MAP_STYLE_ROAD:"roadOnDemand"});k("extend-esri")&&e.setObject("virtualearth.VETiledLayer",h,u);return h})},"widgets/OverviewMap/utils":function(){define("dojo/_base/lang dojo/_base/array dojo/string dojo/Deferred esri/lang esri/request dojo/_base/url esri/layers/TileInfo jimu/portalUtils esri/layers/ArcGISTiledMapServiceLayer esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/virtualearth/VETiledLayer esri/layers/OpenStreetMapLayer esri/layers/ImageParameters".split(" "),
function(h,e,c,p,m,k,g,q,u,v,w,r,t,n,b){var d={TYPE:{BASE_MAP:"baseMap",ARCGIS_TILED_MAP:"tiledMapService",ARCGIS_DYNAMIC_MAP_SERVICE:"dynamicMapService",ARCGIS_IMAGE_SERVICE:"imageService",OSM:"openStreetMap",BING_ROAD:"bingMapsRoad",BING_AERIAL:"bingMapsAerial",BING_HYBRID:"bingMapsHybrid"},createBaseLayer:function(a,c,g){var l=new p,e=null,h=a.url,k=a.type;a=a.veLayerInfo;k===d.TYPE.BASE_MAP?l.resolve({layer:"BaseMap"}):k===d.TYPE.ARCGIS_TILED_MAP?d.valid.isArcGISLayersValid(h,c,k).then(function(a){a&&
!0===a.res?(e=new v(h),l.resolve({layer:e})):l.resolve({layer:null,err:a.err})},function(a){l.resolve({res:!1,err:a})}):k===d.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?d.valid.isArcGISLayersValid(h,c,k).then(function(a){if(a&&!0===a.res){a=a.info;var d={};a&&a.supportedImageFormatTypes&&-1!==a.supportedImageFormatTypes.indexOf("PNG24")&&(d.imageParameters=new b,d.imageParameters.format="png24");e=new w(h,d);l.resolve({layer:e})}else l.resolve({layer:null,err:a.err})},function(a){l.resolve({res:!1,err:a})}):
k===d.TYPE.ARCGIS_IMAGE_SERVICE?d.valid.isArcGISLayersValid(h,c,k).then(function(a){a&&!0===a.res?(e=new r(h,{}),l.resolve({layer:e})):l.resolve({layer:null,err:a.err})},function(a){l.resolve({res:!1,err:a})}):k===d.TYPE.OSM?(e=new n(h,{}),l.resolve({layer:e})):k!==d.TYPE.BING_ROAD&&k!==d.TYPE.BING_AERIAL&&k!==d.TYPE.BING_HYBRID||!a?l.resolve({layer:null}):(c=d.layers.getBingMapKey(g),c&&a.isKeyInPortal||(c="__invalidKey",console.error("OverviewMap Error: BingMapsKey must be provided")),e=new t({bingMapsKey:c,
mapStyle:d.layers._getVEStyle(k)}),l.resolve({layer:e}));return l},layers:{_getLayerInfoSR:function(a){return a.spatialReference||a.extent&&a.extent.spatialReference},_getTileServers:function(a){var d=[],b=new g(a.url);if(a.subDomains&&0<a.subDomains.length&&1<b.authority.split(".").length){var n;e.forEach(a.subDomains,function(a){-1<b.authority.indexOf("${subDomain}")?n=b.scheme+"://"+c.substitute(b.authority,{subDomain:a})+"/":-1<b.authority.indexOf("{subDomain}")&&(n=b.scheme+"://"+b.authority.replace(/\{subDomain\}/gi,
a)+"/");d.push(n)},this)}return d&&0<d.length?d:null},_getVEStyle:function(a){switch(a){case d.TYPE.BING_AERIAL:return t.MAP_STYLE_AERIAL;case d.TYPE.BING_HYBRID:return t.MAP_STYLE_AERIAL_WITH_LABELS;case d.TYPE.BING_ROAD:return t.MAP_STYLE_ROAD;default:return t.MAP_STYLE_AERIAL}},fetchLayerInfo:function(a){var d=new p;k({url:a,handleAs:"json",callbackParamName:"callback",timeout:15E3,content:{f:"json"}}).then(h.hitch(this,function(a){d.resolve(a)}),function(a){d.reject(a)});return d},getBingMapKey:function(a){return(a=
window.portalSelf||a&&u.getPortal(a.appConfig.portalUrl))&&a.bingKey?a.bingKey:""}},valid:{baseLayerVerification:function(a,b){var c=new p,g=b.spatialReference;d.createBaseLayer(a,b).then(function(a){if(a.layer){var b=d.layers._getLayerInfoSR(a.layer);d.valid.sameSpatialReference(g,b)||"BaseMap"===a.layer?c.resolve({res:!0}):c.resolve({res:!1})}else c.resolve({res:!1,err:a.err})},function(a){c.resolve({res:!1,err:a})});return c},ArcGISLayersTypeVerification:function(a,b,c){a=a.toLowerCase();if(0<
a.indexOf("/featureserver")||0<a.indexOf("/mapserver"))if(!b||"string"!==typeof b.type||"Feature Layer"!==b.type&&"Table"!==b.type){if(0<a.indexOf("/featureserver"))return!1;if(0<a.indexOf("/mapserver"))return b.tileInfo?c===d.TYPE.ARCGIS_TILED_MAP||c===d.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1:c===d.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1}else return!1;else if(0<a.indexOf("/imageserver"))return c===d.TYPE.ARCGIS_IMAGE_SERVICE?!0:!1},isArcGISLayersValid:function(a,b,c){var g=new p;d.layers.fetchLayerInfo(a).then(function(e){var n=
null,l=null,n=d.layers._getLayerInfoSR(e),l=b&&b.spatialReference;n&&l&&d.valid.sameSpatialReference(l,n)?!0===d.valid.ArcGISLayersTypeVerification(a,e,c)?g.resolve({res:!0,info:e}):g.resolve({res:!1,err:"layerType"}):n&&l&&!d.valid.sameSpatialReference(l,n)?g.resolve({res:!1,err:"wkid"}):g.resolve({res:!1})},function(a){g.resolve({res:!1,err:a})});return g},tileInfoStr:function(a){try{return new q(JSON.parse(a)),!0}catch(l){return l}},isHaveBingKey:function(){return d.layers.getBingMapKey()?!0:!1},
sameSpatialReference:function(a,b){var d=[102113,102100,3857,4326];return a&&b&&m.isDefined(a.wkid)&&m.isDefined(b.wkid)&&-1!==d.indexOf(a.wkid)&&-1!==d.indexOf(b.wkid)||a&&b&&(m.isDefined(a.wkid)&&m.isDefined(b.wkid)&&a.wkid===b.wkid||m.isDefined(a.latestWkid)&&m.isDefined(b.wkid)&&a.latestWkid===b.wkid||m.isDefined(a.wkid)&&m.isDefined(b.latestWkid)&&a.wkid===b.latestWkid||m.isDefined(a.latestWkid)&&m.isDefined(b.latestWkid)&&a.latestWkid===b.latestWkid)||a&&b&&m.isDefined(a.wkt)&&m.isDefined(b.wkt)&&
a.wkt===b.wkt?!0:!1}}};return d})},"widgets/OverviewMap/a11y/Widget":function(){define("dojo/_base/lang dojo/on dojo/_base/html jimu/utils dojo/aspect dojo/keys".split(" "),function(h,e,c,p,m,k){return{a11y_init:function(){c.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);c.setAttr(this.overviewMapDijit._maximizerDiv,"tabindex",0);"LaunchpadTheme"===window.getAppConfig().theme.name&&(this._a11y_isLaunchpadTheme=!0);this._a11y_isLaunchpadTheme?(this._a11y_index||(this._a11y_index=c.getAttr(this.domNode,
"tabindex"),c.removeAttr(this.domNode,"tabindex")),this._a11y_index&&c.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",parseInt(this._a11y_index,10)),p.initFirstFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)):(c.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",0),p.initFirstFocusNode(this.domNode,this.overviewMapDijit._controllerDiv));p.initLastFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)},a11y_initEvents:function(){this._a11y_RAW_DOM_NODE_HEIGHT=c.getStyle(this.domNode,
"height");this._closedBy508Controller=this._openedBy508Enter=!1;this._initToShow=!!this.config.overviewMap.visible;this.own(e(this.domNode,"keydown",h.hitch(this,function(g){var e=g.target;!1===this._initToShow&&g.keyCode===k.ENTER&&c.hasClass(e,this.baseClass)&&(this._openedBy508Enter=!0);!0===this._a11y_isLaunchpadTheme||g.keyCode!==k.TAB||c.hasClass(e,this.baseClass)||(g.preventDefault(),c.hasClass(e,"ovwController")?this.overviewMapDijit._maximizerDiv.focus():c.hasClass(e,"ovwMaximizer")&&this.overviewMapDijit._controllerDiv.focus())})));
this.own(e(this.domNode,"focus",h.hitch(this,function(){!0===this._closedBy508Controller||this._a11y_isLaunchpadTheme||!1===this._initToShow&&p.isInNavMode()&&!this._openedBy508Enter&&10>=c.getStyle(this.domNode,"height")&&this.overviewMapDijit.show()})));this.own(e(this.domNode,"blur",h.hitch(this,function(){!1===this._initToShow&&p.isInNavMode()&&!this._openedBy508Enter&&!0!==this._a11y_isLaunchpadTheme&&setTimeout(h.hitch(this,function(){c.isDescendant(document.activeElement,this.domNode)||this.overviewMapDijit.hide()}),
10)})));this.own(e(this.overviewMapDijit._controllerDiv,"keydown",h.hitch(this,function(c){c.keyCode===k.ENTER&&(this.overviewMapDijit.visible?(this.overviewMapDijit.hide(),this._openedBy508Enter=!1,this._closedBy508Controller=!0,!0!==this._a11y_isLaunchpadTheme?this.domNode.focus():this.overviewMapDijit._controllerDiv.focus()):(this.overviewMapDijit.show(),!1===this._initToShow&&(this._openedBy508Enter=!0,this._closedBy508Controller=!1),!0===this._a11y_isLaunchpadTheme&&this.overviewMapDijit._maximizerDiv.focus()))})));
this.own(e(this.overviewMapDijit._maximizerDiv,"keydown",h.hitch(this,function(c){c.keyCode===k.ENTER&&this.overviewMapDijit._maximizeHandler();!0===this._a11y_isLaunchpadTheme&&this.overviewMapDijit.visible&&c.keyCode===k.ESCAPE&&(this.overviewMapDijit.hide(),this.overviewMapDijit._controllerDiv.focus())})))},a11y_forLaunchpadThemeStyle:function(){this.own(m.after(this.overviewMapDijit,"_maximizeHandler",h.hitch(this,function(){var e=this.overviewMapDijit.overviewMap.container.parentElement||this.overviewMapDijit.overviewMap.container.parentNode,
h=e.parentElement||e.parentNode;this.overviewMapDijit._maximized?(c.addClass(e,"a11y_maximized"),c.addClass(h,"a11y_maximized")):(c.removeClass(e,"a11y_maximized"),c.removeClass(h,"a11y_maximized"))}),this))}}})},"widgets/OverviewMap/_build-generate_module":function(){define(["dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/OverviewMap.html":'\x3cdiv class\x3d"esriOverviewMap"\x3e\r\n  \x3cdiv class\x3d"ovwContainer" dojoattachpoint\x3d"_body" style\x3d"width: ${width}px; height: ${height}px;"\x3e\r\n    \x3cdiv id\x3d"${id}-map" style\x3d"width: 100%; height: 100%;"\x3e\r\n      \x3cdiv class\x3d"ovwHighlight" dojoattachpoint\x3d"_focusDiv" title\x3d"${NLS_drag}" style\x3d"border: 1px solid ${color}; background-color: ${color};"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwController" title\x3d"${NLS_show}" dojoattachpoint\x3d"_controllerDiv" dojoattachevent\x3d"onclick: _visibilityHandler"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwMaximizer" title\x3d"${NLS_maximize}" dojoattachpoint\x3d"_maximizerDiv" dojoattachevent\x3d"onclick: _maximizeHandler"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"*now":function(h){h(['dojo/i18n!*preload*widgets/OverviewMap/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/aspect jimu/BaseWidget esri/dijit/OverviewMap jimu/utils ./utils dojo/dom-style ./a11y/Widget".split(" "),function(h,e,c,p,m,k,g,q,u,v,w,r,t){h=h([q],{baseClass:"jimu-widget-overview",overviewMapDijit:null,_showDijit:!1,_handles:null,startup:function(){this._handles=[];this.inherited(arguments);this.createOverviewMap();this.map&&this.own(m(this.map,"layer-add",e.hitch(this,this._onMainMapBasemapChange)))},
setPosition:function(e){this.position=e;c.place(this.domNode,this.map.id);this._processAttachTo(this.config,e);this.started&&this._updateDomPosition(this.config.overviewMap.attachTo)},_processAttachTo:function(c,b){"undefined"===typeof c.overviewMap&&(c.overviewMap={});"undefined"===typeof c.overviewMap.attachTo&&b&&(void 0!==b.top&&void 0!==b.left?c.overviewMap.attachTo=window.isRTL?"top-right":"top-left":void 0!==b.top&&void 0!==b.right?c.overviewMap.attachTo=window.isRTL?"top-left":"top-right":
void 0!==b.bottom&&void 0!==b.left?c.overviewMap.attachTo=window.isRTL?"bottom-right":"bottom-left":void 0!==b.bottom&&void 0!==b.right&&(c.overviewMap.attachTo=window.isRTL?"bottom-left":"bottom-right"))},_updateDomPosition:function(g){if(this.overviewMapDijit){var b={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto",zIndex:this.position&&this.position.zIndex||0},d=this._getOverviewPositionByAttach(g);e.mixin(b,d);b=v.getPositionStyle(b);b.position="absolute";r.set(this.domNode,b);r.set(this.overviewMapDijit.domNode,
b);if(this.overviewMapDijit.domNode){c.removeClass(this.overviewMapDijit.domNode,["ovwTL","ovwTR","ovwBL","ovwBR"]);b="";switch(g){case "top-left":b="ovwTL";break;case "top-right":b="ovwTR";break;case "bottom-left":b="ovwBL";break;case "bottom-right":b="ovwBR";break;default:b="ovwTL"}c.addClass(this.overviewMapDijit.domNode,b);c.addClass(this.domNode,b)}}},createOverviewMap:function(c){var b=e.clone(this.config.overviewMap);b.map=this.map;void 0!==c&&(b.visible=c);var d=b.visible;b.visible=!1;b.maximizeButton=
"maximizeButton"in b?b.maximizeButton:!0;b.width=200;b.height=200;b.expandFactor=2;b.attachTo=this.config.overviewMap.attachTo;this._getBaseLayerMap().then(e.hitch(this,function(a){a&&a.layer&&"string"!==typeof a.layer?b.baseLayer=a.layer:b.baseLayer&&delete b.baseLayer;this.overviewMapDijit=new u(b);this._handles.push(g.after(this.overviewMapDijit,"show",e.hitch(this,"_afterOverviewShow")));this._handles.push(g.after(this.overviewMapDijit,"hide",e.hitch(this,"_afterOverviewHide")));this.overviewMapDijit.startup();
this._updateDomPosition(b.attachTo);this.domNode.appendChild(this.overviewMapDijit.domNode);this.a11y_init();this.a11y_initEvents();this.a11y_forLaunchpadThemeStyle();d&&this.overviewMapDijit.show()}))},_getOverviewPositionByAttach:function(c){var b={};"top-left"===c?(b.left=0,b.top=0):"top-right"===c?(b.right=0,b.top=0):"bottom-left"===c?(b.bottom=0,b.left=0):"bottom-right"===c&&(b.bottom=0,b.right=0);window.isRTL&&(isFinite(b.left)?(b.right=b.left,delete b.left):(b.left=b.right,delete b.right));
return b},_onMainMapBasemapChange:function(c){c.layer&&c.layer._basemapGalleryLayerType&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onPositionChange:function(c){this.position=c;this.config.overviewMap.attachTo||(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},_destroyOverviewMap:function(){p.forEach(this._handles,function(c){c&&"function"===typeof c.remove&&c.remove()});this.overviewMapDijit&&this.overviewMapDijit.destroy&&(this.overviewMapDijit.destroy(),
this.overviewMapDijit=null,c.empty(this.domNode))},onReceiveData:function(c){"BasemapGallery"===c&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onOpen:function(){this._destroyOverviewMap();this.createOverviewMap(this._showDijit)},onClose:function(){this._destroyOverviewMap()},_afterOverviewHide:function(){this._showDijit=!1;r.set(this.domNode,{width:"auto",height:"auto"})},_afterOverviewShow:function(){this._showDijit=!0;r.set(this.domNode,{width:this.overviewMapDijit.width+
"px",height:this.overviewMapDijit.height+"px"})},_getBaseLayerMap:function(){var c=new k;this.config.overviewMap&&this.config.overviewMap.baseLayer?w.createBaseLayer(this.config.overviewMap.baseLayer,this.map,this).then(function(b){c.resolve(b)}):c.resolve(null);return c}});h.extend(t);return h});