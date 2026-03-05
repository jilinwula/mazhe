# 码者官网

基于 Hugo + PaperMod 主题构建。

## 第一次使用

```bash
# 1. 克隆主题（必须做一次）
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

# 2. 本地预览
hugo server -D

# 3. 浏览器打开 http://localhost:1313
```

## 写新文章

```bash
# 新建博客
hugo new posts/my-post.md

# 新建更新日志
hugo new changelog/v1-0-0.md
```

写完后把 `draft: false` 改掉，推送到 GitHub 自动部署。

## Cloudflare Pages 配置

| 项目 | 值 |
|------|-----|
| 构建命令 | `git submodule update --init --recursive && hugo --minify` |
| 输出目录 | `public` |
| 环境变量 `HUGO_VERSION` | `0.145.0` |

## 修改配置

主要配置在 `hugo.toml`，可以改：
- `baseURL`：你的域名
- `title`：站点名称  
- `params.socialIcons`：社交链接
- `params.homeInfoParams`：首页欢迎语
