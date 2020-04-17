# COVID-19 Assessment Center Locator
### By the GISB Crew - David Z, Sherry C, Todd W

*hereafter called CACL*

### The goals of CACL were very simple

To help people find the nearest COVID-19 assessment center to them in the Greater Toronto/Hamilton Area. Then, display directions and information on how to access it. 

The final app is very simple, easy to use, and tells people the hours and specific information on which entrance to use and if a referral is needed. It's useful and has a few interesting features that make it very easy to be maintained.

Finally, users can print their directions to their nearest assessment center.

It's made through Esri's ArcGIS Online Web App Builder and currently found 
[here.](https://arcg.is/PjajL)

## Features

#### Near Me

The Near Me widget takes an address or the user's current location and identifies the nearest COVID-19 assessment center (as of last update, March 24, 2020). The user can define a buffer range from 0 to 30 km. Then, the user can click on an assessment center and find directions from their locations using a road network. They can then print those directions, and if need be, make their way to an assessment center.

#### Assessment Centers

The assessment centers themselves come from an ArcGIS Online-housed feature layer that is very editable and updatable, making maintaining this app simple. It contains fields for names, cities, dates, addresses, *specific entrance protocols* for COVID-19, and any additional information. The pop-ups and info therein is customized Arcade code:

```
var Name = $feature.USER_AssCenter
var Addy = $feature.USER_Address
var City = $feature.USER_City
var Hours = $feature.USER_Hours
var Entrance = $feature.USER_Entrance
var MoreInfo = $feature.USER_MoreInfo

return "This testing centre is " + Name + "." + "\n" +
"Its address is " + Addy + ", " + City + "." + "\n" +
"Its hours are " + Hours + ". " + Entrance + ". " + "\n" + "\n" +
iif(IsEmpty($feature.USER_MoreInfo), "", MoreInfo + ".")
```

This makes it look pretty, readable, and understandable without having to search through useless fields in popups.

#### Print

The print feature can print the main map view from whatever zoom level the user has. It does not print directions - that's done through the Near Me widget.

#### Share

The user can share the web app using the share feature, generating a new link based on whatever zoom level and pan the user has moved to. Users can share using a link, or through email, or to their socials on Facebook, Twitter, or Google+ (yeah, still Google+). Alternatively, they can embed the web app on their site.

#### Presentation

It's all nested in a 
[nice ArcGIS StoryMap](https://storymaps.arcgis.com/stories/ef7513bbf58f4af980e6d4bb8dd5af52)
 that has a self-assessment checklist and then a survey at the end, although of course those are not considered part of the app itself, I suppose.