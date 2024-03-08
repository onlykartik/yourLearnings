"""
set items are unordered, 
& do not allow duplicate values & all element are immutable

* unordered means every time you see them they look up in different positions
& they cant be refered by indexes
* immutable that means you cant add dictionarys and list into it
"""

"""
set operations can be performed in two ways
* By operator
* By method
"""
x1 = {"foo", "bar", "baz"}
x2 = {"baz","quz", "quuz"}


sch_1 ={"ravi","karhtik","soumya","ballu"}
sch_2 ={"ravi","ramya","manasa","soumya"}
sch_3 ={"rajita","ramya","manasa", "aishwarya","ravi"}

# union(<iterable>) or | 
print(x1 | x2)
print(sch_1.union(sch_2,sch_3))
# intersection(<iterable>) or &
print("\n",x1 & x2)
print(sch_1.intersection(sch_2,sch_3))
# difference(<iterable>) or - 
print("\n",x2-x1)
print(sch_3.difference(sch_2,sch_1))
# symmetic_difference(<iterable>) or ^
print("\n",x2^x1)
print(sch_3.symmetric_difference(sch_2)) # It takes exatly one argument

# x1.disjoint(x2) return True if no elements are commen in x1 and x2


A = {1,2,3,4,5}
B = {1,2,3}
# issubset(<iterable>)
print("\n",A.issubset(B))
print(B.issubset(A))

# issuperset(<iterable>)
print("\n",A.issuperset(B))
print(B.issuperset(A))


