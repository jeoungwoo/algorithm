t = int(input())

for i in range(t):
  lists = list(input())
  count = 0
  for p in lists:
    if p == '(':
      count += 1
    elif p == ')':
      count -= 1
    if count < 0:
      break
  if count == 0:
    print('YES')
  else:
    print('NO')