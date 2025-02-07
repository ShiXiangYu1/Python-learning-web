# Python函数编程指南 - 模块化程序设计

> 本文将详细介绍Python函数的定义、使用和最佳实践，帮助您掌握模块化程序设计的精髓。

## 学习目标
- 理解函数的基本概念和作用
- 掌握函数的定义和调用方法
- 学会使用参数和返回值
- 理解函数的作用域和闭包
- 掌握lambda函数的使用

## 1. 函数基础

### 1.1 函数定义和调用
```python
# 基本函数定义
def greet(name):
    """这是一个简单的问候函数"""
    print(f"你好，{name}！")

# 调用函数
greet("小明")  # 输出：你好，小明！

# 带返回值的函数
def calculate_area(length, width):
    """计算矩形面积"""
    return length * width

area = calculate_area(5, 3)
print(f"面积是：{area}")  # 输出：面积是：15
```

### 1.2 文档字符串
```python
def get_average(numbers):
    """
    计算一组数字的平均值
    
    参数:
        numbers (list): 数字列表
    
    返回:
        float: 平均值
    
    示例:
        >>> get_average([1, 2, 3, 4, 5])
        3.0
    """
    return sum(numbers) / len(numbers)
```

## 2. 函数参数

### 2.1 参数类型
```python
# 位置参数
def power(base, exponent):
    return base ** exponent

# 默认参数
def greet(name, greeting="你好"):
    print(f"{greeting}，{name}！")

# 可变参数
def sum_numbers(*args):
    return sum(args)

# 关键字参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# 使用示例
print(power(2, 3))  # 输出：8
greet("小红")  # 输出：你好，小红！
print(sum_numbers(1, 2, 3, 4))  # 输出：10
print_info(name="小明", age=18, city="北京")
```

### 2.2 参数顺序
```python
def complex_function(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
    """
    参数说明：
    pos1, pos2: 仅位置参数
    pos_or_kwd: 位置或关键字参数
    kwd1, kwd2: 仅关键字参数
    """
    print(f"pos1={pos1}, pos2={pos2}, pos_or_kwd={pos_or_kwd}, kwd1={kwd1}, kwd2={kwd2}")

# 调用示例
complex_function(1, 2, 3, kwd1="a", kwd2="b")
```

## 3. 函数作用域

### 3.1 局部变量和全局变量
```python
global_var = 100

def test_scope():
    local_var = 200
    print(f"在函数内部：local_var = {local_var}, global_var = {global_var}")

def modify_global():
    global global_var
    global_var = 300

test_scope()
print(f"在函数外部：global_var = {global_var}")
modify_global()
print(f"修改后：global_var = {global_var}")
```

### 3.2 闭包
```python
def create_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

# 使用闭包
my_counter = create_counter()
print(my_counter())  # 输出：1
print(my_counter())  # 输出：2
```

## 4. Lambda函数

### 4.1 基本用法
```python
# 普通函数
def square(x):
    return x ** 2

# 等价的lambda函数
square_lambda = lambda x: x ** 2

# 使用示例
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
print(squares)  # 输出：[1, 4, 9, 16, 25]
```

### 4.2 常见应用
```python
# 排序时使用lambda
students = [
    {'name': '小明', 'score': 95},
    {'name': '小红', 'score': 88},
    {'name': '小华', 'score': 92}
]
sorted_students = sorted(students, key=lambda x: x['score'], reverse=True)

# 过滤数据
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
```

## 5. 装饰器

### 5.1 基本装饰器
```python
def timer(func):
    """计算函数执行时间的装饰器"""
    import time
    
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"函数 {func.__name__} 执行时间：{end - start:.2f}秒")
        return result
    
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    print("函数执行完成")
```

### 5.2 带参数的装饰器
```python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"你好，{name}！")
```

## 6. 实践示例

### 6.1 简单计算器
```python
def calculator():
    def add(x, y):
        return x + y
    
    def subtract(x, y):
        return x - y
    
    def multiply(x, y):
        return x * y
    
    def divide(x, y):
        if y == 0:
            raise ValueError("除数不能为零")
        return x / y
    
    operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    }
    
    while True:
        try:
            num1 = float(input("请输入第一个数字："))
            op = input("请输入运算符（+、-、*、/）：")
            num2 = float(input("请输入第二个数字："))
            
            if op not in operations:
                print("无效的运算符")
                continue
                
            result = operations[op](num1, num2)
            print(f"结果：{result}")
            
        except ValueError as e:
            print(f"错误：{e}")
        
        if input("继续计算？(y/n)：").lower() != 'y':
            break
```

### 6.2 文件处理函数
```python
def process_file(filename, operation):
    """
    文件处理函数
    
    参数:
        filename (str): 文件名
        operation (callable): 处理函数
    """
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            return operation(content)
    except FileNotFoundError:
        print(f"文件 {filename} 不存在")
    except Exception as e:
        print(f"处理文件时发生错误：{e}")

# 使用示例
def count_words(text):
    return len(text.split())

def count_lines(text):
    return len(text.splitlines())

# 调用示例
result = process_file('example.txt', count_words)
print(f"文件中的单词数：{result}")
```

## 练习题

1. 编写一个函数，计算斐波那契数列的第n项
2. 创建一个装饰器，记录函数的调用次数
3. 实现一个简单的缓存装饰器
4. 编写一个函数，实现深度复制列表

## 进阶挑战

1. 实现一个简单的函数式编程库
2. 创建一个支持链式调用的计算器类
3. 实现一个带超时功能的装饰器

## 常见问题解答

1. 什么时候使用lambda函数？
   - 简单的一行函数
   - 作为高阶函数的参数
   - 临时使用的函数

2. 如何选择参数类型？
   - 位置参数：必需的参数
   - 默认参数：可选的参数
   - 可变参数：数量不定的参数
   - 关键字参数：名称-值对的参数

## 参考资源
- [Python官方文档 - 函数](https://docs.python.org/zh-cn/3/tutorial/controlflow.html#defining-functions)
- [Python函数式编程指南](https://docs.python.org/zh-cn/3/howto/functional.html) 