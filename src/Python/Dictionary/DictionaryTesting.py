lang = {"en": "English"}
lang["sp"] = "Spanish"
lang["fr"] = ["French", "German"]
print(lang["en"])
print(lang.get('sp'))
print(lang)


print(lang)
print("=============")

for item in lang:
    # print(item, lang[item])
    print('key i {} and value is {}'.format(item, lang[item]))

print("=============")

for k,v in lang.items():
    print(k, v)

 
lang = [{"en": "English"}]