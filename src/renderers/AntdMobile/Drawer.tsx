import React from 'react';
import { Drawer } from 'antd-mobile';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema, SchemaCollection, SchemaExpression } from '../../Schema';
import { evalExpression } from '../../utils/tpl';

// Drawer 的属性
interface DrawerProps {
  // open?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  touch?: boolean;
  transitions?: boolean;
  docked?: boolean;
  enableDragHandle?: boolean;
  dragToggleDistance?: number;
}

/**
 * NavBar 导航栏。
 * 文档：https://mobile.ant.design/components/nav-bar-cn/
 */
export interface AmDrawerSchema extends BaseSchema, DrawerProps {
  /**
   * 指定为 antd-mobile Drawer 类型
   */
  type: 'am-drawer';

  /**
   * 内容
   */
  body: SchemaCollection;

  /**
   * 抽屉里的内容
   */
  sidebar: SchemaCollection;

  open?: SchemaExpression;
}

export interface AmDrawerProps extends RendererProps, DrawerProps { }

@Renderer({
  test: /(^|\/)am-drawer$/,
  name: 'am-drawer'
})
export default class AmDrawer extends React.Component<AmDrawerProps, object> {
  render() {
    const { data, body, className, sidebar, render, open: openTpl, position, touch, transitions, docked, enableDragHandle, dragToggleDistance } = this.props;
    const open = !!evalExpression(openTpl, data as object);

    return (
      <Drawer
        className={className}
        open={!!open}
        {...{ position, touch, transitions, docked, enableDragHandle, dragToggleDistance }}
        sidebar={render('sidebar', sidebar) as JSX.Element}
      >
        {render('body', body) as JSX.Element}
      </Drawer>
    );
  }
}
