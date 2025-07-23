# NestJS Backend Framework

这是一个使用 NestJS 构建的后端框架，包含三个核心业务模块。

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
- `GET /api/health` - 健康检查

### Customer 模块 (客户管理)
- `GET /api/customer` - 获取所有客户
- `GET /api/customer/:id` - 获取单个客户
- `POST /api/customer` - 创建新客户
- `PATCH /api/customer/:id` - 更新客户信息
- `DELETE /api/customer/:id` - 删除客户

### Fund 模块 (基金管理)
- `GET /api/fund` - 获取所有基金
- `GET /api/fund/:id` - 获取单个基金
- `POST /api/fund` - 创建新基金
- `PATCH /api/fund/:id` - 更新基金信息
- `DELETE /api/fund/:id` - 删除基金

### Transaction 模块 (交易管理)
- `GET /api/transaction` - 获取所有交易
- `GET /api/transaction/:id` - 获取单个交易
- `POST /api/transaction` - 创建新交易
- `PATCH /api/transaction/:id` - 更新交易信息
- `DELETE /api/transaction/:id` - 删除交易

## 🛠️ 技术栈

- **框架**: NestJS 10.x
- **语言**: TypeScript
- **文档**: Swagger/OpenAPI
- **验证**: class-validator
- **转换**: class-transformer

## 🔧 可用脚本

```bash
# 开发
npm run start:dev        # 启动开发服务器（已在运行）
npm run start:debug      # 调试模式启动

# 构建和生产
npm run build           # 构建项目
npm run start:prod      # 生产模式启动

# 测试
npm run test            # 运行测试
npm run test:watch      # 监听模式测试
npm run test:cov        # 覆盖率测试

# 代码质量
npm run lint            # 代码检查
npm run format          # 代码格式化
```

## 📖 API 文档

启动服务后，访问以下地址查看 API 文档：
- **Swagger UI**: http://localhost:8000/api/docs

## 🔗 可用端点

### 基础端点
- `GET /api` - 获取欢迎消息
- `GET /api/health` - 健康检查

## 🎯 下一步开发

你可以基于这个框架继续开发：

### 1. 添加新模块
```bash
nest generate module feature-name
nest generate controller feature-name
nest generate service feature-name
```

### 2. 添加数据库支持
安装 TypeORM 和数据库驱动：
```bash
npm install @nestjs/typeorm typeorm mysql2
```

### 3. 添加认证
安装认证相关包：
```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
```

### 4. 添加配置管理
```bash
npm install @nestjs/config
```

### 5. 添加数据验证
项目已包含 `class-validator` 和 `class-transformer`

## 🔒 环境配置

创建 `.env` 文件来管理环境变量：
```env
NODE_ENV=development
PORT=8000
# 添加其他配置...
```

## 📝 开发建议

1. **模块化开发** - 使用 NestJS 模块系统组织代码
2. **依赖注入** - 利用 NestJS 的依赖注入容器
3. **装饰器** - 使用装饰器进行路由、验证等
4. **管道和守卫** - 使用管道进行数据转换，守卫进行权限控制
5. **异常处理** - 使用 NestJS 内置异常处理机制

## 🧪 测试

框架已配置 Jest 测试环境：
- 单元测试：`*.spec.ts`
- 端到端测试：`test/` 目录

## 🚀 部署

### 构建生产版本
```bash
npm run build
npm run start:prod
```

### Docker 部署
创建 Dockerfile：
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 8000
CMD ["node", "dist/main"]
```

---

**🎉 恭喜！你的 NestJS 空框架已经成功运行！**

现在你可以开始添加你的业务逻辑和功能模块了。
