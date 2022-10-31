#!/usr/bin/ sh

# 在build之前，记得开打config.js里面的base选项，如果不是部署到远程仓库；可以不用设置base
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

echo 'opened dist'

git init
git add -A
git commit -m 'deploy'

echo 'git committed'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hincky/blog.git master:gh-pages

echo 'git pushed'

cd -