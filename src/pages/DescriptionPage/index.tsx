import React, {FC} from 'react';
import {Alert} from 'antd';
import PortalDescription from '../../components/PortalDescription';

type IProps = {}

const DescriptionPage: FC<IProps> = () => {
  const RenderMessage = (): React.ReactNode => (
    <div>
      <div>{'<PortalDescription lineHeight="22px" text="测试文本超长展开收起" />'}</div>
      <div>参数：</div>
      <div>lineHeight行高：设置的行高</div>
      <div>text文本：传入的文本</div>
    </div>
  );

  const text = '测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起测试文本超长展开收起';

  return (
    <div className='container'>
      <div className='introduction'>
        <div className='title'>文本展开收起</div>
        <Alert type='info' message={RenderMessage()} />
      </div>
      <PortalDescription 
        text={text}
        lineHeight='22px'
      />
    </div>
  )
}

export default DescriptionPage;