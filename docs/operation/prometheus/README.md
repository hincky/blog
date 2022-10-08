# prometheus

## Prometheus组件介绍
1. Prometheus Server: 用于收集和存储时间序列数据。
2. Client Library: 客户端库，检测应用程序代码，当Prometheus抓取实例的HTTP端点时，客户端库会将所有跟踪的metrics指标的当前状态发送到prometheus server端。
3. Exporters: prometheus支持多种exporter，通过exporter可以采集metrics数据，然后发送到prometheus server端，所有向promtheus server提供监控数据的程序都可以被称为exporter
4. Alertmanager: 从 Prometheus server 端接收到 alerts 后，会进行去重，分组，并路由到相应的接收方，发出报警，常见的接收方式有：电子邮件，微信，钉钉, slack等。
5. Grafana：监控仪表盘，可视化监控数据
6. pushgateway: 各个目标主机可上报数据到pushgateway，然后prometheus server统一从pushgateway拉取数据。

![](./img/architecture.png)

从上图可发现，Prometheus整个生态圈组成主要包括`prometheus server`，`Exporter`，`pushgateway`，`alertmanager`，`grafana`，`Web ui`界面

`Prometheus server`由三个部分组成，`Retrieval`，`Storage`，`PromQL`

- Retrieval负责在活跃的target主机上抓取监控指标数据
- Storage存储主要是把采集到的数据存储到磁盘中
- PromQL是Prometheus提供的查询语言模块。

## Prometheus工作流程
1. Prometheus server可定期从活跃的（up）目标主机上（target）拉取监控指标数据，目标主机的监控数据可通过配置静态job或者服务发现的方式被prometheus server采集到，这种方式默认的pull方式拉取指标；也可通过pushgateway把采集的数据上报到prometheus server中；还可通过一些组件自带的exporter采集相应组件的数据；
2. Prometheus server把采集到的监控指标数据保存到本地磁盘或者数据库；
3. Prometheus采集的监控指标数据按时间序列存储，通过配置报警规则，把触发的报警发送到alertmanager
4. Alertmanager通过配置报警接收方，发送报警到邮件，微信或者钉钉等
5. Prometheus 自带的web ui界面提供PromQL查询语言，可查询监控数据
6. Grafana可接入prometheus数据源，把监控数据以图形化形式展示出

