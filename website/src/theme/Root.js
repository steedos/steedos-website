import React from 'react';

// Default implementation, that you can customize
function Root(props) {
  const {children} = props;
  return <div className='steedos'>{children}</div>;
}

export default Root;