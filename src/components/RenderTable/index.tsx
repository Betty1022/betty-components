import React, {FC} from 'react';
import {Table, Form, InputNumber, Select, Radio, Tooltip} from 'antd';
import './index.less';
import {RENDER_TYPE, RENDER_TABEL_ACTION} from '~/common/js/constants';
// import {toJS} from 'mobx';

const {Option} = Select;

type IProps = {
  title?: string;
  data?: any;
  handleChange?: (obj: any ) => void;
}

const RenderTable: FC<IProps> = ({title, data, handleChange}) => {
  const initData: any = data;
  // const tempDataSource = toJS(initData, {recurseEverything: true}) || [];

  /**
   *
   * @param id 外层的id，table的id
   * @param renderType 外层的renderType
   * @param value 当前改变的值
   * @param record table的一行
   * @param columnId 当前改变的id
   */
  // const handleChange = ({data, id, renderType, value, record, columnId}): void => {
  //   const formatData = tempDataSource?.map((item: any) => {
  //     if (renderType !== RENDER_TYPE.TABLE && item?.id === id) {
  //       item.value = JSON.stringify(value);
  //     }

  //     if (renderType === RENDER_TYPE.TABLE && item?.id === id) {
  //       // const data = transforFormJson(item?.value) || [];
  //       const data22 = item?.value || [];
  //       const format = data22?.map((i: { [x: string]: any; id: any; }) => {
  //         if (record?.id === i?.id) {
  //           i[columnId] = value;
  //         }
  //         return i;
  //       });

  //       // item.value = JSON.stringify(format);
  //       item.value = format;
  //     }
  //     return item;
  //   });

  //   // setData(formatData);
  //   // setDataSource(tempDataSource);
  //   console.log(formatData, 'formatData');
  // };

  const clickIcon = (key: string): void => {
    if (key === RENDER_TABEL_ACTION.DELETE) {
      console.log('delete');
    }
    if (key === RENDER_TABEL_ACTION.EDIT) {
      console.log('edit');
    }
  };

  const renderItem = ({data, item, index, text, record}): React.ReactNode => (
    <Form>
      {item?.renderType === RENDER_TYPE.TEXT && (
        <Form.Item
          name={`${item?.id}-${index}`}
        >
          {text}
        </Form.Item>
      )}
      {item?.renderType === RENDER_TYPE.INPUTNUMBER && (
        <Form.Item>
          <Form.Item
            name={`${item?.id}-${index}`}
            initialValue={text}
            noStyle
            rules={[{
              required: item?.required,
              message: '此字段为必填项'
            }, {
              validator: (rule, value, callback): any => {
                if (value && value > item?.maximum) {
                  callback(`请输入小于等于${item?.maximum} 的值`);
                } else {
                  callback();
                }
              }
            }
            ]}
          >
            <InputNumber
              className='table-column-input-number'
              min={item?.minimum || 0}
              // max={item?.maximum || null}
              precision={item?.significantDigits || 0}
              onChange={(value): void => handleChange({data, id: data?.id, renderType: data?.renderType, value, record, columnId: item?.id})}
            />
          </Form.Item>
          {item?.props?.unit && (
            <span className='unit'>{item?.props?.unit}</span>
          )}
        </Form.Item>
      )}
      {item?.renderType === RENDER_TYPE.SELECT && (
        <Form.Item
          name={`${item?.id}-${index}`}
          rules={[{
            required: item?.required,
            message: '此字段为必填项'
          }]}
          // initialValue={transforFormJson(text)}
          initialValue={text}
        >
          <Select
            allowClear
            onChange={(value): void => handleChange({data, id: data?.id, renderType: data?.renderType, value, record, columnId: item?.id})}
          >
            {item?.options?.map((i) => (
              <Option value={i?.value} key={i?.value}>{i?.label}</Option>
            ))}
          </Select>
        </Form.Item>
      )}
      {item?.renderType === RENDER_TYPE.RADIO && (
        <Form.Item
          name={`${item?.id}-${index}`}
          rules={[{
            required: item?.required,
            message: '此字段为必填项'
          }]}
          // initialValue={transforFormJson(text)}
          initialValue={text}
        >
          <Radio.Group options={item.options} onChange={(value): void => handleChange({data, id: data?.id, renderType: data?.renderType, value, record, columnId: item?.id})} />
        </Form.Item>
      )}
      {item?.renderType === RENDER_TYPE.ACTION && (
        <>
          {item?.actions?.map((action) => (
            <Tooltip title={action?.label}>
              <i className={`dpl20_${action?.icon?.toLowerCase()}`} onClick={(): void => clickIcon(action?.key)} />
            </Tooltip>
          ))}
        </>
      )}
    </Form>
  );
  const renderColumns = (data: any): any[] => {
    const tempData = data?.props?.items?.map((item) => {
      if (!item?.children) {
        return ({
          title: item?.title,
          dataIndex: item?.id,
          render: (text: string, record: any, index: number): any => renderItem({data, item, text, record, index})
        });
      }
      return ({
        title: item?.title,
        children: item?.children?.map((child) => ({
          title: child?.title,
          dataIndex: child?.id,
          render: (text: string, record: any, index: number): any => renderItem({data, item: child, text, record, index})
        }))
      });
    });

    return tempData;
  };

  return (
    <div>
      <div>{title}</div>
      {initData?.map((data) => (
        <Table
          className='render-table'
          dataSource={data?.value}
          columns={renderColumns(data)}
          pagination={false}
        />
      ))}
    </div>
  );
};

export default RenderTable;
