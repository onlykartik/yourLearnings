import re
text = "Do Not Go Gentle Into The Night Sky"
pattern = "Go"
result = re.split(pattern, text)
print(result)

poem = '''
Do not go gentle into that good night, old age should burn and rave at close of day;
rage, rage against the dying of the light. though wise men at their end know dark is right, 
because their words had forked no lightning they do not go gentle into that good night. 
good men, the last wave by, crying how bright their frail deeds might have danced in a green bay, 
rage, rage against the dying of the light.
'''
result = re.findall("rage", poem)
print(result)


result = re.search("rage", poem)
print(result)

result= re.sub("rage", "kill", poem)
print(result)