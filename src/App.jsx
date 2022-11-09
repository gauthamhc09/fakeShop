import { Layout } from "antd";
import AppHeader from "./components/common/Header";
import Landing from "./components/Landing";
import "./styles/common.css";
const {Header, Content} = Layout

function App() {
  return (
    <div className="">
      <Layout>
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <Landing/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
