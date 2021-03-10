import React from 'react';
import { autobind } from '../../utils/helper';
import { InputItem } from 'antd-mobile';
import { BaseSchema } from '../../Schema';
import { Renderer, RendererProps } from '../../factory';
import { IServiceStore } from '../../store/service';
import MyIcon from '../../components/antd/MyIcon'

// InputItem 的属性
interface InputItemProps {
  icon?: string;
  placeholder?: string;
  codeName?: string;
  label?: string;
  labelNumber?: number;
}

/**
 * Text 文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/text
 */
export interface AmInputSchema extends BaseSchema, InputItemProps {
  type: 'am-input';
}

export interface TextProps extends RendererProps, InputItemProps {
  store: IServiceStore;
}

export interface TextState {
  inputValue?: string;
}

export default class AmInput extends React.Component<
  TextProps,
  TextState
  > {
  constructor(props: TextProps) {
    super(props);
    this.state = {
      inputValue: ''
    };
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
    let { store, codeName } = this.props
    this.setState({
      inputValue: value
    });
    if (codeName) {
      store.updateData({
        [codeName]: value
      });
    }
  }

  render(): JSX.Element {
    const {
      type,
      placeholder,
      disabled,
      name,
      icon,
      label,
      labelNumber
    } = this.props;

    return (
      <InputItem
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        labelNumber={labelNumber}
        value={this.state.inputValue}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleNormalInputChange}
      >
        {icon ? <MyIcon type={icon} /> : ''}
        {label ? <span>{label}</span> : ''}
      </InputItem>
    );
  }
}

@Renderer({
  test: /(^|\/)am-input$/,
  name: 'am-input'
})
export class AmInputRenderer extends AmInput { }
