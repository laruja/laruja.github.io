# [Dart](https://flutter.dev/docs/resources/bootstrap-into-dart)


### [基础](https://dart.dev/guides/language/language-tour)
- 练习环境--vscode(已安装Dart插件)，测试文件当前目录下终端运行：dart run xxx.dart
终端直接输入dart 报错:zsh: command not found: dart
原因：安装flutter时捆绑了dart
[安装dart](https://dart.ranyunlong.com/guide/#mac%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4)
1. brew tap dart-lang/dart
2. brew install dart  
    #报错 独立运行dart文件暂停，截止到目前20200710本机运行dart文件需要启动flutter
    #准备面试


奇技淫巧：dart路径在flutterSDK的/bin/cache/dart-sdk目录下，
1. echo $PATH 环境变量中查找dart  没有
2. 需要配置dart环境变量
```powershell
$ vim ~/.bash_profile #添加如下

# dart
export DART_HOME=~/flutter/bin/cache/dart-sdk/bin
export PATH="${DART_HOME}:${PATH}"
$ source ~/.bash_profile # 刷新当前终端窗口
$ echo $PATH  #查看dart是否存在PATH中
------无效


##### [实用基础](https://book.flutterchina.club/chapter1/dart.html)
1. 变量与类型
    基本类型：bool num(int double) string enum
    泛型：list map (类似js中数组和对象)
    
    var接受任何类型的变量，一旦赋值无法改变类型
    dynamic编辑器会提供所有可能的组合。后期可以改变赋值类型，声明的变量可以赋值给任意类型的变量
        dynamic f = true;编译时不报错，运行时报错
    object所有对象的基类，只能使用Object属性与方法。后期可以改变赋值类型，声明的变量可以赋值给任意类型的变量
2. 控制流语句
```dart
<!-- 条件判断
debug模式下只接受bool类型值，release模式下接受任意类型值，都认为时false -->
if(false){
    print('1');
}else{
}
<!-- switch(){} 同其他语言 -->
for
List<int> arr = [1,2,3];
for(int n in arr){
    print(n);
}
for(int i=0;i<arr.length;i++){
    print(arr[i]);
}
int n=0;
while(n<arr.length){
    print(n);
    n++;
}
do while
<!-- continue+跳转语句 -->
bool isBoy(Person person){
    switch(person){
        case Person.boy:print(true);continue Label_case;
        case Person.girl:return false;
        Label_case:case Person.boy:print('第二次执行');return false;
        default:return false;break;
    }
}
```
3. 函数
    箭头函数 int add(int a,int b)=>a+b;print(add(1,2));
    可选位置参数，int add(int a,[int b])=>a+b;print(add(1));
    可选命名参数  int add(int a,{int b})=>a+b;print(add(1,b:2));
4. 类
    class 构造函数,无析构函数[有自己的虚拟机可以实现垃圾回收]
    class Tool{
        int num;
        String name;
        Tool(int num,String name){
            this.num = num;
            this.name = name;
        }
        <!-- 简写
            Tool(this.num,this.name)
         -->
        <!-- 命名构造函数 -->
        Tool.fromTool(List<dynamic> arr){
            num = arr[0];
            name = arr[1];
        }
        <!-- 重定向构造函数 -->
        Tool.toTool(int num,String name):this(num,name);
        String getName(){
            return name;
        }
    }
    使用
    Tool a = new Tool(1,'one');
    print(a.getName);
    使用命名构造函数
    Tool b = new Tool.fromTool([1,'one']);
    print(b.getName);
5. 继承与多态
    继承一个基类 extends
    调用基类的方法 super
    不能实现多继承
    class Child extends Tool{
        Child(int num,String name):super(num,name);
        @override
        String getName(){return 'www'}
    }
    多态 类似于其他语言
6. 抽象类与接口
    抽象类
    abstract class Tool{
        String getName();
        String getString(){
            return 'www';
        }
    }
    派生类继承抽象类
    class Child extends Tool{
        @override
        String getName(){
            return 'one';
        }
    }
    使用
    Tool a = new Child();
    print(a.getName());
    静态权限 
    下划线开头的符号_ 包内可见
7. 异步 
    关键字 Future Async await
    implements
    异步运算async -> 延迟队列await -> 等待结果Future
    getAsyncData(String data) async{
        print('开始');
        data = await Future.delayed(Duration(seconds:2),(){
            return '延迟数据';
        });
        print(data);
    }
    Future 返回future类型
    Future<String> getAsyncData(String data) async{
        print('开始');
        data = await Future.delayed(Duration(seconds:2),(){
            return '延迟数据';
        });
        return data;
    }
    Future<String> res = getAsyncData();
    res.then((data){
        print(data);
    })
    错误捕获
    Future<String> getAsyncData(String data) async{
        print('开始');
        return await Future.delayed(Duration(seconds:2),(){
            throw AssertionError("Error");
        });
    }
    Future<String> res = getAsyncData();
    
    res.then((data){
        print(data);
    }).catchError(err){
        print(err);
    }
    res.then((data){
        print(data);
    },onError:(err){
        print('代码错误');
    });
    
    whenComplete 无论成功失败都会调用
    等待多个任务
    执行多个异步
    Future.wait([
        Future.delayed(Duration(seconds:2),(){
            print('1');
            reutrn 1;
        }),
        Future.delayed(Duration(seconds:2),(){
            print('1');
            return 2
        })
    ]).then((res){
        print(res[0]);
        print(res[1]);
    })

##### 官网翻译



### 核心概念
- 可以放入变量中的所有内容都是一个对象，而每个对象都是一个类的实例。偶数、函数和null都是对象。所有对象都继承自对象类。

- 尽管Dart是强类型的，但类型注释是可选的，因为Dart可以推断类型。在上面的代码中，number被推断为int类型。如果要显式地声明不需要类型，请使用特殊类型dynamic。

- Dart支持泛型类型，如List<int>（整数列表）或List<dynamic>（任何类型的对象列表）。

- Dart支持顶级函数（如main（）），也支持绑定到类或对象的函数（分别是静态方法和实例方法）。也可以在函数（嵌套函数或局部函数）中创建函数。

- 类似地，Dart支持顶级变量，以及绑定到类或对象的变量（静态变量和实例变量）。实例变量有时称为字段或属性。

- 与Java不同，Dart没有public、protected和private关键字。如果标识符以下划线（U）开头，则它对其库是私有的。有关详细信息，请参见库和可见性。

- 标识符可以以字母或下划线（U）开头，后跟这些字符和数字的任意组合。

- Dart有表达式（有运行时值）和语句（没有）。例如，条件表达式条件？expr1:expr2的值为expr1或expr2。将其与if-else语句进行比较，后者没有值。语句通常包含一个或多个表达式，但表达式不能直接包含语句。

- Dart工具可以报告两种类型的问题：警告和错误。警告只是表示代码可能无法工作，但不会阻止程序执行。错误可以是编译时的，也可以是运行时的。编译时错误会阻止代码执行；运行时错误会导致在代码执行时引发异常。


    