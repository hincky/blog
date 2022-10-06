# kubectl-command

[官网命令参考](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#-strong-getting-started-strong-)

创建/删除资源

|命令|说明|
|:---:|:---:|
|kubectl create -f xxx.yml|创建资源|
|kubectl delete -f xxx.yml|删除资源|

## node
|命令|说明|
|:---:|:---:|
|kubectl get||
|kubectl ||


## deployment
|命令|说明|
|:---:|:---:|
|kubectl get||
|kubectl ||

## pod
|命令|说明|
|:---:|:---:|
|kubectl get||
|kubectl ||

## service
|命令|说明|
|:---:|:---:|
|kubectl get||
|kubectl ||

## namespace
|命令|说明|
|:---:|:---:|
|kubectl ||
|kubectl ||

## 
|命令|说明|
|:---:|:---:|
|kubectl get||
|kubectl ||


kubectl - command line utility to interact with the API

kubectl command format:

kubecdtl + action + what to perform the action on
kubectl get resources - lists resources

kubectl describe resource - displays detailed information about a resource

kubectl get apiservices - list of all the API groups

kubectl get pods - lists all pods

kubectl get pods -o wide - lists all pods in ps (process status) output format with additional info

kubectl get pod pod number -o yaml - outputs in YAML format

kubectl get [object] --watch - keeps the process running to show changes in realtime

kubectl get sc - lists storage classes

kubectl get deploy - lists deployments

kubectl get rs - lists replica sets

kubectl rollout status deploy deployment name - displays status if there is a rolling update

kubectl rollout history deploy deployment name -displays the history of deployment rollouts

kubectl rollout history deploy deployment name --revision=revision number - shows the details of a specific rollout

kubectl rollout undo deploy deployment name - rolls back to the previous deployment revision

warning: this is an imperative operation and will not be consistent with what's stored in a manifest file
kubectl apply -f file name - post a manifest file to the API server

kubectl apply -f deploy.yml -- record - the record flag will add an annotation to a deployment manifest

kubectl get clusterrolebindings - lists ClusterRoleBindings

kubectl get clusterrolebindings binding -o yaml lists a specific ClusterRoleBinding in YAML format

kubectl get clusterrole role -o yaml - lists a specific ClusterRole

kubectl cluster-info - displays the master address

kubectl get ingress -ojson --all-namespaces | jq -r '.items[] | select(.metadata.annotations."kubernetes.io/ingress.class"=="classname") | .metadata.name,.metadata.namespace' - search for ingresses with a specific class

curl -I --header "Host: foo.host" https://address --insecure - verify an ingress with a catch-all host