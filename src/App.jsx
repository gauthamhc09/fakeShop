import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AppHeader from "./components/common/Header";
import { Cart, Landing } from "./components/pages";
import Categories from "./components/pages/Categories";
import ProductPages from "./components/pages/productPages/ProductPages";

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
            <Route exact path="" element={<Landing />} />
            <Route path="category" element={<Categories />}/>
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
