import React from "react";
import "./App.css";
import { Carousel, Button, Form, Col, Row } from "react-bootstrap";
import styled from "styled-components";

function App() {
  let Img = styled.img`
    padding: 10px;
    height: 20rem;
  `;

  let PaddingDiv = styled.div`
    padding: 20px;
  `;

  // let [Number, ChangeNum] = useState('');

  return (
    <div className="App">
      <Carousel variant="dark">
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/01/1c/df/011cdf2a20ced518d3fb2b448e8024f8.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/01/1c/df/011cdf2a20ced518d3fb2b448e8024f8.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/01/1c/df/011cdf2a20ced518d3fb2b448e8024f8.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h4>QR 생성을 위해서 정보를 입력해주세요!</h4>
      <Form className="form-box">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label column sm="3">
            이름
          </Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
            }}
            type="text"
            id="inputName"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="forNumber">
          <Form.Label column sm="3">
            전화번호
          </Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
            }}
            type="text"
            id="inputPhoneNum"
            placeholder="Phone Number"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          QR 코드 생성하기
        </Button>
      </Form>
    </div>
  );
}

export default App;
