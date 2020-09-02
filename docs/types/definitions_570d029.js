amis.define('docs/types/definitions.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Definitions",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Definitions",
    "icon": null,
    "order": 40,
    "html": "<p><code>Definitions</code>建立当前页面公共的配置项，在其他组件中可以通过<code>$ref</code>来引用当前配置项中的内容。注意 definitions 只能在顶级节点中定义，定义在其他位置，将引用不到。</p>\n<div class=\"amis-preview\" style=\"height: 500px\"><script type=\"text/schema\" height=\"500\">{\n  \"definitions\": {\n          \"aa\": {\n              \"type\": \"text\",\n              \"name\": \"jack\",\n              \"value\": \"ref value\",\n              \"labelRemark\": \"通过<code>\\\\$ref</code>引入的组件\"\n          }\n      },\n      \"type\": \"page\",\n      \"title\": \"引用\",\n      \"body\": [\n          {\n              \"type\": \"form\",\n              \"api\": \"api/xxx\",\n              \"actions\": [],\n              \"controls\": [\n                  {\n                      \"$ref\": \"aa\"\n                  }\n              ]\n          }\n      ]\n}\n</script></div>\n<p><code>Definitions</code> 最大的作用其实是能够实现对数据格式的递归引用。来看这个栗子吧。</p>\n<div class=\"amis-preview\" style=\"height: 800px\"><script type=\"text/schema\" height=\"800\">{\n  \"definitions\": {\n          \"options\": {\n            \"type\": \"combo\",\n            \"multiple\": true,\n            \"multiLine\": true,\n            \"name\": \"options\",\n            \"controls\": [\n            {\n                \"type\": \"group\",\n                \"controls\": [\n                {\n                    \"label\": \"名称\",\n                    \"name\": \"label\",\n                    \"type\": \"text\",\n                    \"required\": true\n                },\n                {\n                    \"label\": \"值\",\n                    \"name\": \"value\",\n                    \"type\": \"text\",\n                    \"required\": true\n                }\n                ]\n            },\n            {\n                \"label\": \"包含子选项\",\n                \"type\": \"switch\",\n                \"name\": \"hasChildren\",\n                \"mode\": \"inline\",\n                \"className\": \"block\"\n            },\n            {\n                \"$ref\": \"options\",\n                \"label\": \"子选项\",\n                \"name\": \"children\",\n                \"visibleOn\": \"this.hasOwnProperty('hasChildren') && this.hasChildren\",\n                \"addButtonText\": \"新增子选项\"\n            }\n            ]\n        }\n      },\n      \"type\": \"page\",\n      \"title\": \"引用\",\n      \"body\": [\n          {\n              \"type\": \"form\",\n              \"api\": \"api/xxx\",\n              \"actions\": [],\n              \"controls\": [\n                  {\n                      \"$ref\": \"options\",\n                      \"label\": \"选项\"\n                  },\n\n                  {\n                      \"type\": \"static\",\n                      \"label\": \"当前值\",\n                      \"tpl\": \"<pre>${options|json}</pre>\"\n                  }\n              ]\n          }\n      ]\n}\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [],
      "level": 0
    }
  };

});
