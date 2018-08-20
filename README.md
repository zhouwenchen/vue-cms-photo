# 黑马程序员中的Vue项目案例

## 时间201808202100开始

## 将代码上传到git上，进行代码的管理工作
git init
git status(表示所有未提交的状态)
git add .
git status
git commit -m '备注信息'
git remote add origin git@github.com:zhouwenchen/vue-cms-photo.git
git push -u origin master

## 再次修改，需要将修改后的代码提交到github上
git add .
git commit -m '备注信息'
git push

再次测试修改

## 制作首页App组件
1.完成Header区域，使用Mint-UI中的Header组件
2.制作底部的Tarbbar区域，使用的是MUI的Tarbar.html
 + 在制作 购物车 小图标的时候，操作会多一些；
 + 先把 扩展图表的 css 样式拷贝到项目中
 + 拷贝 扩展字体库ttf 文件，到项目中
 + 为 购物车 小图标，添加如下的样式 "mui-icon-extra mui-icon-extra-cart"
3.要在 中间区域，放置一个router-view来展示路由组件


## 制作底部的路由
1.先在main.js 导入路由的js

## 改造 tabbar 为 router-link
## 设置路由高亮
## 点击 tabbar 中的路由链接， 展示对应的路由组件
