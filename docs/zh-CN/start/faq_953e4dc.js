amis.define('docs/zh-CN/start/faq.md', function(require, exports, module, define) {

  module.exports = {
    "title": "常见问题",
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%B7%A6%E4%BE%A7%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC-\" href=\"#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%B7%A6%E4%BE%A7%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>如何实现左侧导航栏页面跳转？</h2><p>为了能更容易嵌入其它平台，amis 只负责单页面渲染，不接管前端路由，因此无法只靠 amis 配置实现多页面切换功能，推荐使用以下几种方法：</p>\n<ol>\n<li>自己实现左侧导航栏，用 amis 渲染右侧页面，类似 <a href=\"https://github.com/fex-team/amis-admin\">https://github.com/fex-team/amis-admin</a> 项目里的做法。</li>\n<li>使用传统的页面跳转，这样就能使用 amis 的 aside，其中通过 link 类型来跳转到另一个页面。</li>\n<li>使用「<a href=\"http://suda.baidu.com/\">爱速搭</a>」，它可以配置左侧导航，还自带了权限管理等功能。</li>\n</ol>\n<h2><a class=\"anchor\" name=\"%E9%9B%86%E6%88%90%E5%88%B0-react-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%8A%A5%E9%94%99\" href=\"#%E9%9B%86%E6%88%90%E5%88%B0-react-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%8A%A5%E9%94%99\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>集成到 React 项目中报错</h2><p>一般都是因为 React、Mobx、mobx-react 版本有关，参考 amis 项目的 <a href=\"https://github.com/baidu/amis/blob/master/package.json\">package.json</a>，将版本保持一致，尤其是 Mobx，目前 amis 中使用的版本是 4，因为兼容性的考虑短期内不会升级到 5，使用 MobX 5 肯定会报错。</p>\n<h2><a class=\"anchor\" name=\"%E6%9C%89%E7%9A%84%E5%8A%9F%E8%83%BD%E5%9C%A8%E5%AE%98%E7%BD%91%E7%A4%BA%E4%BE%8B%E4%B8%AD%E8%83%BD%E7%94%A8-%E4%BD%86%E5%9C%A8-react-sdk-%E4%B8%AD%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8\" href=\"#%E6%9C%89%E7%9A%84%E5%8A%9F%E8%83%BD%E5%9C%A8%E5%AE%98%E7%BD%91%E7%A4%BA%E4%BE%8B%E4%B8%AD%E8%83%BD%E7%94%A8-%E4%BD%86%E5%9C%A8-react-sdk-%E4%B8%AD%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>有的功能在官网示例中能用，但在 React/SDK 中无法使用</h2><p>如果提示找不到渲染器，那肯定是版本较老，尝试以下两种方法解决：</p>\n<ol>\n<li>使用最新 beta 版本，方法是去 <a href=\"https://www.npmjs.com/package/amis?activeTab=versions\">npm</a> 查看最新版本号，比如最新版本是 1.0.20-beta.18\n，就运行运行 <code>npm i amis@1.0.20-beta.18</code> 命令，在 <code>node_modules/amis/sdk</code> 目录中也能找到对应的 sdk 代码。</li>\n<li>如果还是报错，可以使用 master 分支的最新版本，下载项目源码后运行 <code>fis3 release publish-sdk -c</code>，在 sdk 目录中就能找到。</li>\n</ol>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "如何实现左侧导航栏页面跳转？",
          "fragment": "%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%B7%A6%E4%BE%A7%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC-",
          "fullPath": "#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%B7%A6%E4%BE%A7%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC-",
          "level": 2
        },
        {
          "label": "集成到 React 项目中报错",
          "fragment": "%E9%9B%86%E6%88%90%E5%88%B0-react-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%8A%A5%E9%94%99",
          "fullPath": "#%E9%9B%86%E6%88%90%E5%88%B0-react-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%8A%A5%E9%94%99",
          "level": 2
        },
        {
          "label": "有的功能在官网示例中能用，但在 React/SDK 中无法使用",
          "fragment": "%E6%9C%89%E7%9A%84%E5%8A%9F%E8%83%BD%E5%9C%A8%E5%AE%98%E7%BD%91%E7%A4%BA%E4%BE%8B%E4%B8%AD%E8%83%BD%E7%94%A8-%E4%BD%86%E5%9C%A8-react-sdk-%E4%B8%AD%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E6%9C%89%E7%9A%84%E5%8A%9F%E8%83%BD%E5%9C%A8%E5%AE%98%E7%BD%91%E7%A4%BA%E4%BE%8B%E4%B8%AD%E8%83%BD%E7%94%A8-%E4%BD%86%E5%9C%A8-react-sdk-%E4%B8%AD%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
