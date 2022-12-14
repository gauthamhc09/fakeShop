import { Layout } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AppHeader from "./components/common/Header";
import { Cart, Landing } from "./components/pages";
import Categories from "./components/pages/Categories";
import DragNDrop from "./components/samples/DND/DragNDrop";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="fakeShop">
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route exact path="" element={<Landing />} />
              <Route path="category" element={<Categories />} />
              <Route path="cart" element={<Cart />} />
              <Route path="dropp" element={<DragNDrop />} />
            </Routes>
          </Content>
        </Layout>
      </DndProvider>
    </div>
  );
}

export default App;
