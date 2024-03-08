"""
A list is a sequence of different objects such as integers, floats,
[], {}, etc They can be accessed through indexs, As lists are mutable
we can change them. 
"""

l = ["Michael Jackson", 10.1, 1982,"MJ",1]
# slicing
sub_l = l[1:]
print(sub_l)

# len()
print(len(l))

# extend(e) 
"""
In your example, when you use l.extend({"genres":["POP","ROCK"]}), 
it is effectively adding each key of the dictionary as a separate element to the list. 
In this case, the dictionary has only one key, "genres", so "genres" becomes a new element in the list.
"""
mj_bio = l[:] 
mj_bio.extend({"genres":["POP","ROCK"], "Spouse":["Debbie Rowe" , "Lisa Marie Presley"]})
print(mj_bio)

# append(e) increases length by 1
# insert(index, element) inserts in the specified index
js_bio = [ "Justin Bieber",{"Born": "1 March 1994"},{"Record labels": ("Universal Music Group", "Def Jam Recordings")}]
js_bio.append({"genres":["POP","ROCK"], "Spouse":["Debbie Rowe" , "Lisa Marie Presley"]})
js_bio.insert(1, {"age":29})
print("\n",js_bio)

# pop(i) or pop() removes and returns at specified position or defaults to delete last elemet

js_bio.pop(len(js_bio)-1)
print("\n",js_bio)

# remove(e) removes the first occurence of the specified elememt
js_bio.remove("Justin Bieber")
print("\n",js_bio)