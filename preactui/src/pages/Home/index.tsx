import PocketBase from "pocketbase";
import { useState } from "preact/hooks";
import preactLogo from "../../assets/preact.svg";
import { Login } from "../../components/Login";
import "./style.css";

const pb = new PocketBase("http://127.0.0.1:8090");

export function Home() {
  // const [password, setPassword] = useState<string>("");
  // const [email, setEmail] = useState<string>("");

  return (
    <div class="home">
      {!pb.authStore.isValid && <Login />}
      {pb.authStore.isValid && (
        <>
          <a href="https://preactjs.com" target="_blank">
            <img src={preactLogo} alt="Preact logo" height="160" width="160" />
          </a>
          <h1>Vorratsverwaltung</h1>

          <section>
            <Resource
              title="Learn Preact"
              description="If you're new to Preact, try the interactive tutorial to learn important concepts"
              href="https://preactjs.com/tutorial"
            />
            <Resource
              title="Differences to React"
              description="If you're coming from React, you may want to check out our docs to see where Preact differs"
              href="https://preactjs.com/guide/v10/differences-to-react"
            />
            <Resource
              title="Learn Vite"
              description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
              href="https://vitejs.dev"
            />
          </section>
        </>
      )}
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
