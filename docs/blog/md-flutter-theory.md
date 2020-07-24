# Flutter

- Flutter是什么
- Flutter核心概念
- Flutter与Dart

### Flutter是什么
    flutter是一个sdk,可以通过一套代码构建移动端(andriod,ios)、web(测试版)和桌面应用
    目标：使开发人员能够交付在不同平台感觉自然、高性能的应用程序
    滚动行为、板式、图标方面有所差异
### Flutter核心概念
- flutter包含：
    - 一个现代的响应式框架
    - 一个2D渲染引擎
    - 现成的小部件wigets(有状态statefulWidget和无状态statelessWidget)
    - 开发工具
- 核心原则--一切皆为widget
    1. 一切flutter应用程序用户界面皆为widget
    2. 组合 > 集成
![flutter核心](/assets/flutter-diagram-layercake.png)

### Flutter与Dart
- 为什么用Dart
    1. 开发体验好 JIT模式（原生改动代码要重新编译）
        基于AOT发包生成高效AIM代码保证性能(javascript做不到)
    2. 性能高
        flutter流畅高保真UI体验
        Dart支持AOT 不会丢帧
    3. 快速内存分配
        flutter框架使用函数流 依赖于底层 google v8
    4. 类型安全
        本身支持静态类型检测，编译前发现潜在问题
        而javascript弱类型静态类型检测需要typescript(微软) flow(facebook)
    5. 社区庞大

      

### Flutter
#### 包管理
[Pub仓库 google官方Dart Packages仓库](https://pub.dev/)
查找/发布
flutter中使用包
    - 第三方：
        pubspec.yaml中：dependencies添加依赖
        命令： flutter packages get
    - 本地：
        pubspec.yaml中：
            dependencies:
                package:
                    path:包的路径
                    git:
                        url:git地址
                        path:使用包的地址，主目录可以省略
#### 路由管理
页面:管理页面之间跳转关系；Android:Activity,IOS:UIViewController
页面栈:入栈push打开新页面，出栈pop关闭当前页面
Navigator:管理组件 提供push、pop方法


参考：https://flutter.dev/docs/resources/technical-overview