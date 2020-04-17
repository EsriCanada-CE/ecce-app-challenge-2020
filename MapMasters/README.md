# Toronto COVID-19 Susceptibility Assessment (TCSA)

This web app displays economic and health-related data to help determine at-risk populations during the COVID-19 pandemic in the City of Toronto. This information can help to inform decisions that will impact the progress of the pandemic and the lives of many people.

#### Team Members:
- Maryrose D'Arienzo
- Jason Lam
- Livia Nguyen

*A submission for the Esri Canada Centres of Excellence 2020 App Challenge* , *Created by the MapMasters (McMaster University)*

### Demo Video
[https://youtu.be/tAb82cmShqI](https://youtu.be/tAb82cmShqI?list=PLdgq5G0ox73X_hA9JTHACgGvtzetZK1IA)

## Mission Statement
Since its initial appearance in Wuhan, China in December 2019, the novel coronavirus (COVID-19) has been formally declared a Public Health Emergency of International Concern (PHEIC) by the [World Health Organization](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen). This declaration calls for a coordinated international response and immediate action across the globe.

In these unprecedented times, adjustments to health care and resource allocation need to be made efficiently and effectively. As the number of COVID-19 cases continues to rise, government officials, community leaders, developers, etc. are forced to make decisions that impact the lives of countless people as well as the progression of the pandemic.

On March 23rd, Major John Tory announced a municipal emergency for the city of Toronto which stresses the need for even more drastic measures to prevent this disease from spreading further. According to the [Centers for Disease Control and Prevention](https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html), the outcome of contracting the virus can be more severe for older people and those with pre-existing health conditions such as asthma or auto-immune disorders. Therefore, it is absolutely necessary to consider at-risk populations during this time. 

Our app, **Toronto COVID-19 Susceptibility Assessment (TCSA)**, utilizes relevant economic, demographic and health data in order to evaluate which areas of the city are more susceptible to the spread of COVID-19. By using **TCSA**, one can identify neighbourhoods in Toronto that are in greater need of specific health services as well as those at greater risk to succumb to the virus by looking at layers of data weighted by importance. Ultimately, it is our hope that **TCSA** will provide the means for community leaders, government officials, developers and any decision-makers to make well-informed decisions throughout the COVID-19 pandemic. Examples include decisions regarding resource allocation within the city, possible drive-thru testing locations, new COVID-19 assessment centres, etc. 

## App Features
In the Toronto COVID-19 Susceptibility Assessment web app, users can view locations of existing COVID-19 test centers, community health centers, hospitals, and major grocery chains and pharmacies. This data was included so users can see where these facilities are already located in the city of Toronto. In addition, susceptibility analysis maps based on economic factors and health-related factors are provided for the users. The weights for the factors included in these analyses were calculated by using a pairwise comparison matrix which is futher explained in the Calculation & Processing of Data section of this document. Additionally, layers for each of the factors are included in both standardized rates per 1000 people and actual absolute count values for viewing and use in the tools. 

This web app contains 3 main features to help explore the data provided:

**Vulnerability Summary**
- This tool gives the user a summary of the two susceptibility analysis maps based on economic and health-related factors. By using this tool, the user will be able to see the neighbourhoods organized into categories of vulnerability based on a pairwise comparison calculation.

**Custom Assessment**
- If the user does not want to use the provided susceptibility assessment layers, this tool allows the user to identify susceptible neighbourhoods according to their own criteria. This can be useful when determining where to allocate food, funds, or medical resources based on specific values that the user may be interested in. Users can filter the health or economic factors using either the standardized rates or absolute counts of the criteria. If capacity or demand is a concern for your analysis, for example, if you are looking into hospital capacity, then filtering by counts can be useful. 

**Compare**
- This tool allows the user to quickly and easily visualize the difference between two factors of interest by dragging a slider over the map. This can be useful for seeing how certain parts of the city differ in terms of different economic or health factors.

Other features of this web app include:
- Tool Help: An in-depth information page for how to use each tool in the web app. 
- Layers List: Toggle visibility of data layers displayed on the map. 
- Legend: View the legends of visible layers on the map.
- Bookmark: Stores a collection of map view extents. Users can create their own custom bookmarks for their own areas of interest.
- Share: Allows users to share an app through social media. This tool is a great resource for sharing with colleagues and community partners.
- Print: Generate and export a map in multiple formats such as PDFs. This tool is useful for creating physical outputs of the map.

## Calculations & Processing of Data

### Households where EN/FR is not the Primary Spoken Language

Data was only available for households where EN/FR was the primary spoken language so the assumption was made that the remaining population did not have ER/FR as primary spoken language at home. The following equation was used to calculation this data:

```
EN/FR not primary language = total pop neighbourhood - EN/FR primarylanguage 
```
 
### Standardized Data in Rates per 1000 People

Most of the data (e.g. counts of seniors living alone) were obtained as absolute values and converted to rate per 1000 people using the following equation:

```
(Absolute factor value) / (total pop neighbourhood /1000)
```
 
### Processing of Data for Weighted Maps 

There are two weighted maps present in the app based on economic and health-based vulnerability. Both were calculated using their own distinctive factors which were:

**Vulnerability Based on Health Factors** (per 1000 people)
- C1: Seniors Living Alone<sup>[1](https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications/older-adults.html)</sup>
- C2: Seniors 65 and Over<sup>[1](https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications/older-adults.html)</sup>
- C3: People with Asthma<sup>[9](https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/asthma.html)</sup>
- C4: Individual with 2+ Chronic Conditions<sup>[5](https://journals.lww.com/investigativeradiology/Abstract/publishahead/The_Clinical_and_Chest_CT_Features_Associated_with.98832.aspx)</sup><sup>,</sup><sup>[11](https://www.sciencedirect.com/science/article/pii/S0140673620305663)</sup>
- C5: Hospitalizations<sup>[8](https://www.ctvnews.ca/health/sars-lessons-help-canada-prep-for-covid-19-but-hospital-capacity-a-worry-1.4823362)</sup>
- C6: EN/FR Not the Primary Spoken Language<sup>[2](https://www.canada.ca/en/health-canada/services/health-care-system/reports-publications/health-care-accessibility/language-barriers.html)</sup>

**Vulnerability Based on Economic Factors** (per 1000 people)
- C1: Unemployed<sup>[6](http://behindthenumbers.ca/2020/03/16/canadian-workforce-unevenly-protected-from-covid-19/)</sup>
- C2: Low-Income Population<sup>[6](http://behindthenumbers.ca/2020/03/16/canadian-workforce-unevenly-protected-from-covid-19/)</sup>
- C3: Rented Dwellings<sup>[10](https://www.policyalternatives.ca/publications/reports/rent-due-soon)</sup>
- C4: Lone Parent Families<sup>[6](http://behindthenumbers.ca/2020/03/16/canadian-workforce-unevenly-protected-from-covid-19/)</sup>
- C5: EN/FR Not the Primary Spoken Language<sup>[2](https://www.canada.ca/en/health-canada/services/health-care-system/reports-publications/health-care-accessibility/language-barriers.html)</sup>

Pairwise comparisons<sup>[7](https://doi.org/10.1111/j.1538-4632.2002.tb01077.x)</sup> were performed separately to determine the weights of each factor for their respective risk map. Our rankings can be found in the tables below. 

To standardize the data we reclassed each factor using quantile classification so that neighbourhoods have a value from 1-9, 1 being the lowest risk and 9 being the highest risk. Each rank value for each factor is multiplied by their respective weight calculated in the pairwise comparison tables below. The weighted values are added together to get a summed value for that neighbourhood. The larger the value the larger the risk to the neighbourhood. 

**Pairwise Comparison for Health Factors**

|    | C1       | C2       | C3    | C4       | C5  | C6 |
|----|----------|----------|-------|----------|-----|----|
| C1 | 1        | 2        | 3     | 4        | 6   | 9  |
| C2 | 0.5      | 1        | 3     | 4        | 7   | 8  |
| C3 | 0.333333 | 0.333333 | 1     | 2        | 5   | 8  |
| C4 | 0.25     | 0.25     | 0.5   | 1        | 5   | 6  |
| C5 | 0.166667 | 0.142857 | 0.2   | 0.2      | 1   | 5  |
| C6 | 0.111111 | 0.125    | 0.125 | 0.166667 | 0.2 | 1  |

|     | C1       | C2       | C3       | C4       | C5       | C6       | WEIGHT   |
|-----|----------|----------|----------|----------|----------|----------|----------|
| C1  | 0.423529 | 0.51932  | 0.383387 | 0.351906 | 0.247934 | 0.243243 | 0.361553 |
| C2  | 0.211765 | 0.25966  | 0.383387 | 0.351906 | 0.289256 | 0.216216 | 0.285365 |
| C3  | 0.141176 | 0.086553 | 0.127796 | 0.175953 | 0.206612 | 0.216216 | 0.159051 |
| C4  | 0.105882 | 0.064915 | 0.063898 | 0.087977 | 0.206612 | 0.162162 | 0.115241 |
| C5  | 0.070588 | 0.037094 | 0.025559 | 0.017595 | 0.041322 | 0.135135 | 0.054549 |
| C6  | 0.047059 | 0.032457 | 0.015974 | 0.014663 | 0.008264 | 0.027027 | 0.024241 |
| SUM | 1        | 1        | 1        | 1        | 1        | 1        | 1        |

|    | C1       | C2       | C3       | C4       | C5       | C6       | W        | CV       |
|----|----------|----------|----------|----------|----------|----------|----------|----------|
| C1 | 0.361553 | 0.57073  | 0.477153 | 0.460964 | 0.327294 | 0.218168 | 2.415862 | 6.681898 |
| C2 | 0.180777 | 0.285365 | 0.477153 | 0.460964 | 0.381843 | 0.193927 | 1.980028 | 6.938582 |
| C3 | 0.120518 | 0.095122 | 0.159051 | 0.230482 | 0.272745 | 0.193927 | 1.071844 | 6.738996 |
| C4 | 0.090388 | 0.071341 | 0.079526 | 0.115241 | 0.272745 | 0.145445 | 0.774686 | 6.722321 |
| C5 | 0.060259 | 0.040766 | 0.03181  | 0.023048 | 0.054549 | 0.121204 | 0.331637 | 6.079608 |
| C6 | 0.040173 | 0.035671 | 0.019881 | 0.019207 | 0.01091  | 0.024241 | 0.150082 | 6.19129  |

λ = 6.558783   CI = 0.111757   RI = 1.24   CR = 0.090126

**Pairwise Comparison for Economic Factors**

|    | C1       | C2       | C3       | C4   | C5 |
|----|----------|----------|----------|------|----|
| C1 | 1        | 5        | 7        | 8    | 9  |
| C2 | 0.2      | 1        | 3        | 5    | 9  |
| C3 | 0.142857 | 0.333333 | 1        | 3    | 5  |
| C4 | 0.125    | 0.2      | 0.333333 | 1    | 4  |
| C5 | 0.111111 | 0.111111 | 0.2      | 0.25 | 1  |

|     | C1       | C2       | C3       | C4       | C5       | WEIGHT   |
|-----|----------|----------|----------|----------|----------|----------|
| C1  | 0.633325 | 0.752508 | 0.606936 | 0.463768 | 0.321429 | 0.555593 |
| C2  | 0.126665 | 0.150502 | 0.260116 | 0.289855 | 0.321429 | 0.229713 |
| C3  | 0.090475 | 0.050167 | 0.086705 | 0.173913 | 0.178571 | 0.115966 |
| C4  | 0.079166 | 0.0301   | 0.028902 | 0.057971 | 0.142857 | 0.067799 |
| C5  | 0.070369 | 0.016722 | 0.017341 | 0.014493 | 0.035714 | 0.030928 |
| SUM | 1        | 1        | 1        | 1        | 1        | 1        |

|    | C1       | C2       | C3       | C4       | C5       | W        | CV       |
|----|----------|----------|----------|----------|----------|----------|----------|
| C1 | 0.555593 | 1.148566 | 0.811765 | 0.542393 | 0.278352 | 3.336669 | 6.005596 |
| C2 | 0.111119 | 0.229713 | 0.347899 | 0.338996 | 0.278352 | 1.306079 | 5.685693 |
| C3 | 0.07937  | 0.076571 | 0.115966 | 0.203398 | 0.15464  | 0.629945 | 5.432138 |
| C4 | 0.069449 | 0.045943 | 0.038655 | 0.067799 | 0.123712 | 0.345558 | 5.096794 |
| C5 | 0.061733 | 0.025524 | 0.023193 | 0.01695  | 0.030928 | 0.158327 | 5.119225 |

λ	= 5.467889276   CI =	0.116972319   RI	= 1.12   CR =	0.10443957

## Sources
### Geospatial Data

Data from the Toronto Open Data portal:
- [Toronto Neighbourhoods](https://open.toronto.ca/dataset/neighbourhoods/)
- [Wellbeing Toronto](http://map.toronto.ca/wellbeing/#eyJ0b3Itd2lkZ2V0LWNsYXNzYnJlYWsiOsSAcGVyY2VudE9wYWNpdHnElzcwfSwiY3VzxIJtYcSTYcSXxIBuZWlnaGJvdXJob29kc8S2fcSrxIHEg8SFxIfEicSLdGFixYXEmCLEo3RpdmVUxZBJZMSXxYnEhMWPYi1pbmRpY2HEgnLFhcWIYWdzTWFwxLYiesWCbcSXMTPErHjEly04ODM3NzYzLjXGhDcyN8SsxKc6NTQxMjkzMS4yNMaDMjg1xYjFpMWmxajFqsWSxIDFmMWraW9uxJcyxKxzxaRnbGXFtMSucsSTxJ9UaW1lxZzEqMWIxZbGuXPEm2llxqPFiMazxrV0ScWlxafFqcSDTcWDxrE6IsatbsavxrHFhw%3D%3D)
     - Seniors Living Alone (2014)
     - Seniors Ages 65 and Over (2014)
     - Lone Parent Families (2014)
     - Unemployed (2014)
     - Low-income Population (2014)
     - Rented Dwellings (2014)

Data from the [Ontario Community Health Partnership](http://www.ontariohealthprofiles.ca/dataTablesON.php?varTab=HPDtbl&select1=7):
- Community Health Centre Locations (exported as a CSV from this [webapp](https://utoronto.maps.arcgis.com/apps/webappviewer/index.html?id=3c3a4255e7ab4b87b94c3dd957888ed2))
- Households where EN/FR is not the Primary Spoken Language (2016)
- Individual with 2+ Chronic Conditions (age 20+) (2016/2017)
- People with Asthma (2016/2017)
- Hospitalizations (2015/2017)

Data from ArcGIS Online:
- [“COVID19 Testing Centres in Canada”](https://services1.arcgis.com/B6yKvIZqzuOr0jBR/arcgis/rest/services/COVID19_Testing_Centres_in_Canada/FeatureServer) Feature Layer by pheersink_exchange 

Data from the York Region Open Data portal:
- [Hospital Locations](https://hub.arcgis.com/datasets/york::hospital)

### Research
1. Are You at Higher Risk for Severe Illness. (2020, March 20). Retrieved from https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html
2. Bowen, S. (2001, November). Language Barriers in Access to Health Care. Retrieved from https://www.canada.ca/en/health-canada/services/health-care-system/reports-publications/health-care-accessibility/language-barriers.html
3. Coronavirus Disease (COVID-19) - events as they happen. (2020, March 26). Retrieved from https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen
4. Coronavirus disease (COVID-19): Prevention and risks. (2020, March 26). Retrieved from https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html
5. Li, K., Wu, J., Wu, F., Guo, D., Chen, L., Fang, Z., & Li, C. (2020). The Clinical and Chest CT Features Associated with Severe and Critical COVID-19 Pneumonia. Investigative Radiology, 1. doi: 10.1097/rli.0000000000000672
6. Macdonald, D. (2020, March 16). Canadian workforce unevenly protected from COVID-19. Retrieved from http://behindthenumbers.ca/2020/03/16/canadian-workforce-unevenly-protected-from-covid-19/
7. Malczewski, J. (1999). Gis and multicriteria decision analysis. doi: https://doi.org/10.1111/j.1538-4632.2002.tb01077.x
8. Osman, L. (2020, February 22). SARS lessons help Canada prep for COVID-19, but hospital capacity a worry. Retrieved from https://www.ctvnews.ca/health/sars-lessons-help-canada-prep-for-covid-19-but-hospital-capacity-a-worry-1.4823362
9. People with Asthma and COVID-19. (2020, March 17). Retrieved from https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/asthma.html
10. Tranjan, R. (2020, March 23). The Rent Is Due Soon - Financial Insecurity and COVID-19 Report. Retrieved from https://www.policyalternatives.ca/publications/reports/rent-due-soon
11. Zhou, F., Yu, T., Du, R., Fan, G., Liu, Y., Liu, Z., … Cao, B. (2020). Clinical course and risk factors for mortality of adult inpatients with COVID-19 in Wuhan, China: a retrospective cohort study. The Lancet, 395(10229), 1054–1062. doi: 10.1016/s0140-6736(20)30566-3

### Media
#### Images
- Heart icon by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com
- Money icon by [Dimitry Miroliubov](https://www.flaticon.com/authors/dimitry-miroliubov) from www.flaticon.com
- [Toronto cityscape](https://www.pexels.com/photo/toronto-cityscape-935474/) by Skitterphoto from Pexels
#### Videos
- ["Drone Footage of a Community"](https://www.pexels.com/video/drone-footage-of-a-community-2356323/) video by [Kelly Lacy](https://www.pexels.com/@kelly-lacy-1179532?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from Pexels
- ["Hand Washing"](https://www.pexels.com/video/hand-washing-855397/) video by [Pixabay](https://www.pexels.com/@pixabay?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from Pexels
- ["People Having a Meeting"](https://www.pexels.com/video/people-having-a-meeting-853822/) video by [Free Videos](https://www.pexels.com/@free-videos?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from Pexels
- ["Video of People Walking"](https://www.pexels.com/video/video-of-people-walking-855564/) by [Pixabay](https://www.pexels.com/@pixabay?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from Pexels
- ["View of City at Dusk"](https://www.pexels.com/video/view-of-city-at-dusk-2019781/) video by [Luis Ruiz](https://www.pexels.com/@luis-ruiz?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from Pexels
#### Music
- ["Motivate Me"](https://www.free-stock-music.com/artist.mixaund.html) by Mixaund
