import React from 'react';

import styles from './XTable3.css';

import { Cell, CellType, DataType, GridCell } from '../components/GridCell';
import { Input, Select, DatePicker, Row, Col, Table } from 'antd';

export default class XTable2 extends React.Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    cell: new Cell(),
    dog: {
      name: 'xiaohua',
    },
    dogFoods: [
      {
        name: '骨头',
        type: '固体',
        amount: 50,
        address: '湖北',
        tel: '1507133561',
        desc: '美味狗骨头',
        bak: '每天1根，不能过量',
      },
      {
        name: '鸡肉',
        type: '固体',
        amount: 510,
        address: '湖北',
        tel: '1507133561',
        desc: '美味鸡肉',
        bak: '每天1斤，美滋滋',
      },
      {
        name: '鸭头',
        type: '固体',
        amount: 510,
        address: '湖北',
        tel: '1507133561',
        desc: '美味鸭肉',
        bak: '每天0.5斤，美滋滋',
      },
    ],
    foodsAmout: 0,
  };

  componentWillMount() {
    this.state.cell.type = CellType.Group;
    this.state.cell.span = 24;
    this.state.cell.child = [];

    this.state.cell.child.push({
      text: '第一栏',
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '姓名',
          span: 4,
          dataType: DataType.Default,
          type: CellType.Text,
          className: styles.title,
        },
        {
          text: 'name',
          span: 4,
          type: CellType.Custom,
          render: () => {
            return (
              <Input
                style={{ borderRadius: '0px', border: 'none', boxShadow: 'none', padding: '0px' }}
              />
            );
          },
        },
        {
          text: '部门',
          span: 4,
          className: styles.title,
        },
        {
          text: 'department',
          type: CellType.Custom,
          span: 4,
          render: () => {
            return <Select defaultValue="aaaaaaaaaaa" />;
          },
        },
        {
          text: '制表时间',
          className: styles.title,
          span: 4,
        },
        {
          text: 'createTime',
          type: CellType.Custom,
          span: 4,
          render: () => {
            return <DatePicker />;
          },
        },
      ],
    });

    this.state.cell.child.push({
      text: '纵向单元格合并',
      type: CellType.Group,
      span: 24,
      style: {
        display: 'contents',
      },
      child: [
        {
          text: '详情列：',
          span: 2,
          type: CellType.Custom,
          style: {
            height: (() => {
              let h =
                (this.state.dogFoods.length + 1) * 33.5 - 0.5 * (this.state.dogFoods.length + 3);
              if (h < 60) {
                return 64 + 'px';
              } else {
                return h + 'px';
              }
            })(),
            textAlign: 'center',
            alignItems: 'center',
          },
          render: () => {
            return (
              <div style={{ height: 'inherit', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'center' }}>详情列：</div>
              </div>
            );
          },
        },
        {
          text: '自定义表格',
          span: 22,
          type: CellType.Group,
          dataType: DataType.List,
          style: {
            marginBottom: '-1px',
          },
          child: [
            {
              text: '第二栏表头',
              type: CellType.Group,
              span: 24,
              child: [
                {
                  text: '物料名称',
                  span: 2,
                  className: styles.title,
                },
                {
                  text: '类型',
                  span: 4,
                  className: styles.title,
                },
                {
                  text: '数量',
                  span: 4,
                  className: styles.title,
                },
                {
                  text: '产地',
                  span: 4,
                  className: styles.title,
                },
                {
                  text: '联系方式',
                  span: 2,
                  className: styles.title,
                },
                {
                  text: '描述',
                  span: 4,
                  className: styles.title,
                },
                {
                  text: '备注',
                  span: 4,
                  className: styles.title,
                },
              ],
            },
            {
              text: '第三栏：datalist',
              type: CellType.Custom,
              dataType: DataType.List,
              span: 24,
              render: () => {
                if (this.state.dogFoods === undefined || this.state.dogFoods.length === 0) {
                  return (
                    <div key={0} style={{ height: '31px', backgroundColor: '#fff' }}>
                      无数据
                    </div>
                  );
                } else {
                  return this.state.dogFoods.map((f: any, index) => {
                    return (
                      <Row key={index} gutter={[1, 1]}>
                        <Col span={2}>
                          <div>{f.name}</div>
                        </Col>
                        <Col span={4}>
                          <div>{f.type}</div>
                        </Col>
                        <Col span={4}>
                          <div>{f.amount}</div>
                        </Col>
                        <Col span={4}>
                          <div>{f.address}</div>
                        </Col>
                        <Col span={2}>
                          <div>{f.tel}</div>
                        </Col>
                        <Col span={4}>
                          <div>
                            <Input
                              style={{
                                borderRadius: '0px',
                                border: 'none',
                                boxShadow: 'none',
                                padding: '0px',
                              }}
                              defaultValue={f.desc}
                            ></Input>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div>{f.bak}</div>
                        </Col>
                      </Row>
                    );
                  });
                }
              },
            },
          ],
        },
      ],
    });

    this.state.cell.child.push({
      text: '合计栏',
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '合计',
          span: 6,
          className: styles.title,
        },
        {
          span: 4,
          render: () => {
            return <div>{this.state.foodsAmout}</div>;
          },
        },
        {
          span: 14,
        },
      ],
    });

    this.state.cell.child.push({
      text: '审批意见栏',
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: '直属领导意见：',
          className: styles.title,
          span: 8,
        },
        {
          text: '部门领导意见：',
          className: styles.title,
          span: 8,
        },
        {
          text: '总经理意见：',
          className: styles.title,
          span: 8,
        },
      ],
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <GridCell cell={this.state.cell} />
      </div>
    );
  }
}
