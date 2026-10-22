# 咖啡Menu

一个现代极简、会“抽出书册”的个人网站书架。第一卷收录古风互动网站《尺素》：书架保持现代，只有书本与详情内容采用古籍视觉。

## 功能

- 悬停或键盘聚焦时抽出书册
- 点击书脊打开书册介绍，随后跳转原站
- 响应式布局、键盘操作和减少动态效果支持
- 无框架、无构建依赖，可直接部署到 GitHub Pages
- 支持安装到 iOS 主屏幕，以独立 PWA 窗口运行
- 支持离线打开书架，并适配刘海与底部安全区

## 本地预览

```bash
python3 -m http.server 8000 --directory dist
```

访问 `http://localhost:8000`。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/pages.yml`。创建 GitHub 仓库并推送到 `main` 后，在 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions** 即可。

## 增加藏书

在 `dist/index.html` 的 `.shelf-scene` 中复制书册按钮，并在 `dist/script.js` 中扩展藏书数据与筛选逻辑。样式集中在 `dist/styles.css`。

## 设计参考

交互思路参考了 [virtual-bookshelf](https://github.com/petargyurov/virtual-bookshelf) 的 CSS 书架抽取效果；本项目的视觉、结构和代码为独立实现。

## 许可证

[MIT](./LICENSE)
