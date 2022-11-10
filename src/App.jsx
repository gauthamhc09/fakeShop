import { Layout } from "antd";
import AppHeader from "./components/common/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/common.css";
import { Landing, Products, Cart } from "./components/pages";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="fakeShop">
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
