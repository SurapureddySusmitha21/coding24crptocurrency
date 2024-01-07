// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props
    console.log(cryptocurrenciesData)
    return (
      <div className="ul-container">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>

          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrency-list-container">
        <h1 className="tracker-heading">Cryptocurrency Tracker</h1>
        <img
          src="
https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-url"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
