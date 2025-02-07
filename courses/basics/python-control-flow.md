# Python流程控制详解 - 掌握程序逻辑

> 本文将系统地介绍Python中的流程控制语句，帮助您掌握程序逻辑的基本构建块。

## 学习目标
- 理解条件语句（if-elif-else）的使用
- 掌握各种循环结构（for和while）
- 学会使用break和continue控制循环
- 理解异常处理机制

## 1. 条件语句

### 1.1 if语句基础
```python
# 基本if语句
age = 18
if age >= 18:
    print("您已成年")
    
# if-else语句
temperature = 35
if temperature > 37.3:
    print("体温偏高")
else:
    print("体温正常")

# if-elif-else语句
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
else:
    grade = 'D'
```

### 1.2 条件表达式（三元运算符）
```python
# 普通if-else
age = 20
if age >= 18:
    status = "成年"
else:
    status = "未成年"

# 使用条件表达式
status = "成年" if age >= 18 else "未成年"
```

## 2. 循环语句

### 2.1 for循环
```python
# 遍历列表
fruits = ['苹果', '香蕉', '橙子']
for fruit in fruits:
    print(f"我喜欢吃{fruit}")

# 使用range()
for i in range(5):
    print(i)  # 输出0到4

# 遍历字典
student = {'name': '张三', 'age': 18, 'grade': '高一'}
for key, value in student.items():
    print(f"{key}: {value}")
```

### 2.2 while循环
```python
# 基本while循环
count = 0
while count < 5:
    print(count)
    count += 1

# 带条件的while循环
number = 1
while number <= 100:
    if number % 7 == 0:
        print(f"{number}是7的倍数")
    number += 1
```

## 3. 循环控制语句

### 3.1 break语句
```python
# 在循环中使用break
for i in range(1, 11):
    if i == 5:
        break
    print(i)
# 输出1, 2, 3, 4

# 在while循环中使用break
number = 1
while True:
    if number > 5:
        break
    print(number)
    number += 1
```

### 3.2 continue语句
```python
# 跳过偶数
for i in range(1, 6):
    if i % 2 == 0:
        continue
    print(i)
# 输出1, 3, 5
```

## 4. 异常处理

### 4.1 try-except基础
```python
# 基本异常处理
try:
    number = int(input("请输入一个数字："))
    result = 100 / number
    print(f"100除以{number}等于{result}")
except ValueError:
    print("请输入有效的数字！")
except ZeroDivisionError:
    print("除数不能为零！")
```

### 4.2 完整的异常处理结构
```python
try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("文件不存在")
else:
    print("文件读取成功")
    print(content)
finally:
    file.close()
```

## 5. 实践示例

### 5.1 猜数字游戏
```python
import random

def guess_number():
    target = random.randint(1, 100)
    attempts = 0
    
    while True:
        attempts += 1
        try:
            guess = int(input("猜一个1-100之间的数字："))
            if guess < target:
                print("太小了！")
            elif guess > target:
                print("太大了！")
            else:
                print(f"恭喜你猜对了！用了{attempts}次")
                break
        except ValueError:
            print("请输入有效的数字！")
```

### 5.2 简单的菜单系统
```python
def show_menu():
    while True:
        print("\n=== 菜单 ===")
        print("1. 查看商品")
        print("2. 添加到购物车")
        print("3. 结算")
        print("4. 退出")
        
        choice = input("请选择操作（1-4）：")
        
        if choice == '1':
            print("显示商品列表...")
        elif choice == '2':
            print("添加商品到购物车...")
        elif choice == '3':
            print("正在结算...")
        elif choice == '4':
            print("谢谢使用，再见！")
            break
        else:
            print("无效的选择，请重试")
```

## 练习题

1. 编写一个程序，判断用户输入的年份是否为闰年
2. 创建一个简单的计算器程序，支持基本运算
3. 实现一个简单的用户登录系统
4. 编写程序统计文本中每个字符出现的次数

## 进阶挑战

1. 实现一个简单的ATM机系统
2. 创建一个文件备份程序
3. 开发一个简单的成绩管理系统

## 常见问题解答

1. 如何选择使用for循环还是while循环？
   - for循环：适用于已知迭代次数的情况
   - while循环：适用于基于条件的循环

2. break和continue的区别？
   - break：完全结束循环
   - continue：跳过当前迭代，继续下一次迭代

## 参考资源
- [Python官方文档 - 控制流程](https://docs.python.org/zh-cn/3/tutorial/controlflow.html)
- [Python编程：从入门到实践](https://python-programming.readthedocs.io/) 