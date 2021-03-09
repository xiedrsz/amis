import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema, SchemaCollection } from '../../Schema';
import { WingBlank } from 'antd-mobile';

// WhiteSpace 的属性
interface WingBlankProps {
  size?: 'sm' | 'md' | 'lg';
}

/**
 * AmWingBlank 容器渲染器。
 * 文档：https://baidu.gitee.io/amis/docs/components/wrapper
 */
export interface AmWingBlankSchema extends BaseSchema, WingBlankProps {
  /**
   * 指定为 container 类型
   */
  type: 'am-blank';

  /**
   * 内容
   */
  body: SchemaCollection;
}

export interface AmWingBlankProps extends RendererProps, WingBlankProps { }

export default class AmWingBlank extends React.Component<AmWingBlankProps, object> {
  static propsList: Array<string> = ['body'];
  static defaultProps: Partial<AmWingBlankProps> = {
    size: 'lg'
  };

  render() {
    let { size, body, render } = this.props
    return (
      <WingBlank size={size}>
        {render('body', body) as JSX.Element}
      </WingBlank>
    );
  }
}

@Renderer({
  test: /(^|\/)am-blank$/,
  name: 'am-blank'
})

export class AmWingBlankRenderer extends AmWingBlank { }
