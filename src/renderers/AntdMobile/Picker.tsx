import React from 'react';
import { autobind } from '../../utils/helper';
import { Picker, List } from 'antd-mobile';
import { BaseSchema } from '../../Schema';
import { Renderer, RendererProps } from '../../factory';
import { IServiceStore } from '../../store/service';

// Picker 的属性
interface PickerProps {
  codeName?: string;
  extra?: string;
  cols?: number;
  title?: string;
  label?: string
}

/**
 * Text 文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/text
 */
export interface AmPickerSchema extends BaseSchema, PickerProps {
  type: 'am-picker';
}

export interface TextProps extends RendererProps, PickerProps {
  store: IServiceStore;
}

export interface TextState {
  inputValue?: Array<any>;
}

export default class AmPicker extends React.Component<
  TextProps,
  TextState
  > {
  constructor(props: TextProps) {
    super(props);
    this.state = {
      inputValue: []
    };
  }

  static defaultProps: Partial<TextProps> = {
    placeholder: ''
  };

  // change 事件触发的回调函数
  @autobind
  handleNormalInputChange(value: Array<any>) {
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
      disabled,
      extra,
      cols = 1,
      title,
      label
    } = this.props;
    // Todo 可配置未实现
    const Platform = [{
      value: 1,
      label: '支付宝',
    }]


    return (
      <Picker
        extra={extra}
        data={Platform}
        cols={cols}
        title={title}
        disabled={disabled}
        value={this.state.inputValue}
        onChange={this.handleNormalInputChange}
      >
        <List.Item arrow="horizontal">{label}</List.Item>
      </Picker>
    );
  }
}

@Renderer({
  test: /(^|\/)am-picker$/,
  name: 'am-picker'
})
export class AmPickerRenderer extends AmPicker { }
