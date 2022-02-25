import React, {FC} from 'react';

type IProps = {};

const Pages: FC<IProps> = () => {
  console.log('page');
  return (
    <div className='page-content'>
      <div>
        header
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Pages;