import { Layout, Menu, theme } from "antd";
import { render } from "preact";
import { LocationProvider, Route, Router } from "preact-iso";
import { PocketProvider } from "./contexts/PocketContext.js";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css"; // todo: css benötigt?

const { Header, Content, Footer } = Layout;

export function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <PocketProvider>
      <LocationProvider>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <h1 className="demo-logo">Vorratsverwaltung</h1>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={[{ key: "testkey", label: "testlabel" }]}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: "0 48px" }}>
            {/* todo: breadcrumbs implementieren / wahrscheinlich über hook / location provider */}
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >
              <main>
                <Router>
                  <Route path="/" component={Home} />
                  <Route default component={NotFound} />
                </Router>
              </main>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Was kommt so in nen Footer?
          </Footer>
        </Layout>
      </LocationProvider>
    </PocketProvider>
  );
}

render(<App />, document.getElementById("app"));
