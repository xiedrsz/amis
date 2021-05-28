import React from 'react';
import { Tabs } from 'antd-mobile';
import { Anchor } from 'antd';
import { PureComponent } from 'react';
import _ from 'lodash';

const { Link } = Anchor;

interface Tab {
  title: string;
  href: string;
}

export interface AnchorTabsProps {
  tabs: Tab[]
}

interface AnchorTabsStates {
  activeTab: number
}

export default class AnchorTabs extends PureComponent<AnchorTabsProps, AnchorTabsStates> {
  constructor(props: AnchorTabsProps) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  linkChange = (href: string) => {
    let activeTab = _.findIndex(this.props.tabs, {
      href
    })
    if (activeTab === -1) {
      activeTab = 0
    }
    this.setState({
      activeTab
    })
  }

  render() {
    return (
      <Anchor showInkInFixed={false} onChange={this.linkChange}>
        <Tabs tabs={this.props.tabs} renderTabBar={props =>
          <Tabs.DefaultTabBar {...props} page={3} activeTab={this.state.activeTab} renderTab={tab =>
            <Link href={tab.href} title={tab.title} />
          } />
        }>
        </Tabs>
      </Anchor>
    );
  }
}
