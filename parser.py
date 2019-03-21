from pprint import pprint
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import argparse

# Fetch the service account key JSON file contents
cred = credentials.Certificate('./config/fireNation.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://test-9a981.firebaseio.com'
})



ap = argparse.ArgumentParser()
ap.add_argument("-f", "--f", required=True,
	help="name of the file")
ap.add_argument('-j', action='store_true')
ap.add_argument('-c', action='store_true')
args = vars(ap.parse_args())

if(args["j"]):
	ref = db.reference('journals/')
	t='journal'
if(args["c"]):
	ref = db.reference('conference/')
	t = 'conference'

# display a friendly message to the user
print("parsing file : ",str(args["f"]))
file = open("./Sample_data/"+str(args["f"]),"r")
f=file.readlines()

for i in range(0,len(f)):
	publ = f[i].split(';')
	newpub = {'title' :publ[1], t :publ[2] }
	authors = publ[0].split(',')
	
	for i in range(0,len(authors)):
		newpub['author'+str(i+1)]=authors[i]	
	if(publ[3]):
		newpub['vol'] = int(publ[3])
	if(publ[4]):
		newpub['issue'] = int(publ[4])
	if(publ[5]):
		newpub['pages'] = (publ[5])
	if(publ[6] is not '\n' and publ[6]):
		newpub['year'] = publ[6]
	newpub['abstract'] = "maybe some abstract"
	newpub['keywords'] = newpub['title'].split(' ')
	ref.child(newpub['title']).set(newpub)
