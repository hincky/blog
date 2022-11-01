---
title: README
date: 2022-10-12 20:26:02
permalink: /pages/ab5e7b/
categories: 
  - spring
  - spring-framework
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
# spring

spring框架核心是ioc容器和aop面向切面编程

## IOC容器

`BeanFactory`和`ApplicationContext`是spring的两个ioc容器，后者作为前者的子集更好。

bean：构成应用程序主干，且由ioc容器管理的对象

bean由ioc容器实例化、组装和管理的对象

bean以及它们之间的**依赖关系**，反映在容器使用的**配置元数据**中

而**配置元数据**的格式有：xml，java注释，java代码


`ApplicationContext`

### 配置元数据

#### [xml](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-metadata)

通过<bean/><beans/>配置

```xml
<beans>
    <bean id="myService" class="com.acme.services.MyServiceImpl"/>
</beans>
```

#### [注解](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-annotation-config)


#### [java代码](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java)

通常用带 `@Configuration`注释的**类**和带`@Bean`注释的**方法**。

@Bean和xml中的bean标签是一样的作用

```java
@Configuration
public class AppConfig {

    @Bean
    public MyService myService() {
        return new MyServiceImpl();
    }
}
```

@Import @DependsOn

## AOP面向切面编程

