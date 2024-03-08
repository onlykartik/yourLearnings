"""
Dictionaries are denoted with curly brackets.
The keys have to be immutable & unique.
The values can be immutable, mutable, duplicates.
Each keys & value pair is seperated by a comma
"""

dic = {"key1":1,"key2":"2", "key3":[3,3,4],(1,2):["hi","bye"], ("key4"):True}
print(list(dic.keys())[3])

# update(<dic class>) adds the element to the dictionary 
dic.update({"key5":1,"key6":"2", "key7":[3,3,4],(1,2):["hi","bye"], ("key8"):True})

happy_porter = {
    "houses":{
    "happy portter" : "gryffindor",
    "albus dumbledore":"grafindor",
    }
    }

dic.update(happy_porter)
print("\n",dic)

del dic["houses"]
print("\n",dic)

# pop(key) deletes the element and returns the value 
dic.pop("key8")
print("\n",dic)

# get(key) tries the access the value if not found dosent throw the keyerror
print("\n",dic.get("key1"))
print("\n",dic.get("key10")) # returned 'None'

print("\n", dic.setdefault("key100", len(dic)))
print("\n",dic.values())
print("\n",dic.keys())