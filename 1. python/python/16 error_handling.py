#16

'''
    error handling

interupting normal execution of a code is called error 
    (or)
exception e will handle by using error handling               
'''



'''
try:
    risky code
except:
    print ("error")
else:
    print("no error")
finally:
    print("always")
'''
'''
if risky code has wrong(except output was error)
if risky code has right(else output was no error)
if risky code has right or wrong(finally output was print)
'''
a=1
#print(b)


#try:
#    print(b)
#except:
#    print("error")
#else:
#    print("no error")
#finally:
#    print("always")




try:
    print(a)
except:
    print("error")
else:
    print("no error")
finally:
    print("always")


try:
    print('a'+16)
except TypeError:
    print("type error")
except ValueError:
    print("value error")

