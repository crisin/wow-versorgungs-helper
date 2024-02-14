import { List, Typography } from "antd";
import { useEffect } from "preact/hooks";
import { usePocket } from "../../contexts/PocketContext";
import {
  loadCharacters,
  loadedCharacters,
} from "../../services/CharacterService";

const { Title } = Typography;

export function Characters() {
  const { pb } = usePocket();

  useEffect(() => {
    loadCharacters(pb);
  }, []);

  return (
    <div>
      <Title>Characterverwaltung</Title>

      <section>
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
