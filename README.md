# NestJS Training Project

这是一个使用 NestJS 构建的后端训练项目，包含三个核心业务模块。

## 🚀 服务状态

✅ **服务器启动成功** - 运行在 http://localhost:8001
✅ **Swagger 文档** - 可在 http://localhost:8001/api/docs 查看
✅ **三个业务模块已创建**：Customer、Fund、Transaction

## 📁 项目结构

```
src/
├── app.controller.ts    # 应用控制器
├── app.module.ts        # 应用模块（包含所有子模块）
├── app.service.ts       # 应用服务
├── main.ts             # 应用入口
├── customer/           # 客户模块
│   ├── customer.controller.ts
│   ├── customer.service.ts
│   ├── customer.module.ts
│   └── *.spec.ts       # 测试文件
├── fund/               # 基金模块
│   ├── fund.controller.ts
│   ├── fund.service.ts
│   ├── fund.module.ts
│   └── *.spec.ts       # 测试文件
└── transaction/        # 交易模块
    ├── transaction.controller.ts
    ├── transaction.service.ts
    ├── transaction.module.ts
    └── *.spec.ts       # 测试文件
```

## 🔗 可用 API 端点

### 基础端点
- `GET /api` - 获取欢迎消息

### Customer 模块 (客户管理)
- `GET /api/customer` - 获取所有客户

### Fund 模块 (基金管理)
- `GET /api/fund` - 获取所有基金

### Transaction 模块 (交易管理)
- `GET /api/transaction` - 获取所有交易

## 🛠️ 技术栈

- **框架**: NestJS 10.x
- **语言**: TypeScript
- **文档**: Swagger/OpenAPI
- **验证**: class-validator
- **转换**: class-transformer

## 🔧 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run start:dev

# 访问 API 文档
# http://localhost:8001/api/docs
```

## 🔧 可用脚本

```bash
# 开发
npm run start:dev        # 启动开发服务器
npm run start:debug      # 调试模式启动

# 构建和生产
npm run build           # 构建项目
npm run start:prod      # 生产模式启动

# 测试
npm run test            # 运行测试
npm run test:watch      # 监听模式测试
npm run test:cov        # 覆盖率测试
```

## 📖 API 文档

启动服务后，访问以下地址查看 API 文档：
- **Swagger UI**: http://localhost:8001/api/docs

---

**🎉 NestJS 训练项目已准备就绪！**
