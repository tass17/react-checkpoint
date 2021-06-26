import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Form>     
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group>
  <Form.Label>Who Are You</Form.Label> 
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  </Form.Group>
  
  
  <Form.Group>
  <Form.Label>How old are you</Form.Label>
  <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
  </Form.Control>
  </Form.Group>
</Form>
      </header>
    </div>
  );
}

export default App;
