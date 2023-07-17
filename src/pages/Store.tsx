import { Col, Row } from "react-bootstrap";
import storeItem from "../data/item.json"
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return <><h1>Store</h1>
  <Row md={1} xs={1} lg={2} className="g-3">
    {storeItem.map(item => (
      <Col key={item.id}>
        <StoreItem {...item} />
      </Col>
    ))}
    <Col></Col>
  </Row>
  </>
}