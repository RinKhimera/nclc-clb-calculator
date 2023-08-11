"use client"

import { DownOutlined, SmileOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Dropdown, Space } from "antd"
import React from "react"

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
]

const DropdownLink = () => {
  return (
    <Dropdown
      menu={{ items }}
      className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default DropdownLink
