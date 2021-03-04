import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema, SchemaCollection } from '../../Schema';
import { Flex } from 'antd-mobile';

/**
 * AmFlexItem 容器渲染器。
 * 文档：https://baidu.gitee.io/amis/docs/components/wrapper
 */
export interface AmFlexItemSchema extends BaseSchema {
  /**
   * 指定为 container 类型
   */
  type: 'am-flex-item';

  /**
   * 内容
   */
  body: SchemaCollection;
}

export interface AmFlexItemProps extends RendererProps, Omit<AmFlexItemSchema, 'className'> { }

export default class AmFlexItem extends React.Component<AmFlexItemProps, object> {
  static propsList: Array<string> = ['body', 'className', 'children'];
  static defaultProps: Partial<AmFlexItemProps> = {
    className: 'bg-white'
  };

  render() {
    const { body, className, render } = this.props;
    return (
      <Flex.Item className={className} >
        {render('body', body) as JSX.Element}
      </Flex.Item>
    );
  }
}

@Renderer({
  test: /(^|\/)am-flex-item$/,
  name: 'am-flex-item'
})

export class AmFlexItemRenderer extends AmFlexItem { }
