# Tuples are unEditable imutable
days = ('sun', 'mon', 'wed')
print(type(days))
# days[0] = 'new' # cant modify touple
for d in days:
    print(d)

# Tuple into list

editDays = list(days)
print(type(editDays))
print(editDays)