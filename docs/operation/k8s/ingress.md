# ingress:集群进出流量的总管

`ingress`
`ingress class`
`ingress controller`

由于service本质上是一个由 `kube-proxy` 控制的四层负载均衡，在 `TCP/IP` 协议栈上转发流量，只能够依据 IP 地址和端口号做一些简单的判断和组合：

![](./img/service.webp)

而跑在七层的 `HTTP/HTTPS` 协议上的，有更多的高级路由条件，比如主机名、URI、请求头、证书等等。

而这些在 `TCP/IP` 网络栈里是根本看不见的，因此service并不能完全解决网络流量的管理问题。