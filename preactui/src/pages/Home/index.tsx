import { Card, Space, Typography } from "antd";
import { useEffect, useState } from "preact/hooks";
import { usePocket } from "../../contexts/PocketContext";
import { Shipment } from "../../interfaces/Shipment";
import "./style.css";

const { Title } = Typography;

export function Home() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const { pb } = usePocket();

  useEffect(() => {
    pb.collection("shipments")
      .getFullList()
      .then((shipmentRes) => {
        if (shipmentRes.length > 0) {
          const loadedShipments = shipmentRes as any;
          setShipments(loadedShipments);
        }
      });
  }, []);

  return (
    <div class="home">
      <Title>Vorratsverwaltung</Title>

      <section>
        <Space direction="vertical" size={16}>
          {shipments.map((shipment) => (
            <Card
              title={shipment.item}
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Anzahl: {shipment.quantity}</p>
            </Card>
          ))}
        </Space>
      </section>
    </div>
  );
}
