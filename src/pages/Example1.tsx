import React from 'react';

import styles from './Example1.css';

import { Tabs, Button } from 'antd';

import Exp1, { ExpData } from '../components/Exp1';

const { TabPane } = Tabs;

export default class Example1 extends React.Component {
  constructor(props: any) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: '关联立项单1', content: new ExpData(), key: '1' },
      { title: '关联立项单2', content: new ExpData(), key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes: panes,
    };
  }

  state = {
    activeKey: '0',
    panes: [{ title: 'Tab 1', content: new ExpData(), key: '1' }],
  };

  newTabIndex: number;

  onChange = (activeKey: string) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey: string | React.MouseEvent<HTMLElement>, action: string) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: '关联立项单' + this.newTabIndex, content: new ExpData(), key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey: string) => {
    let { activeKey } = this.state;
    let lastIndex = 0;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd={false}
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              <div style={{ margin: '10px' }}>
                <Exp1 expData={pane.content}></Exp1>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
