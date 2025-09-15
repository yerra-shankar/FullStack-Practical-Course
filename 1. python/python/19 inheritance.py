'''
       (inheritance)

{parents(properties)--> child} its called inheritance


types of inheritance:-

--> single inheritance
--> multilevel inheritance
--> multiple inheritance
--> hierarchical inheritance

ex:-

(1)  parent           (2)   grandparents           (3)  father     mother       (4)       parent
      |                          |                           \      /                     /   \ 
      |                       parents                         \    /                     /     \ 
    child                        |                             child                child 1   child 2
(single inheritance)            child                  (multiple inheritance)   (hierarchical inheritance)
                       (multilevel inheritance)

'''

#single inheritance:-

class parent():
    def output(self):
        print("i am the parent")
class child(parent):
    def outputc(self):
        print("i am the child")
c=child()
c.outputc() #child method
c.output() #parent method


#multilevel inheritance:-

class grandfather():
    def outputgf(self):
        print("i am the grand father")
class parent(grandfather):
    def output(self):
        print("i am the parent")
class child(parent):
    def outputc(self):
        print("i am the child")
c=child()
c.outputc() 
c.output()
c.outputgf()


#multiple inheritance

class father():
    def outputf(self):
        print("i am the father")
class mother():
    def output(self):
        print("i am the mother")
class child(father,mother):
    def outputc(self):
        print("i am the child")
c=child()
c.outputc() 
c.output()
c.outputf()


#hierarchiacl inheritance


class father():
    def output(self):
        print("i am the father")
class child1(father):
    def output1(self):
        print("i am the child 1")
class child2(father):
    def output2(self):
        print("i am the child 2")
c=child1()
c2=child2()
c.output()
c.output1()
c2.output2()
c2.output()