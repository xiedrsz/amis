import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema } from '../../Schema';
import { NavBar, Icon } from 'antd-mobile';

/**
 * NavBar 导航栏。
 * 文档：https://mobile.ant.design/components/nav-bar-cn/
 */
export interface AmNavBarSchema extends BaseSchema {
  /**
   * 指定为 container 类型
   */
  type: 'am-nav-bar';

  /**
   * 标题
   */
  title: string;

  /**
   * 可以返回
   */
  canback: boolean
}

export interface AmNavBarProps extends RendererProps, Omit<AmNavBarSchema, 'className'> { }

export default class AmNavBar extends React.Component<AmNavBarProps, object> {
  static propsList: Array<string> = ['title', 'className'];
  static defaultProps: Partial<AmNavBarProps> = {
    className: 'bg-white'
  };

  render() {
    let { className, title, canback } = this.props
    return (
      <NavBar
        className={className}
        icon={canback ? <Icon
          type="left"
          onClick={() => window.history.back()}
        /> : undefined}
      >
        {title}
      </NavBar>
    );
  }
}

@Renderer({
  test: /(^|\/)am-nav-bar$/,
  name: 'am-nav-bar'
})

export class AmNavBarRenderer extends AmNavBar { }
