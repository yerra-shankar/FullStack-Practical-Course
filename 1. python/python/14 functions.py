#14

'''
 functions
'''
'''
--> block of a code
-->run when its called
'''

'''
syntax:
def fuction.name():   #function defination
    print()          #function body     
function.name()      #function call
'''

def func():
    print("this is function")
func()

# added parameters and arguments

def func(a,b,c):                         #(a,b,c) is a parameter
    print("this is function",a,b,c)
func(1,2,3)                               #(1,2,3) is a argumemts

#(arbitrary arguments or arbitrary parameters)

def func(*a):
    print("this is function",a)
func(1,2,3)

#keyword arguments

def func(**a):
    print("this is function",a)
func(a=1,b=2)



# nested functions

def outer():
    print("outer function")
    def inner():
        print("inner functions")
    inner()  
outer()      

# import keyword(import means reuse the another file)open demo file

def add(a,b):
    print(a+b)
def sub(a,b):
    print(a-b)


'''
lambda function

--> single line functions
'''

#lambda func
x= lambda a,b:a+b
print(x(4,5))

                                   
#normal func                     #both are same functions.lambda is single line func
def function(a,b):                    #normal func
    return a+b                  #its used multiple lines code
print(function(2,3))


#application of lambda function in python

l=[1,2,3,4,5,6,7]
#each and every number should be * by 10
multiple_ten= lambda a :a*10
print(list(map(multiple_ten,l)))






