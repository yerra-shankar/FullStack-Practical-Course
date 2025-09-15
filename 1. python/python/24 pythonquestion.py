#1
#--> Access both key and value using items() from dictionary
'''
details={"name":"shankar",'roll':21}
for i in details:
    print(i)           #output only keys
for i,j in details.items():
    print(i,j)                 #output keys and values
'''


#2
#--> python programe to calculate the length of string
'''
t="my self shankar"
#print(len(t))
#using function to access the length
def string_length(str1):
    count=0
    for char in str1:
        count+=1
    return count     #count=1+count
print(string_length('my self shankar'))
'''


#3
#--> python function that accepts a string and calculate the number of upper case letters and lower case letters
'''
def string_test(s):
    d={'upper_case':0,'lower_case':0}
    for i in s:
        if i.isupper():
            d['upper_case']+=1
        elif i.islower():
            d['lower_case']+=1
        else:
            pass
    print("upper case letters",d['upper_case'])
    print("lower case letters",d['lower_case'])
string_test("My Self Yerra Shankar")
'''

#4
#--> check if the first and last number of a list is the same
'''
number_x = [10,20,30,40,10]
def first_last(number_x):
    first=number_x[0]
    last=number_x[-1]
    #print(first,last)          #  access first and last numbers  (output= 10 10) then check both num are same or not             
    if first==last:
        #print(True)
        return True
    else:                        
        #print (False)
        return False

print(first_last(number_x))                #if use return func.  call the  print(func call)
'''


#5
#--> python program to check if a key is already present in a dictionary
#example 1 : using in keyward
'''
my_dict={18:'virat',45:'rohit',7:'dhoni'}
#print(my_dict.keys())           # read the question
if 18 in my_dict:
    print('present')          
else:
    print('not there')        #output = present(because of 18 present in key )
# taking wrong key
if 20 in my_dict:
    print('present')          
else:
    print('not there')
'''


#6
#-->count the occurrences of each word in a given sentence
'''
def word_count(str):
    counts=dict()
    words =str.split()      #str-->list
    for word in words:
        if word in counts:
            counts[word]+=1
        else:
            counts[word]=1
    return counts
print(word_count('the quick brown for jumps over the lazy dog'))
'''


#7
#--> python : create a list of empty dictionaries 
#[{},{},{},{}]
'''
d=10
s=[{} for _ in range (d)]
#print(s)
#if u want single line code
print([{} for _ in range(10)])
'''


#8
#-->python : extend a list without append 
'''
l1=[1,2,3]
l2=[3,4,5]          #built-in method       (question is without use append extend) write manual method
#l1.append(l2)
#l1.extend(l2)
#print(l1)
#manual method
l1[:0]=l2
print(l1)
'''


#9
#-->python program to solve the fibonacci sequence using recursion
'''
def fib(n):
    if n==1 or n==2:
        return 3         #(n-1)+(n-2) fibonacci formula
    else :
        return(fib(n-1)+fib(n-2))         #0 1 1 2 3 5 8 13   (swapping of variables)
print(fib(7))

'''

#10
#-->find the largest number among the three input numbeers
'''
l=[18,45,7]
#print(max(l))

#logic build
num1=float(input("enter the number:"))  #1
num2=float(input("enter the number:"))  #2
num3=float(input("enter the number:"))  #3
if (num1>=num2) and (num1>num3):       #(1>=2) and (1>=3)
    largest=num1
elif(num2>=num1) and (num2>num3):      #(2>=1) and (2>=3)
    largest=num2
else:
    largest=num3
print("largest number is :",largest)
'''

#11
#--> python program to check if a number is positive, negative or 0
# +,-,0
'''
num=float(input("enter the number"))
if (num>0):
    print("postive number")
elif (num==0):
    print("zero")
else:
    print("negative")
'''


#12
#--> check if the number is an armstrong number or not

#without using power function
'''
n=int(input("enter the number:"))
s=n
b=len(str(n))
#print(b)
sum1=0
while n!=0:  #153       #15
    r=n%10   #153%10=3    #15%10
    sum1=sum1+(r**b)  #3**3=27  5**3=125   1**3=1
    n=n//10  #15
#27+125+1
if s==sum1:
    print("armstrong number")
else:
    print("not a armstrong number")
'''


#13
#--> check if the input number is odd or even

# a number is even if division by 2 gives a remainder  of 0
# if the remainder is 1, it is an odd number
'''
num =int(input("enter the number:"))
if num%2==0:
    print("{0} is even".format(num))
else:
    print("{0} is odd".format(num))
'''


#14
#--> python program to get a substring of a string                  #substring means single word
#--> using string slicing
'''
st="this is python interview question"
print(st[15:24])
'''

#15 
#--> python program to get  the last element of the list 
#--> using negative indexing
'''                                                       #   1 22 33 44 55
l=[1,2,3,4,5,6,7,18,45,]        # lhs---->rhs postive index (o 1 2 3 4)
print(l[-1])                    #rhs------>lhs  negative index (-5 -4 -3 -2 -1)
'''

#16
#--> python : add two given lists using map and lambda
'''
l1=[1,2,3]
l2=[3,4,5]
print("original list")
print(l1)
print(l2)
result=map(lambda x,y:x+y,l1,l2)
print("result")
print(list(result))
'''

#17
#--> python program to add two matrices using nested loop
'''
X=[[12,9,3],
   [4,5,6],
   [7,8,3]]

Y=[[9,8,1],
   [6,7,3],
   [4,5,9]]

result=[[0,0,0],
        [0,0,0],
        [0,0,0]]
# print(len(X))
for i in range(len(X)):
    #print(i)
    for j in range(len(X[0])):
       # print(j)
        result[i][j]=X[i][j]+Y[i][j]
for r in result:
    print(r)
'''

#18
#--> write a python program to detect the number of local variables declared in function

# local variable    inside func   (its not worked func outside) 
# global variable    outside func  (its worked throw out the program)
'''
c=2  #global
def shankar():
    x=18
    y=45   # locals
    s='shankar'            # inside of func (__ code__) front and last double underscore its called constructure
    d=7.7
print(shankar.__code__.co_nlocals)
'''

#19
#--> python program to compute all the permutation of the string
'''
def get_permutation(string, i=0):     #('run',0)
    if i==len(string):    #0==3.    #3==3    ['r','u','n']
        print("".join(string))
    for j in range(i,len (string)): #  0,3
        words=[c for c in string]    #  ['r','u','n']
        #print(words)
        #rint(words[i])
        #rint(words[j])
        words[i],words[j],=words[j],words[i] #a,b=b,a
        get_permutation(words,i+1)

get_permutation('run')

'''

#20
#--> write a numpy programto generate random integers between 1 and 300
'''
import numpy as np
x=np.random.randint(low=1,high=300)
print(x)
#if you want more numbers use size,to generate more numbers
x=np.random.randint(low=1,high=300,size=10)
print(x)
'''

#21
#--> program to print half pyramid using * 
'''
rows=30
for i in range(rows):
    for j in range(i+1):
        print("*",end="  ")
    print()
'''

#22
#--> python program to remove punctuation from a string

#this is, pen.   using symbols on sentence it is called a punctuations
'''
punctuations="''!@#$%^&*()_+,."
mystr=input("enetr the string:")  # enetr the string:my name is shankar,i'am from gajuwaka,and this my laptop.

new_str=""
for c in mystr:
    if c not in punctuations:
        new_str+=c
print(new_str)
'''

#23
#--> python program to reverse a number

# ex :12345
#54321
'''
num= 12345
c=str(num)
print(c)
print(type(c))
# using slicing to reverse a number
num=12345
c=str(num) [::-1]
print(c)
'''

#24
#--> transpose a matrix using a nested loop 

#using numpy write a two line transpose . its easy way to write
'''
x=[[12,9],   # 2 rows 3 column
   [7,3],    # output 3 rows 2 column
   [5,6]]
result= [[0,0,0],
         [0,0,0]]

import numpy as np
c=np.transpose(x)
print(c)

#using nested loop
for i in range(len(x)):
    for j in range(len(x[0])):
        result[j][i]=x[i][j]
for r in result:
    print(r)
'''

#25
#--> find all numbers which are divisible by 7 but are not a multiple of 5
#0-1000
'''
l=[]
for i in range (0,1000):
    if i%7==0 and i%5!=0:           # take one empty list
        l.append(i)
print(l)
#if want only string method use join func
l=[]
for i in range (0,1000):
    if i%7==0 and i%5!=0:
        l.append(str(i))
print(','.join(l))
'''

#26
#--> write a python function to sum all the numbers in a list
'''
def sum(numbers):     #func def
    total=0       #local variable
    for x in numbers:
        total+=x      #total=total+x
    return total
print(sum([1,2,3,4]))   #func call

# if u want simple way
s=[1,2,3,4]
print(sum(s))
'''

#27
#--> python : get the current time

#explore datetime means(date,time,sec,miliseconds,min,etc)
# module -->collection of func
'''
import datetime
print(datetime.datetime.now())
# if u want time only
print(datetime.datetime.now().time())
#date
print(datetime.datetime.now().date())
'''

#28
#--> multiplication table (from 1 to 10) in python 
'''
num=int(input("enter the number:"))#18
for i in range(1,11):
    print(num,"x",i,"=",num*i)
'''

#29
#--> write a python of recursion list sum
'''
def recursive(data_list):    #[1,2[3,4],[5,6]]
    total=0
    for ele in data_list:
        if type (ele)==type([]):
            total=total+recursive(ele)
        else:
            total=total+ele       #0+1=1+2=3+3=6+4=10+5=15+6=21
    return total
print(recursive([1,2,[3,4],[5,6]]))
'''


#30
#--> python program to access index of a list using for loop
#--> start the indexing with  non zero value

#using enumerate
#enumerate means is put index of every elements
'''
my_list=[21,33,44,77]
print(list(enumerate(my_list)))

#read question
my_list=[18,45,7,69]
for index,val in enumerate(my_list,start=1):
    print(index,val)
'''

#31
#--> python program to check if a string is palindrome are not
 
# input : mom, radar      #reverse
# output : mom, radar
'''
def ispalindrome(s):      #func def and parameter
    return s==s[::-1]    #mom==mom    #reverse method
s="mom" #string
#s="sun"
ans=(ispalindrome(s)) #func call
if ans:
    print('this is palindrome')
else:
    print("not a palindrome")
'''

#32
#--> python: remove all whitespaces from a string
'''
import re

text='python    life'
print("Original Text:", text)
print("without white spaces:",re.sub(r'\s+','',text))
'''

#33
#--> accept a hyphen-separeted sequence of words as input and
#--> prints the sorted words

#input :green-red-black-white
#output : black-green-red-white              #sorted means print alphabetic ordered words
'''
items=[n for n in input("Enter the String:").split("-")]
#print(items)
items.sort()
print("-".join(items))

#exp:-
#input :green-red-black-white
#string---->list
l=['green', 'red', 'black', 'white']
l.sort()
print(l)               #using alphabetic ordered sort is working
#list--->string  (used join func)
print("-".join(l))
'''

#34
#-->python:split a string with multiple delimiters

#string is a collection of characters
#string-->split-->list
'''
d="the book is good"
print(d.split())
d="the,book,is,good"                  
print(d.split(','))      
d="the,book,is.good"          
#print(d.split([',','.']))      #if u use multiple delimeters its not possible

#read question
#another method
import re
text = 'the quick bown\nfox jumps*over the lazy dog'
print(re.split(';|,|\*|\n',text))
'''

#35
#--> check that a string contains only a certain set of characters are not
'''
import re

def is_allowed(string):
    charac=re.compile(r'[^a-zA-Z0-9]')             #compile method means if u take some pattern,compile is worked into a patterns is stored into variables and using that pattern more and more times
                        #putting into list because of muliple
    string=charac.search(string)
    return not bool(string)

print(is_allowed("ABcd1234"))
print(is_allowed("!@#$%^&"))
'''

#36
#-->python program to triple all numbers of a given list of integer. use python map
'''
num=(1,2,3,4,5,6,7,8)
result=map(lambda x:x+x+x,num)
print(result)   #map object
print(list(result))
'''

#37
#--> check if a number is prime or not prime. 

# prime numbers are a postive integer that greater  than 1 that also have no other factors except for 1 and the number itself. for example, the number 5 is a prime number,
# while the number 6 isnt (since 2 x 3 is equal to 6)
'''
def is_prime(number): #6
    if number>1:   #6>1
        for num in range(2,number): #2,3,4,5
            if number%num==0:   #6%2==0
                return "not a prime"
        return "prime"
    return "not a prime"
d=int(input("enter the number:"))
print(is_prime(d))
'''

#38
#-->python program to check leap year

'''
leap year :
a year is called a leap year if it contains an additional day which makes the number of the days in that year is 366. this additional  day is added in february which makes it 29 days long.
a leap year occurred once every 4years.
how to determine if a year is a leap year?
you should follow th following steps to determine whether a year is a leap year or not
if a year is evenly divisble by 4 means having no remainder then go to next step. if it is not divisible by 4.it is not aleap year .for example:- 1997 is not a leap year
if a year is divisible  by 4 , but not by 100. for example :- 2012 ,it is a leap year. if a year is divisible by 4 and 100, go to the next step,           
if a year is divisible by 100 , but not by 400. for example :-1900, then it is not leap year. if a year is divisible by both , then it is a leap year. so 2000 is a leap year
'''
'''
def checkyear(year):#2000
    return(((year%4==0) and (year%100!=0)) or (year%400==0))
year=2000
if (checkyear(year)):
    print('leap year')
else:
    print('not a leap year')
'''


 