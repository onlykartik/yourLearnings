
sch_1 ={"ravi","karhtik","soumya","ballu"}
sch_2 ={"ravi","ramya","manasa","soumya"}
sch_3 ={"rajita","ramya","manasa", "aishwarya","ravi"}

# update(<iterable>)
print(sch_1.update(sch_2)) # return 'None'
print(sch_1) # {'ballu', 'ramya', 'manasa', 'soumya', 'ravi', 'karhtik'}

# add(e)
sch_2.add("kasi")
print(sch_2)

# remove(e) it is quick and throws error if e not found
sch_3.remove("ravi")
print(sch_3)

# discard(e) same as remove(e) but it does not throw error 

# pop() an specific element that is removed is not guaranteed to be any particular one and returns the value 
sch_3.pop()
print(sch_3)
