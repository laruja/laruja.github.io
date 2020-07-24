# flutter练习流水账

    tips: 科学上网
- 安装配置环境
- 是什么
-

### 安装配置环境
```powershell  

# flutter临时镜像。用户环境变量添加以下环境变量
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
# 下载flutter sdk
git clone -b dev https://github.com/flutter/flutter.git
# 添加flutter相关工具到path中 更新当前会话到PATH变量
export PATH="$PWD/flutter/bin:$PATH"
# 切换至flutter目录
cd ./flutter
flutter doctor

# 永久将flutter添加到PATH 使flutter命令可以运行在任何终端会话中
# flutter 目录 /Users/lrj/flutter 即～/flutter 即$HOME
$ vim ~/.zshrc # 添加 source ~/.bash_profile
$ vim ~/.bash_profile #添加如下
#flutter
export PUB_HOSTED_URL=https://pub.flutter-io.cn #国内用户需要设置
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn #国内用户需要设置
export PATH=~/flutter/bin:$PATH
$ source ~/.bash_profile # 刷新当前终端窗口
$ echo $PATH  #查看flutter是否存在PATH中

```
##### 问题见 flutter-install.png
```powershell
Android toolchain - develop for Android devices (Android SDK version 28.0.3)
Android license status unknown.
      Try re-installing or updating your Android SDK Manager.
      See https://developer.android.com/studio/#downloads or visit
      https://flutter.dev/docs/get-started/install/macos#android-setup for
      detailed instructions.
```

##### 解决：(参考)[https://github.com/flutter/flutter/issues/31116]
1. 修改Android JDK11为JDK8   [jdk8/jdk1.8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
2. 卸载Android Studio & 重启电脑 & 运行 flutter doctor -v
```powershell
[!] Android toolchain - develop for Android devices (Android SDK version 29.0.3)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor
      --android-licenses
```
3. 根据提示运行 flutter doctor --android-licenses
```powershell
[✓] Android Studio (version 4.0)
    • Android Studio at /Applications/Android Studio.app/Contents
    • Flutter plugin version 46.0.2
    • Dart plugin version 193.7361
    • Java version OpenJDK Runtime Environment (build
      1.8.0_242-release-1644-b3-6222593)
```
```powershell

# 查看本机安装的所有jdk
/usr/libexec/java_home -V

# 临时更改java版本jdk8
$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/ 
$ export PATH=$JAVA_HOME/bin:$PATH

# 查看java/jdk版本
$ java -version
java version "1.8.0_181"
Java(TM) SE Runtime Environment (build 1.8.0_181-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.181-b13, mixed mode)

# 如果想永久生效，那就把命令加入到你的profile文件中。
$ echo 'export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/' >> ~/.bash_profile 
$ source ~/.bash_profile

# 修改jdk版本
$ export JAVA_HOME_8=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
$ export JAVA_HOME=$JAVA_HOME_8
#设置别名 终端中通过alias切换
alias jdk8='export JAVA_HOME=$JAVA_HOME_8'

```

```powershell
# 升级macos后的提示
-bash: export: `/Users/lrj/.bash_profile': not a valid identifier

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
laca-Pro:~ lrj$ chsh -s /bin/zsh
```

### [创建一个demo应用](https://flutterchina.club/get-started/test-drive/#vscode)(https://flutter.dev/docs/get-started/codelab)

- android模拟器启动
报错：
Exception: Gradle task assembleDebug failed with exit code 1

$ brew install gradle
$ gradle -v
// Gradle 6.3
------以上无效，该错误需要将gradle降级
将3.5.0改为3.4.2即可
  dependencies {
        classpath 'com.android.tools.build:gradle:3.4.2'
    }



更新flutter     flutter upgrade 
更改flutter分支  flutter channel stable/master？没试/dev？没试
                flutter upgrade

在项目目录下启动flutter项目
  1. 启动模拟器
      flutter emulators  #列出设备
      flutter emulators --launch Mi10_API_29 #启动模拟器
  2. flutter run
[构建安卓应用](https://flutter.dev/docs/deployment/android)
  - 无签名 
          buildTypes {
            release {
              signingConfig null
            }
          }

          $ flutter build apk  #
          $ flutter build apk --split-per-abi # 优化后的apk：32bit 64bit 如startup_name 优化前15.9M，优化后5.2M

          无法成功安装至模拟器

  - 有签名(https://flutter.cn/docs/deployment/android)
      $ keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key

      正在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 10,000 天):
	 CN=li, OU=ws, O=l, L=w, ST=h, C=z
[正在存储/Users/lrj/key.jks]

flutter clean 
        1. $ flutter build apk
        2. usb连mi10 设置-我的设备-全部参数-MIUI版本数击5次打开开发者模式 //此时可在设置中找到开发者选项
                  设置-更多设置-开发者选项- 开启 USB调试、USB安装
        3. 项目目录下运行 flutter install
### 是什么
- [CocoaPods是什么？](https://juejin.im/entry/5c067eb56fb9a04a0a5ef583)
  CocoaPods是iOS开发、macOS开发中的包依赖管理工具，效果如Java中的Maven，nodejs的npm。


