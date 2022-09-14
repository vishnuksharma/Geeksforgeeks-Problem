# Loops in Python
for i in 0,1,2,3,4:
    print(i, end='')
    # print(i, end='')
print("==================")
for i in range(10):
    print(i, end='')
print("==================")
for i in 0,1,2,3,4:
    if i == 5:
        break
    if i == 8:
        continue
    print(i, end='')

print("==================")
meter = 1
while(meter <=10):
    print(meter, end='')
    meter +=1
class Abc:
    pass
print("==================")

items = ["Apple", "Orange"]
items.append("Mengo")
items.insert(1, "Graps")
print(items)

for item in items :
    print(item, end='|')

msg = "this is vishnu"
vowels = 0
for c in msg:
    if c in 'aeiou':
        vowels += 1
    print(c, end='|')
print("")
print('Total Vowels in String:', vowels)

result = [i for i in range(1, 21) if i%2 == 0]
print(result)

print("==================")
for i in range(1,21):
    if i%2==0:
        print(i, end='|')

# find the squares of each number from range of 1, 10
print("")
result = [i**2 for i in range(1,11)] # also sum you can square: if i %2 ==0
print(result)

print("==================")
msg = "I love my India"
result = msg.split(' ')
print(result)

tweet = 'come to #shimla it is #amazing here in #2020 enjoy'
# extract hashtags
#output
'''
#shimla
#amazing
#2020
'''
words = tweet.split(' ')
for w in words:
    if w[0] == '#':
        print(w)
result = [w for w in words if '#' in w]
print(result)