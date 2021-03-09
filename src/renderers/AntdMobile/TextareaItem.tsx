import React from 'react';
import { autobind } from '../../utils/helper';
import { TextareaItem } from 'antd-mobile';
import { BaseSchema } from '../../Schema';
import { Renderer, RendererProps } from '../../factory';
import { IServiceStore } from '../../store/service';

// TextareaItem 的属性
interface TextareaItemProps {
  placeholder?: string;
  codeName?: string;
  rows?: number;
  count?: number;
}

/**
 * Text 文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/text
 */
export interface AmTextareaSchema extends BaseSchema, TextareaItemProps {
  type: 'am-textarea';
}

export interface TextProps extends RendererProps, TextareaItemProps {
  store: IServiceStore;
}

export interface TextState {
  inputValue?: string;
}

export default class AmTextarea extends React.Component<
  TextProps,
  TextState
  > {
  constructor(props: TextProps) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  static defaultProps: Partial<TextProps> = {
    placeholder: ''
  };

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
      placeholder,
      disabled,
      name,
      rows,
      count
    } = this.props;

    return (
      <TextareaItem
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={this.handleNormalInputChange}
        value={this.state.inputValue}
        rows={rows}
        count={count}
      />
    );
  }
}

@Renderer({
  test: /(^|\/)am-textarea$/,
  name: 'am-textarea'
})
export class AmTextareaRenderer extends AmTextarea { }
