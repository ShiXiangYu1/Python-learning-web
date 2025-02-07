# Python数据结构详解 - 从入门到精通

> 本文将全面介绍Python中的基础数据结构，帮助您掌握Python编程的核心概念。

## 学习目标
- 掌握Python基本数据类型
- 理解可变与不可变数据结构
- 学会使用列表、元组、字典和集合
- 掌握数据结构的常用操作方法

## 1. Python基本数据类型

### 1.1 数字类型
```python
# 整数（int）
age = 25
population = 7_800_000_000  # 使用下划线提高可读性

# 浮点数（float）
pi = 3.14159
temperature = -12.5

# 复数（complex）
c = 3 + 4j
```

### 1.2 字符串（str）
```python
# 字符串的创建和基本操作
name = "Python编程"
message = '你好，世界！'
multiline = """这是一个
多行字符串
示例"""

# 字符串操作
print(name[0])          # 输出：P
print(name[2:])        # 输出：thon编程
print(name.upper())    # 输出：PYTHON编程
```

## 2. 列表（List）

### 2.1 列表基础
```python
# 创建列表
fruits = ['苹果', '香蕉', '橙子']
numbers = [1, 2, 3, 4, 5]
mixed = [1, '你好', 3.14, True]

# 列表操作
fruits.append('葡萄')      # 添加元素
fruits.remove('香蕉')      # 删除元素
print(len(fruits))        # 获取长度
```

### 2.2 列表切片
```python
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[2:4])    # 输出：[2, 3]
print(numbers[::-1])   # 反转列表
```

## 3. 元组（Tuple）

```python
# 创建元组
coordinates = (10, 20)
rgb = (255, 128, 0)

# 元组操作
x, y = coordinates     # 元组解包
print(rgb.count(255))  # 计数
print(rgb.index(128))  # 查找索引
```

## 4. 字典（Dictionary）

```python
# 创建字典
student = {
    'name': '张三',
    'age': 18,
    'scores': {'语文': 85, '数学': 92, '英语': 78}
}

# 字典操作
print(student['name'])           # 访问值
student['grade'] = '高一'        # 添加键值对
print(student.get('phone', '未设置'))  # 安全访问
```

## 5. 集合（Set）

```python
# 创建集合
numbers = {1, 2, 3, 4, 5}
letters = set(['a', 'b', 'c'])

# 集合操作
numbers.add(6)         # 添加元素
numbers.remove(1)      # 删除元素
print(numbers & {4, 5, 6})  # 交集
```

## 实践练习

1. 基础练习：创建一个学生信息管理系统
```python
# 创建一个存储学生信息的字典
students = {
    '001': {
        'name': '李四',
        'age': 16,
        'courses': ['语文', '数学', '英语']
    },
    '002': {
        'name': '王五',
        'age': 17,
        'courses': ['物理', '化学', '生物']
    }
}

# 添加新学生
def add_student(id, name, age, courses):
    students[id] = {
        'name': name,
        'age': age,
        'courses': courses
    }

# 查询学生信息
def get_student_info(id):
    return students.get(id, '未找到该学生')
```

## 进阶技巧

### 列表推导式
```python
# 生成1-10的平方数列表
squares = [x**2 for x in range(1, 11)]
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 过滤偶数
even_numbers = [x for x in range(10) if x % 2 == 0]
print(even_numbers)  # [0, 2, 4, 6, 8]
```

### 字典推导式
```python
# 创建数字及其平方的映射
square_dict = {x: x**2 for x in range(5)}
print(square_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

## 常见问题解答

1. 如何选择合适的数据结构？
   - 列表：适用于有序数据集合
   - 元组：适用于不可变的数据集合
   - 字典：适用于键值对数据
   - 集合：适用于去重和集合运算

2. 可变与不可变数据结构的区别？
   - 可变：列表、字典、集合
   - 不可变：整数、浮点数、字符串、元组

## 练习题

1. 创建一个列表，包含1-10的偶数
2. 使用字典存储五个同学的姓名和年龄
3. 使用集合去除列表中的重复元素
4. 实现一个简单的通讯录系统

## 参考资源
- [Python官方文档 - 数据结构](https://docs.python.org/zh-cn/3/tutorial/datastructures.html)
- [Python数据结构和算法](https://python-data-structures.readthedocs.io/) 