import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {DashboardFilled, DatabaseOutlined, FileOutlined, OrderedListOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {Container} from "./style";

const Sidebar:React.FC=()=>{
    const { Sider }= Layout;
    const [collapsed,setCollapsed] = useState<Boolean>(false)
    const onCollapse = (collapsed:boolean) => setCollapsed(!collapsed)

    return(
      <Container>
          <Sider theme={"dark"} className={"sidebar"} collapsible collapsed={!collapsed} onCollapse={onCollapse}>
              <Menu theme={"dark"}  className={"sidebar"}  defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item className={"item"} key="1"  icon={<DashboardFilled />}>
                      <NavLink to={"/"}>Dashboard</NavLink>
                  </Menu.Item>
                  <Menu.Item className={"item"} key="3" icon={<DatabaseOutlined/>}>
                      <NavLink to={"/Cart"}>  Cart </NavLink>
                  </Menu.Item>
                  <Menu.Item className={"item"} key="2" icon={<OrderedListOutlined />}>
                      <NavLink to={"/NewProduct"}>New Product</NavLink>
                  </Menu.Item>
                  <Menu.Item className={"item"} key="4" icon={<FileOutlined />}>
                      <NavLink to={"/History"}>History</NavLink>
                  </Menu.Item>
              </Menu>
          </Sider>
      </Container>
    )
}
export default  Sidebar;