/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import UserType from '../types/UserType';
import User from '../models/User';

const user = {
  type: UserType,
  resolve() {
    return User.findOne().then(function(u) {
	  const res = {
        id: u.get("id"),
        email: u.get("email")
	  };
      return res;
    });
  },
};

export default user;
