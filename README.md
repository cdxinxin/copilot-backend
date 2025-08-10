# NestJS & React Training Project

本仓库包含一个 NestJS 后端和一个 React 前端（请将 React 前端代码放置于 `react-app/` 目录）。本项目旨在提供客户、基金和交易管理的完整解决方案，适合开发和维护人员快速上手。

---

## 🏁 快速启动指南

### 1. 启动后端（NestJS）

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run start:dev

# 访问 API 文档
# http://localhost:8000/api/docs
```

### 2. 启动前端（React）

假设前端代码位于 `react-app/` 目录：

```bash
cd react-app
npm install
npm start
# 默认运行在 http://localhost:3000
```

---

## 📝 项目结构

```
copilot-backend/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── customer/
│   ├── fund/
│   ├── transaction/
│   └── mock-data/
├── package.json
├── tsconfig.json
├── README.md
└── react-app/
    ├── src/
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── routes/
    │   ├── components/
    │   ├── pages/
    │   └── api/
    ├── public/
    ├── package.json
    └── README.md
```

### 后端主要文件说明

- [`src/main.ts`](src/main.ts): 应用入口，配置 CORS、Swagger、全局管道等。
- [`src/app.module.ts`](src/app.module.ts): 根模块，导入所有业务模块。
- [`src/customer/customer.controller.ts`](src/customer/customer.controller.ts): 客户相关 API 路由。
- [`src/fund/fund.controller.ts`](src/fund/fund.controller.ts): 基金相关 API 路由。
- [`src/transaction/transaction.controller.ts`](src/transaction/transaction.controller.ts): 交易相关 API 路由。
- [`src/mock-data/`](src/mock-data/README.md): 所有模拟数据和接口定义。

### 前端主要文件说明

- `src/App.tsx`: 应用主入口，配置路由。
- `src/routes/`: 路由配置文件，定义页面跳转逻辑。
- `src/pages/`: 业务页面，如客户列表、基金详情、交易历史等。
- `src/components/`: 通用组件，如表格、卡片、导航栏等。
- `src/api/`: 与后端 API 通信的接口封装。

---

## 🌐 路由配置说明

### 后端路由

- `/api/customer`: 获取所有客户
- `/api/customer/:id/portfolio`: 获取指定客户的投资组合
- `/api/customer/:id/wealth-specialist`: 获取客户财富专家信息
- `/api/customer/:id/transactions`: 获取客户交易记录
- `/api/fund`: 获取所有基金
- `/api/fund/:code`: 根据基金代码获取基金详情
- `/api/transaction`: 获取所有交易

详见各模块 controller 文件。

### 前端路由（示例）

```tsx
// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerList from '../pages/CustomerList';
import FundList from '../pages/FundList';
import TransactionHistory from '../pages/TransactionHistory';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/funds" element={<FundList />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🧩 React 组件结构说明

- `CustomerList`: 展示客户列表，调用 `/api/customer`。
- `FundList`: 展示基金列表，调用 `/api/fund`。
- `TransactionHistory`: 展示交易历史，调用 `/api/transaction`。
- `Portfolio`: 展示客户投资组合，调用 `/api/customer/:id/portfolio`。
- `WealthSpecialist`: 展示财富专家信息，调用 `/api/customer/:id/wealth-specialist`。

每个页面组件通过 `api/` 封装的接口与后端交互，数据展示采用表格、卡片等通用组件。

---

## 💡 开发与维护建议

- **类型安全**：后端所有 mock 数据严格遵循 DTO 和接口定义，前端建议使用 TypeScript 保证类型一致。
- **模块化管理**：每个业务模块（客户、基金、交易）均有独立 controller/service，便于扩展和维护。
- **API 文档**：后端自动生成 Swagger 文档，便于前后端联调。
- **Mock 数据**：开发阶段可直接使用 [`src/mock-data/`](src/mock-data/README.md) 提供的数据，后续可替换为真实数据库。
- **前后端分离**：建议前端通过环境变量配置后端 API 地址，便于部署和切换环境。
- **测试覆盖**：后端已集成 Jest 单元测试，建议保持高测试覆盖率。

---

## 📚 参考文档

- [NestJS 官方文档](https://docs.nestjs.com/)
- [React 官方文档](https://react.dev/)
- [Swagger UI](http://localhost:8000/api/docs)

---

**🎉 欢迎加入本项目开发与维护！如有问题请查阅各模块 README 或联系项目负责人。**
