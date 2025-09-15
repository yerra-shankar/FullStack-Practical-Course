#10

'''
     list
'''

'''
--> []
--> mutable data type
--> store different type of elements
--> allow duplicates(allow unlimted same numbers)
--> allow indexing(postive indexing ,negative indexing)
postive indexing start with 0,1,2,3,4,5 like that(beginning to ending)
negative indexing starts with (ending to beginning) and-1,-2,-3,-4,-5 like that
'''

v=[1,22,2,3,2,2,3,22,]
print(v)

# store different types of elements

v=[1,22,3,4,1222,3,32,'shankar']
print(v)

#postive indexing

v=[11,22,3,4,55,44,4334,3324432,'shankar']
print(v[3])

# negative indexing

v=[11,2,2,211,2,22112,211,'shankar']
print(v[-1])


'''
 'sliceing'
s3 = start-stop-skip
'''

v=[1,22,3,4,7644]
print(v[0:4:2])

#methods

'''
append
extend
count
insert
pop
remove
index
'''

#append(added any word in last)

v=[1,22,33,4,43343,'shankar']
v.append("python")
print(v)

#extend(added bulked statements)

v=[1,22,33,4,43343,'shankar']
v.extend([122,1,22,2,1,2222])
print(v)

#count(counting the repated elements)

v=[1,22,33,4,43343,'shankar']
print(v.count(33))

#insert

v=[1,22,33,4,43343,'shankar'] 
v.insert(0,"xyz")
print(v)

#remove

v=[1,22,33,44,55,66,'shankar']
v.remove(22)
print(v)

#pop
  
v=[1,22,33,4,43343,'shankar']
v.pop(2)
print(v)

#index

v=[1,22,33,44,43343,'shankar']
print(v.index(44))


#its work for loop also

# for loop

for i in [1,22,12,22,2,2,2]:
    print(i)