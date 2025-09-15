#15

'''
      (file handling)

--> reading
--> writing
--> deleting
--> creating
of a files is called a file handling
'''

'''
#syntax
   
open-->open()

read/write

close-->close()
'''

'''
       (modes)

r - read                   
w - write(truncate)
a - append
r+ - read write
w+ - write read (truncate)       -->first terminate write only because of truncate.u want read use seek(0)
'''


# read

#f=open('demo.txt',mode='r')
#print(f.read())
#f.close()

#write

f=open('demo.txt',mode='w')
f.write("pythonlife")
f.close()

#append

f=open('demo.txt',mode='a')
f.write("pythonlife shankar")
f.close()

#r+ read write

f=open('demo.txt',mode='r+')
print(f.read())
f.write("programming")
f.close()

#w+ write read

f=open('demo.txt',mode='w+')
f.write("language")
print(f.read())
f.close()


f=open('demo.txt',mode='w+')
f.write("language")
f.seek(0)
print(f.read())
f.close()


