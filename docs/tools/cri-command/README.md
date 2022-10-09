# crictl 命令

[github文档](https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md)

## pod

|命令|说明|
|:---|:---|
|crictl pods|打印pod清单|
|crictl pods --name nginx-65899c769f-wv2gp|名称打印 Pod 清单|
|crictl pods --label run=nginx|根据标签打印 Pod 清单|

## image 镜像

|命令|说明|
|:---|:---|
|crictl images|打印所有镜像|
|crictl images nginx|根据仓库打印镜像清单|
|crictl pull busybox|拉取busybox镜像|

## container 容器

|命令|说明|
|:---|:---|
|crictl ps -a|打印所有容器清单|
|crictl ps|正在运行的容器清单|
|crictl exec -i -t 1f73f2d81bf98 ls|在运行的容器上执行ls命令|
|crictl exec -i -t 1f73f2d81bf98 bash|在运行的容器上执行bash命令|

## log 日志

|命令|说明|
|:---|:---|
|crictl logs 87d3992f84f74|获取容器的所有日志|
|crictl logs --tail=N 87d3992f84f74|获取最近的 N 行日志|

