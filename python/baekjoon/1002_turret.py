# 총 4 가지 경우의 수
# 1. 두 원이 일치하는 경우
# 2. 두 원이 한점에서 만나는 경우 (외접, 내접)
# 3. 두 원이 두 점에서 만나는 경우
# 4. 두 원이 만나지 않는 경우

t = int(input())

for i in range(t):

  x1, y1, r1, x2, y2, r2 = map(int, input().split())
  # x, y 는 각각 원의 중심 / r 은 원의 반지름 / d 는 원의 중심 사이의 거리
  d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
  rs = r1 + r2
  rm = abs(r1 - r2)
  
  if d == 0:
    if r1 == r2:
      print(-1)
    else:
      print(0)
  else:
    if d == rs or d == rm:
      print(1)
    # 원의 중심 사이 거리가 각 반지름의 합과 차이와 같다면 접점은 1개이다.
    elif d < rs and d > rm:
      print(2)
    # 원의 중심사이의 거리보다 반지름의 합이 더 크고, 반지름의 차가 더 작으면 접점이 2개이다.
    else:
      print(0)
    # 그게 아니라면 두 원의 접점은 없다.