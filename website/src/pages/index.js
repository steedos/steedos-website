/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {Redirect} from '@docusaurus/router';


function Home() {

  var userLang = navigator.language || navigator.userLanguage; 
  if (userLang == 'zh-CN')
    return <Redirect to="/cn/" />;
  else
    return <Redirect to="/us/" />;

}

export default Home;