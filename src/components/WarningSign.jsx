import { Alert } from 'react-bootstrap'

const WarningSign = (props) => (
    <Alert variant="danger">{props.text}</Alert>
)

export default WarningSign