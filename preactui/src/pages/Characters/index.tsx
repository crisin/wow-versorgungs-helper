import { List, Typography } from "antd";
import { useEffect, useState } from "preact/hooks";
import { usePocket } from "../../contexts/PocketContext";
import { Character } from "../../interfaces/Character.interface";

const { Title } = Typography;

export function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { pb } = usePocket();

  useEffect(() => {
    pb.collection("characters")
      .getFullList()
      .then((charactersRes) => {
        console.log("chars:", charactersRes);
        if (charactersRes.length > 0) {
          const loadedCharacters = charactersRes as any;
          setCharacters(loadedCharacters);
        }
      });
  }, []);

  return (
    <div>
      <Title>Characterverwaltung</Title>

      <section>
        <List
          dataSource={characters}
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
