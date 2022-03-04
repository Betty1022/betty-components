import React, {FC, useState, useLayoutEffect} from 'react';
import {ALL_TEXT} from '~/common/js/constants';
import _ from 'lodash';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import './index.less';

type IProps = {
  dataSource: any;
  selectKeys: string[];
  setSelectKeys: (ids: string[]) => void;
}

const ExpandBtnGroup: FC<IProps> = ({dataSource, setSelectKeys, selectKeys}) => {
  const [showArrow, setShowArrow] = useState(false);
  const tempSelectKeys = _.cloneDeep(selectKeys);

  // useLayoutEffect(() => {
  //   const cateBtnWidth: any = document.querySelector('.category-item-group')?.getBoundingClientRect()?.width;
  //   const catesWidth: any = document.querySelector('.category-groups')?.getBoundingClientRect()?.width;
  //   if (catesWidth > cateBtnWidth) {
  //     setShowArrow(true);
  //   } else {
  //     setShowArrow(false);
  //   }
  // }, [dataSource]);
  useLayoutEffect(() => {
    const cateBtnWidth: any = document.querySelector('.category-item-group')?.getBoundingClientRect()?.width;
    const catesWidth: any = document.querySelector('.category-groups')?.getBoundingClientRect()?.width;
    if (catesWidth > cateBtnWidth) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  });

  const renderCategories = (data: any): React.ReactElement => data?.map((item: any) => (
    <span
      className={selectKeys.includes(item?.id) ? 'category-item highlight' : 'category-item'}
      {...{[['key'][0]]: item?.id}}
      onClick={(): void => {
        if (tempSelectKeys.includes(item?.id)) {
          _.pull(tempSelectKeys, item?.id);
        } else {
          tempSelectKeys.push(item?.id);
        }
        if (tempSelectKeys?.includes(ALL_TEXT)) {
          _.pull(tempSelectKeys, ALL_TEXT);
        }
        setSelectKeys(tempSelectKeys);
      }}
    >
      {item?.name}
    </span>
  ));

  const onClickLeft = (): void => {
    const cateBtn: any = document.querySelector('.category-item-group');
    cateBtn.scrollLeft -= 80;
  };

  const onClickRight = (): void => {
    const cateBtn: any = document.querySelector('.category-item-group');
    cateBtn.scrollLeft += 80;
  };

  return (
    <div className='expand-btn-group'>
      {showArrow && (
        <span className='direction-icon direction-icon-left' onClick={(): void => onClickLeft()}>
          <LeftOutlined />
        </span>
      )}
      <div className='category-item-group' style={{width: showArrow ? 'calc(100% - 50px)' : '100%'}}>
        <div className='category-groups'>
          {renderCategories(dataSource)}
        </div>
      </div>
      {showArrow && (
        <span className='direction-icon direction-icon-right' onClick={(): void => onClickRight()}>
          <RightOutlined />
        </span>
      )}
    </div>
  );
};

export default ExpandBtnGroup;
