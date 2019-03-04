import React from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import TrackerTable from './TrackerTable';
import SelectDropdown from './SelectDropdown';
import initialPageLoadData from '../api/initialPageLoadData';

class CryptoTrackerApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rankAscending: true,
      priceAscending: true
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.sortByRank = this.sortByRank.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
  }

  componentDidMount() {
    initialPageLoadData();
  }

  add(e) {
    e.preventDefault();

    let currency = this.props.currencies.find(currency => currency.id == e.target.value);
    this.props.actions.add(currency);
  }

  remove(e) {
    e.preventDefault();

    if (this.props.content.length === 1) {
      return alert('Must be tracking minimum of 1 currency');
    }

    let currency = e.target.value;
    this.props.actions.remove(currency);
  }

  sortByRank(e) {
    e.preventDefault();
    this.props.actions.sortByRank(this.state.rankAscending);

    this.setState((prevState) => {
      return {
        rankAscending: !prevState.rankAscending
      }
    });
  }

  sortByPrice(e) {
    e.preventDefault();
    this.props.actions.sortByPrice(this.state.priceAscending);

    this.setState((prevState) => {
      return {
        priceAscending: !prevState.priceAscending
      }
    });
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
