import pandas 
import csv
import requests
from bs4 import BeautifulSoup


url ='https://www.amazon.in/Apple-iPhone-15-Plus-128/dp/B0CHX6X2WW/?_encoding=UTF8&pd_rd_w=ml7Je&content-id=amzn1.sym.e8531dbd-bba2-4195-85f1-c2bcfebc1303%3Aamzn1.symc.9b8fba90-e74e-4690-b98f-edc36fe735a6&pf_rd_p=e8531dbd-bba2-4195-85f1-c2bcfebc1303&pf_rd_r=MFVSJ43SD2D34BNYRV1H&pd_rd_wg=l0GLC&pd_rd_r=efc50c84-4f0a-486a-9194-db915f96ae8d&ref_=pd_hp_d_btf_ci_mcx_mr_ca_id_hp_d'
resp=requests.get(url)
#print(resp)

soup=BeautifulSoup(resp.content,'html.parser')
#print(soup.text) 
#print(soup.prettify)

#titles scrap
'''
titles=soup.findAll('span',id='productTitle')                  #some websites are using class and id .some wwbsites are using class only. take any one
#titles=soup.findAll('h1',id=('title'))
print(titles)

#ratings scrap

#ratings=soup.findAll('a',class_='a-popover-trigger a-declarative')
ratings=soup.findAll('span',class_='a-size-base a-color-base')
#ratings=soup.findAll('i',class_='a-icon a-icon-star a-star-4-5 cm-cr-review-stars-spacing-big')    #review stars
print(ratings)

#reviwes scrap

#reviews=soup.findAll('a',id='acrCustomerReviewLink')
reviews=soup.findAll('span',id='acrCustomerReviewText')
print(reviews)


#prices scrap

#prices=soup.findAll('span',aria-hidden='true')
#aria-hidden='true'means ignore or hide the elements from the users


#image scrap
 
#images=soup.findAll('div',class_='imgTagWrapper')
images=soup.findAll('div',id='imgTagWrapperId')
print(images)

#features scrap
features=soup.findAll('div',class_='a-section a-spacing-small a-spacing-top-small')
#features=soup.findAll('table',class_='a-normal a-spacing-micro')
#print(features)
'''



#stored the data from list

images=soup.findAll('div',id='imgTagWrapperId')
titles=soup.findAll('span',id='productTitle')  
ratings=soup.findAll('span',class_='a-size-base a-color-base')
reviews=soup.findAll('span',id='acrCustomerReviewText')
features=soup.findAll('div',class_='a-section a-spacing-small a-spacing-top-small')

image=[]
title=[]
rating=[]                  
review=[]
feature=[]           #using zip function. zip means multiple variables are use

for img,tit,rat,rev,fea in zip(images,titles,ratings,reviews,features):
    image.append(img.text)
    title.append(tit.text)
    rating.append(rat.text)
    review.append(rev.text)
    feature.append(fea.text)
#print(image)

#saving the data in csv from using dictionary

data={'image':image,'title':title,'rating':rating,'review':review,'feature':feature}
#print(data)
model=pandas.DataFrame(data)

model.to_csv("amazon_mobiledata.csv")