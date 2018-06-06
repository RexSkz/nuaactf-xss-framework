# nuaactf-2017-xss-framework

> 该分支为使用 `phantomjs` 的版本，查看 `puppeteer` 版本请切换到 `puppeteer` 分支。

## 简介

这是为 nuaactf 2017 的 xss 题目准备的测试项目，基于此项目可以快速生成一道 xss 的测试题目。xss 的目标均为 `alert(1)`，且其中的 1 必须为数字 1。

灵感来源：[alert(1) to win](https://alf.nu/alert1)。

## 部署和访问

```bash
npm install
npm start
```

之后访问 http://localhost:3001/[题目编号] 即可。

## 测试流程

首先先使用前端 check，前端将 alert 函数覆盖成了自己写的判断函数，如果前端 check 通过则运行后端 check，后端也用类似的思路调用 phantomjs 来测试是否有 xss。

## 题目编写

题目和 flag 均在 index.js 中，请注意字符串的转义。

## 界面修改

界面为 template.html 文件，可以随意修改。
