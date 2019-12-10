import React from 'react';

import GridCell, { CellType, Cell, DataType } from '@/index';
import { Input, Select, DatePicker, Radio } from 'antd';
const { Option } = Select;
export class ExpData {
  id: string = '';
  bType: string = '代理+服务';
  bState: string = '正常';
  relateBill: string = '';
  saler: string = '姚振宁';
  customerType: string = '直属客户';
  customerName: string = '';
  boardName: string = '';
  getMoneyCompanyName: string = '';
  mediaName: string = '百度ka';
  mediaProduct: string = '';
  mediaCustomerOneLevel: string = '';
  mediaCustomerTwoLevel: string = '';
}

export default class Exp1 extends React.Component<{
  expData: ExpData;
}> {
  constructor(props: { expData: ExpData }) {
    super(props);
  }

  state = {
    cell: new Cell(),
  };

  onRadioChange = (e: any) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });

    this.props.expData.bState = '';
  };

  selectChange = (e: any) => {
    console.log(e);
    this.props.expData.bType = e;
  };

  componentWillMount() {
    this.state.cell.type = CellType.Group;
    this.state.cell.span = 24;
    this.state.cell.child = [];
    this.state.cell.child.push({
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '业务类型',
          type: CellType.Custom,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
          render: () => {
            return (
              <div>
                <span style={{ color: 'red' }}>*</span>业务类型
              </div>
            );
          },
        },
        {
          text: 'department',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return (
              <Select defaultValue={this.props.expData.bType} onChange={this.selectChange}>
                <Option value="代理">代理</Option>
                <Option value="服务">服务</Option>
                <Option value="代理+服务">代理+服务</Option>
              </Select>
            );
          },
        },
        {
          text: '关联立项单',
          type: CellType.Custom,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
          render: () => {
            return (
              <div style={{ height: '100%' }}>
                <span style={{ color: 'red' }}>*</span>关联立项单
              </div>
            );
          },
        },
        {
          text: 'department',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return <Select defaultValue={this.props.expData.relateBill} />;
          },
        },
      ],
    });
    this.state.cell.child.push({
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '立项单状态',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: this.props.expData.bState,
          type: CellType.Text,
          span: 9,
        },
        {
          text: '销售',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: '销售名称',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return <div>{this.props.expData.saler}</div>;
          },
        },
      ],
    });

    this.state.cell.child.push({
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '客户属性',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: '客户属性',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return (
              <div>
                {' '}
                <Radio.Group onChange={this.onRadioChange} value={this.state.value}>
                  <Radio value={1}>直属客户</Radio>
                  <Radio value={2}>代理商</Radio>
                </Radio.Group>
              </div>
            );
          },
        },
        {
          text: '客户名称',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: '客户名称',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return <div>{this.props.expData.customerName}</div>;
          },
        },
      ],
    });

    this.state.cell.child.push({
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '媒体简称',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: this.props.expData.mediaName,
          type: CellType.Text,
          span: 9,
        },
        {
          text: '媒体采购产品',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: '',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return <div>{this.props.expData.mediaProduct}</div>;
          },
        },
      ],
    });

    this.state.cell.child.push({
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '媒体客户一级行业',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: this.props.expData.mediaCustomerOneLevel,
          type: CellType.Text,
          span: 9,
        },
        {
          text: '媒体客户二级行业',
          type: CellType.Text,
          span: 3,
          style: { height: '100%', width: '100%', backgroundColor: 'lightgreen' },
        },
        {
          text: '',
          type: CellType.Custom,
          span: 9,
          render: () => {
            return <div>{this.props.expData.mediaCustomerTwoLevel}</div>;
          },
        },
      ],
    });
  }

  render() {
    return <GridCell cell={this.state.cell} lineColor="lightgray" />;
  }
}
