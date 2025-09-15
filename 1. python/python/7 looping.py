#7

'''
for
wheel
nested loop
'''

#      define for and while
#      * for loop is used to range to discover num of elements
#      * while loop (true=infinity loop)),(false=limited loops)

 #  for loop

for i in range(0,10):
   print(i)
 
# skip the num (s3 = start-stop-skip)

for i in range(0,100,2):
   print(i)

    #list[]

a=[82334,43,5,333,333,3,333,78]
for i in a:
   print(i)

#set{}

a={43554,5767,766566,7657,76767}
for i in a:
   print(i)

#string ''
a='pythonlife'
for i in a:
   print(i)


# while loop

#while True:
#   print("python")

#true

#shankar=21
#while shankar<28:
#   print("hii",shankar)


#true-->false
'''
shankar=21
while shankar<28:
   print("hii",shankar)
   shankar+=1
'''

#  nested loop

'''
for i in range(0,10):
    for j in range(0,100):
        print(i+j)
'''
#exp. (i=0,j=0) then started (j= 0-100)then(i=1)agian (j= 0-100)then(i=2).............(j=0-100)theni=10

'''
shankar=21
while shankar<28:
      while shankar<30:
        print("hi",shankar)
        shankar+=1
'''
