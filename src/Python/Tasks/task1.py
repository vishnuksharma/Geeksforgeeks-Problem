# String : 
# Task is to print the individual anumal name and count
'''
Example:
Dog, 1
...
'''
animalName = "Cow Dog Cat Cow Panda Cow Cow Cat Panda Panda Panda Cow"
animalArr = animalName.split(' ')
countAnimal = {} # Used disctionary DS for storing value in key: value
# Solution 1
for name in animalArr:
    if name in countAnimal:
        countAnimal[name] = countAnimal.get(name)+1
    else:
        countAnimal[name] = 1

print(countAnimal)

# Solution 2
print("# Solution 2: =======")
findUnique = set(animalArr)
dictData = {}
for i in findUnique:
    dictData[i] = animalArr.count(i)

print(dictData)
