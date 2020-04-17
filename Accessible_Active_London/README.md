# Accessible Active London --- Active Transport Accessibility Score Mapping Application

Victoria Barlow
Jack McIlraith

Esri Canada Centres of Excellence App Challenge 2020

Western University, Canada
-------------------------------------------------------------------------------------
MISSION STATEMENT

The environmental and health benefits of active transportation should be accessible to all
members of the public, regardless of individual accessibility requirements. Accessible Active
London (AAL) aims to evaluate and communicate the accessibility of walking/cycling paths 
around the city of London, Ontario. This mapping app promotes public engagement in heath, 
transport and accessibility through public participatory GIS (PPGIS), by inviting the public
to use the app to plan active transportation and report accessibility issues in London. 
Public engagement in improving the accessibility of active transportation routes will make
London a healthier, safer and more inclusive city while connecting members of the public.
--------------------------------------------------------------------------------------
Accessible Active London - App Information

The mobile and web app provide a resource the public can use to aid in planning their use
of walking/cycling paths for active transportation or recreation. Active transportation routes
symbolized by their relative accessibility provide a quick visual reference, highlighting
paths with good accessibility features. Locations of bus stops and controlled intersections
provide supplementary accessibility information. The application features can be interacted
with to view further details on their accessibility, such as the type of intersection control
or the length of path segments. App users can use the widget features to further aid their
planning or knowledge of path accessibility, such as the route planning widget.

Additionally, app users can report accessibility issues through the attached survey.
Information on accessibility issues reported by the public can help public workers maintain
and improve London's active transportation pathways. Public participation in the maintenance
and improvement of transportation routes supports municipal accountability and provides
direction for public workers.
-------------------------------------------------------------------------------------
HOW TO USE THE APP

-USERS-

Users navigate to the web app, hosted on a website such as the City of London website. Users
can scroll and click to zoom and pan around the web map to view different active 
transportation paths and supplementary accessibility features information, such as the 
location of bus stops and controlled intersections. Users can click on the map features to
view the attributes of the selected feature, such as the accessibility score of path
segments, type of controlled intersection or bus routes serviced.

Users can use the built in web app widgets to obtain directions to and from desired locations,
draw on the map to measure distances, share the web app and print. Additionally, users can
use the search bar to view and pan to points of interest. Finally, users can view the map
legend, and toggle layer visibility using the menu toolbar.

Users can report accessibility issues along London active transportation pathways by
following the link at the top of the web app 'Report Accessibility Issues', where they are
led to fill in a survey. The users can identify the location of the accessibility issue by
scrolling and dragging to zoom and pan around the embedded web map and clicking to add a 
marker indicating location, or allow access to their device's location. Users are then 
able to identify and describe the type and nature of the accessibility issue, and attach an
image of the accessibility issue.

-DEVELOPERS-

The app should be configured and hosted in a web viewable folder, or on a web server. The
underlying web map, app and survey should be added to the organizational ArcGIS Online 
account, so content might be edited and viewed as required.

Survey responses can be accessed from the survey folder in the ArcGIS Online content 
area.

Accessibility scores are based on the sum of logical criteria as follows:
1. Connectivity - the path segment connected to another path segment
2. Length - the path segment is in the fourth quartile of relative length, roughly
		    >= 250 metres
3. Controlled access - the path segment ends at a controlled intersection*
4. Bus Access - the path segment ends at a bus stop
The result is an accessibility score between 0-4, with 0 being a low accessibility score,
and 4 being a high accessibility score. 

*controlled intersections have crossing guards, pedestrian signals or traffic signals

All data was retrieved from City of London Open Data:<br />
https://opendata.london.ca/

OR London Transit Commission Open Data:<br />
http://www.londontransit.ca/open-data/