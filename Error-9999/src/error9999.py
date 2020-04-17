################################
# Name: Update Atlantic Air Quality Feature Service
# Filename: error9999.py
# Date: March 13, 2020
# Purpose: Update AGOL item with Air Quality data from Gov't of Canada
# By: Error9999, Leah Fulton, Nathan Slater, Charles Williams
################################

from arcgis.gis import GIS
from arcgis.features import FeatureSet, Feature
import requests
import xml.etree.ElementTree as ET
from builtins import AttributeError

# Air Quality specific functions
# Send request to url and parse xml response
def getAqIndexCurrent(url):
    res = requests.get(url)
    if(res.ok):
        xml = res.content
        root = ET.fromstring(xml)
        aqIndex = root[2].text
        return aqIndex
    else:
        return None

def getAqIndexTonight(url):
    res = requests.get(url)
    if(res.ok):
        xml = res.content
        root = ET.fromstring(xml)
        aqIndexTonight = root[4][1][2].text
        return aqIndexTonight
    else:
        return None

def getAqIndexTomorrow(url):
    res = requests.get(url)
    if(res.ok):
        xml = res.content
        root = ET.fromstring(xml)
        aqIndexTonight = root[4][2][2].text
        return aqIndexTonight
    else:
        return None

class AGOL(object):
    
    def __init__(self, username, password):
        self.lUser = username
        self.lPassword = password
        self.lConnection = None

    def setConnection(self):
        print("run: setAGOLConnection")
        self.lConnection = GIS("https://www.arcgis.com",
                               self.lUser,
                               self.lPassword)                             

    def getAccountsList(self):
        lAccounts = self.lConnection.users.search(max_users=1000)
        return lAccounts
    

if __name__ == "__main__":

    print("Run: main")

    lAGOL = AGOL('your_agol_username', 'your_agol_password')
    lAGOL.setConnection()

    lFeatureService=lAGOL.lConnection.content.get('d414896bc74946e5a7be84591b278b53')

    lFeatureLayer=lFeatureService.layers[0]

    lFeatures=lFeatureLayer.query(where='1=1',out_fields='*',return_geometry=False)

    # total # of features in feature layer
    # print(len(lFeatures))

    for feature in lFeatures:
        
        # print(feature.attributes['EC_admin_1'])

        lURLCurrent = feature.attributes['EC_admin_6']
        lURLTonightTomorrow = feature.attributes['EC_admin_7']

        # print(lURLCurrent, lURLTonightTomorrow)

        lValCurrent = getAqIndexCurrent(lURLCurrent)
        lValTonight = getAqIndexTonight(lURLTonightTomorrow)
        lValTomorrow = getAqIndexTomorrow(lURLTonightTomorrow)

        # print(lValCurrent, lValTonight, lValTomorrow)
        # print('--')
        
        feature.set_value('CRNT', lValCurrent)
        feature.set_value('TGNT', lValTonight)
        feature.set_value('TMRW', lValTomorrow)

    lResult = lFeatureLayer.edit_features(updates=lFeatures)
    print(lResult)
    print('Done.')   






