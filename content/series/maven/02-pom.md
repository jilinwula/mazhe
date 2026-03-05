---
title: "POM 文件详解"
weight: 2
---

## 什么是 POM

POM（Project Object Model，项目对象模型）是 Maven 的核心概念。每个 Maven 项目都有一个 `pom.xml` 文件，它描述了项目的基本信息、构建配置和依赖关系。

## POM 的基本结构

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <!-- 项目坐标 -->
    <groupId>com.example</groupId>
    <artifactId>my-project</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <!-- 项目信息 -->
    <name>My Project</name>
    <description>一个示例 Maven 项目</description>

    <!-- 依赖 -->
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

</project>
```

## GAV 坐标

Maven 使用 GAV（GroupId、ArtifactId、Version）三元组唯一标识一个构件：

- **GroupId**：组织或公司的唯一标识，通常使用域名倒写，如 `com.example`
- **ArtifactId**：项目模块名称，如 `my-project`
- **Version**：版本号，`SNAPSHOT` 表示开发中版本

## 依赖范围

`<scope>` 标签控制依赖在哪个阶段生效：

| Scope | 编译 | 测试 | 运行 | 说明 |
|-------|------|------|------|------|
| `compile` | ✓ | ✓ | ✓ | 默认范围 |
| `test` | ✗ | ✓ | ✗ | 仅测试时使用 |
| `provided` | ✓ | ✓ | ✗ | 容器提供，如 `servlet-api` |
| `runtime` | ✗ | ✓ | ✓ | 运行时需要，如 JDBC 驱动 |

## 常用配置

### 指定 Java 版本

```xml
<properties>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>
```

### 统一管理依赖版本

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.2.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```
