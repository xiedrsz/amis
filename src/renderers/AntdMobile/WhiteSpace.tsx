import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema } from '../../Schema';
import { WhiteSpace } from 'antd-mobile';

// WhiteSpace 的属性
interface WhiteSpaceProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * NavBar 导航栏。
 * 文档：https://mobile.ant.design/components/nav-bar-cn/
 */
export interface AmWhiteSpaceSchema extends BaseSchema, WhiteSpaceProps {
  /**
   * 指定为 container 类型
   */
  type: 'am-space';
}

export interface AmWhiteSpaceProps extends RendererProps, WhiteSpaceProps { }

export default class AmWhiteSpace extends React.Component<AmWhiteSpaceProps, object> {
  static defaultProps: Partial<AmWhiteSpaceProps> = {
    size: 'md'
  };

  render() {
    let { size } = this.props
    return (
      <WhiteSpace size={size} />
    );
  }
}

@Renderer({
  test: /(^|\/)am-space$/,
  name: 'am-space'
})

export class AmWhiteSpaceRenderer extends AmWhiteSpace { }
