import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";  

function Calculator() {
  const [result, setResult] = useState("");

  function appendNumber(num) {
    setResult(result + num);
  }

  function appendOperator(operator) {
    setResult(result + operator);
  }

  function clearResult() {
    setResult("");
  }

  function calculateResult() {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <Container className="calculator-container">
      <h1 className="calculator-title">Calculator</h1>
      <Form.Control
        type="text"
        value={result}
        disabled
        className="calculator-input"
      />
      <Row>
        <Col>
          <Button
            onClick={() => appendNumber("1")}
            className="calculator-button"
          >
            1
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendNumber("2")}
            className="calculator-button"
          >
            2
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendNumber("3")}
            className="calculator-button"
          >
            3
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendOperator("+")}
            className="calculator-button operator"
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => appendNumber("4")}
            className="calculator-button"
          >
            4
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendNumber("5")}
            className="calculator-button"
          >
            5
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendNumber("6")}
            className="calculator-button"
          >
            6
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendOperator("-")}
            className="calculator-button operator"
          >
            -
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => appendNumber("7")}
            className="calculator-button"
          >
            7
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendNumber("8")}
            className="calculator-button"
          >
            8
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendNumber("9")}
            className="calculator-button"
          >
            9
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendOperator("*")}
            className="calculator-button operator"
          >
            *
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => appendNumber("0")}
            className="calculator-button"
          >
            0
          </Button>
        </Col>
        <Col>
          <Button onClick={clearResult} className="calculator-button operator">
            C
          </Button>
        </Col>
        <Col>
          <Button
            onClick={calculateResult}
            className="calculator-button operator"
          >
            =
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => appendOperator("/")}
            className="calculator-button operator"
          >
            /
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;
