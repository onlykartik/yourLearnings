"""
Trupls can cantain different datatypes such as string, integer float 
& list, dictonary ect and maily they are immuatable
""" 

tuple1 = ("disco",10,1.2)
tuple2 = ("hard rock",10)

t_1nd2 = tuple1+tuple2
# concatination of truple
print(t_1nd2)

# slicing of truple
print(t_1nd2[-1:-4])

# sorted truple
int_truple = (-1,2,4,0,12,-21,-21)
sorted = sorted(int_truple)
print(sorted)
print(len(sorted))

# accessing a nested truple 
nestedT = (1,3,("POP","HIP"), (3,4), ["Disco",(1,2)])
print(nestedT[2][1])
print(nestedT[4][1][0])


""" 
Once truple is created you cannot change its values.
Truple are unchangable or immutable.

But there is a workaround. 
You can convert the tuple into a list, change the list, and convert the list back into a tuple.

"""

x = ("apple", "banana", "cherry")
print(x)
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x)

# This is called "unpacking"
fruits = ("apple", "banana", "cherry")
(green,yellow,red) = fruits
print(green,yellow,red)