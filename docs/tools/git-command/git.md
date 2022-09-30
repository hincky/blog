# git-command

- [参考菜鸟教程git基本操作](https://www.runoob.com/git/git-basic-operations.html)
- [你分得清git合并方式rebase和merge吗？](https://www.cnblogs.com/FraserYu/p/11192840.html)

## 创建仓库命令

|命令|说明|
|:---|:---|
|git init|初始化仓库|
|git clone|拷贝一份远程仓库，也就是下载一个项目。|

## 提交与修改

|命令|说明|
|:---|:---|
|git add|添加文件到暂存区|
|git status|查看仓库当前的状态，显示有变更的文件。|
|git diff|比较文件的不同，即暂存区和工作区的差异。|
|git commit|提交暂存区到本地仓库。|
|git reset|回退版本。|
|git rm|将文件从暂存区和工作区中删除。|
|git mv|移动或重命名工作区文件。|

## 提交日志

|命令|说明|
|:---|:---|
|git log|查看历史提交记录|
|git blame filename|以列表形式查看指定文件的历史修改记录|

## 远程操作

|命令|说明|
|:---|:---|
|git remote|远程仓库操作|
|git fetch|从远程获取代码库|
|git pull|下载远程代码并合并|
|git push|上传远程代码并合并|

## git打tag
[轻量标签和附注标签的区别](https://blog.csdn.net/qq_21746331/article/details/120776710)

[轻量标签和附注标签的区别](https://blog.csdn.net/qq_21746331/article/details/120776710)

比如多次commit之后确定一个稳定版本，现在要将它打上标签作为一个tag。方便以后查找和回滚

|命令|说明|
|:---|:---|
|git tag base-v1| 为当前分支所在的提交记录打上轻量标签|
|git tag base-v2 4n45432 |为某次具体的提交记录打上轻量标签|
|git tag -a anotated_name -m tag_message |为当前分支所在的提交记录打上附注标签。|
|git tag -d tagname |删除某个标签，本质上就是移除.git/refs/tags/ 中对应的文件|
|git tag |列出所有tag|
|git push remotename --tags |将所有tag推送到远程仓库|
|git push remotename tagname |将某个具体tag推送到远程仓库|
|git push remote --delete tag_name |删除远程仓库中的某个标签|

