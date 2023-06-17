// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isActiveClassName = isActive ? 'active-card-btn' : ''

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  return (
    <li className="option">
      <button
        className={`tab-btn ${isActiveClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
