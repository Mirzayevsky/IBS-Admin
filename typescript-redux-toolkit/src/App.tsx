import React from 'react';
import 'antd/dist/antd.css';
import Pages from "./Routes/Route";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Layout} from 'antd';
function App() {
    return (
    <Layout>
          <Sidebar/>
          <Pages/>
    </Layout>
  );
}

export default App;
