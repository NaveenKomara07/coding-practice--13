import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appName, imageUrl} = AppDetails

  return (
    <li className="app-container">
      <img alt={appName} className="image-design" src={imageUrl} />
      <p className="para-design">{appName}</p>
    </li>
  )
}

export default AppItem
