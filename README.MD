# 简介

部署本项目需要两个运行环境：nodejs 和 ruby。

> 目前推荐在 CloudFlare 上部署本项目

## 安装运行环境

### 以 Ubuntu 22.04 / Debian bullseye 为例

1. 使用 [nvm](https://github.com/nvm-sh/nvm) 安装 nodejs

```
nvm install 12.18.0
```

2. 安装依赖

```
npm i
```

3. 安装 ruby 环境

```
sudo apt install ruby-full build-essential zlib1g-dev -y
```

4. 配置环境变量

```bash
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
```

```bash
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

5. 安装 Jekyll

```ruby
gem install bundler jekyll
```

# 运行和部署本项目

1. 切换到本项目文件夹

```ruby
bundle install
```

2. 开发模式

```bash
npm run dev
```

3. 发布模式

```bash
npm run build
```