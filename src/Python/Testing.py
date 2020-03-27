class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()

time = 20 # this is time to deside
if time >= 18:
    print("Go Home")
else:
    print("Study")


div = int( input("Enter you division\n"))

if div==1:
    print("first")
elif div == 2:
    print("Second")
elif div == 3:
    print("Third")
