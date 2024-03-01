import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  List,
  Row,
  Select,
  Space,
  Spin,
  Typography,
} from "antd";
import { useEffect, useState } from "preact/hooks";
import { usePocket } from "../../contexts/PocketContext";
import {
  charactersStatus,
  loadCharacters,
  loadedCharacters,
} from "../../services/CharacterService";
import useFormInstance from "antd/es/form/hooks/useFormInstance";

const { Title } = Typography;

type Character = {
  name: string;
  class: string; // todo ClassEnum
  profession1?: string; // todo: professionEnum
  profession2?: string;
  profession1progress?: number;
  profession2progress?: number;
};

export function Characters() {
  const { pb } = usePocket();

  const [open, setOpen] = useState(false);
  const charform = useFormInstance<Character>();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = (e: any) => {
    console.log("close", e);
    console.log("form", charform);
    charform.submit();
    setOpen(false);
  };

  useEffect(() => {
    loadCharacters(pb);
  }, []);

  return (
    <div>
      <Title>Charakterverwaltung</Title>
      <section>
        {/* Erstellen */}
        <Button type="primary" onClick={showDrawer}>
          Neuer Charakter
        </Button>
        <Drawer
          title="Neuen Charakter erstellen"
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Abbrechen</Button>
              <Button onClick={onClose} type="primary">
                Erstellen
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" form={charform}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Charakternamen eingeben" },
                  ]}
                >
                  <Input placeholder="Charakternamen eingeben" />
                </Form.Item>
                <Form.Item
                  name="class"
                  label="Klasse"
                  rules={[{ required: true, message: "Klasse auswählen" }]}
                >
                  <Select
                    options={[
                      { label: "Druide", value: "druid" },
                      { label: "Magier", value: "mage" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="profession1"
                  label="Beruf"
                  rules={[{ message: "Beruf auswählen" }]}
                >
                  <Select
                    options={[
                      { label: "Kürschnerei", value: "skinning" },
                      { label: "Lederverarbeitung", value: "leatherworking" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="profession2"
                  label="Beruf"
                  rules={[{ message: "Beruf auswählen" }]}
                >
                  <Select
                    options={[
                      { label: "Kürschnerei", value: "skinning" },
                      { label: "Lederverarbeitung", value: "leatherworking" },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>

        {/* Anzeige */}
        {charactersStatus.value === "pending" && <Spin />}
        <List
          dataSource={loadedCharacters.value}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.name} description={item.user} />
            </List.Item>
          )}
        />
      </section>
    </div>
  );
}
