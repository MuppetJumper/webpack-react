import React from 'react';
import PropTypes from 'prop-types';

export class StockStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  trend: StockStatus.TRENDS.NEUTRUAL };
  }
  componentWillRecieveProps(nextProps) {
    const newTrend = StockStatus.TRENDS.NEUTRUAL;
    if (this.props.price < nextProps.price) {
      newTrend = StockStatus.TRENDS.POSITIVE;
    } else if (this.props.price > nextProps.price) {
      newTrend = StockStatus.TRENDS.NEGATIVE;
    }

    this.setState({ trend:  newTrend  });
  }
  render() {
    return (<div style={
              StockStatus.TREND_STYLES[this.state.trend.toUpperCase()]
            }>
              <h1>{this.props.symbol}</h1>
              <h1>{this.props.price}</h1>
            </div>);
  }
}

StockStatus.defaultProps = {
  symbol: 'APPL',
  price: 0
};

StockStatus.propTypes = {
  symbol: PropTypes.string.isRequired,
  price:  PropTypes.number.isRequired
};

StockStatus.TRENDS = {
  NEUTRUAL: 'neutrual',
  POSITIVE: 'positive',
  NEGATIVE: 'negative'
};

StockStatus.TREND_STYLES = {
  NEUTRUAL: {{color: 'lightgrey'}},
  POSITIVE: {{color: 'green'}},
  NEGATIVE: {{color: 'red'}}
};
