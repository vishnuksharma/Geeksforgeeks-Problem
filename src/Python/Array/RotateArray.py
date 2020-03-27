def rotateArray (arr, d, n): 
  for i in range(d):
    leftRotate(arr, n) 


def leftRotate(arr, n):
  tmp = arr[0]
  for i in range(n-1):
    arr[i] = arr[i+1]
  arr[n-1] = tmp

def printArray (arr, n):
  for i in range(n):
    print(arr[i])

arr = [1, 2, 3, 4, 5, 6, 7] 
rotateArray(arr, 2, 7) 
printArray(arr, 7)

print('this is vishnu')