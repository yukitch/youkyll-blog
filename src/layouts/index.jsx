import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="寝過ごした日々に - youkyll" />
        {children()}
      </div>
    );
  }
}

export default Layout;
