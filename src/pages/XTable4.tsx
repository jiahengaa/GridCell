import React from 'react';

import styles from './XTable4.css';

import GridCell, { CellType, Cell, DataType, GCol, GRow } from '@/index';
import { Input, Select, DatePicker } from 'antd';

export default class XTable4 extends React.Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    cell: new Cell(),
    dog: {
      name: 'xiaohua',
    },
    list: [
      {
        city: '武汉',
        customers: [
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'CENTC',
            name: '三捷实业',
            contactor: '王先生',
            job: '市场经理',
            address: '英雄山路 84 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '130083',
            tel: '(027)15553392',
            fax: '(052)15557293',
          },
          {
            code: 'BLONP',
            name: '国皓',
            contactor: '黄雅玲',
            job: '销售代表',
            address: '广发北路 10 号',
            postcodes: '120083',
            tel: '(027)15353392',
            fax: '(052)15457293',
          },
        ],
      },
      {
        city: '上海',
        customers: [
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'CENTC',
            name: '三捷实业',
            contactor: '王先生',
            job: '市场经理',
            address: '英雄山路 84 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'CENTC',
            name: '三捷实业',
            contactor: '王先生',
            job: '市场经理',
            address: '英雄山路 84 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'CENTC',
            name: '三捷实业',
            contactor: '王先生',
            job: '市场经理',
            address: '英雄山路 84 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
        ],
      },
      {
        city: '四川',
        customers: [],
      },
      {
        city: '成都',
        customers: [],
      },
      {
        city: '北京',
        customers: [
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'CENTC',
            name: '三捷实业',
            contactor: '王先生',
            job: '市场经理',
            address: '英雄山路 84 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '130083',
            tel: '(027)15553392',
            fax: '(052)15557293',
          },
        ],
      },
      {
        city: '南京',
        customers: [
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '130083',
            tel: '(027)15553392',
            fax: '(052)15557293',
          },
        ],
      },
      {
        city: '哈尔滨',
        customers: [],
      },
      {
        city: '深圳',
        customers: [
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'CENTC',
            name: '三捷实业',
            contactor: '王先生',
            job: '市场经理',
            address: '英雄山路 84 号',
            postcodes: '564589',
            tel: '(027)555755',
            fax: '(052)555698',
          },
          {
            code: 'hungc',
            name: '五金机械',
            contactor: '舒先生',
            job: '销售代表',
            address: '德昌路甲 29 号',
            postcodes: '130083',
            tel: '(027)15553392',
            fax: '(052)15557293',
          },
        ],
      },
      {
        city: '黑龙江',
        customers: [],
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
          text: '城市',
          span: 3,
          className: styles.title,
        },
        {
          text: '客户信息',
          span: 21,
          type: CellType.Group,
          child: [
            {
              text: '客户编号',
              span: 3,
              className: styles.title,
            },
            {
              text: '客户名称',
              span: 3,
              className: styles.title,
            },
            {
              text: '联系人',
              span: 3,
              className: styles.title,
            },
            {
              text: '称谓',
              className: styles.title,
              span: 3,
            },
            {
              text: '地址',
              className: styles.title,
              span: 3,
            },
            {
              text: '邮编',
              className: styles.title,
              span: 3,
            },
            {
              text: '电话',
              className: styles.title,
              span: 3,
            },
            {
              text: '传真',
              className: styles.title,
              span: 3,
            },
          ],
        },
      ],
    });

    this.state.cell.child.push({
      text: 'ddd',
      type: CellType.Group,
      span: 24,
      child: [
        {
          text: 'city-row',
          type: CellType.Group,
          style: {
            marginBottom: '-1px',
          },
          span: 24,
          child: this.state.list.map((item, index) => {
            return {
              text: 'city-customer',
              type: CellType.Group,
              span: 24,
              child: [
                {
                  text: item.city,
                  span: 3,
                },
                {
                  text: 'customers',
                  span: 21,
                  type: CellType.Group,
                  child: [
                    {
                      text: '第三栏：datalist',
                      type: CellType.Custom,
                      dataType: DataType.List,
                      span: 24,

                      render: () => {
                        if (
                          item.customers === undefined ||
                          item.customers === null ||
                          item.customers.length === 0
                        ) {
                          return <GCol key={0}>无数据</GCol>;
                        } else {
                          return item.customers.map((ct, index) => {
                            return (
                              <GRow key={index}>
                                <GCol span={3}>
                                  <div>{ct?.code}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.name}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.contactor}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.job}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.address}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.postcodes}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.tel}</div>
                                </GCol>
                                <GCol span={3}>
                                  <div>{ct?.fax}</div>
                                </GCol>
                              </GRow>
                            );
                          });
                        }
                      },
                    },
                  ],
                },
              ],
            };
          }),
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
        <div style={{ fontSize: 'large', color: 'darkorange' }}>画表如此简单！</div>
        <GridCell cell={this.state.cell} lineColor="green" />
      </div>
    );
  }
}
