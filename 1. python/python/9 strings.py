#9

'''
collection of characters
'''
#string is nothing but collection of characters

#types of declaring string

# single quotes ( '  ' )
# double quotes ( "  " ),('s is working only double quotes)
# thriple quotes( '''  ''' ),(thriple quotes are use only multiple lines)

a='pythonlife'
b="pythonlife"
v='''pythonlife'''
print(type(a),type(b),type(v)) 

#methods
'''
lower
upper
endswith
startswith
replace
find
index
count
removeprefix
removesuffix
split
strip
rstrip
lstrip
'''

#lower

pythonlife = "SHANKAR"
print(pythonlife.lower())

#upper

pythonlife = "shankar"
print(pythonlife.upper())

#endswith

pythonlife="python language"
print(pythonlife.endswith("language"))

#startwith

pythonlife="python language"
print(pythonlife.startswith("python"))

#replace
pythonlife="python programming"
print(pythonlife.replace("programming","language"))

#find and index

pythonlife="python language"
print(pythonlife.find("language"))
print(pythonlife.index("language"))

#pythonlife="python language"
#print(pythonlife.find("programming"))

#pythonlife="yerra shankar"
#print(pythonlife.index("programming"))

#count

pythonlife="python language"
print(pythonlife.count("g"))

#removeprefix

pythonlife="python language"
print(pythonlife.removeprefix("python")) 

#removesuffix

pythonlife="python language"
print(pythonlife.removesuffix("language"))

#split(its changing into list{})

pythonlife="python language"
print(pythonlife.split())

#how to check length
pythonlife="python language"
print(len(pythonlife))

#strip  (its remove the space from first and last)

pythonlife="   python language   "
print(pythonlife.strip())

#lstrip(its remove left side space only)

pythonlife="   python language1   "
print(pythonlife.lstrip())

#rstrip(its remove right side space only)

pythonlife="   python language   "
print(pythonlife.rstrip())


#if want check length
pythonlife="   python language   "
s=pythonlife.strip()
print(len(s))
r=pythonlife.lstrip()
print(len(r))
y=pythonlife.rstrip()
print(len(y))
