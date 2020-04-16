// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Ustaw tekst konfiguracyjny:",generalSettings:{tabTitle:"Ustawienia og\u00f3lne",measurementUnitLabel:"Jednostka kosztu",currencyLabel:"Symbol kosztu",roundCostLabel:"Zaokr\u0105glaj koszt",projectOutputSettings:"Ustawienia wynikowe projektu",typeOfProjectAreaLabel:"Typ obszaru projektu",bufferDistanceLabel:"Odleg\u0142o\u015b\u0107 buforowania",csvReportExportLabel:"Zezw\u00f3l u\u017cytkownikowi na eksportowanie raportu projektu",editReportSettingsBtnTooltip:"Edytuj ustawienia raportu",
roundCostValues:{twoDecimalPoint:"Dwa miejsca po przecinku",nearestWholeNumber:"Najbli\u017csza liczba ca\u0142kowita",nearestTen:"Najbli\u017csza dziesi\u0105tka",nearestHundred:"Najbli\u017csza setka",nearestThousand:"Najbli\u017csze tysi\u0105ce",nearestTenThousands:"Najbli\u017csze dziesi\u0105tki tysi\u0119cy"},reportSettings:{reportSettingsPopupTitle:"Ustawienia raportu",reportNameLabel:"Nazwa raportu (opcjonalnie):",checkboxLabel:"Poka\u017c",layerTitle:"Tytu\u0142",columnLabel:"Etykieta",
duplicateMsg:"Duplikuj etykiet\u0119"},projectAreaType:{outline:"Obrys",buffer:"Bufor"},errorMessages:{currency:"Nieprawid\u0142owa jednostka waluty",bufferDistance:"Nieprawid\u0142owa odleg\u0142o\u015b\u0107 buforowania",outOfRangebufferDistance:"Warto\u015b\u0107 powinna by\u0107 wi\u0119ksza ni\u017c 0 i mniejsza ni\u017c lub r\u00f3wna 100"}},projectSettings:{tabTitle:"Ustawienia projektu",costingGeometrySectionTitle:"Zdefiniuj obszar geograficzny na potrzeby kalkulacji koszt\u00f3w (opcjonalnie)",
costingGeometrySectionNote:"Uwaga: skonfigurowanie tej warstwy umo\u017cliwi u\u017cytkownikowi konfigurowanie r\u00f3wna\u0144 koszt\u00f3w szablon\u00f3w obiekt\u00f3w na podstawie obszar\u00f3w geograficznych.",projectTableSectionTitle:"Mo\u017cliwo\u015b\u0107 zapisania/wczytania ustawie\u0144 projektu (opcjonalnie)",projectTableSectionNote:"Uwaga: skonfigurowanie wszystkich tabel i warstw umo\u017cliwi u\u017cytkownikowi zapisanie/wczytanie projektu w celu ponownego wykorzystania.",costingGeometryLayerLabel:"Warstwa geometrii kalkulacji koszt\u00f3w",
fieldLabelGeography:"Pole do oznaczenia etykiet\u0105 obszaru geograficznego",projectAssetsTableLabel:"Tabela zasob\u00f3w projektu",projectMultiplierTableLabel:"Tabela koszt\u00f3w dodatkowych mno\u017cnika projektu",projectLayerLabel:"Warstwa projektu",configureFieldsLabel:"Skonfiguruj pola",fieldDescriptionHeaderTitle:"Opis pola",layerFieldsHeaderTitle:"Pole warstwy",selectLabel:"Zaznacz",errorMessages:{duplicateLayerSelection:"Warstwa ${layerName} jest ju\u017c wybrana",invalidConfiguration:"Nale\u017cy wybra\u0107 warto\u015b\u0107 ${fieldsString}"},
costingGeometryHelp:"\x3cp\x3eZostan\u0105 wy\u015bwietlone warstwy poligonowe z nast\u0119puj\u0105cymi warunkami: \x3cbr/\x3e \x3cli\x3e\tWarstwa musi mie\u0107 mo\u017cliwo\u015b\u0107 wykonywania zapytania\x3c/li\x3e\x3cli\x3e\tWarstwa musi zawiera\u0107 pole GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3ePola znakowe i liczbowe wybranej warstwy geometrii kalkulacji koszt\u00f3w zostan\u0105 wy\u015bwietlone w menu rozwijanym Pole do oznaczenia etykiet\u0105 obszaru geograficznego.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eZostan\u0105 wy\u015bwietlone tabele z nast\u0119puj\u0105cymi warunkami: \x3cbr/\x3e \x3cli\x3eTabela musi mie\u0107 mo\u017cliwo\u015bci edycji, czyli tworzenia, usuwania i aktualizacji\u009d\x3c/li\x3e    \x3cli\x3eTabela musi zawiera\u0107 sze\u015b\u0107 p\u00f3l o dok\u0142adnie takich nazwach i typach danych:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (pole typu GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (pole typu String)\x3c/li\x3e\x3cli\x3e\tScenario (pole typu String)\x3c/li\x3e\x3cli\x3e\tTemplateName (pole typu String)\x3c/li\x3e\x3cli\x3e    GeographyGUID (pole typu GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (pole typu GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eZostan\u0105 wy\u015bwietlone tabele z nast\u0119puj\u0105cymi warunkami: \x3cbr/\x3e \x3cli\x3eTabela musi mie\u0107 mo\u017cliwo\u015bci edycji, czyli tworzenia, usuwania i aktualizacji\u009d\x3c/li\x3e    \x3cli\x3eTabela musi zawiera\u0107 pi\u0119\u0107 p\u00f3l o dok\u0142adnie takich nazwach i typach danych:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (pole typu String)\x3c/li\x3e\x3cli\x3e\tType (pole typu String)\x3c/li\x3e\x3cli\x3e\tValue (pole typu Float/Double)\x3c/li\x3e\x3cli\x3e\tCostindex (pole typu Integer)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (pole typu GUID))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eZostan\u0105 wy\u015bwietlone warstwy poligonowe z nast\u0119puj\u0105cymi warunkami: \x3cbr/\x3e \x3cli\x3eWarstwa musi mie\u0107 mo\u017cliwo\u015bci edycji, czyli tworzenia, usuwania i aktualizacji\u009d\x3c/li\x3e    \x3cli\x3eWarstwa musi zawiera\u0107 pi\u0119\u0107 p\u00f3l o dok\u0142adnie takich nazwach i typach danych:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (pole typu String)\x3c/li\x3e\x3cli\x3eDescription (pole typu String)\x3c/li\x3e\x3cli\x3eTotalassetcost (pole typu Float/Double)\x3c/li\x3e\x3cli\x3eGrossprojectcost (pole typu Float/Double)\x3c/li\x3e\x3cli\x3eGlobalID (pole typu GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Centroid warstwy punktowej",selectRelatedPointLayerDefaultOption:"Zaznacz",pointLayerHintText:"\x3cp\x3eZostan\u0105 wy\u015bwietlone warstwy punktowe z nast\u0119puj\u0105cymi warunkami: \x3cbr/\x3e \x3cli\x3e\tWarstwa musi mie\u0107 pole 'Projectid' (typ GUID)\x3c/li\x3e\x3cli\x3e\tWarstwa musi mie\u0107 mo\u017cliwo\u015b\u0107 edycji, a wi\u0119c atrybut 'Tworzenie', 'Usuwanie' i 'Aktualizacja'\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Ustawienia warstwy",layerNameHeaderTitle:"Nazwa warstwy",
layerNameHeaderTooltip:"Lista warstw na mapie",EditableLayerHeaderTitle:"Edytowalne",EditableLayerHeaderTooltip:"Do\u0142\u0105cz warstw\u0119 i jej szablony w wid\u017cecie kalkulacji koszt\u00f3w",SelectableLayerHeaderTitle:"Podlegaj\u0105ce selekcji",SelectableLayerHeaderTooltip:"Geometria z obiektu mo\u017ce zosta\u0107 u\u017cyta do wygenerowania nowego elementu kosztu",fieldPickerHeaderTitle:"ID projektu (opcjonalnie)",fieldPickerHeaderTooltip:"Pole opcjonalne (typu znakowego), w kt\u00f3rym b\u0119dzie przechowywany identyfikator projektu",
selectLabel:"Zaznacz",noAssetLayersAvailable:"Nie znaleziono warstwy zasob\u00f3w na wybranej mapie internetowej",disableEditableCheckboxTooltip:"Ta warstwa nie ma mo\u017cliwo\u015bci edycji",missingCapabilitiesMsg:"Dla tej warstwy brak nast\u0119puj\u0105cych funkcji:",missingGlobalIdMsg:"Ta warstwa nie ma pola GlobalId",create:"Tworzenie",update:"Aktualizuj",deleteColumnLabel:"Usu\u0144",attributeSettingHeaderTitle:"Ustawienia atrybut\u00f3w",addFieldLabelTitle:"Dodaj atrybuty",layerAttributesHeaderTitle:"Atrybuty warstwy",
projectLayerAttributesHeaderTitle:"Atrybuty warstwy projektu",attributeSettingsPopupTitle:"Ustawienia atrybut\u00f3w warstwy"},costingInfo:{tabTitle:"Informacje o kalkulacji koszt\u00f3w",proposedMainsLabel:"Proponowane elementy g\u0142\u00f3wne",addCostingTemplateLabel:"Dodaj szablon kalkulacji koszt\u00f3w",manageScenariosTitle:"Zarz\u0105dzaj scenariuszami",featureTemplateTitle:"Szablon obiektu",costEquationTitle:"R\u00f3wnanie koszt\u00f3w",geographyTitle:"Obszar geograficzny",scenarioTitle:"Scenariusz",
actionTitle:"Dzia\u0142ania",scenarioNameLabel:"Nazwa scenariusza",addBtnLabel:"Dodaj",srNoLabel:"Nie.",deleteLabel:"Usuwanie",duplicateScenarioName:"Duplikuj nazw\u0119 scenariusza",hintText:"\x3cdiv\x3eWskaz\u00f3wka: u\u017cyj nast\u0119puj\u0105cych s\u0142\u00f3w kluczowych\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: u\u017cywa \u0142\u0105cznej liczby zasob\u00f3w tego samego typu w obszarze geograficznym\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: u\u017cywa d\u0142ugo\u015bci dla zasobu liniowego i pola powierzchni dla zasobu poligonowego\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: u\u017cywa \u0142\u0105cznej d\u0142ugo\u015bci dla zasobu liniowego i \u0142\u0105cznego pola powierzchni dla zasobu poligonowego tego samego typu w obszarze geograficznym\x3c/li\x3e\x3c/ul\x3e Mo\u017cesz u\u017cy\u0107 funkcji, takich jak:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eNale\u017cy zmodyfikowa\u0107 r\u00f3wnanie koszt\u00f3w zgodnie z wymaganiami projektu.",
noneValue:"Brak",requiredCostEquation:"Niepoprawne r\u00f3wnanie koszt\u00f3w dla warstwy ${layerName} : ${templateName}",duplicateTemplateMessage:"Istnieje podw\u00f3jny wpis szablonu dla warstwy ${layerName} : ${templateName}",defaultEquationRequired:"Wymagane jest domy\u015blne r\u00f3wnanie dla warstwy ${layerName} : ${templateName}",validCostEquationMessage:"Wprowad\u017a prawid\u0142owe r\u00f3wnanie koszt\u00f3w",costEquationHelpText:"Edytuj r\u00f3wnanie koszt\u00f3w zgodnie z wymaganiami projektu",
scenarioHelpText:"Wybierz scenariusz zgodnie z wymaganiami projektu",copyRowTitle:"Kopiuj wiersz",noTemplateAvailable:"Dodaj co najmniej jeden szablon dla warstwy ${layerName}",manageScenarioLabel:"Zarz\u0105dzaj scenariuszem",noLayerMessage:"Wprowad\u017a co najmniej jedn\u0105 warstw\u0119 w ${tabName}",noEditableLayersAvailable:"Warstwy, kt\u00f3re nale\u017cy oznaczy\u0107 jako mo\u017cliwe do edycji na karcie ustawie\u0144 warstwy",updateProjectCostCheckboxLabel:"Aktualizuj r\u00f3wnania projektu",
updateProjectCostEquationHint:"Wskaz\u00f3wka: Umo\u017cliwia u\u017cytkownikowi aktualizowanie r\u00f3wna\u0144 koszt\u00f3w zasob\u00f3w, kt\u00f3re zosta\u0142y ju\u017c dodane do istniej\u0105cych projekt\u00f3w, za pomoc\u0105 nowych r\u00f3wna\u0144 zdefiniowanych ni\u017cej na podstawie szablonu obiektu, geografii i scenariusza. Je\u015bli brak okre\u015blonej kombinacji, zostanie przyj\u0119ty koszt domy\u015blny, tzn. geografia i scenariusz ma warto\u015b\u0107 'None' (brak). W przypadku usuni\u0119cia szablonu obiektu ustawiony zostanie koszt r\u00f3wny 0."},
statisticsSettings:{tabTitle:"Dodatkowe ustawienia",addStatisticsLabel:"Dodaj statystyk\u0119",fieldNameTitle:"Pole",statisticsTitle:"Etykieta",addNewStatisticsText:"Dodaj now\u0105 statystyk\u0119",deleteStatisticsText:"Usu\u0144 statystyk\u0119",moveStatisticsUpText:"Przesu\u0144 statystyk\u0119 w g\u00f3r\u0119",moveStatisticsDownText:"Przesu\u0144 statystyk\u0119 w d\u00f3\u0142",selectDeselectAllTitle:"Zaznacz wszystkie"},projectCostSettings:{addProjectCostLabel:"Dodaj koszt dodatkowy projektu",
additionalCostValueColumnHeader:"Warto\u015b\u0107",invalidProjectCostMessage:"Nieprawid\u0142owa warto\u015b\u0107 kosztu projektu",additionalCostLabelColumnHeader:"Etykieta",additionalCostTypeColumnHeader:"Typ"},statisticsType:{countLabel:"Liczba",averageLabel:"\u015arednia",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Zsumowanie",areaLabel:"Pole powierzchni",lengthLabel:"D\u0142ugo\u015b\u0107"},_localized:{}}});