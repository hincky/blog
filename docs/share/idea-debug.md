# 基础debug

## debug相关的快捷键

|debug面板的位置|快捷键作用|
|:---:|:---:|
|show execution point|快速回到断点位置|
|step over|不管这一行代码是否调用其它方法，直接跳到下一行代码|
|step into|进入方法内部|
|force step into|强制进入方法内部|
|step out|从方法内部跳出，并到下一行代码|
|run to cursor|直接跳到鼠标点击的代码行|
|trace current stream chain|追踪当前流的调用链|


## 行断点

直接点击左侧代码行，**标红的圆形**
通过debug模式运行程序，就会在标红的代码行处停下

debug控制台的Resume Program：后面的断点都会跳过，知道程序走完

## 详细断点（源断点）

shift+点击，代码行**标黄**，并出现断点详细配置的面板，done完成配置
- suspend 挂起 + done：作用等于行断点，代码行标黄变为标红
- suspend All 只要运行到这个地方就停止，相当于行断点
- suspend Thread 执行当前线程，断点才会停止；其它线程不停
- condition 触发了条件，断点才会停

## 方法断点

在方法代码行左侧点击，出现标红的**菱形**
运行debug模式后，从方法内部第一行开始停顿，直到方法内的最后一行，可以查看变量，表达式的变化

可以通过在接口里打断点，debug之后会自动停顿在接口的实现类处（通过这个方法间接知道接口被什么实现了）

resume program之后，debug控制台的变量面板variables出现对应的变量情况

## 异常断点 | 全局捕获

debug面板的"view breakPoint"将空指针异常添加到默认debug中

idea就会在debug运行模式下自动停顿在空指针异常的代码行处

## 字段断点 | 读写监控调试方式

在类的字段定义那一行代码处，打上断点，左侧出现标红的**眼睛图标**。表示会监控字段在整个生命周期的变化情况

回到使用到该字段的代码处，debug运行，然后再variables面板查看字段的赋值变化

# 进阶debug

## 断点条件

已经打了断点处，右键断点，开始设置条件：
- 比如i%2==0，即i为偶数时才停顿
- 比如Thread.currentThread().getName().equals("thread1")，即线程为thread1才停顿

## 打印堆栈信息

打开断点详细的配置面板，会自动定位到刚才断点的那一行，勾选log “breakPoint hit”断点触发信息和stack trace打印堆栈信息，done

再执行debug

## 表达式解析

表达式代码行打断点，打开debug面板，找到Evaluate Expression，设置表达式
- 比如p.getMsg()
可用于多个if-else的判断是：并列，或者。某个部分是true还是false
可用于某个方法具体返回的是什么

## 避免误操作资源

场景：比如方法内有多个指令，执行到断点处出现异常，直接stop，异常处后面的代码还是会执行，直到方法体出栈。这个过程如果是操作数据库或者mq，可能会污染测试数据或已有数据，再恢复的断点测试前的步骤又十分繁琐。

Drop Frame只是丢弃栈帧，治标不治本，再此执行debug断点，还是会重复上次的流程

解决方式：
在断点处的下一行不想被执行的代码行处，点击
或者断点的光标定位到不想被执行的代码行处
在debug面板的frames面板处：saveResource.. 
右键选择force return进行强制返回

就会直接从断点处退出方法，后面的敏感代码不执行





