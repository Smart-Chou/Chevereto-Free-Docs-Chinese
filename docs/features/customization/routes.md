# 路线

路由指的是像 `/dashboard` 这样的虚拟路径，它在系统中不作为真正的文件夹存在，而 Chevereto 将该请求映射到 PHP。默认情况下 Chevereto 有很多路由，它们都在`/app/routes` 文件夹中。

如果您想添加诸如您自己的 API 之类的内容，或者您想更改默认 `/image` 路由的工作方式，则自定义路由非常有用。有了这个系统，你根本不需要插件，你可以通过添加路由或覆盖现有路由来高度自定义任何东西。

## 添加或覆盖路由

您可以完全覆盖默认路由或安全地添加自己的新路由。为此，只需在“app/routes/overrides”文件夹中完成您的工作。您需要查看默认路由以习惯它。

随意在`app/routes/overrides` 文件夹中做任何你想做的事情，你的更改根本不会弄乱默认路由，并且在更新脚本时你会保留你的更改。

路由是 G\ Library 的一项功能，因此您应该查看 [G\ Library 文档](https://g.chevereto.com/) 以获取有关系统路由的扩展信息。