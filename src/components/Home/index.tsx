import React, {FC} from 'react';

type IProps = {};

const Home: FC<IProps> = () => {
  console.log('props');
  return (
    <div>
      home page
    </div>
  );
};

export default Home;