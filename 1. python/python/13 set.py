 #13

'''
set
'''
'''
--> {}
--> difference between set and dictionary
(set is based on elements)
(dictionary is based on keys and values)
--> do not allow duplicates(do not allow same numbers)
--> no index
--> un ordered
--> do not allow mutable types as set elements
'''

#difference between set and dictionary

s={}
print(type(s))

s={1,22,3,3223}
print(type(s))

# do not allow duplicate

s={1,2,3,1,2,44,5,554}
print(s)

#un ordered

s={2,1,133,1,44,1,55,1,22}
print(s)

'''
#set methods

add (added any number)
update (added bulked data)
pop (randomly deleted any number because of un ordered)
remove
'''

#add
s={2,1,133,1,44,1,55,1,22}
s.add(188)
print(s)

#update
s={2,1,133,1,44,1,55,1,22}
s.update({3333,33,5555,666,11})
print(s)

#pop
s={2,1,133,1,44,1,55,1,22}
s.pop()
print(s)

#remove
s={2,1,133,1,44,1,55,1,22}
s.remove(44)
print(s)

'''
#set operations

union               (union is nothing but total)
intersection        (intersection is nothing but common)
difference          (deleted common elememts and printed set1 only)
issuperset          (if set1 elements are common in set2(true)do not coomon(false)) 
issubset            (if set2 elements are common in set1(true)do not common (false))
'''

#union

set1={1,2,3}
set2={4,5,6}
print(set1.union(set2))

#intersection

set1={1,2,3,4}
set2={4,5,6}
print(set1.intersection(set2))

#difference

set1={1,2,3,4}
set2={4,5,6}
print(set1.difference(set2))

#issuperset
set1={1,2,3,4,5,6}
set2={1,2,3}
print(set1.issuperset(set2))

#issubset
set1={1,2,3,4,5,6}
set2={1,2,3}
print(set2.issubset(set1))

#issuperset and issubset
set1={1,2,3,4,5,6}
set2={1,2,3,9}
print(set1.issuperset(set2))
print(set2.issubset(set1))

#its uses for loop also
for i in {1,2,3,4,5,}:
    print(i)

