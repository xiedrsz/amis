amis.define('docs/css-utilities/index.md', function(require, exports, module, define) {

  module.exports = {
    "title": "快速开始",
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>1.0.20 版本中的功能</p>\n</blockquote>\n<p>在 amis 中自定义样式有两种方式：</p>\n<ol>\n<li>自己生成主题，适合修改整体页面风格，影响所有组件，目前只能通过源码方式，请参考 <code>scss\\themes\\default.scss</code> 文件，修改变量后重新编译一个 css，后续我们将会有在线主题编辑工具。</li>\n<li>使用辅助 class，使用它们就能在 amis 配置中定制效果，无需单独编写 css，后续介绍的都主要是这种方式。</li>\n</ol>\n<p>辅助 class 参考自<a href=\"https://tailwindcss.com/\">tailwindcss</a>, 做了精简，把一些不常用的剔除了，响应式方面只保留 pc 和手机两种，css 未压缩版本大概是 800K 左右，比 tailwind 要小很多。</p>\n<p>使用方法：</p>\n<ul>\n<li>JS SDK<ul>\n<li>引入 sdk 中的文件 <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;sdk/utilities.css&quot; /&gt;</code></li>\n</ul>\n</li>\n<li>React<ul>\n<li><code>import &#39;amis/lib/utilities.css&#39;</code>;</li>\n</ul>\n</li>\n</ul>\n<p>目前这个文件没有和主题文件合并在一起，用户可以选择性加载。</p>\n<p>大部分 amis 组件都有 <code>className</code> 或者 <code>xxxClassName</code> 的配置，比如下面的配置给表单增加了边框、圆角和阴影</p>\n</div><div class=\"amis-preview\" style=\"min-height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"type\": \"form\",\n  \"panelClassName\": \"border-solid border-2 border-blue-500 rounded-xl shadow-lg\",\n  \"controls\": [\n    {\n      \"type\": \"text\",\n      \"className\": \"text-green-700\",\n      \"label\": \"文本框\",\n      \"name\": \"text\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>还可以：</p>\n<ul>\n<li>通过 <code>flex</code> <code>flex-shrink-0</code> 来设置布局方式。</li>\n<li>通过 <code>bg-blue-100</code> <code>bg-white</code> 之类的类名设置背景色。</li>\n<li>通过 <code>shadow-md</code> 设置投影。</li>\n<li>通过 <code>rounded-xl</code> 设置圆角。</li>\n<li>通过 <code>text-xl</code>、<code>font-medium</code> 设置字体大小粗细。</li>\n<li>等等。。</li>\n</ul>\n<p>具体用法请查看左边的文档列表。</p>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [],
      "level": 0
    }
  };

});
