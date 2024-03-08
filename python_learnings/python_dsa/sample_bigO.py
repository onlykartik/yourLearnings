# It is big o(n) time camplexcity
def printItems_bigO(num):
    for i in range(num):
        print(i)

# It is big o(n^2) time camplexcity
def printItems_bigOn2(num):
    for i in range(num):
        for j in range(num):
            print(i,j)

list_num = [11,3,23,7]

list_num.append(17) # n(1)
list_num.pop() # n(1)

list_num.insert(1,2) # o(n) it is cos index shifting takes place

list_num.pop(len(list_num)//2 - 1) # o(n) it is cos index shifting takes place
