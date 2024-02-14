import { Route, Router, useLocation } from "preact-iso";

import { Layout, Menu, Typography, theme } from "antd";
import { usePocket } from "../contexts/PocketContext";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/_404";
import { Characters } from "../pages/Characters";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

export function Layoutcontent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { user } = usePocket();
  const location = useLocation();

  const routes = [
    {
      key: "1",
      label: "Offene Lieferungen",
      path: "/",
    },
    {
      key: "2",
      label: "Charakterverwaltung",
      path: "/characters",
    },
  ];

  const getNavigationKey = () => {
    return routes.find(route => route.path === location.path).key;
  };
  ;

  const navigate = (path: string) => {
    location.route(path);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title style={{ color: "white" }}>Vorratsverwaltung</Title>
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          selectedKeys={[getNavigationKey()]}
          items={routes.map((route) => ({
            ...route,
            onClick: () => navigate(route.path),
          }))}
          // style={{ flex: 1, minWidth: 0 }}
        />
        <Text style={{ color: "white" }}>{user.name}</Text>
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
          <Router>
            <Route path="/" component={Home} />
            <Route path="/characters" component={Characters} />
            <Route default component={NotFound} />
          </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Was kommt so in nen Footer?
      </Footer>
    </Layout>
  );
}
