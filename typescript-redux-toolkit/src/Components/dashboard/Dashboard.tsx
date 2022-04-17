import React, { useState} from "react";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Layout,  Breadcrumb} from 'antd';
import {Container} from "./style";
import Date from "./Date/date";
import EditableTable from "./Table/table";

const { Search } = Input;
const Main:React.FC = () => {
    const { Header, Content } = Layout;
    const [word, setWord] = useState<string>("");

    return (
        <Container>
                     <Layout className="site-layout">
                         <Content style={{ margin: '0 10px' }}>
                             <Breadcrumb style={{ margin: '10px 0' }}>
                                 <div className="container-header">
                                     <form className="main">
                                         <div className="form-inner">
                                             <div className="input-wrapper">
                                                 <Search placeholder="input search text"   onSearch={(e) => setWord(e)} enterButton />
                                             </div>
                                             <div className="filter">
                                                 <Date/>
                                             </div>
                                         </div>
                                     </form>
                                 </div>
                             </Breadcrumb>
                             <div className="site-layout-background" style={{ padding: 10, minHeight: 400 }}>
                                 <EditableTable searchWord={word}/>
                             </div>
                         </Content>
                     </Layout>
        </Container>
    )

}
export default Main;
