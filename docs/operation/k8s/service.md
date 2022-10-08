# service

它是 Kubernetes 内置的负载均衡机制:

1. 使用静态 IP 地址代理动态变化的 Pod
2. 支持域名访问和服务发现，是微服务架构必需的基础设施。



`Service` 本身是没有服务能力的，它只是一些 `iptables` 规则。

节点里的 `kube-proxy` 组件才是真正配置、应用这些规则的。如果没有 `kube-proxy`，`Service` 定义得再完善也没有用。