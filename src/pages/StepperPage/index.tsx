import React, {FC} from 'react';
import Stepper from '~/components/Stepper';
import {Alert} from 'antd';

type IProps = {}

const StepperPage: FC<IProps> = () => {
  const RenderMessage = (): React.ReactNode => (
    <div>
      <div>{'<Stepper min={5} max={20} number={12} onChange={onChange} />'}</div>
      <div>参数：</div>
      <div>min最小值：输入小于最小值的数，onBlur时自动变成最小值</div>
      <div>max最大值：输入大于最大值的数，onBlur时自动变成最大值</div>
      <div>number传入的数值：默认数值</div>
      <div>onChange方法：</div>
    </div>
  );
  return (
    <div className='container'>
      <div className='introduction'>
        <div className='title'>步进器</div>
        <Alert type='info' message={RenderMessage()} />
      </div>
      <Stepper
        number={12}
        min={8}
        max={20}
        onChange={(value): void => {
          console.log(value, 'value');
        }}
      />
    </div>
  );
};

export default StepperPage;