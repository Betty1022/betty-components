/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, FC} from 'react';
import './index.less';

type IProps = {
  lineHeight: any;
  text: string;
};

const PortalDescription: FC<IProps> = ({lineHeight, text}) => {
  const textRef = useRef<any>();
  const aRef = useRef<any>();

  const handleClick = () => {
    const aRefTarget = aRef.current;
    const textRefTarget = textRef.current;

    if (textRefTarget.className.indexOf('text-ellipsis') >= 0) {
      textRefTarget.classList.remove('text-ellipsis');
      aRefTarget.innerHTML = '&nbsp&nbsp收起';
    } else {
      textRefTarget.classList.add('text-ellipsis');
      aRefTarget.innerHTML = '展开';
    }
  };

  useEffect(() => {
    const height = textRef.current.offsetHeight;
    const scrollWidth = textRef.current.scrollWidth;
    const offsetWidth = textRef.current.offsetWidth;
    const limitHeight = Number((lineHeight).slice(0, -2)) + 1;

    const aRefTarget = aRef.current;
    const textRefTarget = textRef.current;

    if (scrollWidth > offsetWidth) {
      aRefTarget.className = 'btn-text-show';
      textRefTarget.classList.add('text-ellipsis');
    } else if (height > limitHeight) {
      aRefTarget.className = 'btn-text-show';
      aRefTarget.innerHTML = '&nbsp&nbsp收起';
    } else {
      aRefTarget.className = 'btn-text-hidden';
      textRefTarget.classList.remove('text-ellipsis');
    }
  });

  return (
    <span>
      <span className='text-ellipsis' style={{lineHeight: `${lineHeight}`}} ref={textRef}>
        {text}
      </span>
      <a
        ref={aRef}
        className='btn-text-hidden'
        onClick={handleClick}
      >
        展开
      </a>
    </span>
  );
};

export default PortalDescription;
