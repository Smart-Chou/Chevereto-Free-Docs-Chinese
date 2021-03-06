# 图片上传

`/dashboard/settings/image-upload`

这控制与图像上传相关的设置。

## 启用图像格式

确定可以上传的图像格式。

::: tip 格式支持
JPG PNG BMP GIF WEBP
:::

## 启用上传

切换图片上传功能。

## 启用上传(URL)

从 URL 切换图像上传功能。

## 上传用户界面

确定上传的显示方式。

|键值 |效果|
| ----------------- | ------------------------------------- |
|页面容器 |使用停留在页面中的 JS 上传器 |
| /upload 路径|将用户引向上传页面 |

## 访客上传

与 [启用上传](#enable-uploads) 相同，但适用于访客用户。

## 适度上传

确定是否必须审核传入的上传。

|键值 |效果|
| -------- | --------------- |
|禁用|无需节制 |
|来宾 |适度的访客上传 |
|全部 |审核所有上传 |

## 启用嵌入代码(上传器)

在上传过程后切换嵌入代码的显示。

## 上传线程

确定上传器使用的并行线程数。此设置应根据已安装的硬件和您网站的使用情况进行配置。

## 单次上传重定向

在单个图像上传时切换 HTTP 重定向。启用后，用户将被重定向到图像查看器。

::: danger
如果启用了上传审核，则应禁用此功能。这是因为查看器 URL 将返回“HTTP 403”，直到图像获得批准。
:::

## 启用重复上传

切换是否接受重复上传。

## 启用过期上传

切换可过期上传的可用性，它将在特定日期后自动删除。

## 自动删除访客上传

确定自动删除访客上传。

## 最大图像大小

确定允许上传图像的最大尺寸(以像素为单位)。较大的图像将自动缩小。

## 图像 Exif 数据

切换图像 [Exif](https://en.wikipedia.org/wiki/Exif) 数据的处理。

## 图像 Exif 数据(用户设置)

切换用户是否可以决定如何处理 Exif 数据。

## 最大上传文件大小 [MB]

确定允许的最大图像大小。

::: danger
此设置受本地`php.ini` [配置](../setup/system/php.md) 的限制。
:::

## 最大上传文件大小(访客)

与上面相同，但对于客人。

## 图片路径

用于存储上传的文件系统路径。

## 存储模式

如何在文件系统中组织上传。

|键值 |效果|
| ----------- | --------------------------------------------- |
|日期文件夹 |使用嵌套文件夹结构`YYYY/MM/DD` |
|直销 |无文件夹结构 |

::: tip
此设置仅影响以后的上传。以前的上传不会受到影响。
:::

## 文件命名方法

上传时如何命名上传。

- 源文件：`./DSC-1313.jpg`

|键值 |效果|示例 |
| --------------------- | -------------------------------------------------- | ---------------- |
|原创 |保留原始文件名(碰撞时会随机化) | `DSC-1313.jpg` |
|随机 |随机字母数字名称 | `bJdrpmdfi.jpg` |
|混合原创+随机|保留部分原始文件名 | `DSC-13pLfm.jpg` |
|身份证 |将上传命名为其公共(编码)ID | `kIf.jpg` |

## 拇指大小

图像缩略图的高度和高度。

## 中等图像固定尺寸

通过指定调整大小标准来确定如何生成中等图像。

|键值 |效果|
| ------ | ------------------------------------------ |
|宽度|将固定宽度调整为目标值 |
|身高 |调整固定高度到目标值|

## 中等图像固定大小

中等图像大小。图像将根据 [中等图像固定尺寸](#medium-image-fixed-dimension) 标准调整大小。

## 水印

切换图像水印，即在图像前面合并的图像。可用于任何品牌需求。

::: tip
以下水印设置仅适用于“水印”为“已启用”的情况。
:::

## 水印用户切换

哪些用户上传将被添加水印。

## 水印文件切换

哪些图像格式将被加水印。

## 应用水印所需的最小图像大小

确定为图像添加水印所需的最小图像大小标准。

## 水印图像

用于水印图像上传的图像。

|类型 |推荐 |
| ----- | --------------------------- |
|图像 |具有 alpha 透明度的 PNG |

## 水印位置

将水印应用于图像的区域。

| | | |
| ----------- | ------------- | ------------ |
|左上|中心顶部 |右上 |
|左中 |中心中心 |右中 |
|左下|中底|右下|

## 水印百分比

水印大小以目标区域的百分比表示。

## 水印边距

在水印周围实现的边距。如果水印未在中心/中心实施，则很有用。

## 水印不透明度

水印图像的不透明度。
