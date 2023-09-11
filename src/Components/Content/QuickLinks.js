import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import UserQuick from '../../img/user-manager.png'

function Quicklinks() {
  return (
    <>
        <Card border="default" style={{ width: 'auto' }}>
        <Card.Header>
            <img src={UserQuick} alt="" /> <strong className="me-auto"><small>Santosh Sharma</small></strong>
        <p><small>+91 9876543210 | Hyderabad</small></p>
        </Card.Header>
        <Card.Body>
          <small><a mailto="sshatmal123@kcoverseas.com">sshatmal123@kcoverseas.com</a></small>
        </Card.Body>
      </Card>
    </>
  );
}

export default Quicklinks;