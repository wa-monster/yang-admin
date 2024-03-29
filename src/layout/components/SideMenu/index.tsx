import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { t } from "i18next";
import { useStore } from "@/store/index";
import { initItems } from "@/router/menuRoute";
function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArr = location.pathname.split("/").filter((v) => v !== "");

  const [defaultSelectedKeys, setSelectKeys] = useState([""]);
  useEffect(() => {
    const pathnameArr = location.pathname.split("/").filter((v) => v !== "");
    // const defaultSelectedKeys = ;
    setSelectKeys([pathnameArr[pathnameArr.length - 1]]);
  }, [location]);
  const defaultOpenKeys = pathnameArr.length > 1 ? [pathnameArr[0]] : undefined;

  const { layout } = useStore();
  type MenuItem = Required<MenuProps>["items"][number];
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => {
    return {
      label,
      key,
      type,
      children,
      icon,
    };
  };
  const sideMenuItems = initItems((obj) => {
    obj.label = t(obj.label);
  });
  // const [items] = useState(sideMenuItems);

  // const sideMenuItems = [
  //   getItem(title, "home", <AppstoreOutlined />),
  //   getItem(t("系统管理"), "systemManage", <ContainerOutlined />, [
  //     getItem(t("用户管理"), "userManage", <DesktopOutlined />),
  //     getItem(t("角色管理"), "roleManage", <MailOutlined />),
  //     getItem(t("菜单管理"), "menuManage", <MenuFoldOutlined />),
  //   ]),
  //   getItem(t("技术研究"), "technicalStudy", <MenuUnfoldOutlined />, [
  //     getItem(t("聚合蜂窝图"), "aggregatedHex", <PieChartOutlined />),
  //   ]),
  //   getItem(t("流程图"), "workflow", <MenuUnfoldOutlined />, [
  //     getItem(t("antvX6"), "AntVX6", <PieChartOutlined />),
  //   ]),
  //   getItem(t("three"), "three", <MenuUnfoldOutlined />, [
  //     getItem(t("001基础"), "001", <PieChartOutlined />),
  //   ]),
  // ];
  // setItems(sideMenuItems);
  const selectMenu = ({ keyPath }: { keyPath: string[] }) => {
    const pathUrl = "/" + keyPath.reverse().join("/");
    // console.log(path);

    navigate(pathUrl);
  };
  return (
    <Menu
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={defaultSelectedKeys}
      mode="inline"
      theme="dark"
      items={sideMenuItems}
      inlineCollapsed={layout.menuJustIcon}
      onSelect={(e) => selectMenu(e)}
    ></Menu>
  );
}
export default SideMenu;
