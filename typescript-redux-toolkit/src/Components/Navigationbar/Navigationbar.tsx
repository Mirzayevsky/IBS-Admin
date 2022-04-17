import React from 'react';
import {Container} from "@material-ui/core";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Navigationbar = () => {
    return (
        <Container>
            <Header className="site-layout-background" style={{ padding: 0 }} />
        </Container>
    );
};

export default Navigationbar;