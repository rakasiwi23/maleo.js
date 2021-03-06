import React from 'react';
import withStyles from '@airy/maleo-css-plugin/lib/withStyles';

const style = require('./detail.css');

@withStyles(style)
export class RoomsDetail extends React.Component<any, any> {
  static displayName = 'RoomsDetail';

  static getInitialProps = async (appContext) => {
    console.log('rooms detail get initial props');
    const { store } = appContext;

    return { a: 5, store };
  };

  render() {
    console.log('detaili props', this.props.a);
    return (
      <div className="detail">
        <h1>Rooms Detail</h1>
      </div>
    );
  }
}

export default RoomsDetail;
