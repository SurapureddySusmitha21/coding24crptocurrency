// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    usdValue,
    currencyLogo,
    currencyName,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="li-container">
      <div className="currencylogo-and-coin-type">
        <img src={currencyLogo} alt={currencyName} className="url" />
        <p className="list-coin-type-heading">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">{usdValue}</p>
        <p className="list-coin-value-heading">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
