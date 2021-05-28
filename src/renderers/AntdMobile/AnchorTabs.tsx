/**
 * 惠泽demo
 * @todo 待整出
 */
import React from 'react';
import { Renderer, RendererProps } from '../../factory';
import { BaseSchema } from '../../Schema';
import AnchorTabs, { AnchorTabsProps } from '../../components/huize/AnchorTabs'

/**
 * AnchorTabs 锚点标签页
 * 文档：https://ant.design/components/anchor-cn/
 */
export interface HzAnchorTabsSchema extends BaseSchema, AnchorTabsProps {
  /**
   * 指定为 惠泽 AnchorTabs 类型
   */
  type: 'hz-anchor-tabs';
}

export interface HzAnchorTabsProps extends AnchorTabsProps, RendererProps { }

export default class HzAnchorTabs extends React.Component<HzAnchorTabsProps, object> {
  static defaultProps: Partial<AnchorTabsProps> = {
    tabs: [{
      title: '标签A',
      href: '#A'
    }, {
      title: '标签B',
      href: '#B'
    }]
  };

  render() {
    let { tabs } = this.props
    return (
      <AnchorTabs tabs={tabs} />
    );
  }
}

@Renderer({
  test: /(^|\/)hz-anchor-tabs$/,
  name: 'hz-anchor-tabs'
})

export class HzAnchorTabsRenderer extends HzAnchorTabs { }
