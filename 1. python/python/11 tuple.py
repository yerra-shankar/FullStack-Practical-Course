#11

'''
 tuple
'''

'''
--> ()
-->allow different types of elements
-->allow duplicates
-->allow index and slicing
-->immutable
-->no methods
-->we can use builtin(minimum,maximum,sum,len,zip)
'''

c=()
print(type(c))

#diferent types of elements

c=(1,223,333,54,5,5,'shankar')
print(c)

#allow index and slicing

c=(1,223,333,54,5)
print(c[1])
print(c[-1])
print(c[0:4:3])

#builtin

c=(1,223,22,1,22,22,2)
print(min(c))
print(max(c))
print(sum(c))
print(len(c))

'''
tuple operations
'''

'''
--> concatenation
--> iteration
--> membership operations
--> identity operations
--> repetation
'''

#concatenation

t1=(1,2,3)
t2=(4,5,6)
print(t1+t2)

# repetation

c=(1,223,22,1,22,22,2)
print(c*11)

# iteration

c=(1,223,22,1,22,22,2)
for i in c:
    print(i)

#membership operations

c=(1,223,22,1,22,22,2)
print(1 in c)
print(11 not in c)

# identity operations

t1=(1,2,3)
t2=(4,5,6)
print(t1 is t2)


t1=(1,2,3)
t2=(1,2,3)
print(t1 is t2)


t1=(1,2,3)
t2=(4,5,6)
print(t1 is not t2)