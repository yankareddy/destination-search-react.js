// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="card">
      <img src={imgUrl} alt={name} className="image" />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default DestinationItem
