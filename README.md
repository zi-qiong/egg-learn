# egg-learn

### 前端技术栈体系
[egg](https://eggjs.org/zh-cn/intro/quickstart.html) + [Nunjuck](https://mozilla.github.io/nunjucks/cn/getting-started.html)

### 开始

本地运行

```bash
git clone https://github.com/zi-qiong/egg-learn.git

cd egg-learn

npm install

npm start //打开 http://127.0.0.1:7001
```
首次开发配置git
```
git config user.name "Your Name"

git config user.email "Your Email"
```


本地开发
```
新建分支
git checkout -b <you-branch>

编译less
gulp watch

提交代码
git add -A .

git commit -m "xxx"

git pull

git merge <you-branch>

git push
```

### 目录结构

```bash
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── home.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```
