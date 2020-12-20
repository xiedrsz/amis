amis.define('docs/components/pagination-wrapper.md', function(require, exports, module, define) {

  module.exports = {
    "title": "PaginationWrapper 分页容器",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "PaginationWrapper",
    "icon": null,
    "order": 59,
    "html": "<div class=\"markdown-body\"><p>功能性组件，分页容器，可以用来对已有列表数据做分页处理。</p>\n<ul>\n<li>输入：默认读取作用域中的 items 变量，如果是其他变量名请配置 <code>inputName</code>。</li>\n<li>输出：经过分页处理后会把分页后的数据下发给 <code>outputName</code> （默认也是 items）对应的数据。</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: 400px\"><script type=\"text/schema\" height=\"400\" scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/crud/table\",\n    \"body\": [\n        {\n            \"type\": \"pagination-wrapper\",\n            \"inputName\": \"rows\",\n            \"outputName\": \"rows\",\n            \"perPage\": 2,\n            \"body\": [\n                {\n                    \"type\": \"table\",\n                    \"title\": \"分页表格\",\n                    \"source\": \"${rows}\",\n                    \"columns\": [\n                        {\n                            \"name\": \"engine\",\n                            \"label\": \"Engine\"\n                        },\n                        {\n                            \"name\": \"version\",\n                            \"label\": \"Version\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [],
      "level": 0
    }
  };

});
