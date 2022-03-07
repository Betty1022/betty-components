import React, {FC} from 'react';
import {Alert, Table} from 'antd';
import RenderTable from '~/components/RenderTable';
import dataSource from './mockData.json';
import DisplayTable from '~/components/DisplayTable';
import {RENDER_TYPE} from '~/common/js/constants';
import {toJS} from 'mobx';
import mockData22 from './mockData2.json';

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

  const sharedOnCell = (_, index) => {
    if (index === 4) {
      return { colSpan: 0 };
    }
  };
  const columns2 = [
    {
      title: '源类别',
      dataIndex: 'type',
      colSpan: 2,
      onCell: (_, index) => {
        if (index === 3) {
          return {rowSpan: 3};
        }
        if (index === 4 || index === 5) {
          return {rowSpan: 0};
        }
        if (index < 3 || index > 5) {
          return {colSpan: 2};
        } else {
          return {
            colSpan: 1
          };
        }
      }
    },
    {
      title: '子类别',
      dataIndex: 'subType',
      colSpan: 0,
      onCell: (_, index) => {
        if (index < 3 || index > 5) {
          return {colSpan: 0};
        } else {
          return {colSpan: 1};
        }

      }
    },
    {
      title: '排放量数值',
      dataIndex: 'emissionData',
      onCell: (_, index) => {
        if (index > 8) {
          return {colSpan: 2};
        }
      }

    },
    {
      title: '排放量单位',
      dataIndex: 'emissionUnit',
      onCell: (_, index) => {
        if (index > 8) {
          return {colSpan: 0};
        }
      }
    },
    {
      title: '温室气体排放量数值',
      dataIndex: 'grEmissionData',
    },
    {
      title: '温室气体排放量单位',
      dataIndex: 'grEmissionUnit',
    }
  ];

  const mockData2 = [
    {
      key: '1',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '2',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '3',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '4',
      type: 'CH4回收与销毁量',
      subType: 'CH4回收自用量',
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '5',
      type: 'CH4回收与销毁量',
      subType: 'CH4回收自用量',
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '6',
      type: 'CH4回收与销毁量',
      subType: 'CH4回收自用量',
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '7',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '8',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '9',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: 2000,
      emissionUnit: '吨',
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '10',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: '化石燃料燃烧CO2排放',
      emissionUnit: null,
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    },
    {
      key: '11',
      type: '化石燃料燃烧CO2排放',
      subType: null,
      emissionData: '化石燃料燃烧CO2排放',
      emissionUnit: null,
      grEmissionData: 2000,
      grEmissionUnit: '顿CO2e'
    }
  ];

  return(
    <div className='container'>
      <div className='introduction'>
        <div className='title'>表格</div>
        <Alert type='info' message={RenderMessage()} />
      </div>
      <DisplayTable data={mockData22} />
      <RenderTable
        data={dataSource}
        handleChange={handleChange}
      />
      <Table columns={columns2} dataSource={mockData2} bordered pagination={false}/>

    </div>
  );
};

export default TablePage;