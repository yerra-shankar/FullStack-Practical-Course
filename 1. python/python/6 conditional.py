#6

'''

conditional statement(decision making statement)


if
elif
else
nested if
'''



'''
syntax:
if condition:
    statements
else:
    statements
'''

if True:
   print("nenu if")
elif False:
   print("nenu elif")
else:
   print("nenu else")


#nested if

if True:
    print("outer if")
    if False:
       print("inner if")
    else:
        print("inner else")
else:
    print("outer else")



#greater than symbol  >
#less than symbol     <


age=18
if age<19:
    print("you can vote")
elif age==19:
    print("you can vote buddy")
else:
    print("wait")


#  multiple conditions

age=18
if age>19 or age==18:
   print("you can vote")
else:
   print("wait")



