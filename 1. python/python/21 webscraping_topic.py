'''
    (webscraping):-

webscraping is a computer software technique of extracting information from websites. this technique 
mostly focuses on the transformation of unstructured data (HTML format)on the web into structured data
(database or spreadsheet).

ex:-
           HTML websites------>webscraping--------->data

(collecting the data from websites its called a webscraping).

  

     #libraries required for web scraping

beautifulsoup : it is an incredible tool for pulling out information from a webpage.
you can use it to extract tables,lists,paragraph and you can also put filters to extract information 
from web pages.

ex:-              request message
       client -------------------------> web service
       client <------------------------- web service
      /             response message                \ 
   user                                          google server.



     #(http status codes)
http means  hyper text transfer protocol


                    1XX informational

   2xx success                        3xx redirection
 200 success/ok                   301 permanent redirect
                                  302 temporary redirect 
                                  304 not modified

                                  
   5xx server error                    4xx client error
 501 not implemented               401 unauthorized error
 502 bad gateway                   403 forbidden
 503 service unavailable           404 not found
 504 gateway timeout               405 method not allowed



     #pip

what is pip
pip is a package manager for python packages.


For installation:
pip install package/library/framework
For uninstallation:
pip uninstall package/library/framework

for uses the command prompt(cmd)

'''

# Import section 
 
import requests
import pandas
from bs4 import BeautifulSoup
import csv


url="https://www.bikewale.com/royalenfield-bikes/"
page=requests.get(url)
#print(page)


soup=BeautifulSoup(page.content,'html.parser')                    #its called unstructured  data (no use)
#print(soup.text )                                                  #to changed the structured data
#if you want to see clarity data from html format                    #there are not giving full data. there are give structure only and hide total class
#use prettifly()
#print(soup.prettify())


#images scrap
'''
image=soup.findAll('div',class_="o-brXWGL o-frwuxB")
#print(image)
#if i want only src files
for i in image:
    j=i.img['src']
    print(j)
'''
#stored the data on list seperately

img1=[]
image=soup.findAll('div',class_="o-brXWGL o-frwuxB")
for i in image:
    j=i.img['src']
    img1.append(j)
#print(img1)

#links scrap

links=[]
link=soup.findAll('div',class_='o-fznJEv o-bTDyCI o-brXWGL')
#print(link)
for i in link:
    j=i.a['href']
    links.append(j)
#print(links)

#text scrap

texts=[]
text=soup.findAll('div',class_='o-fznJEv o-bTDyCI o-brXWGL')
for i in text:
    j=i.a.text
    texts.append(j)
#print(texts)

#using pandas to pushing the data form table formate 
# dataframe is a two dimensional.dataframe is nothng but table.table has row and columns
#  empty data frame

df = pandas.DataFrame()
print(df)                     # use dictionary{} or normaly anything    

data={'image':img1,"link":links,"text":texts}
#print(data)

df = pandas.DataFrame(data)
#print(df)                         #saving data in csv files
#df.to_csv("bikewala_data.csv")



# if you want seperate seperate lists to save csv files
#saving data in csv file
'''
with open ('bikewalaimagelink.csv','w') as csv_file:
    write=csv.writer(csv_file)
    write.writerow(image)
    for i in image:
        j=i.img['src']
        img1.append(j)
    write.writerow(img1)

'''




