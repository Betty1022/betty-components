import React, {FC, useState} from 'react';
import {Alert, InputNumber} from 'antd';
import ExpandBtnGroup from '../../components/ExpandBtnGroup';
import dataSource from './dataSource.json';

import './index.less';

type IProps = {}

const ExpandBtnGroupPage: FC<IProps> = () => {
  const [selectKeys, setSelectKeys] = useState([dataSource?.[0]?.id]);
  // const [selectKeyIsAll, setSelectKeyIsAll] = useState(true);
  const [cateWidth, setCateWidth] = useState(690);

  const RenderMessage = (): React.ReactNode => (
    <div>
      <div>{'<ExpandBtnGroup dataSource={dataSource} selectKeys=[] setSelectKeys={setSelectKeys} />'}</div>
      <div>参数：</div>
      <div>dataSource数据源：渲染btn group</div>
      <div>selectKeys：选中的key</div>
      <div>setSelectKeys: 设置选中的key</div>
    </div>
  );

  const inputChange = (value: number): void => {
    setCateWidth(value);
  };

  return(
    <div className='container expand-btn-page'>
      <div className='introduction'>
        <div className='title'>行业超长优化</div>
        <Alert type='info' message={RenderMessage()} />
      </div>
      <div className='set-width-input'>
        <span style={{marginRight: '10px'}}>设置宽度</span>
        <InputNumber value={cateWidth} onChange={inputChange} min={100} max={1800} formatter={value => `${value}px`} />
      </div>
      <div className='btn-group-container' style={{width: `${cateWidth}px`}}>
        {/* <div
          className={selectKeyIsAll ? 'all-btn highlight' : 'all-btn btn-unselected'}
          onClick={(): void => {
            if (!selectKeyIsAll) {
              setSelectKeyIsAll(true);
            }
          }}
        >
        全部
        </div> */}
        <span className='group-btn-cate'>
          <ExpandBtnGroup
            dataSource={dataSource}
            selectKeys={selectKeys}
            setSelectKeys={setSelectKeys}
          />
        </span>
      </div>
    </div>
  );
};

export default ExpandBtnGroupPage;