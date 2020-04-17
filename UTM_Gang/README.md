# AllergeNS Mission Statement
While the physical and mental health benefits of outdoor activity are well known, so are the potential hazards to people enjoying these activities. Three common concerns for hikers are insect stings, poison ivy, and bear encounters. AllergeNS is a tool to bring awareness to the potential hazards and accessibility to emergency services when out and about in Nova Scotia by integrating citizen scientist observations and hospital information.

# Main objectives: 
Inform greenspace users in Nova Scotia of potential presence of allergens and encounters using archived citizen scientist observations.
Provide information about minor reaction treatment for insect stings and toxicodendron reactions.
Provide information about avoiding bear encounters.
Help user find the nearest hospital to their location, showing contact and navigational information.

# App Description and Features
Show occurrence data of stinging insects, toxicodendron (irritating plants such as poison ivy), and bears.
Users can opt to view the distribution of any of these three hazards throughout Nova Scotia. This helps the users to be more well informed of potential hazards in natural spaces they choose to visit. In addition to observed occurrences, we also provide summary fact sheets of ways to mitigate risk and treatment for minor reactions. 

Find the nearest hospital to a user-defined point and show navigation directions and facility information. Being aware of access to emergency services in the case of an extreme allergic reaction, or other incident while enjoying Nova Scotia’s natural space. 

A note about our species observations: AllergeNS uses open data from publicly-sourced observations of our target organisms. Observations were retrieved from the Global Biodiversity Information Facility and were primarily collected via iNaturalist, and are the product of citizen science. Users might notice large concentrations of points around towns and other areas where people frequent, while there are few points in areas where there are few people. This doesn’t mean that bees necessarily don’t exist in the areas where there are no observations, but that there have not been any observations in these areas (either because there are no bees, or because there are no people to observe them)

# Data processing 
1. Visualizing distribution of each group:
    1. Obtain observation information
        1. Hymenoptera (stinging insect) observations were filtered to include only bees, wasps, yellow jackets, hornets, and fire ants. 
        2. All Ursidae (bear) observations were included
        3. All Toxicodendron (irritating plant) observations were included
    2. Buffer observations based on dataset and organism information:
        1. Stinging insects: buffer to 3 km, a ballpark range of bee travel
        2. Toxicodendron: buffer to 50 m, an estimate of observation location uncertainty
        3. Bears: buffer to 30 km, related to the territorial range of black bears

1. Locate nearest hospital:

    1. Obtain hospital locations and information
    2. Built-in “Near Me” widget to find the nearest hospital to a user-input location, and show driving directions to the identified hospital. 

# Limitations
As our data is primarily from public observation, which of course is only available where people have submitted observations to the database. We cannot distinguish between areas of no occurrence and simply no observation. 

# Sources

## Geospatial open data sources
Hymenoptera observations, 2010 - 2020. Global Biodiversity Information Facility. GBIF.org (07 March 2020) GBIF Occurrence Download https://doi.org/10.15468/dl.vsebqx

Ursidae observations, 2010 - 2020. Global Biodiversity Information Facility. GBIF.org (09 March 2020) GBIF Occurrence Download https://doi.org/10.15468/dl.jjfctk

Toxicodendron Mill. observations, 2010 - 2020. Global Biodiversity Information Facility. GBIF.org (07 March 2020) GBIF Occurrence Download https://doi.org/10.15468/dl.ma0rhj

Hospital information. Open Data Nova Scotia. Hospitals_2016 shapefile
https://data.novascotia.ca/Health-and-Wellness/Hospitals/tmfr-3h8a


## Fact Sheet References
Poison Ivy, Poison Oak & Poison Sumac. In: Noxious Plants. 2014. Safety Information Site, Earth & Atmospheric Sciences, University of Alberta. https://ssl.eas.ualberta.ca/safety/?p=43

Allergies to Insect Stings. 2018. HealthLink British Columbia. https://www.healthlinkbc.ca/health-topics/rt1285

How to Avoid Problems with Black Bears. 2013. Province of Nova Scotia, Department of Lands and Forestry. https://novascotia.ca/natr/wildlife/nuisance/bears.asp

## Image credits - All images were labelled as free to use or share.
App bee icon - CC0 Public Domain Dedication http://creativecommons.org/publicdomain/zero/1.0/

Black bear silhouette. Publicdomainvectors.com https://publicdomainvectors.org/en/free-clipart/Black-bear-silhouette-vector-graphics/66337.html

Honey bee macro. https://live.staticflickr.com/2771/4312985916_a2ab8a2e68_b.jpg

Hornet. Yasunori Koide. Licenced under Wikimedia Commons https://commons.wikimedia.org/wiki/File:Male_Vespa_mandarinia.DSC_1515.jpg#filelinks

Mother black bear with her cubs. Getty Images/iStockphoto; SeventhDayPhotography https://live.staticflickr.com/4198/35219607121_94b5e13c3a_b.jpg

Poison Ivy leaves. Wikipedia User Stilfehler. Licenced under Wikimedia Commons https://commons.wikimedia.org/wiki/File:Poison_Ivy_Leaves.jpg

Poison oak. NeedPix User Jlewoldsen https://www.needpix.com/photo/723299/poison-ivy-leaves-of-three-blisters-danger-vine-poisonous-rash-toxic-weed

Poison Sumac. Wikipedia User BruceBlaus. Licenced under Wikimedia Commons https://commons.wikimedia.org/wiki/File:Poison_Sumac.png

Wasp. Wikipedia User Bernie. Licenced under Wikimedia Commons. https://commons.wikimedia.org/wiki/File:AD2009Sep09_Vespula_germanica_01.jpg
