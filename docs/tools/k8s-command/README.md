# kubectl-command

[官网命令参考](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#-strong-getting-started-strong-)

创建/删除资源

|命令|说明|
|:---|:---|
|kubectl create -f xxx.yml|创建资源|
|kubectl delete -f xxx.yml|删除资源|
|kubectl apply -f xxx.yml|部署资源|

## node
|命令|说明|
|:---|:---|
|kubectl cluster-info|查看集群详细信息|
|kubectl get node|查看集群中的所有Node|

## deployment
|命令|说明|
|:---|:---|
|kubectl get deploy/deployment|查看所有deployments|
|kubectl describe deployment||
|kubectl ||

## pod
|命令|说明|
|:---|:---|
|kubectl get po/pods|查看所有的pod状态|
|kubectl get pods -o wide|查看所有的pod状态|
|kubectl get pods -l app=kubernetes-nginx|通过label查询pod|
|kubectl describe pods|查看pod详细信息|
|kubectl describe pods $POD_NAME|查看具体pod的详细信息|
|export POD_NAME=kubernetes-nginx-78bcc44665-8fnnn|将Pod的名称设置为环境变量，方便以$POD_NAME使用|
|kubectl logs $POD_NAME|查看Pod打印的日志|
|kubectl exec $POD_NAME -- env|使用exec和env命令查看pod容器环境变量|
|kubectl exec -ti $POD_NAME -- bash|使用exec和env命令查看pod容器环境变量|
|kubectl label pod $POD_NAME version=v1|给pod添加label|

## service
|命令|说明|
|:---|:---|
|kubectl get services|查看所有services|
|kubectl get svc|查看所有services|
|kubectl get services -l app=kubernetes-nginx|通过label查询service|
|kubectl expose deployment/kubernetes-nginx --type="NodePort" --port 80|创建service来暴露deployment|
|kubectl describe services/kubernetes-nginx|查看Service的详情，NodePort查看对外的端口|
|kubectl delete service -l app=kubernetes-nginx|通过label删除service|

## proxy
|命令|说明|
|:---|:---|
|kubectl proxy|通过代理来暴露接口以供访问|
|kubectl ||

## namespace
|命令|说明|
|:---|:---|
|kubectl get ns|列出所有命名空间|
|kubectl ||

## replication controller
|命令|说明|
|:---|:---|
|kubectl get||
|kubectl ||

## replica set
|命令|说明|
|:---|:---|
|kubectl get rs|lists replica sets|
|kubectl ||

## log
|命令|说明|
|:---|:---|
|kubectl logs podName|查看Pod打印的日志|
|kubectl ||