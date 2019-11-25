import React from 'react';
import styles from './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Menu, Icon, Col, Row } from 'antd';

import XTable from '../pages/XTable';
import XTable2 from '../pages/XTable2';
import XTable3 from '../pages/XTable3';

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys: string[]) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Router>
        <div style={{ height: '100vh' }}>
          <Col span={5}>
            <Menu
              style={{ height: '100vh' }}
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="table" />
                    <span>GridCell</span>
                  </span>
                }
                style={{ textAlign: 'justify' }}
              >
                <Menu.Item key="1">
                  <Link to="/XTable">子表嵌套之InnerCell</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/XTable2">非子表嵌套之Customer define</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/XTable2">子表嵌套与单元格合并</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>

          <Col span={19}>
            <Switch>
              <Route path="/XTable">
                <XTable />
              </Route>
              <Route path="/XTable2">
                <XTable2 />
              </Route>
              <Route path="/XTable3">
                <XTable3 />
              </Route>
            </Switch>
          </Col>
        </div>
      </Router>
    );
  }
}
