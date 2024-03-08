# int , float , bool, tuple are immutable
print("Immutable example \n")

num1 = 11
num2 = num1

print("num1=",num1)
print("num2=", num2)

print("num1 points to", id(num1))
print("num1 points to", id(num2))

num2 = 22

print("num1=",num1)
print("num2=", num2)

print("num1 points to", id(num1))
print("num1 points to", id(num2))


print("Mutable example \n")

dict1 = {
"value":11
}
dict2 = dict1

print("dict1=",dict1)
print("dict2=", dict2)

print("num1 points to", id(dict1))
print("num1 points to", id(dict2))


dict2["value"] = 22


print("dict1=",dict1)
print("dict2=", dict2)

print("num1 points to", id(dict1))
print("num1 points to", id(dict2))
