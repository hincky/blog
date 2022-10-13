## nginx ingress version

- nginx official version
    - nginx open source 
    - nginx plus 功能比开源版更多

- k8s comunity version
社区维护
使用的时候，要注意nginx ingress和k8s的版本对应关系

 

## k8s中nginx ingress的安装

> 安装之前确保集群里没有其他ingress controller了

如果有就删除对应的命名空间，会循环删除ns里面的资源。再开始下面的步骤

使用manifest的yaml安装方式

wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml

修改里面的配置   步骤1先不要做
1. 注释掉externalTrafficPolicy: Local
externalTrafficPolicy: Local

2. 修改controller/deploy的image
bitnami/nginx-ingress-controller:1.1.1

3. 修改ingress-nginx-admission-create的image
liangjw/kube-webhook-certgen:v1.1.1

4. 修改ingress-nginx-admission-path的image
liangjw/kube-webhook-certgen:v1.1.1


ok之后直接apply部署即可
apply好了之后，进入controller 的pod内部

kubectl exec -it ingress-nginx-controller-c9db554bd-2dpfg sh -n ingress-nginx


ps -efwww
```bash
UID          PID    PPID  C STIME TTY          TIME CMD
101            1       0  0 04:48 ?        00:00:00 nginx-ingress-controller /nginx-ingress-controller --publish-service=ingress-nginx/ingress-nginx-controller --election-id=ingress-controller-leader --controller-class=k8s.io/ingress-nginx --configmap=ingress-nginx/ingress-nginx-controller --validating-webhook=:8443 --validating-webhook-certificate=/usr/local/certificates/cert --validating-webhook-key=/usr/local/certificates/key
101           25       1  0 04:48 ?        00:00:00 nginx: master process /usr/local/nginx/sbin/nginx -c /etc/nginx/nginx.conf
101           30      25  0 04:48 ?        00:00:00 nginx: worker process
101           31      25  0 04:48 ?        00:00:00 nginx: worker process
101           32      25  0 04:48 ?        00:00:00 nginx: cache manager process
101           99       0  0 04:59 pts/0    00:00:00 sh
101          105      99  0 04:59 pts/0    00:00:00 ps -efwww
```

看到第一启动的进程时nginx-ingress-controller
然后启动了master process
再然后启动了worker process


## 部署应用进行转发

```yml
cat >> deploy-ingress.yaml << EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-myapp
spec:
  rules:
  - host: myapp.demo-ingress.com # host 只能对应域名
    http:
      paths:
      - path: / # 不指定的话。默认是 / 根路径
        pathType: Exact
        backend: # 选择对应的后端应用，这里是路由到myapp-service的service的80上面
          service:
            name: myapp
            port:
              number: 80
EOF

# 下面这个会各种报错，用上面的模板吧
cat >> deploy-ingress.yaml << EOF
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-myapp
  namespace: default
  annotation:
    kubernetes.io/ingress.class: "nginx"
spec:
  rules:
  - host: myapp.demo-ingress.com
    http:
      paths:
      - path:
        backend:
          serviceName: myapp
          servicePort: 80
EOF
```

接下来创建deploy和service

kubectl create deploy myapp --image=ikubernetes/myapp:v1

kubectl expose deploy myapp --port=80
kubectl get po 
kubectl get svc 


有了pod之后

## 创建对应的ingress

vim deploy-ingress.yaml

kubectl apply -f deploy-ingress.yaml

kubectl get svc -n ingress-nginx 




