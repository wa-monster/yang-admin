import React from "react";
import { Form, Input, Button, Table, Space } from "antd";
import ResizeTable from "@/components/ResizeTable/index";
import { useTranslation } from "react-i18next";
const MenuManage = () => {
  const { t } = useTranslation();
  const onFinish = () => {};
  const columnsData = [
    {
      title: t("菜单名称"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: "图标",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: t("排序"),
      dataIndex: "sort",
      key: "sort",
    },
    {
      title: t("状态"),
      dataIndex: "status",
      key: "status",
    },
    {
      title: t("组件路径"),
      dataIndex: "url",
      key: "url",
    },
    {
      title: t("创建时间"),
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: t("操作"),
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link">{t("修改")}</Button>
          <Button type="link" danger>
            {t("删除")}
          </Button>
        </Space>
      ),
    },
  ];
  const obj = {
    id: 1,
    name: "菜单管理",
    icon: "19653456675",
    sort: "1",
    status: "正常",
    url: "menu/index",
    createTime: "2023-12-04",
  };
  const dataSource = [];
  for (let i = 0; i <= 50; i++) {
    dataSource.push({ ...obj, id: i + 1 });
  }

  return (
    <div className="bg-white h-full p-2 ">
      <div className=" m-2">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          layout="inline"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={t("菜单名称")}
            name="username"
            rules={[{ required: true, message: `${t("请输入菜单名称")}!` }]}
          >
            <Input placeholder={t("请输入菜单名称")} />
          </Form.Item>
          <Form.Item>
            <Button type="primary">{t("搜索")}</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="pl-4 pr-4 p-2">
        <Button type="primary">{t("新增")}</Button>
      </div>
      <div style={{ height: "calc(100% - 14rem)" }}>
        <ResizeTable
          className="h-full"
          dataSource={dataSource}
          columns={columnsData}
          rowKey={(record: any) => record.id}
        />
      </div>
    </div>
  );
};
export default MenuManage;
