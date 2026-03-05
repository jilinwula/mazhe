---
title: "Maven 的基本信息"
weight: 1
---

## 什么叫做 Maven

在上一篇中我们简单的介绍了一下 Maven 实战这本书的简介以及相关的背景，在这一篇中我们开始详细的介绍一下这本书的内容。今天我们分享的内容主要是详细的介绍一下 Maven 的基本信息。例如什么叫做 Maven，为什么我们需要 Maven，以及如何安装它。

首先我们从英语的角度看什么是 Maven。在英语的角度上看 Maven 可以翻译为"内行、专家"。那么在技术领域的角度上看，Maven 实际上是一个跨平台的项目管理工具。说是项目管理工具，是因为它支持项目的构建、编译、打包和依赖管理等内容。说它跨平台是因为 Maven 是由 Java 语言开发的。并且 Maven 也是 Apache 组织中的开源项目。

简单概括：**Maven 是一个跨平台的项目管理工具，它支持项目的构建、编译、打包和依赖管理等内容。**

## 为什么需要 Maven

介绍了这么多 Maven 的好处，那么我们在日常的开发中为什么需要 Maven 呢？在没有 Maven 之前，如果需要引入第三方库，必须手动下载 jar 文件并添加到项目中。

```java
public class Userinfo {
    private String username;
    private String password;

    public Userinfo(String username, String password) {
        this.username = username;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Userinfo{username='" + username + "', password='" + password + "'}";
    }
}
```

手动管理依赖的问题：
- 依赖包路径移动后项目找不到文件
- 项目依赖众多时管理困难
- 无法自动处理传递性依赖

## 和 Maven 很像的东东

在没有 Maven 之前，都有哪些和 Maven 类似的项目构建工具？

### Make

Make 几乎可以理解为最早的项目构建工具，由 Stuart Feldman 于 1977 年在 Bell 实验室创建。使用 `Makefile` 脚本定义构建规则。

```makefile
JFLAGS = -g
JC = javac

.SUFFIXES: .java .class
.java.class:
    $(JC) $(JFLAGS) $*.java

CLASSES = MyClass1.java MyClass2.java

default: classes

classes: $(CLASSES:.java=.class)

clean:
    $(RM) *.class
```

### Ant

在 Make 之后，Ant 出现了。Ant 使用 `build.xml` 作为项目的构建脚本：

```xml
<?xml version="1.0"?>
<project name="MyProject" default="jar">
    <property name="src.dir" value="src"/>
    <property name="build.dir" value="build"/>

    <target name="compile">
        <javac srcdir="${src.dir}" destdir="${build.dir}"/>
    </target>

    <target name="jar" depends="compile">
        <jar destfile="MyProject.jar" basedir="${build.dir}"/>
    </target>
</project>
```

## Maven 的安装

### 环境准备

由于 Maven 是使用 Java 语言开发的，所以在使用 Maven 之前需要先安装 JDK：

```bash
java -version
echo $JAVA_HOME
```

### 安装 Maven

从 [Maven 官网](https://maven.apache.org/) 下载对应平台的安装包，然后配置环境变量：

```bash
# macOS / Linux
sudo vim ~/.bash_profile

export MAVEN_HOME=/usr/local/apache-maven-3.9.1
export PATH=$PATH:$MAVEN_HOME/bin

source ~/.bash_profile
```

验证安装：

```bash
mvn -v
```

## Maven 的目录结构

Maven 安装目录主要包含以下目录：

| 目录 | 说明 |
|------|------|
| `bin` | Maven 运行脚本，包含 `mvn` 命令 |
| `boot` | Maven 自定义的类加载器 |
| `conf` | 包含核心配置文件 `settings.xml` |
| `lib` | Maven 运行时所需的 Java 类库 |

## Maven 的最佳实践

- 设置 `MAVEN_OPTS` 环境变量控制 JVM 参数
- 配置用户范围的 `settings.xml` 自定义仓库镜像
- 使用阿里云镜像加速国内依赖下载
