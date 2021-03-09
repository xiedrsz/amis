import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema } from '../../Schema';
import { Button } from 'antd-mobile';

// Button 的属性
interface ButtonProps {
  buttonType?: 'primary' | 'ghost' | 'warning';
  label?: string
}

/**
 * NavBar 导航栏。
 * 文档：https://mobile.ant.design/components/nav-bar-cn/
 */
export interface AmButtonSchema extends BaseSchema, ButtonProps {
  /**
   * 指定为 container 类型
   */
  type: 'am-button';
}

export interface AmButtonProps extends RendererProps, ButtonProps { }

export default class AmButton extends React.Component<AmButtonProps, object> {
  static defaultProps: Partial<AmButtonProps> = {
    label: '按钮'
  };

  render() {
    let { label, buttonType } = this.props
    return (
      <Button type={buttonType}>
        {label}
      </Button>
    );
  }
}

@Renderer({
  test: /(^|\/)am-button$/,
  name: 'am-button'
})

export class AmButtonRenderer extends AmButton { }
