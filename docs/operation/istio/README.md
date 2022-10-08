# istio

[中文官网地址](https://istio.io/latest/zh/docs/concepts/what-is-istio/)

## 安装istio

```bash
curl -L https://istio.io/downloadIstio | sh -

cd istio-1.15.1

```
安装目录包含：

- `samples/` 目录下的示例应用程序
- `bin/` 目录下的 `istioctl` 客户端二进制文件

将 `istioctl` 客户端加入搜索路径（Linux or macOS）:
```bash
export PATH=$PWD/bin:$PATH
```


