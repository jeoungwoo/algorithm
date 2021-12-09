# while True:
#   a = input()
#   stack = []
#   answer = 'yes'
#   for i in a:
#     if i == '(' or i == '[':
#       stack.append(i)
#     elif i == ']':
#       if len(stack) == 0:
#         answer = 'no'
#         break
#       elif stack[-1] == '[':
#         stack.pop()
#       else:
#         answer = 'no'
#         break
#     elif i == ')':
#       if len(stack) == 0:
#         answer = 'no'
#         break
#       elif stack[-1] == '(':
#         stack.pop()
#       else:
#         answer = 'no'
#         break

#   print(answer)

while True:
    a = input()
    if a == '.':
        break
    stack = []
    answer = 'yes'
    for i in a:
        if i == '(' or i == '[':
            stack.append(i)
        elif i == ')':
            if len(stack) != 0 and stack[-1] == '(':
                stack.pop()
            else:
                answer = 'no'
                break
        elif i == ']':
            if len(stack) != 0 and stack[-1] == '[':
                stack.pop()
            else:
                answer = 'no'
                break
    if len(stack) == 0:
        print(answer)
    else:
        print('no')
