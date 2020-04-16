// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/on dojo/query dojo/Deferred dojo/_base/html jimu/utils dojo/keys dijit/a11yclick dijit/Tooltip".split(" "),function(f,c,g,h,d,l,e,k,m){return{a11y_init:function(){d.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this.a11y_useDoResizeNode();this.own(c(this.doResizeNode,k,f.hitch(this,function(){this._doResize()})))},a11y_nodeSelect:function(a,b){this.own(c(a,k,b))},a11y_nodeEscEvent:function(a){this.own(c(a,"keydown",f.hitch(this,function(a){a.keyCode===e.ESCAPE&&
(a.stopPropagation(),a.preventDefault(),this.doResizeNode.focus())})))},a11y_getIconNodeById:function(a){var b=!0===("block"===d.getStyle(this.maxStateNode,"display"))?this.maxStateNode:this.minStateNode;a=g('.title-node[settingId\x3d"'+a+'"]',b);if(0!==a.length)return a[0]},a11y_addTooltip:function(a,b){l.addTooltipByDomNode(m,a,b)},a11y_useDoResizeNode:function(){d.setAttr(this.doResizeNode,"tabindex",this.tabIndex)},a11y_ignoreDoResizeNode:function(){d.removeAttr(this.doResizeNode,"tabindex")},
a11y_resizeNodeAriaLabel:function(a){a="e"===a?window.jimuNls.common.expand:window.jimuNls.common.collapse;a=a.replace("${value}",this.nls._widgetLabel);d.setAttr(this.doResizeNode,"aria-label",a)},a11y_focusToItemInMoreTab:function(a){a&&(a=g(".other-group[data-widget-id\x3d'"+a+"']",this.otherGroupNode))&&a[0]&&a[0].focus&&a[0].focus()},a11y_switchNodeToClose:function(a){g(".title-node",this.domNode).removeClass("jimu-state-selected");var b=this.appConfig.getConfigElementById(a);if(b)return!1===
b.inPanel?(this.widgetManager.closeWidget(a),a=new h,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new h;a.resolve();return a},a11y_moreTabCloseAriaLabel:function(a){d.setAttr(a,"title",window.jimuNls.common.close)},a11y_moreTabCloseEvent:function(a){this.own(c(a,"click",f.hitch(this,function(){this._hideOtherGroupPane();-1!==this.lastSelectedIndex&&this.selectTab(this.lastSelectedIndex)})));this.own(c(a,"keydown",f.hitch(this,function(a){if(a.shiftKey&&a.keyCode===e.TAB)a.stopPropagation(),
a.preventDefault(),this.a11y_moreTab_last&&this.a11y_moreTab_last.focus&&this.a11y_moreTab_last.focus();else if(a.keyCode===e.ENTER||a.keyCode===e.SPACE||a.keyCode===e.ESCAPE)a.stopPropagation(),this._hideOtherGroupPane(),g('.title-node[title\x3d"more"]',this.titleListNode)[0].focus()})))},a11y_moreTabEscapeEvent:function(a){this.own(c(a,"keydown",f.hitch(this,function(a){a.keyCode===e.ESCAPE&&(a.stopPropagation(),a.preventDefault(),this.a11y_moreTab_close.focus())})))},a11y_cleanTabIndex_otherGroupPane:function(){this.a11y_moreTab_close&&
d.removeAttr(this.a11y_moreTab_close,"tabindex");for(var a=g(".other-group",this.otherGroupNode),b=0,c=a.length;b<c;b++)d.removeAttr(a[b],"tabindex")},a11y_moreTabLastNodeTabEvent:function(){this.own(c(this.a11y_moreTab_last,"keydown",f.hitch(this,function(a){a.shiftKey||a.keyCode!==e.TAB||(a.stopPropagation(),a.preventDefault(),this.a11y_moreTab_close.focus())})))},a11y_moreTabInonEscEvent:function(a){this.own(c(a,"keydown",f.hitch(this,function(a){a.keyCode===e.ESCAPE&&(a.stopPropagation(),a.preventDefault(),
this.a11y_moreTab_close.focus())})))},a11y_getEventOps:function(a){var b={};"keyup"===a._origType&&(b.a11y_byKeyEvent=!0);return b}}});