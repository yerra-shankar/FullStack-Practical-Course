'''
        (CLASS)


--> template
--> blue print of an object


                              class
                             /
ex:-                    (bike)          
                      /   |   \   \ 
                    /     |    |    \ 
                  /       |    |     \ 
            gt650     ninja    bmw   rx100
              |          |       |     |
            object    object   object   object



synatx:-

        classs   class name():      }-->(class defination)
       /          #class body
(keyword)                  
'''





'''
       (OBJECT)


--> physical entity
--> we can create any no of objects for class
--> momery is allocated when object is created



syntax:-
            object name = class name()
     
            


--> using object we can access methods and variables of a class

syntax:-
        object name.method()
        object name.variable

        

ex:-
      class a()
       #class body
       b=a()            # object creation
      /
  object


'''



# class

#synatx


class pythonlife():
    a="shankar"
    print(a)


#self
#--> self access to methods and variables in current class

#method(not working)

#class pythonlife():
#    a=2
#    def output():
#        print(a)
 
#using self 

#class pythonlife():
#    a=2
#    def output(self):
#        print(self.a)
#    output()


#object.method


class pythonlife():
    a=2
    def output(self):
        print(self.a)
b=pythonlife()
b.output()   



#multiple objects

class pythonlife():
    a=3
    def output(self):
        print(self.a)
b=pythonlife()
s=pythonlife()
b.output()
s.output()



#object.variable

class pythonlife():
    a=4
    def output(self):
        print(self.a)
b=pythonlife()
print(b.a)



#object.method and variable

class pythonlife():
    a=5
    def output(self):
        print(self.a)
b=pythonlife()
print(b.a)
b.output()
