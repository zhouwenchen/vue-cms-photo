# 黑马程序员中的Vue项目案例

## 时间201808202100开始

## 示例
http://47.98.106.135/cms-photo/#/home

## 将代码上传到git上，进行代码的管理工作
+ git init
+ git status(表示所有未提交的状态)
+ git add .
+ git status
+ git commit -m '备注信息'
+ git remote add origin git@github.com:zhouwenchen/vue-cms-photo.git
+ git push -u origin master

## 再次修改，需要将修改后的代码提交到github上
+ git add .
+ git commit -m '备注信息'
+ git push

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

## 加载首页轮播图的数据
1. 获取数据，使用vue-resource
2. 使用vue-resource 的this.$http.get 获取数据
3. 获取到的数据保存到data 上
4. 使用v-for 循环渲染 每一个Item 项目

## 首页中的六宫格的制作
1. 从mui中的grid的模版中获取
2. 从[阿里巴巴矢量图](http://www.iconfont.cn/search/index) 中获取的图标
3. 修改样式

## tabbar各个组件的切换效果实现

## 改造新闻资讯列表
1. 绘制界面,使用的是MUI中的media-list.html模版页面
2. 使用vue-resource，获取数据
3. 渲染数据


## 定义全局的格式化时间的函数（DOWN）
 + cnpm i moment -S

 + import moment from 'moment'
 + // 定义全局的时间过滤器组件
 + Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
 +   return moment(dataStr).format(pattern)
 + })

## 实现 新闻资讯列表 点击挑战到新闻详情的页面
1. 把列表中的每一项改造为 router-link 的同时，在跳转的时候应该提供唯一的 ID
2. 创建新闻详情的组件NewsInfo.vue
3. 在 路由组件 中，将新闻列表页  和新闻详情页 对应起来


## 单独封装一个comment.vue 的子组件
1. 先创建一个单独的 comment.vue 的组件
2. 在需要使用 comment 的组件的地方，导入comment 的组件
3. `import comment from './comment.vue'`
4. 在父组件中，使用`components` 属性，将刚才导入的comment组件，注册为自己的组件
5. 将注册子组件的时候，注册名称，以标签的形式，在页面中引用即可


## 加载评论的数据，并从后端渲染到前端
1. 加载评论数据
2. 前端将其数据渲染到页面上

## 加载评论更多（TODO）
1. 点击加载更多，使用pageIndex++，并需要重新调用一下getcommentList()
2. 需要给“加载更多”按钮，添加 @click='getMore' 的绑定事件
3. 为了防止新数据 覆盖 老数据，需要将老数据拼接新的数据。
4. bug(如果没有分页数据，依然会请求，获取分页的数据)[已解决]

## 发表评论
1. 把文本框做成数据的双向绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户，评论不能为空
4. 通过vue-resource 发送一个请求，将评论发布到服务器
5. 当发表评论成功之后，重新刷新评论列表，显示最新的评论
 + 如果重新刷新列表的话，效率很慢，另一个方面，可能只取到了最后一页的评论，前几页的评论获取不到
 + 换一种思路，如果发表评论成功，在客户端，将最新的评论数据，调用数据的 unshift 方法，把最新的评论，添加到data中的comment中，这样也可以实现刷新评论列表的效果


## 改造首页中的图片按钮，路由的链接，并显示对应的组件

## 制作 图片列表组件页面结构，并美化样式
1. 制作顶部的滑动条
2. 制作底部的图片列表
### 制作顶部滑动条的坑
1. 需要借助于mui中的tab-top-webview-main.html
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法触发滑动，通过检查官方文档，这是一个js的组件，需要被初始化
 + 导入 mui.js
 + 调用官方提供的方式初始化
···
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
···

4. 移除严格模式
+ 当导入了mui.js之后，出现了严格模式
+ 根据[babel-plugin-transform-remove-strict-mode](https://www.npmjs.com/package/babel-plugin-transform-remove-strict-mode)

+ npm install babel-plugin-transform-remove-strict-mode

```
.babelrc
    {
    "plugins": ["transform-remove-strict-mode"]
    }
```
+ 需要在再style中添加
···
    *{
        touch-action: pan-y;
    }
···

5. 刚进入到图片分享页，滑动条不能滑动的问题
 + mounted 在这个阶段渲染页面，也就是需要在dom元素加载完毕之后，才可以
 ```
  mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
 ```

## 通过发送请求，获取到分类列表的数据
从后端获取的数据格式
api/getcategory

```
    {"status":0,"message":[{"id":1,"title":"家具生活"},{"id":2,"title":"摄影设计"},{"id":3,"title":"明星美女"},{"id":4,"title":"娱乐八卦"},{"id":5,"title":"搞笑萌宠"},{"id":6,"title":"美女豪车"}]}
```

### 制作图片列表区域
1. 图片列表，需要使用 懒加载 技术实现，我们可以使用Mint-UI 中的 `lazy-load` 来实现
2. 渲染图片列表中的数据

### 实现了 图片列表懒加载和样式的美化

## 实现点击图片 跳转到图片详情
1. 在改造 li 成 router-link 之后，需要使用 tag 标签 属性，将属性指定渲染为 li

## 实现 图片详情页面 的 布局和美化， 同时 加载数据
1. 使用 vue-preview 这个缩略图的插件
2. 获取到所有的图片列表之后，使用 v-for 指令渲染数据
3. 对数据使用forEach()，遍历，需要给每个元素添加 w 和 h 属性

## 绘制 商品列表 页面

## 尝试在手机上 去进行项目的预览和测试

## 加载 商品列表 数据， 并实现了点击 加载更多 按钮，实现加载数据

## 改造轮播图的首页

## 添加购物车的动画效果
[动画效果](http://cubic-bezier.com/#.17,.67,1,.59)

···
    beforeEnter(el){
        el.style.transform = "translate(0 , 0)"
    },
    enter(el,done){
        el.offsetWidth ;// 有动画的效果
        // 
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.getElementById("badge").getBoundingClientRect();

        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;

        el.style.transform = `translate(${xDist}px, ${yDist}px)`;
        el.style.transition = "all 1s cubic-bezier(.59,.07,.66,.95)";
        done()
    },
    afterEnter(el){
        this.ballFlag = ! this.ballFlag
    }
···

## 如何实现加入购物车时候，拿到我们选择的数量
1. 经过分析，按钮是goods-info ，数字 属于numbox组件
2. 由于涉及到 父子组件 的嵌套，所以无法再goodinfo，上获取到numbox组件上的数据
3. 涉及到 子组件 向 父组件 传值
4. 事件调用的本质： 

## 使用vuex，实现不同组件之间共享数据
