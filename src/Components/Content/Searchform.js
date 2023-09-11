import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SearchForm() {
  return (
    <Card className='p-3 card-form mb-5 mt-5'>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Select defaultValue="Year">
                    <option>Year</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue="Date Created">
                    <option>Date Created</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Select defaultValue="Select inTake">
                    <option>Select inTake</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Col>
            <Form.Group as={Col} controlId="formGridZip">
                <Form.Select defaultValue="Countries">
                    <option>Countries</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>
            </Col>

            <Col>
            <Button variant="outline-primary" type="submit">
                Apply Filters
            </Button>
            </Col>
            </Row>
            </Form>
    </Card>
  );
}

export default SearchForm;