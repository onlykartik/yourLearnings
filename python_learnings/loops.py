colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

# The loop picks each color from the list and prints it on the screen
for color in colors:
    print(color)

# The range(1, 11) generates a sequence from 1 to 10
for i in range(0,len(colors)):
    print(i)

"""
The range function in Python generates an ordered sequence that can be used in
loops.It takes one or two arguments:
* If given one argument (e.g., range(11)), it generates a sequence starting
  from 0 up to (but not including) the given number.
* If given two arguments (e.g., range(1, 11)), it generates a sequence starting
  from the first argument up to (but not including) the second argument.

"""
# range(agu)
for i in range(len(colors)):
    print(colors[i])

# range(agu1, agu2)
half_colors = len(colors)//2
full_colors = len(colors)
for i in range(half_colors, full_colors):
    print("index :{}".format(i),"value :{}".format(colors[i]))

"""
The Enumerated for loop:

Have you ever needed to keep track of both the item and its position in a list?
An enumerated for loop comes to your rescue
"""

fruits = ["apple", "banana", "orange"]

for index,fruit in enumerate(fruits):
    print(f"index :{index} value :{fruit}")


# While loop
count = 10
i = 0
while(i<count):
    print(i)
    i+=1
