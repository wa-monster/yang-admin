import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loading from "@/components/Loading";
import Layout from "@/layout";
const Home = lazy(() => import("@/pages/Home"));
const Hex = lazy(() => import("@/pages/Study/Hex"));
const Login = lazy(() => import("@/pages/Login"));
const UserManage = lazy(() => import("@/pages/System/UserManage"));
const RoleManage = lazy(() => import("@/pages/System/RoleManage"));
const MenuManage = lazy(() => import("@/pages/System/MenuManage"));
const Personal = lazy(() => import("@/pages/Personal"));
const AntVX6WorkFlow = lazy(
  () => import("@/pages/WorkFlow/AntVX6WorkFlow/index")
);
// Suspense工厂函数
function FactorySuspense({
  ele: Ele,
}: {
  ele: React.LazyExoticComponent<() => JSX.Element>;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Ele />
    </Suspense>
  );
}
export const langMenu = {
  home: "首页",
  personal: "个人中心",
  systemManage: "系统管理",
  userManage: "用户管理",
  roleManage: "角色管理",
  menuManage: "菜单管理",
  technicalStudy: "技术研究",
  aggregatedHex: "聚合蜂窝图",
  workflow: "工作流",
  AntVX6: "AntVX6版本",
};
const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // 重定向导/home
      // {
      //   path: "/",
      //   element: <Navigate to={"/home"} />,
      // },
      {
        path: "/home",
        element: <FactorySuspense ele={Home} />,
        children: [],
        handle: {
          name: "首页",
        },
      },
      {
        path: "/personal",
        element: <FactorySuspense ele={Personal} />,
        children: [],
        handle: {
          name: "个人中心",
        },
      },
      {
        path: "/systemManage/userManage",
        element: <FactorySuspense ele={UserManage} />,
        children: [],
        handle: {
          name: "用户管理",
        },
      },
      {
        path: "/systemManage/roleManage",
        element: <FactorySuspense ele={RoleManage} />,
        children: [],
        handle: {
          name: "角色管理",
        },
      },
      {
        path: "/systemManage/menuManage",
        element: <FactorySuspense ele={MenuManage} />,
        children: [],
        handle: {
          name: "菜单管理",
        },
      },
      {
        path: "/technicalStudy/aggregatedHex",
        element: <FactorySuspense ele={Hex} />,
        children: [],
        handle: {
          name: "聚合蜂窝图",
        },
      },
      {
        path: "/workflow/AntVX6",
        element: <FactorySuspense ele={AntVX6WorkFlow} />,
        children: [],
        handle: {
          name: "AntVX6版本",
        },
      },
    ],
  },
  {
    path: "/login",
    element: <FactorySuspense ele={Login} />,
  },
];

// const router = createBrowserRouter(routers);
const router = createHashRouter(routers);

export default function RouterApp() {
  return <RouterProvider router={router}></RouterProvider>;
}
