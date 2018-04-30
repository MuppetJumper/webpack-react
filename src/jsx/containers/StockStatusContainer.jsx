import React from 'react';
import {StockStatus} from '../components/StockStatus';

export class StockStatusContainer extends React.Component {
  constructor(props) {

    this.generateUpdateRequest = this.generateUpdateRequest.bind(this);

    this.state = {
      trackedStocks: [{
        tickerSymbol: '',
        price: 0
      }]};
  }
  generateUpdateRequest() {

    const tickerSymbolList =
      (this.state.trackedStocks.map(
        x => x.tickerSymbol.toLowerCase();
      )).join();

    const reqURL =
      StockStatusContainer.PROTOCOL + "://" +
      StockStatusContainer.HOST + "/" +
      StockStatusContainer.API_VERSION + "/" +
      StockStatusContainer.BATCH_SUBPATH + "?" +
      ( StockStatusContainer.QUERY_PARAMS.INFO_TYPES + "=" +
        StockStatusContainer.STOCK_INFO_TYPES.PRICE ) + "&" +
      ( StockStatusContainer.QUERY_PARAMS.STOCK_SYMBOLS + "=" +
        tickerSymbolList );

    const updRequest = new XMLHttpRequest();
    updRequest.open("GET", reqURL, true);
    updRequest.onload = () => {
      if (updRequest.status == 200) {
        this.updateStockPrices(
          JSON.parse(updRequest.responseText)
        );
      }
    };

    return (updRequest);
  }
  updateStockPrices(stockPrices) {
    const updatedStockPrices = [];
    for (var stock in stockPrices) {
      if (stockPrices.hasOwnProperty(stock)) {
        updatedStockPrices.push({
          tickerSymbol: stock,
          price: stockPrices[stock].price
        });
      }
    }

    this.setState({trackedStocks: updateStockPrices });
  }
  render() {
    return (
      this.state.trackedStocks.map(
        x => <StockStatus
                price={x.price}
                symbol={x.tickerSymbol} />
      )
    );
  }
  componentDidMount() {
    setInterval((() => {
      const updRequest = this.generateUpdateRequest();
      updRequest.send();
    }).bind(this), 2000);
  }
}

StockStatusContainer.PROTOCOL = "https";
StockStatusContainer.HOST = "api.iextrading.com";
StockStatusContainer.API_VERSION = "1.0";
StockStatusContainer.BATCH_SUBPATH = "stock/market/batch";
StockStatusContainer.QUERY_PARAMS = {
  STOCK_SYMBOLS: "symbols",
  INFO_TYPES: "types"
}
StockStatusContainer.STOCK_SYMBOLS = "";
StockStatusContainer.STOCK_INFO_TYPES = {
  PRICE: "price"
};
