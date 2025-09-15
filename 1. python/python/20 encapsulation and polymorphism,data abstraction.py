'''
{encapsulation}

   
-->wrapping of variable and methods into single unit.its is called a encapsulation

access specifiers:-

--> public
--> private __      (its using only single class)
--> protected _     (use initadation for access any class )
'''

class demo():
    __a=2   #private double underscore
    _b=4    # protected single underscore
    print(__a)
    print(_b)




class demo():
    def __init__(self,a,b):
        self.__a=a 
        self._b=b
class demo2(demo):
    def output(self):
        print(self._b)
d=demo2(5,6)
d.output()



''' 
{polymorphism}

poly== many
morph== forms


ex:-        friend   sister    daughter
                  \    |     /
    grand mother ---(women)---wife
                        |
                      mother


ex:-   

def add (a,b)            {method}
    return a+b

add(1,2)
add('a','b')           (only one method) (different forms of input)
add([1,2],[2,3])
'''


def add(a,b):
    print(a+b)
add(1,3)
add('a','b')
add([18,45],[7,1])
add((297,11),(19,33))



'''
    (data abstraction)


--> hiding the inforamation
    

'''



