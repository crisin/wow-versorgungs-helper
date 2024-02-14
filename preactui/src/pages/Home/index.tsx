import { Card, Space, Typography } from "antd";
import { useEffect, useState } from "preact/hooks";
import { usePocket } from "../../contexts/PocketContext";
import { Shipment } from "../../interfaces/Shipment.interface";

const { Title } = Typography;

export function Home() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const { pb } = usePocket();

  useEffect(() => {
    pb.collection("shipments")
      .getFullList<Shipment>()
      .then((loadedShipments) => {
        if (loadedShipments.length > 0) {
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
