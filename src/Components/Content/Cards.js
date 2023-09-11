import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function OfferCards() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center'>
                <Card style={{ width: '14rem' }} className='m-3'>
                    <Card.Body className="card-primary text-center">
                        <h1 className='mt-3'>18</h1>
                        <Card.Text className='mb-4'>
                        Conditional
                        </Card.Text>
                        <div className='btn-adjstment mt-4'>
                            <Button variant="light"><strong>Offer Letter</strong></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }} className='m-3'>
                    <Card.Body className="card-success text-center">
                        <h1 className='mt-3'>22</h1>
                        <Card.Text className='mb-4'>
                        Un-Conditional
                        </Card.Text>
                        <div className='btn-adjstment mt-4'>
                            <Button variant="light"><strong>Offer Letter</strong></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }} className='m-3'>
                    <Card.Body className="card-warning text-center">
                         <h1 className='mt-3'>30</h1>
                        <Card.Text className='mb-4'>
                        Payment Received
                        </Card.Text>
                        <div className='btn-adjstment mt-4'>
                            <Button variant="light"><strong>All Country</strong></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }} className='m-3'>
                    <Card.Body className="card-danger text-center">
                        <h1 className='mt-3'>8</h1>
                        <Card.Text className='mb-4'>
                        Payment Received
                        </Card.Text>
                        <div className='btn-adjstment mt-4'>
                            <Button variant="light"><strong>Offer Letter</strong></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }} className='m-3'>
                    <Card.Body className="card-info text-center">
                        <h1 className='mt-3'>8</h1>
                        <Card.Text className='mb-4'>
                        Visa Received
                        </Card.Text>
                        <div className='btn-adjstment mt-4'>
                            <Button variant="light"><strong>Offer Letter</strong></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default OfferCards;