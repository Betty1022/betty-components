import React, {FC} from 'react';
import {Alert} from 'antd';
import RenderTable from '~/components/RenderTable';
import dataSource from './mockData.json';
import {RENDER_TYPE} from '~/common/js/constants';
import {toJS} from 'mobx';

type IProps = {}

const TablePage: FC<IProps> = () => {
  const RenderMessage = (): React.ReactNode => (
    <div>
      <div>{'<RenderTable data={data} />'}</div>
      <div>参数：</div>
      <div>data数据源：传入数据源</div>
    </div>
  );

  /**
   *
   * @param id 外层的id，table的id
   * @param renderType 外层的renderType
   * @param value 当前改变的值
   * @param record table的一行
   * @param columnId 当前改变的id
   */
  const handleChange = ({data, id, renderType, value, record, columnId}): void => {
    const tempDataSource = toJS(data, {recurseEverything: true}) || [];
    const formatData = tempDataSource?.map((item: any) => {
      if (renderType !== RENDER_TYPE.TABLE && item?.id === id) {
        item.value = JSON.stringify(value);
      }

      if (renderType === RENDER_TYPE.TABLE && item?.id === id) {
        // const data = transforFormJson(item?.value) || [];
        const data22 = item?.value || [];
        const format = data22?.map((i: { [x: string]: any; id: any; }) => {
          if (record?.id === i?.id) {
            i[columnId] = value;
          }
          return i;
        });

        // item.value = JSON.stringify(format);
        item.value = format;
      }
      return item;
    });

    // setData(formatData);
    // setDataSource(tempDataSource);
    // console.log(formatData, 'formatData');
  };

  return(
    <div className='container'>
      <div className='introduction'>
        <div className='title'>表格</div>
        <Alert type='info' message={RenderMessage()} />
      </div>
      <RenderTable
        data={dataSource}
        handleChange={handleChange}
      />
    </div>
  );
};

export default TablePage;