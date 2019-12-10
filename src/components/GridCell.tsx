import styles from './GridCell.scss';
import React, { CSSProperties } from 'react';
import { Cell, CellType, DataType } from '@/types/GridCell';

export const GRow: React.FC = props => {
  return <div className={styles.row}>{props.children}</div>;
};

export class GCol extends React.Component<{
  key?: string | number;
  inherit?: boolean;
  span?: number;
  children?: React.ReactNode;
}> {
  constructor(props: {
    key?: string | number;
    inherit?: boolean;
    span?: number;
    children?: React.ReactNode;
  }) {
    super(props);
  }
  render() {
    return (
      <div
        className={getCol(this.props.span)}
        key={this.props.key}
        style={this.props.inherit ? { padding: '0px' } : {}}
      >
        <div
          className={styles.cell}
          style={this.props.inherit ? { backgroundColor: 'transparent' } : {}}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const getCol = (span: number | undefined) => {
  switch (span) {
    case 1:
      return styles.col1;
    case 2:
      return styles.col2;
    case 3:
      return styles.col3;
    case 4:
      return styles.col4;
    case 5:
      return styles.col5;
    case 6:
      return styles.col6;
    case 7:
      return styles.col7;
    case 8:
      return styles.col8;
    case 9:
      return styles.col9;
    case 10:
      return styles.col10;
    case 11:
      return styles.col11;
    case 12:
      return styles.col12;
    case 13:
      return styles.col13;
    case 14:
      return styles.col14;
    case 15:
      return styles.col15;
    case 16:
      return styles.col16;
    case 17:
      return styles.col17;
    case 18:
      return styles.col18;
    case 19:
      return styles.col19;
    case 20:
      return styles.col20;
    case 21:
      return styles.col21;
    case 22:
      return styles.col22;
    case 23:
      return styles.col23;
    case 24:
      return styles.col24;
    default:
      return styles.col;
  }
};

export default class GridCell extends React.Component<{
  cell: Cell;
  lineColor?: string;
  inner?: boolean;
}> {
  constructor(props: { cell: Cell; lineColor?: string; inner?: boolean }) {
    super(props);
  }

  private buildGrid = (): JSX.Element => {
    return this.buildCell(this.props.cell, 0);
  };

  buildCell = (cell: Cell, index: number): JSX.Element => {
    if (cell.type === CellType.Text || cell.type === undefined) {
      return (
        <div className={getCol(cell.span)} key={index}>
          <div
            className={styles.cell}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div className={cell.className} style={cell.style}>
              {cell.text}
            </div>
          </div>
        </div>
      );
    }

    if (cell.type === CellType.Custom) {
      return (
        <div
          className={getCol(cell.span)}
          style={cell.dataType === undefined ? {} : { padding: '0px' }}
          key={index}
        >
          <div
            className={styles.cell}
            style={
              cell.dataType === undefined
                ? { display: 'flex', justifyContent: 'center', alignItems: 'center' }
                : { backgroundColor: 'transparent' }
            }
          >
            <div className={cell.className} style={cell.style}>
              {cell.render === undefined ? '' : cell.render()}
            </div>
          </div>
        </div>
      );
    }

    if (cell.type === CellType.InnerCell) {
      return (
        <div className={getCol(cell.span)} style={{ padding: '0px' }} key={index}>
          <div className={styles.cell} style={{ backgroundColor: 'transparent' }}>
            <div className={cell.className} style={cell.style}>
              <GridCell cell={cell.iCell as Cell} inner={true} lineColor={this.props.lineColor} />
            </div>
          </div>
        </div>
      );
    }

    let childContent;
    if (cell.type === CellType.Group) {
      if (cell.child !== null && cell.child !== undefined) {
        childContent = this.buildGroup(cell);

        if (cell.dataType === DataType.Default || cell.dataType === undefined) {
          return (
            <div key={index} className={getCol(cell.span)} style={{ padding: '0px' }}>
              <div className={styles.cell} style={{ backgroundColor: 'transparent' }}>
                <div className={styles.row} style={cell.style}>
                  {childContent?.map(ct => {
                    return ct;
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className={getCol(cell.span)} style={{ padding: '0px' }} key={index}>
              <div className={styles.cell} style={{ backgroundColor: 'transparent' }}>
                {childContent?.map(ct => {
                  return (
                    <div className={styles.row} style={cell.style}>
                      ct
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      } else {
        //显示group名称
        return (
          <div className={getCol(cell.span)} key={index}>
            <div className={styles.cell}>
              <div className={cell.className} style={cell.style}>
                {cell.text}
              </div>
            </div>
          </div>
        );
      }
    }

    return <div>can't support cell</div>;
  };

  buildGroup = (cell: Cell): JSX.Element[] => {
    let content: JSX.Element[] = [];
    if (cell.child !== undefined) {
      cell.child.forEach((c, index) => {
        let curContent = this.buildCell(c, index);

        if (!(curContent instanceof String)) {
          content.push(curContent);
        }
      });
    }

    return content;
  };

  render() {
    let tableStyle;

    if (this.props.inner === undefined) {
      tableStyle = styles.defaultGrid;
    }
    if (this.props.inner === true) {
      tableStyle = styles.innerGrid;
    } else {
      tableStyle = styles.defaultGrid;
    }
    return (
      <div className={styles.gridCell} style={{ backgroundColor: this.props.lineColor }}>
        {this.buildGrid()}
      </div>
    );
  }
}
