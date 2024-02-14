import { render } from "preact";
import { LocationProvider } from "preact-iso";
import { Layoutcontent } from "./components/Layoutcontent.js";
import { PocketProvider } from "./contexts/PocketContext.js";

export function App() {
  return (
    <PocketProvider>
      <LocationProvider>
        <Layoutcontent />
      </LocationProvider>
    </PocketProvider>
  );
}

render(<App />, document.getElementById("app"));
