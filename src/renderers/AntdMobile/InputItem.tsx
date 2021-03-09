import React from 'react';
import { autobind } from '../../utils/helper';
import { InputItem } from 'antd-mobile';
import { BaseSchema } from '../../Schema';
import { Renderer, RendererProps } from '../../factory';
import { ServiceStore, IServiceStore } from '../../store/service';

// declare function matchSorter(items:Array<any>, input:any, options:any): Array<any>;

/**
 * Text 文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/text
 */
export interface AmInputSchema extends BaseSchema {
  type: 'am-input';
}

export interface TextProps extends RendererProps {
  placeholder?: string;
  store: IServiceStore;
}

export interface TextState {
  inputValue?: string;
}

// export default class AmInput extends React.PureComponent<
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
    // const { onChange } = this.props;
    // onChange(value);
    console.log(value)
    let { store } = this.props
    this.setState({
      inputValue: value
    });
    store.updateData({
      kkk: value
    });
  }

  render(): JSX.Element {
    const {
      value,
      type,
      placeholder,
      disabled,
      name
    } = this.props;

    /* value={
      typeof value === 'undefined' || value === null
        ? ''
        : typeof value === 'string'
          ? value
          : JSON.stringify(value)
    } */
    return (
      <InputItem
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleNormalInputChange}
        value={this.state.inputValue}
      />
    );
  }
}

@Renderer({
  test: /(^|\/)am-input$/,
  name: 'am-input',
  // storeType: ServiceStore.name,
  // isolateScope: true
})
export class AmInputRenderer extends AmInput { }
