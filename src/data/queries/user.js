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
    User.findOne().then(function(u) {
	  let res = {
        id: u.get("id"),
        email: u.get("email")
	  };
	  console.log(res);
      return res; // why this result is not returned
    });

	return {
      id: "error"
	}
  },
};

export default user;
