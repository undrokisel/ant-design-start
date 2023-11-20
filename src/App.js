import { Col, Row } from "antd";
import { Header } from "./components/Header";
import { TablePokemons } from "./components/TablePokemons";

function App() {
  return (
    <>
      <Header />
      <Row>
        <Col xs={{ span: 24, offset: 3 }} md={{ span: 12, offset: 6 }}>
          <TablePokemons />
        </Col>
      </Row>
    </>
  );
}

export default App;
