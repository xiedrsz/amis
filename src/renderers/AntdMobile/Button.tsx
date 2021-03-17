import React from 'react';
import { Button } from 'antd-mobile';
import pick from 'lodash/pick';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema } from '../../Schema';
import { autobind } from '../../utils/helper';
import { filter } from '../../utils/tpl';
import { DialogSchemaBase } from '../Dialog';

// Button 的属性
interface ButtonProps {
  buttonType?: 'primary' | 'ghost' | 'warning';
  label?: string
}

interface ButtonBaseSchema extends BaseSchema, ButtonProps {
  /**
   * 指定为 antd-mobile button 类型
   */
  type: 'am-button';
}

/**
 * NavBar 导航栏。
 * 文档：https://mobile.ant.design/components/nav-bar-cn/
 */
export interface AmButtonSchema extends ButtonBaseSchema {
  /**
   * 指定为打开弹窗
   */
  actionType: 'dialog';

  /**
   * 弹框详情
   * 文档：https://baidu.gitee.io/amis/docs/components/dialog
   */
  dialog: DialogSchemaBase;
}

export interface AmButtonProps extends RendererProps, ButtonProps {
  onAction: (
    e: React.MouseEvent<any> | void | null,
    action: object,
    data: any
  ) => void;
}

const MyActionPropKeys = [
  'dialog',
  'confirmText',
  'actionType'
];

export default class AmButton extends React.Component<AmButtonProps, object> {
  static defaultProps: Partial<AmButtonProps> = {
    label: '按钮'
  };

  @autobind
  handleClick(e: React.MouseEvent<any>) {
    const { onClick, disabled } = this.props;

    const result: any = onClick && onClick(e, this.props);

    if (disabled || e.isDefaultPrevented() || result === false) {
      return;
    }

    e.preventDefault();
    const action = pick(this.props, MyActionPropKeys) as AmButtonSchema;
    this.handleAction(e, action);
  }

  @autobind
  handleAction(e: React.MouseEvent<any> | void | null, action: any) {
    const { env, onAction, data, ignoreConfirm } = this.props;

    if (!ignoreConfirm && action.confirmText && env.confirm) {
      env
        .confirm(filter(action.confirmText, data))
        .then((confirmed: boolean) => confirmed && onAction(e, action, data));
    } else {
      onAction(e, action, data);
    }
  }

  render() {
    let { label, buttonType } = this.props
    return (
      <Button
        type={buttonType}
        onClick={this.handleClick}>
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
