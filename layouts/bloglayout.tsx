import React from "react";
import { NextPage, 
} from "next";
import PropTypes from "prop-types";

import BlogLayout from '../pages/bloglayout';

const bloglayout: NextPage<{ children: React.ReactNode }> = ({ children }) => (
  <BlogLayout>
    <div>{children}</div>
  </BlogLayout>
    
);

bloglayout.propTypes = {
  children: PropTypes.node,
};

export default bloglayout;
