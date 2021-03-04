import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema } from '../../Schema';
import { AmFlexItemSchema } from './FlexItem'
import { Flex } from 'antd-mobile';

/**
 * AmFlex 容器渲染器。
 * 文档：https://baidu.gitee.io/amis/docs/components/wrapper
 */
export interface AmFlexSchema extends BaseSchema {
  /**
   * 指定为 container 类型
   */
  type: 'am-flex';

  /**
   * 内容
   */
  body: AmFlexItemSchema[];

  /**
   * 定位
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * 换行
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * 对齐
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';

  /**
   * 交叉轴对齐
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';

  /**
   * 多根轴线对齐
   */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
}

export interface AmFlexProps extends RendererProps, Omit<AmFlexSchema, 'className'> {
  // children?: JSX.Element | ((props?: any) => JSX.Element);
}

export default class AmFlex extends React.Component<AmFlexProps, object> {
  static propsList: Array<string> = ['body', 'className', 'children'];
  static defaultProps: Partial<AmFlexProps> = {
    className: 'bg-white'
  };

  renderBody(): JSX.Element[] | null {
    const { body, render } = this.props;

    return body.map((content, index: Number) => (
      <Flex.Item key={index}>
        {render('body', content) as JSX.Element}
      </Flex.Item>
    ))
  }

  render() {
    let { direction, wrap, justify, align, alignContent } = this.props
    return (
      <Flex {...{ direction, wrap, justify, align, alignContent }}>
        {this.renderBody()}
      </Flex>
    );
  }
}

@Renderer({
  test: /(^|\/)am-flex$/,
  name: 'am-flex'
})

export class AmFlexRenderer extends AmFlex { }
