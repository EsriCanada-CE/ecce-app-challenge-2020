// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/filter-list.html":'\x3cdiv\x3e\r\n  \x3cul class\x3d"filter-list" data-dojo-attach-point\x3d"filterList"\x3e\x3c/ul\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./filter-list.html dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/on dojo/dom-attr dojo/keys dijit/_WidgetsInTemplateMixin dojo/dom-class jimu/utils jimu/BaseWidget jimu/filterUtils jimu/dijit/FilterParameters esri/symbols/jsonUtils jimu/symbolUtils jimu/LayerInfos/LayerInfos jimu/FilterManager esri/request dojo/Evented dojo/NodeList dojo/NodeList-dom".split(" "),function(u,v,q,g,e,h,p,k,m,w,l,r,x,y,z,A,t,B,C,D,E){return u([x,w,E],{name:"NearMeFilter",
templateString:v,lastFocusNode:null,baseClass:"jimu-widget-nearme-filter",_itemTemplate:'\x3cli aria-label\x3d"${layerTitle}" role\x3d"listitem" tabindex\x3d"0" class\x3d"filter-item" data-index\x3d"${index}"\x3e\x3cdiv class\x3d"header" \x3e\x3cspan role\x3d"button" aria-label\x3d"${toggleTip}" class\x3d"arrow jimu-float-leading jimu-trailing-margin05" title\x3d"${toggleTip}" \x3e\x3c/span\x3e\x3cspan class\x3d"icon"\x3e\x3cimg src\x3d"${icon}" /\x3e\x3c/span\x3e\x3cspan class\x3d"icon symbolIcon" style\x3d"display:none;"\x3e\x3c/span\x3e\x3cspan class\x3d"item-title"\x3e${title}\x3c/span\x3e\x3cspan class\x3d"cando jimu-float-trailing esriCTFliterListCheckbox"\x3e\x3c/span\x3e\x3cspan class\x3d"doing jimu-float-trailing esriCTFliterListCheckbox"\x3e\x3c/span\x3e\x3cspan class\x3d"done jimu-float-trailing esriCTFliterListCheckbox"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"body"\x3e\x3cdiv class\x3d"parameters"\x3e\x3c/div\x3e\x3cdiv tabindex\x3d"0" role\x3d"button" aria-label\x3d"${apply}" class\x3d"jimu-btn apply jimu-float-trailing jimu-trailing-margin25"\x3e${apply}\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e',
_layerTitleTemplate:'\x3cdiv class\x3d"esriCTGroupFilterLayerName"\x3e${layerTitle}\x3c/div\x3e',_store:null,totalAppliedFilters:0,postCreate:function(){this.inherited(arguments);this.totalAppliedFilters=0;this._updateClearAllButtonState();this.own(p(this.clearAllButton,"click",e.hitch(this,this._clearAllFilters)));this.own(p(this.clearAllButton,"keydown",e.hitch(this,function(a){a.keyCode!==m.ENTER&&a.keyCode!==m.SPACE||this._clearAllFilters()})));this._store={};this.layerInfosObj=B.getInstanceSync();
this.filterUtils=new y;this.filterManager=C.getInstance();var a=this.config.filters,b={},c=[];this.config.groupFiltersByLayer?(q.forEach(a,function(a,d){b[a.layerId]||(b[a.layerId]=[],c.push(a.layerId));a.index=d;b[a.layerId].push(a)}),q.forEach(c,e.hitch(this,function(a){var c=this.layerInfosObj.getLayerInfoById(a),c=e.replace(this._layerTitleTemplate,{layerTitle:c.layerObject.name||c.title},/\$\{([^\}]+)\}/ig),c=g.toDom(c);g.place(c,this.filterList);for(c=0;c<b[a].length;c++)this._addFilterInList(b[a][c],
b[a][c].index)}))):q.forEach(a,e.hitch(this,function(a,b){this._addFilterInList(a,b)}))},getLastNode:function(){var a;this.lastFocusNode&&(l.contains(this.lastFocusNode,"has-ask-for-value")?(a=r.getFocusNodesInDom(this.lastFocusNode),a=l.contains(this.lastFocusNode,"config-parameters")?a.reverse()[0]:h(".arrow",this.lastFocusNode)[0]):a=this.lastFocusNode);return a},_addFilterInList:function(a,b){var c=this.filterUtils.isAskForValues(a.filter),f={icon:a.icon?r.processUrlInWidgetConfig(a.icon,this.folderUrl):
this.folderUrl+"/css/images/default_task_icon.png",index:b,title:a.name,layerTitle:a.layerTitle?a.layerTitle:a.name,toggleTip:this.nls.toggleTip,hasValue:c?window.appInfo.isRunInMobile?"block !important":"":"none",isAskForValue:c,apply:e.getObject("jimuNls.common.apply",!1,window)||"Apply"};this._store[a.layerId]||(this._store[a.layerId]={mapFilterControls:{}});b=e.replace(this._itemTemplate,f,/\$\{([^\}]+)\}/ig);var d=g.toDom(b);this.lastFocusNode=d;g.place(d,this.filterList);if(a.symbol){b=h(".icon",
d);g.setStyle(b[0],"display","none");g.setStyle(b[1],"display","inline-block");var n=A.fromJson(a.symbol),l=a.symbol.url||a.symbol.imageData;l?(n.setWidth(25),n.setHeight(25)):n.setSize(25);n=l?t.createSymbolNode(n):t.createSymbolNode(n,{width:26,height:26});g.place(n,b[1])}this.own(h(".header",d).on("click",e.hitch(this,"enableFilter",d,a,f,!1)));c?(g.addClass(d,"has-ask-for-value"),k.set(d,"tabindex","-1")):(this.own(p(h(".header",d)[0].parentElement,"keydown",e.hitch(this,"enableFilter",d,a,f,
!0))),g.addClass(d,"not-has-ask-for-value"));c=h(".apply",d);b=h(".arrow",d);"none"!==f.hasValue?(k.set(c[0],"type",""),k.set(b[0],"type",""),k.set(b[0],"tabindex","0"),this.own(b.on("click",e.hitch(this,"configFilter",d,a))),this.own(b.on("keydown",e.hitch(this,function(b){if(b.keyCode===m.ENTER||b.keyCode===m.SPACE)this.configFilter(d,a),b.stopPropagation()}))),this.own(c.on("click",e.hitch(this,"applyFilterValues",d,a,!1))),this.own(c.on("keydown",e.hitch(this,"applyFilterValues",d,a,!0))),g.addClass(d,
"requesting"),this.configFilter(d,a,null,e.hitch(this,function(){this.config.collapse&&g.removeClass(d,"config-parameters");a.autoApplyWhenWidgetOpen&&this.enableFilter(d,a,f)}))):(k.set(c[0],"type","hidden"),k.set(b[0],"type","hidden"),a.autoApplyWhenWidgetOpen&&this.enableFilter(d,a,f))},startup:function(){this.inherited(arguments);this.resize()},_getPriorityOfMapFilter:function(a){a=e.getObject(a+".mapFilterControls",!1,this._store);var b=0,c;for(c in a){var f=a[c];f.priority>b&&(b=f.priority)}return b},
_getMapFilterControl:function(a){a=e.getObject(a+".mapFilterControls",!1,this._store);var b=!0,c;for(c in a){var f=a[c];0<f.priority&&(b=!!f.enable)}return b},_setItemFilter:function(a,b,c,f){this._store[a]["filter_item_"+b]=c;c=this._getPriorityOfMapFilter(a);e.setObject(a+".mapFilterControls.filter_item_"+b,{enable:f,priority:c+1},this._store)},_removeItemFilter:function(a,b){delete this._store[a]["filter_item_"+b];delete this._store[a].mapFilterControls["filter_item_"+b]},_getExpr:function(a){if(!this._store[a])return null;
var b=[];a=this._store[a];for(var c in a){var f=a[c];f&&"mapFilterControls"!==c&&b.push("("+f+")")}return b.join(" AND ")},_bindMapUpdateEvents:function(a,b){p.once(this.map,"update-start",e.hitch(this,function(){g.addClass(a,"applying");g.removeClass(a,"applied")}));p.once(this.map,"update-end",e.hitch(this,function(){b?g.addClass(a,"applied"):g.removeClass(a,"applied");g.removeClass(a,"applying")}))},enableFilter:function(a,b,c,f,d){if(!f||d.keyCode===m.ENTER||d.keyCode===m.SPACE)if(!g.hasClass(a,
"config-parameters")||a.filterParams&&a.filterParams.getFilterExpr())if(!c.isAskForValue||a.filterParams&&a.filterParams.getFilterExpr()){c=b.layerId;f=g.getAttr(a,"data-index");d=null;var e=this.layerInfosObj.getLayerInfoById(c);d=g.hasClass(a,"applied");e.isShowInMap()&&e.isInScale()?this._bindMapUpdateEvents(a,d?!1:!0):d?g.removeClass(a,"applied"):g.addClass(a,"applied");e=null;d?(this._removeItemFilter(c,f),d=this._getExpr(c),e=this._getMapFilterControl(c),this.filterManager.applyWidgetFilter(c,
this.id,d,e),this.totalAppliedFilters--):(this._setItemFilter(c,f,a.filterParams?a.filterParams.getFilterExpr():b.filter.expr,b.enableMapFilter),d=this._getExpr(c),e=this._getMapFilterControl(c),this.filterManager.applyWidgetFilter(c,this.id,d,e),this.totalAppliedFilters++);this.filtersUpdated=!0;this._updateClearAllButtonState()}else this.configFilter(a,b)},configFilter:function(a,b,c,f){a.filterParams?(g.hasClass(a,"config-parameters")?(g.removeClass(a,"config-parameters"),this._changeItemTitleWidth(a,
window.appInfo.isRunInMobile?60:45)):(g.addClass(a,"config-parameters"),this._changeItemTitleWidth(a,60)),f&&f(),this.emit("setLastFilterNode",this.getLastNode())):D({url:b.url,content:{f:"json"},handleAs:"json",callbackPrams:"callback"}).then(e.hitch(this,function(c){g.addClass(a,"config-parameters");g.removeClass(a,"requesting");var d=h(".parameters",a)[0];a.handles=[];a.filterParams=new z;var l=e.clone(b.filter),k=null;b.enableMapFilter&&(k=b.layerId);a.filterParams.build(b.url,c,l,k);this.own(p(a.filterParams,
"change",e.hitch(this,function(b){b?(h(".apply",a).removeClass("disable-apply"),a.expr=b):(delete a.expr,h(".apply",a).addClass("disable-apply"))})));a.expr=a.filterParams.getFilterExpr();a.expr?h(".apply",a).removeClass("disable-apply"):(delete a.expr,h(".apply",a).addClass("disable-apply"));a.filterParams.placeAt(d);this._changeItemTitleWidth(a,60);f&&f()}));c&&c.target&&c.stopPropagation()},applyFilterValues:function(a,b,c,f){if(!c||f.keyCode===m.ENTER||f.keyCode===m.SPACE){if((c=a.filterParams&&
(a.expr||a.filterParams.getFilterExpr()))&&!l.contains(a,"applied")){a.expr=c;c=b.layerId;var d=g.getAttr(a,"data-index"),e=this.layerInfosObj.getLayerInfoById(c);e.isShowInMap()&&e.isInScale()?this._bindMapUpdateEvents(a,!0):g.addClass(a,"applied");this._setItemFilter(c,d,a.expr,b.enableMapFilter);a=this._getExpr(c);b=this._getMapFilterControl(c);this.filterManager.applyWidgetFilter(c,this.id,a,b);this.filtersUpdated=!0;this.totalAppliedFilters++;this._updateClearAllButtonState()}f.stopPropagation()}},
resize:function(){this.inherited(arguments);this._changeItemTitleWidth(this.domNode,window.appInfo.isRunInMobile?60:45)},_changeItemTitleWidth:function(a,b){var c=h(".header",a)[0];c&&(b=g.getContentBox(c).w-b,0<b&&h(".header .item-title",a).style({maxWidth:b+"px"}))},destroy:function(){h(".filter-item",this.filterList).forEach(function(a){delete a.filterParams;delete a.expr});if(this._store)for(var a in this._store)a&&this.filterManager.applyWidgetFilter(a,this.id,"",null);this.inherited(arguments)},
filterListShown:function(){this.filtersUpdated=!1},_updateClearAllButtonState:function(){0<this.totalAppliedFilters?(l.add(this.clearAllButton,"esriCTClearAllFilterActive"),k.set(this.clearAllButton,"tabindex","0")):(l.remove(this.clearAllButton,"esriCTClearAllFilterActive"),k.set(this.clearAllButton,"tabindex","-1"))},_clearAllFilters:function(){if(l.contains(this.clearAllButton,"esriCTClearAllFilterActive")&&this.filterList){var a=h(".applied",this.filterList);q.forEach(a,function(a){(a=h(".header",
a))&&0<a.length&&a[0].click()});this._updateClearAllButtonState();this.emit("clearAllFilters")}}})});