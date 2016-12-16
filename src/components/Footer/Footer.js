/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

function Footer() {
  var year = new Date().getFullYear();

  return (
    <div className={s.root}>
      <div className={s.infoContainer}>
          <div className="col-sm-4 col-xs-12">
            <h3>LOCATION</h3>
            <p>San Francisco, CA</p>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>SOCIAL MEDIA</h3>
            <ul className="list-inline">
              <li>
                <a href="https://www.facebook.com/chriscuikk" className="btn-social btn-outline"><i className={"fa fa-fw fa-facebook icon "+ s.icon}></i></a>
              </li>
              <li>
                <a href="https://plus.google.com/u/0/111359600807662559909/posts" className="btn-social btn-outline"><i className={"fa fa-fw fa-google-plus "+ s.icon}></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jiashengcui" className={"btn-social btn-outline "+ s.icon}>
                  <i className="fa fa-fw fa-linkedin icon"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-xs-12">
            <h3>MY PHILOSOPHY</h3>
            <p>Code Accelerates !!</p>
          </div>
      </div>
      <div className={s.container}>
        <span>Copy Right © Chris {year}</span>
      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
