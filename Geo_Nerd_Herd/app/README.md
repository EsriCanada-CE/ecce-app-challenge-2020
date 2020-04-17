# Toronto Health Care Query System
This Toronto Health Care App can help you find the optimal health care for you. 


## Quick Start

Check out <a href="https://xuyanghan.github.io/esri_2020_app_challenge/">Web App</a> to view the live demo site!

## Mission Statement

Smart City is an emerging concept that describes a highly-digitalized urban area. Using technics of electronic Internet of Things (IoT), the City’s data, resources and service can be efficiently collected, stored, managed, accessed and analyzed. The city data digitalization can be very beneficial for its citizens, especially in Healthcare. The healthcare needs of the citizen are very high in volume. But managing this onrush of literally millions of patients has forced the industry to confront significant challenges. And the most fundamental challenge is how to provide the right care at the right place at the right time at an affordable price (to individuals and society). A system containing digitalized Healthcare resources helps the healthcare providers to promote their services as well as helping the patients to find the needed health care. Healthcare resources digital transformation builds this bridge between the healthcare providers and payers. 

Living in the age of digitalization, every aspect of care delivery and operations has been changed from the past. This generation of patients is not willing to spend time on traditional processes of searching. Instead, they want immediate access to the right healthcare service, professional doctors and results. They do not want to waste time going to the wrong services. They want price transparency and supporting data to help make healthcare decisions. So, it’s important to have a system enabling smarter choices and better utilization of time and resources. 

This application is expected to step ahead closer to the digital smart city. The team members organize the data from many various resources and generate a healthcare database for the Toronto citizens. Taking advantage of Esri’s smart mapping GIS Online system, this application’s goal is to provide a healthcare querying platform, improving Toronto citizens’ experience of looking for health care that in need. Using our app, the patients will have clear information that which hospital/clinic should they go to, what’s the healthcare capacity and how long they will expect to wait before seeing a doctor.



## App Description & Features
1. Healthcare Resources Digitalization

The team created a Healthcare Database, organizing all healthcare resources available in Toronto can assist the patients in need to find the optimal service based on their needs. The team organized Toronto Top-15 hospitals’ data and Top-80 clinics data and store them as GIS data layers. Data collected from various data sources are fused into one dataset, data including Average Wait Time to First Assessment by a Doctor for All Patients, Average Length of Stay for Low-Urgency Patients Not Admitted, percentage of patients finished visit within target 4 hours, Average Length of Stay for High-Urgency Patients Not Admitted, percentage of patients finished visit within target 8 hours, Average Length of Stay for All Patients Admitted and percentage of patients admitted from emergency within target 8 hours. In addition, information is organized including Hospitals’ locations, how many Doctors in each hospital, what treatment services are provided, accessibilities and overall service ratings. The patient will be provided clear information listed above and will be able to make the quick and right decisions about which hospital/clinic should they go to, based on the distance, estimated healthcare capacity and how long will be expected to wait. 

2. Geospatial Visualization and Mapping

The team chose to use GIS Online to visualize the geospatial data on the map, supporting the analysis of geospatial data through the use of interactive visualization. Taking advantage of the powerful visualization functionalities provided by GIS Online, the team communicates the Toronto healthcare geospatial information, combining human understanding and allowing for data exploration and decision-making processes. Different from the traditional static maps with limited exploratory capability, the Toronto Healthcare Dashboard Application using GIS Online allows for more interactive maps. Users can explore different layers of the map, zoom in or out, implement customized filters and browse data to find the desired healthcare service. Geospatial Visualization has diverse real-world applications assisting decision-making and knowledge creation processes, includes Forestry, Archaeology, Environmental Studies, and Urban planning. The team sees Geospatial Visualization’s potential in the Healthcare industry and the app fully utilizes the concept. 

3. Data Query and Visual Analytics 

Firstly, the patients can query the data by customizing the filter to find the most desired healthcare. Secondly, the provided dashboard embeds Visual Analytics functionalities so that the users can get comprehensive information about healthcare services. Visual analytics is "the science of analytical reasoning facilitated by interactive visual interfaces." The team utilized this concept to create the dashboard allowing the users to get clear and wholistic information about the facility including the average waiting time to see a doctor, average time spends in the hospital, the number of patients and doctors in the hospital. The platform thus is also crucial to research communities studying medical and healthcare data analysis.  


## User Manual
### Specified Healthcare

The patients can find the most desired healthcare by filtering the service category, waiting time, healthcare capacity, accessibility, ratings, and distances. 

1. The dashboard shows hospital data and clinic data. Firstly, the user needs to decide which kind of service he/she would like to choose. Click the layers icon <img src="https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/layers-icon.png" alt="drawing" width="20"/> to choose layer and data layers will show at dropdown. Check the desired service later and uncheck the wrong one. 

2. Then the users can specify the filters to find the most desired healthcare. Click the filters icon <img src="https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/filter-icon.png" alt="drawing" width="20"/>, and then the filters will be shown at dropdown. Choose the right filter, you will see a list of criteria where texts can be input. For example, if you want to find emergency services, you can simply input ‘emergency’ in the first textbox and turn on this filter. The desired results will be shown on the map.   

### Location Intelligence

Location services are available to the patients. They can find desired healthcare within the corresponding input location and distance. Click the near me icon <img src="https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/nearme-icon.png" alt="drawing" width="20"/>, users have three options to search features near a location (1. Put the address in textbox. 2. Locate yourself 3. Place a marker on the map). Then users need to select a radius by the slide bar. The desired results will be shown on the map and the dropdown list.  Directions are also provided to the user so they can know how to go there.  

### Visual Analytics 

Users can get comprehensive information about the healthcare services including the average waiting time to see a doctor, average time spends in the hospital, number of patients and doctors in the hospital.  

1.	By default, the dashboard shows all hospital data in Toronto, Ontario. 

<img src='https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/1.PNG'>

2.	You may choose a specific hospital to study its data in detail by clicking it and hospitals are shown in the dropdown. 

<img src='https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/2.PNG'>

3.	The average waiting time before first assessed by a doctor, the average time in the emergency is shown here. 

<img src='https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/3.PNG'>

4.	The number of patients in each emergency cases over time is shown below. 

<img src='https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/4.PNG'>

5.	The average waiting time in each emergency case (in hours) are shown below. 

<img src='https://raw.githubusercontent.com/xuyangHan/esri_2020_app_challenge/master/images/5.PNG'>

## Video

Please check the <a href="https://youtu.be/21c-EsDieMo">demo video </a>of the application. 

## App Resources
All the resources used for building the App is open-sourced.

### Data Sources
|     Data     |      Source      |  Year |
|----------|-------------|------|
| Emergency Department (ED) |   [link](http://www.torontohealthprofiles.ca/a_dataTables.php?varTab=HPDtbl)  | 2013-2014 |
| General Hospitals in Toronto |   [link](https://www.google.com/maps/search/hospital/@43.7337905,-79.417453,11z/data=!3m1!4b1	) |2020  |
| Median waiting times |  [link](https://open.canada.ca/data/en/dataset/b783efd5-7be7-4989-942f-a0fcda8d3fb7	) | 2018 |
|Changing Landscape of Toronto’s Populatio  |  [link](https://www.toronto.ca/wp-content/uploads/2018/01/94fc-Toronto_Geographic-Trends_Web-Version.pdf) | 2016 |
| Doctors Information |  [link](https://doctors.cpso.on.ca/?search=general) | 2020 |
| NACRS and CIHI Free resources |  [link](https://www.cihi.ca/en/quick-stats) | 2020 |
| NACRS Emergency Department Visits and Length of Stay |  [link](https://www.cihi.ca/sites/default/files/document/nacrs-2018-2019-quickstats-en-web_0.xlsx) |  2018-2019 |
| National Ambulatory Care Reporting System |  [link](https://www.cihi.ca/en/national-ambulatory-care-reporting-system-metadata) | 2018-2019 |
| Priority Procedures Knee and Hip Replacement |  [link](https://www.cihi.ca/en/wait-times-for-priority-procedures-in-canada) | 2019 |
| Injury and Trauma Stats |  [link](http://www.cihi.ca/sites/default/files/document/2017-2018-injury-and-trauma-quick-stats-en-web.xlsx) | 2017-2018 |
| Wait time in ED "Chapter 4 Page 28" |  [link](https://www.hqontario.ca/portals/0/Documents/pr/measuring-up-2018-en.pdf) | 2018 |
| Time Spent in Emergency |  [link](https://www.ontario.ca/page/time-spent-emergency-department) | 2019 |

### Tools
* <a href="https://www.arcgis.com/home/ ">ArcGIS Online</a>
* <a href="https://jupyter.org/ ">Jupyter Notebook</a>

## Team
* Xuyang Han: Data Scientist and Full-stack Developer, han978@yorku.ca

Xuyang Han is a Master student in the Department of Earth and Space Science Engineering at York University. Data analytics and data mining with more than one year and a half of well-rounded experience. Built the first Crowd-sourced bathymetry database in North Canada Area. Applying Machine Learning Models to improve Marine Trajectory Clustering and Anomaly Detection. Skilled at GIS. Have experience on Full Stack Developing. Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.

* Aman U. Usmani: Software, Geomatics and Data Engineer, usmani@yorku.ca

Aman is a candidate for Master studies in department of Earth & Space Science Engineering at York University. After completing his undergrad in Computer Science, he joined the software development industry and polished skill set in Game Development. In 2018, he started research study with focused towards BIM, GIS and IoT oriented integrated system for smart cities application. Furthermore, his core skills is programming with best practices, and interests of software architectural designs, planning, development, analysis and optimization.

* Amirhossein Nourbakhsh: Software, Geomatics and Data Engineer, amirnbr@yorku.ca

Amirhossein is a Master student in the Department of Earth and Space Science Engineering at York University. Experienced Computer Vision, Deep Learning, Network Analysis with a focus on Location Based Services .Skilled at Java, Node.js, MongoDB. Self-motivated and determined type which always ready to face the challenges with a problem-solving manner. try hard to stay away from the unhealthy and disturbing status quo of the society and do best to find ways to upgrade people and life to a higher level. 

## References

|     Article     |      Source      | 
|----------|-------------|
| The real challenge to Canada’s health system |   [link](https://www.theglobeandmail.com/opinion/canada-must-address-the-problem-of-long-waits-for-medical-care/article34056251/)  | 
| Commonwealth Fund Survey 	 |   [link](https://www.cihi.ca/en/commonwealth-fund-survey-2016	) |
|Charts and Numbers 	 |   [link](https://www.theglobeandmail.com/life/health-and-fitness/health/how-quickly-can-you-see-a-doctor-study-shows-canada-lags-behind-other-nations-on-timelyaccess/article34043606/	) |
| Highlights Issue Doctor payments rise 	 |   [link](https://www.theglobeandmail.com/news/national/doctor-costs-rise-37-per-cent-in-2015-while-incomes-stall/article31503411/) |
| The Digitization of Healthcare 	 |   [link](https://www.cisco.com/c/dam/en_us/solutions/industries/docs/digitization-healthcare.pdf) |
| The Healthcare Database: Purposes, Strengths, and Weaknesses 	 |   [link](https://www.healthcatalyst.com/insights/healthcare-database-purposes-strengths-weaknesses) |
| Smart city  |   [link](https://en.wikipedia.org/wiki/Smart_city) |
