import {Input, Button} from 'antd';
import {useState, forwardRef, useEffect, ForwardRefRenderFunction} from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

import './index.less';

type IProps = {
  min?: number;
  max?: number;
  onChange: (e: any) => void;
  number: any;
}

// eslint-disable-next-line
const Stepper: ForwardRefRenderFunction<HTMLDivElement, IProps> = ({min = 5, max = 20, onChange, number}, ref) => {
  const [count, setCount] = useState(number);

  const blurChange = (e: any): void => {
    let value = e.target.value;
    if (value < min || (value * 1) === min || value === '') {
      value = min;
    } else {
      value = value.replace(/\b(0+)/gi, '');
    }
    setCount(value);
  };

  const handleChange = (e: any): void => {
    let value = e.target.value;
    if (value > max) {
      value = max;
    }
    setCount(value);
  };

  const keyPress = (e: any): void => {
    const invalidChars = ['+', 'e', '.', 'E', '-'];
    if (invalidChars.indexOf(e.key) !== -1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    onChange(count);
  }, [count]);

  return (
    <div className='portalStepper'>
      <Button
        className='stepper-before'
        onClick={() => {
          setCount(count - 1);
        }}
        disabled={count <= min}
        icon={<LeftOutlined />}
      />
      <Input className='stepper-input' value={count} onChange={handleChange} onBlur={blurChange} type='number' onKeyPress={keyPress} />
      <Button
        className='stepper-after'
        onClick={() => {
          setCount(parseInt(count) + 1);
        }}
        disabled={count >= max}
        icon={<RightOutlined />}
      />
    </div>
  );
};

export default forwardRef(Stepper);
