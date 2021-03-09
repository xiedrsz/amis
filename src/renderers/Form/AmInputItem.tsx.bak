import React from 'react';
import {
  OptionsControl,
  OptionsControlProps,
  FormOptionsControl
} from './Options';
import { autobind } from '../../utils/helper';
import { InputItem } from 'antd-mobile';

// declare function matchSorter(items:Array<any>, input:any, options:any): Array<any>;

/**
 * Text 文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/text
 */
export interface AmInputSchema extends FormOptionsControl {
  type: 'am-input';
}

export interface TextProps extends OptionsControlProps {
  placeholder?: string;
}

export interface TextState { }

export default class AmInput extends React.PureComponent<
  TextProps,
  TextState
  > {
  constructor(props: TextProps) {
    super(props);
    this.state = {};
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  static defaultProps: Partial<TextProps> = {
    placeholder: ''
  };

  // 获得焦点 val 为 当前值
  handleFocus(val: string) {
    this.props.onFocus && this.props.onFocus(val);
  }

  // 失去焦点 val 为 当前值
  handleBlur(val: string) {
    const { onBlur } = this.props;
    onBlur && onBlur(val);
  }

  // change 事件触发的回调函数
  @autobind
  handleNormalInputChange(value: string) {
    const { onChange } = this.props;
    onChange(value);
  }

  render(): JSX.Element {
    const {
      value,
      type,
      placeholder,
      disabled,
      name
    } = this.props;

    return (
      <InputItem
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleNormalInputChange}
        value={
          typeof value === 'undefined' || value === null
            ? ''
            : typeof value === 'string'
              ? value
              : JSON.stringify(value)
        }
      />
    );
  }
}

@OptionsControl({
  type: 'am-input'
})
export class AmInputRenderer extends AmInput { }
