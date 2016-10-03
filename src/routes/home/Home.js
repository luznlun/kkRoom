/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

function Home({ news }) {
  var imgClass = s.imgStyle + " img-responsive";
  var wrapperClass = s.wrapper +" col-lg-12"
  return (
    <div className={wrapperClass}>
    	<a href="https://www.linkedin.com/in/jiashengcui">
        <img className={imgClass} src="profile.png" alt="Go to my Linkedin page">
        </img>
      </a>
      <div className={s.nameStyle}>
        <span className="name">Jiasheng(Chris) Cui</span>
        <span className="skills">Software Developer</span>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(s)(Home);
