import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import TrackerTable from './TrackerTable';
import SelectDropdown from './SelectDropdown';
import initialPageLoadData from '../api/initialPageLoadData';
import { getDataOnOneCrypto } from '../api/getTableContentData';

class CryptoTrackerApp extends React.Component {
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.sortByRank = this.sortByRank.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
  }

  componentDidMount() {
    initialPageLoadData();
  }

  async add(e) {
    e.preventDefault();
    let currency = await getDataOnOneCrypto(e.target.value);
    this.props.actions.add(currency);
  }

  remove(e) {
    e.preventDefault();
    let currency = e.target.value;
    this.props.actions.remove(currency);
  }

  sortByRank(e) {
    e.preventDefault();
    this.props.actions.sortByRank();
  }

  sortByPrice(e) {
    e.preventDefault();
    this.props.actions.sortByPrice();
  }

  render() {
    return(
      <div>
        <TrackerTable content={this.props.content} remove={this.remove} sortByRank={this.sortByRank} sortByPrice={this.sortByPrice} />
        <SelectDropdown currencies={this.props.currencies} tableContent={this.props.content} add={this.add} />
        <p>click on category to sort</p>
        <p>click on currency to untrack</p>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    content: store.tableState.content,
    currencies: store.listState.currencies
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTrackerApp);
