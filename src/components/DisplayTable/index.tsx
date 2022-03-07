import React, {FC} from 'react';
import {Table} from 'antd';

type IProps = {
  data: any;
}

const DisplayTable: FC<IProps> = ({data}) => {
  const RenderCell = (index, cellSpans) => {
    if (!cellSpans) {
      return {colSpan: 1};
    } else {
      const obj: any = {};
      cellSpans?.forEach((s) => {
        if (index === s?.index) {
          obj.colSpan = s?.colSpan !== undefined ? s?.colSpan : 1;
          obj.rowSpan = s?.rowSpan !== undefined ? s?.rowSpan : 1;
        }
      });
      return obj;
    }
  };

  const RenderColumns = (data) => {
    const tempData = data?.props?.items?.map((item) => {
      if (!item?.children) {
        return ({
          title: item?.title,
          dataIndex: item?.id,
          colSpan: item?.colSpan !== undefined ? item?.colSpan : 1,
          onCell: (_, index) => RenderCell(index, item?.cellSpans)
          // render: (text: string, record: any, index: number): any => renderItem({data, item, text, record, index})
        });
      }
      return ({
        title: item?.title,
        children: item?.children?.map((child) => ({
          title: child?.title,
          dataIndex: child?.id,
          colSpan: item?.colSpan !== undefined ? item?.colSpan : 1,
          onCell: (_, index) => RenderCell(index, item?.cellSpans)
          // render: (text: string, record: any, index: number): any => renderItem({data, item: child, text, record, index})
        }))
      });
    });
    return tempData;
  };

  return(
    <div>
      <Table columns={RenderColumns(data)} dataSource={data?.value} bordered />
    </div>
  );
};

export default DisplayTable;