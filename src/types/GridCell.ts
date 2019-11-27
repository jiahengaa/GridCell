import { CSSProperties } from 'react';

export enum CellType {
  /**
   * 文本cell，不能作为容器
   */
  Text,
  /**
   * 容器cell，渲染其child
   */
  Group,
  /**
   * 自定义cell，渲染render
   */
  Custom,
  /**
   * 内部cell，渲染内部表格
   */
  InnerCell,
}

export enum DataType {
  Default,
  List,
}

export class Cell {
  text?: string = '';
  dataType?: DataType = DataType.Default;
  type?: CellType = CellType.Text;
  span?: number = 1;
  render?: Function;
  child?: Cell[] = [];
  className?: string = '';
  style?: CSSProperties;
  iCell?: Cell;
}
