name = "Michael Jackson"
print(name[0])
print(name[-1])

# len(e) return count of chars
print("len(e)",len(name))

"""
# slicing -> [s:e] 
s is the start index if not provided default is 0
e is the end index if not provided default is last index
"""
print(name[3:7])
print(name[3:])

"""
# stride is the 3rd argument in slice. if omitted, the deault is 1.
To return every kth letter, set the stride to k.
Negative values of k reverse the string. For example,

"""
movie = "Shawshank Redemption"
print(movie[::-1])
print(movie[10:-len(movie):-1])




