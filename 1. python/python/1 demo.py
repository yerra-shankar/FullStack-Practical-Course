#1

'''
what is python
--> programming language
--> object oriented and high level scripting language
--> guide van rossum was invented 1991
--> he is a dutch programmmer
--> python uses by .py extension
--> userfriendly language
--> monty python flying circus (bbc show)
--> larging community
--> large standard lab|pac|modules|framework
'''


#firstcode


#a=77
#b=88
#print('this is book')







#functions
'''
import  functions

functions.add(3,3)
functions.sub(3,3)
'''







#python pattern 
'''
my_string = "pythonlife"
x=0
for i in my_string:
    x=x+1
    print(my_string[0:x]) 
for i in my_string:
    x=x-1
    print(my_string[0:x])
'''

  





#    A pattern in python
'''
n=10
for i in range(n):
    for j in range((2 * n) - 1):
        if i == 0 and j == n - 1:
            print("A", end="")
        elif i + j ==n-1 or j-i == n- 1:
            print("A", end="")
        elif i == n // 2 and (j >= n // 2 and j <= (3 * n) // 2 - 1):
            print("A", end ="")
        else:
            print(" " , end="")
    print()
'''


# y pattern in python
'''
def print_y_pattern(size):
    for i in range(size):
        for j in range(size):
            if i==j and i<size //2:
                print("*",end="")
            elif i+j==size-1 and i < size // 2:
                print("*",end="")
            elif i>= size // 2 and j == size //2:
                print("*",end="")
            else:
                print(" ", end="")
        print()
#set size of the y pattern
size = 7
print_y_pattern(size)        
'''




#fruits =['apple','banana','cherry']
#for index, fruit in enumerate(fruits):
#    print(index,fruit)



#python graphics
'''
from turtle import*
speed(0)
bgcolor("black")
color("aqua")
for i in range(160):
    rt(i)
    circle(150, i)
    fd(i)
    rt(90)
hideturtle()
done()
'''







#heart graphics
'''
import math
from turtle import *

def heart_a(n):
    return 15 *math.sin(n)**3

def heart_b(n):
    return 12* math.cos(n)-5 *\
    math.cos(2*n)-2*\
    math.cos(3*n)-\
    math.cos(4*n) 
    
tracer(2)
bgcolor("black")
for i in range(800):
    goto(heart_a(i)*15, heart_b(i)*15)
    for i in range(1):
        color('red')
        hideturtle()
        goto(0,0)
'''

 

# tree graphics
'''
from turtle import *

bgcolor("black")
pensize(2)
color("green")
left(90)
backward(100)
speed(200)
shape("turtle")

def tree(i):
    if i <10:
        return
    else:
        forward(i)
        color("orange")
        circle(2)
        color("brown")
        left(30)
        tree(3*i / 4)
        right(60)
        tree(3 * i / 4)
        left(30)
        backward(i)
tree(100)
done()
'''



#smiley face graphics
'''
import arcade
screen_width=600
screen_height=600
arcade.open_window(screen_width,screen_height,"dan stiker")
arcade.set_background_color(arcade.color.WHITE)
arcade.start_render()
x=300
y=300
radius=200
arcade.draw_circle_filled(x,y,radius,arcade.color.YELLOW)
x=370
y=350
radius=20
arcade.draw_circle_filled(x,y,radius,arcade.color.BLACK)
x=230
y=350
radius=20
arcade.draw_circle_filled(x,y,radius,arcade.color.BLACK)
x=300
y=280
width=220
height=200
start_angle=190
end_angle=350
arcade.draw_arc_outline(x,y,width,height,arcade.color.BLACK,start_angle,end_angle,20)
arcade.finish_render()
arcade.run()
'''



#spider web graphics

'''
from turtle import *
speed(0)
bgcolor("black")
pensize(2)
for i in range(125):
    color("#909090")
    circle(5 - i, 100)
    lt(80)
    circle(5 - i, 100)
    rt(160)
    hideturtle()
done()
'''


#calendar
'''
import calendar
yy= 2030
mm= 12
# display the calender
print(calendar.month(yy,mm))
'''

'''
n=5**3
print(n)
'''