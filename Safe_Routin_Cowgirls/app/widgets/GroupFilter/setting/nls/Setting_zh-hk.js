// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dijit/_editor/nls/commands":{bold:"\u7c97\u9ad4",copy:"\u8907\u88fd",cut:"\u526a\u4e0b","delete":"\u522a\u9664",indent:"\u7e2e\u6392",insertHorizontalRule:"\u6c34\u5e73\u5c3a\u898f",insertOrderedList:"\u7de8\u865f\u6e05\u55ae",insertUnorderedList:"\u9805\u76ee\u7b26\u865f\u6e05\u55ae",italic:"\u659c\u9ad4",justifyCenter:"\u7f6e\u4e2d\u5c0d\u9f4a",justifyFull:"\u5c0d\u9f4a",justifyLeft:"\u9760\u5de6\u5c0d\u9f4a",justifyRight:"\u9760\u53f3\u5c0d\u9f4a",outdent:"\u51f8\u6392",paste:"\u8cbc\u4e0a",
redo:"\u91cd\u505a",removeFormat:"\u79fb\u9664\u683c\u5f0f",selectAll:"\u5168\u9078",strikethrough:"\u522a\u9664\u7dda",subscript:"\u4e0b\u6a19",superscript:"\u4e0a\u6a19",underline:"\u5e95\u7dda",undo:"\u5fa9\u539f",unlink:"\u79fb\u9664\u93c8\u7d50",createLink:"\u5efa\u7acb\u93c8\u7d50",toggleDir:"\u5207\u63db\u65b9\u5411",insertImage:"\u63d2\u5165\u5f71\u50cf",insertTable:"\u63d2\u5165/\u7de8\u8f2f\u8868\u683c",toggleTableBorder:"\u5207\u63db\u8868\u683c\u908a\u6846",deleteTable:"\u522a\u9664\u8868\u683c",
tableProp:"\u8868\u683c\u5167\u5bb9",htmlToggle:"HTML \u539f\u59cb\u6a94",foreColor:"\u524d\u666f\u984f\u8272",hiliteColor:"\u80cc\u666f\u984f\u8272",plainFormatBlock:"\u6bb5\u843d\u6a23\u5f0f",formatBlock:"\u6bb5\u843d\u6a23\u5f0f",fontSize:"\u5b57\u578b\u5927\u5c0f",fontName:"\u5b57\u578b\u540d\u7a31",tabIndent:"\u6a19\u7c64\u7e2e\u6392",fullScreen:"\u5207\u63db\u5168\u87a2\u5e55",viewSource:"\u6aa2\u8996 HTML \u539f\u59cb\u6a94",print:"\u5217\u5370",newPage:"\u65b0\u9801\u9762",systemShortcut:'"${0}" \u52d5\u4f5c\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d\uff0c\u53ea\u80fd\u4f7f\u7528\u9375\u76e4\u5feb\u901f\u9375\u3002\u8acb\u4f7f\u7528 ${1}\u3002',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u5927\u5c0f",fontName:"\u5b57\u578b",formatBlock:"\u683c\u5f0f",serif:"\u65b0\u7d30\u660e\u9ad4","sans-serif":"\u65b0\u7d30\u660e\u9ad4",monospace:"\u7b49\u5bec",cursive:"Cursive",fantasy:"Fantasy",noFormat:"\u7121",p:"\u6bb5\u843d",h1:"\u6a19\u984c",h2:"\u5b50\u6a19\u984c",h3:"\u6b21\u5b50\u6a19\u984c",pre:"\u9810\u5148\u683c\u5f0f\u5316",1:"\u6700\u5c0f",2:"\u8f03\u5c0f",3:"\u5c0f",4:"\u4e2d",5:"\u5927",
6:"\u8f03\u5927",7:"\u6700\u5927",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u9810\u89bd",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u5c0b\u627e\uff1a",findTooltip:"\u8f38\u5165\u8981\u5c0b\u627e\u7684\u6587\u5b57",replaceLabel:"\u53d6\u4ee3\u70ba\uff1a",replaceTooltip:"\u8f38\u5165\u8981\u53d6\u4ee3\u7684\u6587\u5b57",findReplace:"\u5c0b\u627e/\u53d6\u4ee3",matchCase:"\u5927\u5c0f\u5beb\u76f8\u7b26",matchCaseTooltip:"\u5927\u5c0f\u5beb\u76f8\u7b26",backwards:"\u5411\u5f8c",
backwardsTooltip:"\u5f80\u56de\u641c\u5c0b\u6587\u5b57",replaceAllButton:"\u5168\u90e8\u53d6\u4ee3",replaceAllButtonTooltip:"\u53d6\u4ee3\u6240\u6709\u6587\u5b57",findButton:"\u5c0b\u627e",findButtonTooltip:"\u5c0b\u627e\u6587\u5b57",replaceButton:"\u53d6\u4ee3",replaceButtonTooltip:"\u53d6\u4ee3\u6587\u5b57",replaceDialogText:"\u53d6\u4ee3\u4e86 ${0} \u9805\u3002",eofDialogText:"\u524d\u6b21\u51fa\u73fe ${0}",eofDialogTextFind:"\u627e\u5230",eofDialogTextReplace:"\u5df2\u53d6\u4ee3",_localized:{}},
"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u5f9e Word \u8cbc\u4e0a",instructions:"\u5c07 Word \u4e2d\u7684\u5167\u5bb9\u8cbc\u5165\u4e0b\u65b9\u7684\u6587\u5b57\u6846\u3002\u5728\u6eff\u610f\u8981\u63d2\u5165\u7684\u5167\u5bb9\u4e4b\u5f8c\uff0c\u8acb\u6309\u8cbc\u4e0a\u6309\u9215\u3002\u82e5\u8981\u4e2d\u65b7\u63d2\u5165\u6587\u5b57\uff0c\u8acb\u6309\u53d6\u6d88\u6309\u9215\u3002",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u63d2\u5165\u9328\u9ede",title:"\u9328\u9ede\u5167\u5bb9",
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"widgets/GroupFilter/setting/nls/strings":{configText:"\u5728\u5e95\u4e0b\u5b9a\u7fa9\u60a8\u7684\u7be9\u9078\u7fa4\u7d44",labels:{groupName:"\u7be9\u9078\u96c6\u540d\u7a31:",groupNameTip:"\u4f7f\u7528\u8005\u5c07\u5f9e\u4e2d\u9078\u64c7\u7684\u7be9\u9078\u5668\u540d\u7a31\u3002",groupDesc:"\u63cf\u8ff0:",
groupDescTip:"\u7be9\u9078\u5668\u96c6\u7684\u63cf\u8ff0\u3002",groupOperator:"\u9810\u8a2d\u904b\u7b97\u5b50:",groupOperatorTip:"\u53ef\u7528\u4f86\u9810\u5148\u5b9a\u7fa9\u7be9\u9078\u5668\u4e4b\u904b\u7b97\u5b50\u7684\u9078\u9805\u3002\u82e5\u672a\u9078\u64c7\u300c\u9810\u8a2d\u904b\u7b97\u5b50\u300d\uff0c\u7be9\u9078\u5668\u5c07\u4f7f\u7528\u300c\u7b49\u65bc\u300d\u904b\u7b97\u5b50\u3002",groupDefault:"\u9810\u8a2d\u503c:",groupDefaultTip:"\u53ef\u5f9e\u73fe\u6709\u5716\u5c64\u4e2d\u9078\u64c7\u503c\u7684\u9078\u9805\u3002",
sameLayerAppend:"\u591a\u6b21\u5217\u51fa\u67d0\u500b\u5716\u5c64\u6642:",sameLayerConjunc:"\u4f7f\u7528\u4e0b\u5217\u9805\u76ee\u65b0\u589e:",caseSearch:"\u57f7\u884c\u5340\u5206\u5927\u5c0f\u5beb\u641c\u5c0b: ",headerTextHelp:"\u63d0\u4f9b\u6587\u5b57\u4f86\u986f\u793a\u4e0a\u8ff0\u7be9\u9078\u5668\u9078\u64c7"},buttons:{addNewGroup:"\u65b0\u589e\u7fa4\u7d44",addNewGroupTip:"\u65b0\u589e\u7be9\u9078\u96c6\u3002",addLayer:"\u589e\u52a0\u5716\u5c64",addLayerTip:"\u5c07\u5716\u5c64\u65b0\u589e\u81f3\u7be9\u9078\u96c6\u3002"},
inputs:{groupName:"\u547d\u540d\u60a8\u7684\u7fa4\u7d44",groupDesc:"\u60a8\u7fa4\u7d44\u7684\u63cf\u8ff0",groupDefault:"\u8f38\u5165\u9810\u5b9a\u7fa9\u7684\u503c",sameLayerAny:"\u7b26\u5408\u4efb\u4f55\u8868\u9054\u5f0f",sameLayerAll:"\u7b26\u5408\u6240\u6709\u8868\u9054\u5f0f",simpleMode:"\u5728\u7c21\u55ae\u8996\u5716\u4e2d\u555f\u52d5",simpleModeTip:"\u53ef\u7528\u4f86\u7c21\u5316\u914d\u7f6e\u4e4b widget \u4ecb\u9762\u7684\u9078\u9805\u3002\u52fe\u9078\u5f8c\uff0c\u6703\u5f9e\u4ecb\u9762\u4e2d\u79fb\u9664\u904b\u7b97\u5b50\u4e0b\u62c9\u5f0f\u6e05\u55ae\u548c\u65b0\u589e\u689d\u4ef6\u6309\u9215\u3002",
webmapAppendModeAny:"\u5c07\u4efb\u4f55\u8868\u9054\u5f0f\u9644\u52a0\u5230\u73fe\u6709\u7684\u5730\u5716\u7be9\u9078\u5668",webmapAppendModeAll:"\u5c07\u6240\u6709\u8868\u9054\u5f0f\u9644\u52a0\u5230\u73fe\u6709\u7684\u5730\u5716\u7be9\u9078\u5668",webmapAppendModeTip:"\u53ef\u5c07\u7be9\u9078\u96c6\u9644\u52a0\u81f3\u73fe\u6709 Web \u5730\u5716\u7be9\u9078\u5668\u7684\u9078\u9805\u3002",persistOnClose:"\u95dc\u9589 Widget \u5f8c\u6301\u7e8c\u5b58\u5728",selectGroup:"\u9078\u64c7\u8981\u7be9\u9078\u7684\u7fa4\u7d44",
hideDropDown:"\u82e5\u53ea\u914d\u7f6e 1 \u500b\u7fa4\u7d44\uff0c\u5247\u96b1\u85cf\u6a19\u982d\u548c\u7be9\u9078\u5668\u9078\u64c7",optionsMode:"\u96b1\u85cf Widget \u9078\u9805",optionsModeTip:"\u7528\u4f86\u516c\u958b\u5176\u4ed6 widget \u8a2d\u5b9a\u7684\u9078\u9805\u3002\u5982\u679c\u5df2\u52fe\u9078\uff0c\u8acb\u5728\u95dc\u9589 widget \u4e26\u5f9e\u4ecb\u9762\u4e2d\u79fb\u9664\u5f8c\uff0c\u5132\u5b58\u548c\u8f09\u5165\u5b9a\u7fa9\u7684\u7be9\u9078\u5668\u4e26\u4fdd\u7559\u7be9\u9078\u5668\u3002",
optionOR:"OR",optionAND:"AND",optionEQUAL:"EQUALS",optionNOTEQUAL:"NOT EQUAL",optionGREATERTHAN:"GREATER THAN",optionGREATERTHANEQUAL:"GREATER THAN OR EQUAL",optionLESSTHAN:"LESS THAN",optionLESSTHANEQUAL:"LESS THAN OR EQUAL",optionSTART:"BEGINS WITH",optionEND:"ENDS WITH",optionLIKE:"CONTAINS",optionNOTLIKE:"DOES NOT CONTAIN",optionONORBEFORE:"IS ON OR BEFORE",optionONORAFTER:"IS ON OR AFTER",optionNONE:"NONE"},tables:{layer:"\u5716\u5c64",layerTip:"\u5730\u5716\u4e2d\u5b9a\u7fa9\u4e4b\u5716\u5c64\u7684\u540d\u7a31\u3002",
field:"\u6b04\u4f4d",fieldTip:"\u5c07\u7528\u4f86\u7be9\u9078\u5716\u5c64\u7684\u6b04\u4f4d\u3002",value:"\u4f7f\u7528\u503c",valueTip:"\u53ef\u5f9e\u5716\u5c64\u4e2d\u4f7f\u7528\u4e0b\u62c9\u5f0f\u6e05\u55ae\u503c\u7684\u9078\u9805\u3002\u5982\u679c\u6c92\u6709\u5716\u5c64\u4f7f\u7528\u6b64\u53c3\u6578\uff0c\u5247\u6703\u5411\u4f7f\u7528\u8005\u51fa\u793a\u7d14\u6587\u5b57\u65b9\u584a\u3002",zoom:"\u7e2e\u653e",zoomTip:"\u5957\u7528\u7be9\u9078\u5668\u5f8c\uff0c\u7528\u65bc\u7e2e\u653e\u81f3\u5716\u5fb5\u7bc4\u570d\u7684\u9078\u9805\u3002\u53ea\u80fd\u9078\u64c7\u7e2e\u653e\u81f3\u4e00\u500b\u5716\u5c64\u3002",
action:"\u522a\u9664",actionTip:"\u5f9e\u7be9\u9078\u96c6\u4e2d\u79fb\u9664\u5716\u5c64\u3002"},popup:{label:"\u9078\u64c7\u503c"},errors:{noGroups:"\u60a8\u81f3\u5c11\u9700\u8981\u4e00\u500b\u7fa4\u7d44\u3002",noGroupName:"\u7f3a\u5c11\u4e00\u6216\u591a\u500b\u7fa4\u7d44\u540d\u7a31\u3002",noDuplicates:"\u4e00\u6216\u591a\u500b\u7fa4\u7d44\u540d\u7a31\u91cd\u8907\u3002",noRows:"\u60a8\u7684\u8868\u683c\u4e2d\u81f3\u5c11\u9700\u8981\u4e00\u5217\u3002",noLayers:"\u60a8\u7684\u5730\u5716\u4e2d\u6c92\u6709\u5716\u5c64\u3002"},
picker:{description:"\u4f7f\u7528\u6b64\u8868\u55ae\u4f86\u5c0b\u627e\u6b64\u7fa4\u7d44\u7684\u9810\u8a2d\u503c\u3002",layer:"\u9078\u64c7\u5716\u5c64",layerTip:"Web \u5730\u5716\u4e2d\u5b9a\u7fa9\u4e4b\u5716\u5c64\u7684\u540d\u7a31\u3002",field:"\u9078\u64c7\u6b04\u4f4d",fieldTip:"\u5c07\u5f9e\u4e2d\u8a2d\u5b9a\u9810\u8a2d\u503c\u7684\u6b04\u4f4d\u3002",value:"\u9078\u64c7\u503c",valueTip:"\u5c07\u6210\u70ba widget \u4e4b\u9810\u8a2d\u503c\u7684\u503c\u3002"},_localized:{}}});