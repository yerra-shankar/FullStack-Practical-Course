#12

'''
   Dictionary
'''
'''
--> {}
--> key, value data(k:v)                      variable={'key':values} and also variable={"item"}
--> keys should be immutable                             ex:   a={'a':123, 1:"abc"}
--> value should be mutable (different types)
--> keys will act as index
--> no slicing
--> keys are unique
'''

d={}
print(type(d))

#k:v

d={1:'abc',33:"shankar","pythonlife":18}
print(d[1])

# dict methods

'''
get 
update
values
keys
items
'''

# get(taking one key only)

d={1:'abc',33:"shankar","pythonlife":18}
print(d.get(33))

#keys

d={1:'abc',33:"shankar","pythonlife":18}
print(d.keys())

#values

d={1:'abc',33:"shankar","pythonlife":18}
print(d.values())

#items

d={1:'abc',33:"shankar","pythonlife":18}
print(d.items())

#update

d={1:'abc',33:"shankar","pythonlife":18}
d.update({11111:2222})
print(d)

#for loop

#its using for loop also
#for loop(taking keys only)
for i in {1:'abc',33:"shankar","pythonlife":18}:
    print(i)

#values
for i in {1:'abc',33:"shankar","pythonlife":18}.values():
    print(i)

#items
for i,j in {1:'abc',33:"shankar","pythonlife":18}.items():
    print(i,j)
