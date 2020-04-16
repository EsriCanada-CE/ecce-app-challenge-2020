// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Yap\u0131land\u0131rma metni ayarla:",generalSettings:{tabTitle:"Genel ayarlar",measurementUnitLabel:"Maliyet Birimi",currencyLabel:"Maliyet Sembol\u00fc",roundCostLabel:"Maliyeti Yuvarla",projectOutputSettings:"Proje \u00c7\u0131kt\u0131 Ayarlar\u0131",typeOfProjectAreaLabel:"Proje Alan\u0131 T\u00fcr\u00fc",bufferDistanceLabel:"Tampon Mesafesi",csvReportExportLabel:"Kullan\u0131c\u0131n\u0131n proje raporunu d\u0131\u015fa aktarmas\u0131na izin ver",
editReportSettingsBtnTooltip:"Rapor ayarlar\u0131n\u0131 d\u00fczenle",roundCostValues:{twoDecimalPoint:"\u0130ki Ondal\u0131k Noktas\u0131",nearestWholeNumber:"En Yak\u0131n Tam Say\u0131",nearestTen:"En Yak\u0131n On",nearestHundred:"En Yak\u0131n Y\u00fcz",nearestThousand:"En Yak\u0131n Bin",nearestTenThousands:"En Yak\u0131n On Bin"},reportSettings:{reportSettingsPopupTitle:"Rapor Ayarlar\u0131",reportNameLabel:"Rapor ad\u0131 (iste\u011fe ba\u011fl\u0131):",checkboxLabel:"G\u00f6ster",layerTitle:"Ba\u015fl\u0131k",
columnLabel:"Etiket",duplicateMsg:"Etiketi yinele"},projectAreaType:{outline:"Ana Hat",buffer:"Tampon"},errorMessages:{currency:"Ge\u00e7ersiz para birimi",bufferDistance:"Ge\u00e7ersiz tampon mesafesi",outOfRangebufferDistance:"De\u011fer 0'dan b\u00fcy\u00fck veya 100'den az veya e\u015fit olmal\u0131d\u0131r"}},projectSettings:{tabTitle:"Proje ayarlar\u0131",costingGeometrySectionTitle:"Maliyet i\u00e7in co\u011frafyay\u0131 tan\u0131mla (opsiyonel)",costingGeometrySectionNote:"Not: Bu katman\u0131 yap\u0131land\u0131rmak, kullan\u0131c\u0131n\u0131n co\u011frafyay\u0131 temel alan detay \u015fablonlar\u0131n\u0131n maliyet denklemlerini ayarlamas\u0131na izin verecektir.",
projectTableSectionTitle:"Proje ayarlar\u0131n\u0131 Kaydetme/Y\u00fckleme becerisi (opsiyonel)",projectTableSectionNote:"Not: T\u00fcm tablolar\u0131 ve katmanlar\u0131 yap\u0131land\u0131rmak, kullan\u0131c\u0131n\u0131n daha sonra kullanmak \u00fczere projeyi kaydetmesine/y\u00fcklemesine olanak tan\u0131r.",costingGeometryLayerLabel:"Maliyet Geometrisi Katman\u0131",fieldLabelGeography:"Co\u011frafya Etiketleme Alan\u0131",projectAssetsTableLabel:"Proje Varl\u0131klar\u0131 Tablosu",projectMultiplierTableLabel:"Proje \u00c7arpan\u0131 Ek Maliyet Tablosu",
projectLayerLabel:"Proje Katman\u0131",configureFieldsLabel:"Alanlar\u0131 Yap\u0131land\u0131r",fieldDescriptionHeaderTitle:"Alan Tan\u0131m\u0131",layerFieldsHeaderTitle:"Katman Alan\u0131",selectLabel:"Se\u00e7",errorMessages:{duplicateLayerSelection:"${layerName} zaten se\u00e7ildi",invalidConfiguration:"L\u00fctfen ${fieldsString} se\u00e7"},costingGeometryHelp:"\x3cp\x3eA\u015fa\u011f\u0131daki ko\u015fullara sahip poligon katman\u0131 (katmanlar\u0131) g\u00f6sterilir: \x3cbr/\x3e \x3cli\x3e\tKatman Query\u009d becerisine sahip olmal\u0131d\u0131r\x3c/li\x3e\x3cli\x3e\tKatmanda bir GlobalID alan\u0131 bulunmal\u0131d\u0131r\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eSe\u00e7ili \u00e2\u20ac\u0153Costing Geometry Layer\u00e2\u20ac\u009d dizileri ve say\u0131sal alanlar\u0131 \u00e2\u20ac\u0153Field to Label Geography\u00e2\u20ac\u009d a\u00e7\u0131l\u0131r penceresinde g\u00f6sterilecektir.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eA\u015fa\u011f\u0131daki ko\u015fullara sahip tablo (tablolar) g\u00f6sterilecektir: \x3cbr/\x3e \x3cli\x3eTabloda \u015fu d\u00fczenleme becerileri olmal\u0131d\u0131r: \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d ve \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabloda ayn\u0131 ad ve ayn\u0131 veri t\u00fcr\u00fcne sahip alt\u0131 alan bulunmal\u0131d\u0131r:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tCostEquation (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tSenaryo (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tTemplateName (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID t\u00fcr\u00fc alan)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eA\u015fa\u011f\u0131daki ko\u015fullara sahip tablo (tablolar) g\u00f6sterilecektir: \x3cbr/\x3e \x3cli\x3eTabloda \u015fu d\u00fczenleme becerileri olmal\u0131d\u0131r: \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d and \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabloda ayn\u0131 ad ve ayn\u0131 veri t\u00fcr\u00fcne sahip be\u015f alan bulunmal\u0131d\u0131r:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tA\u00e7\u0131klama (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tT\u00fcr (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tDe\u011fer (Kayar/\u00c7ift t\u00fcr alan)\x3c/li\x3e\x3cli\x3e\tCostindex (Tam say\u0131 t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID t\u00fcr\u00fc alan))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eA\u015fa\u011f\u0131daki ko\u015fullara sahip poligon katman\u0131 (katmanlar\u0131) g\u00f6sterilecektir: \x3cbr/\x3e \x3cli\x3eKatmanda \u015fu d\u00fczenleme becerileri olmal\u0131d\u0131r: \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d and \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eKatmanda ayn\u0131 ad ve ayn\u0131 veri t\u00fcr\u00fcne sahip be\u015f alan bulunmal\u0131d\u0131r:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tProjectName (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tA\u00e7\u0131klama (Dizi t\u00fcr\u00fc alan)\x3c/li\x3e\x3cli\x3e\tTotalassetcost (Kayar/\u00c7ift t\u00fcr alan)\x3c/li\x3e\x3cli\x3e\tGrossprojectcost (Kayar/\u00c7ift t\u00fcr alan)\x3c/li\x3e\x3cli\x3e   \tGlobalID (GlobalID t\u00fcr\u00fc alan))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Nokta Katman\u0131 K\u00fctle Merkezi",selectRelatedPointLayerDefaultOption:"Se\u00e7",pointLayerHintText:"\x3cp\x3eA\u015fa\u011f\u0131daki ko\u015fullara sahip nokta katmanlar\u0131 g\u00f6sterilir: \x3cbr/\x3e \x3cli\x3e\tKatman i\u00e7in, \u2018Projectid\u2019 (GUID t\u00fcr\u00fc) alan\u0131 olmal\u0131d\u0131r\x3c/li\x3e\x3cli\x3e\tKatman\u0131n, \u2018Olu\u015ftur\u2019, \u2018Sil\u2019 ve \u2018G\u00fcncelle\u2019 adl\u0131 d\u00fczenleme yetenekleri olmal\u0131d\u0131r\x3c/li\x3e\x3c/p\x3e"},
layerSettings:{tabTitle:"Katman ayarlar\u0131",layerNameHeaderTitle:"Katman ad\u0131",layerNameHeaderTooltip:"Haritadaki katmanlar listesi",EditableLayerHeaderTitle:"D\u00fczenlenebilir",EditableLayerHeaderTooltip:"Maliyet arac\u0131na katman ve \u015fablonlar\u0131n\u0131 dahil et",SelectableLayerHeaderTitle:"Se\u00e7ilebilir",SelectableLayerHeaderTooltip:"Yeni bir maliyet \u00f6\u011fesi olu\u015fturmak i\u00e7in detaydan geometri kullan\u0131labilir",fieldPickerHeaderTitle:"Proje kimli\u011fi (opsiyonel)",
fieldPickerHeaderTooltip:"Proje kimli\u011finin depolanaca\u011f\u0131 opsiyonel alan (dizi t\u00fcr\u00fcn\u00fcn)",selectLabel:"Se\u00e7",noAssetLayersAvailable:"Se\u00e7ilen web haritas\u0131nda varl\u0131k katman\u0131 bulunamad\u0131",disableEditableCheckboxTooltip:"Bu katmanda d\u00fczenleme becerileri yok",missingCapabilitiesMsg:"Bu katmanda a\u015fa\u011f\u0131daki beceriler yok:",missingGlobalIdMsg:"Bu katmanda GlobalId alan\u0131 yok",create:"Olu\u015ftur",update:"G\u00fcncelle",deleteColumnLabel:"Sil",
attributeSettingHeaderTitle:"\u00d6znitelik Ayarlar\u0131",addFieldLabelTitle:"\u00d6znitelikler Ekle",layerAttributesHeaderTitle:"Katman \u00d6znitelikleri",projectLayerAttributesHeaderTitle:"Proje Katman\u0131 \u00d6znitelikleri",attributeSettingsPopupTitle:"Katman \u00d6znitelik Ayarlar\u0131"},costingInfo:{tabTitle:"Maliyet Bilgileri",proposedMainsLabel:"Teklif Edilenler",addCostingTemplateLabel:"Maliyet \u015eablonu Ekle",manageScenariosTitle:"Senaryolar\u0131 Y\u00f6net",featureTemplateTitle:"Detay Tasla\u011f\u0131",
costEquationTitle:"Maliyet Denklemi",geographyTitle:"Co\u011frafya",scenarioTitle:"Senaryo",actionTitle:"\u0130\u015flemler",scenarioNameLabel:"Senaryo Ad\u0131",addBtnLabel:"Ekle",srNoLabel:"No.",deleteLabel:"Sil",duplicateScenarioName:"Yinelenen senaryo ad\u0131",hintText:"\x3cdiv\x3e\u0130pucu: A\u015fa\u011f\u0131daki anahtar s\u00f6zc\u00fckleri kullan\u0131n\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Bir co\u011frafyadaki ayn\u0131 t\u00fcr varl\u0131klar\u0131n toplam say\u0131s\u0131n\u0131 kullan\u0131r\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: \u00c7izgi varl\u0131\u011f\u0131 i\u00e7in uzunluk ve poligon varl\u0131\u011f\u0131 i\u00e7in alan\u0131 kullan\u0131r\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Bir co\u011frafyada ayn\u0131 t\u00fcrdeki \u00e7izgi varl\u0131\u011f\u0131 i\u00e7in toplam uzunlu\u011fu poligon varl\u0131\u011f\u0131 i\u00e7in toplam alan\u0131 kullan\u0131r\x3c/li\x3e\x3c/ul\x3e \u015eu i\u015flevleri kullanabilirsiniz:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eL\u00fctfen projenizin ihtiyac\u0131na g\u00f6re maliyet denklemini d\u00fczenleyin.",
noneValue:"Yok",requiredCostEquation:"${layerName} i\u00e7in ge\u00e7ersiz maliyet denklemi: ${templateName}",duplicateTemplateMessage:"${layerName} i\u00e7in mevcut \u015fablon giri\u015fini yinele: ${templateName}",defaultEquationRequired:"${layerName} i\u00e7in varsay\u0131lan denklem gerekli: ${templateName}",validCostEquationMessage:"L\u00fctfen ge\u00e7erli maliyet denklemini girin",costEquationHelpText:"L\u00fctfen maliyet denklemini projenizin ihtiya\u00e7lar\u0131na uygun olarak d\u00fczenleyin",
scenarioHelpText:"L\u00fctfen senaryoyu projenizin ihtiya\u00e7lar\u0131na uygun olarak se\u00e7in",copyRowTitle:"S\u0131ray\u0131 Kopyala",noTemplateAvailable:"${layerName} i\u00e7in l\u00fctfen en az bir \u015fablon ekleyin",manageScenarioLabel:"Senaryoyu y\u00f6net",noLayerMessage:"${tabName}'e l\u00fctfen en az bir katman ekleyin",noEditableLayersAvailable:"Katman (katmanlar), katman ayarlar\u0131 tablosunda d\u00fczenlenebilir olarak i\u015faretlenmelidir",updateProjectCostCheckboxLabel:"Proje denklemlerini g\u00fcncelle",
updateProjectCostEquationHint:"\u0130pucu: Bu, kullan\u0131c\u0131n\u0131n, detay \u015fablonu, co\u011frafya ve senaryoya dayal\u0131 olarak, a\u015fa\u011f\u0131da tan\u0131mlanan yeni denklemlerle mevcut projelere eklenmi\u015f olan varl\u0131klar\u0131n maliyet denklemlerini g\u00fcncellemesine olanak tan\u0131r. Birle\u015fim bulunamazsa, varsay\u0131lan maliyet denklemine ayarlan\u0131r, yani co\u011frafya ve senaryo \u2018Hi\u00e7biri\u2019 olarak ayarlan\u0131r. Detay \u015fablonunun \u00e7\u0131kar\u0131lmas\u0131 durumunda, maliyet 0 olarak ayarlan\u0131r."},
statisticsSettings:{tabTitle:"Ek ayarlar",addStatisticsLabel:"\u0130statistik Ekle",fieldNameTitle:"Alan",statisticsTitle:"Etiket",addNewStatisticsText:"Yeni \u0130statistik Ekle",deleteStatisticsText:"\u0130statistik Sil",moveStatisticsUpText:"\u0130statistikleri Yukar\u0131 Ta\u015f\u0131",moveStatisticsDownText:"\u0130statistikleri A\u015fa\u011f\u0131 Ta\u015f\u0131",selectDeselectAllTitle:"T\u00fcm\u00fcn\u00fc Se\u00e7"},projectCostSettings:{addProjectCostLabel:"Ek Proje Maliyeti Ekle",additionalCostValueColumnHeader:"De\u011fer",
invalidProjectCostMessage:"Proje maliyeti i\u00e7in Ge\u00e7ersiz Giri\u015f",additionalCostLabelColumnHeader:"Etiket",additionalCostTypeColumnHeader:"T\u00fcr"},statisticsType:{countLabel:"Say\u0131m",averageLabel:"Ortalama",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Toplam",areaLabel:"Alan",lengthLabel:"Uzunluk"},_localized:{}}});