# oh-nano-agent

[English](#english) | [中文](#中文)

---

## English

### Ultra-Lightweight Sub-Agent Framework for OpenClaw

Inspired by Nanobot's minimalist philosophy: do one thing well, with minimal overhead.

#### Features

- ⚡ **Lightning Fast**: Minimal code footprint (~200 lines core)
- 🧠 **Smart Memory**: Automatic context management, keeps only what matters
- 🔧 **Tool Integration**: Easy to extend with custom tools
- 📦 **Zero Dependencies**: Pure Node.js, no external packages
- 🎯 **Task-Focused**: Designed for single-purpose sub-agents
- 💾 **State Persistence**: Save and restore agent state

#### Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/oh-nano-agent.git
   cd oh-nano-agent
   ```

2. **Run directly**
   ```bash
   node index.js run "search for OpenClaw documentation"
   ```

3. **Use in OpenClaw**
   ```bash
   ln -s $(pwd) ~/.openclaw/skills/oh-nano-agent
   ```

#### Usage Examples

**Run a task:**
```bash
node index.js run "analyze the current project structure"
```

**Check memory:**
```bash
node index.js memory
```

**Clear memory:**
```bash
node index.js clear
```

#### Use Cases

- Quick information gathering
- Simple data processing
- Isolated task execution
- Parallel sub-task handling
- Resource-constrained environments

#### Architecture

```
NanoAgent
├── Memory (last 10 messages)
├── Task Planner (keyword-based)
├── Step Executor (minimal)
└── State Manager (save/load)
```

#### Configuration

```javascript
const agent = new NanoAgent({
  name: 'my-agent',
  model: 'qwen3',
  maxTokens: 4000,
  temperature: 0.7,
  tools: ['search', 'analyze']
});
```

#### Requirements

- Node.js >= 18
- OpenClaw >= 1.0.0 (optional)

#### License

MIT

---

## 中文

### OpenClaw 超轻量级子 Agent 框架

受 Nanobot 极简主义哲学启发：专注做好一件事，最小化开销。

#### 功能特性

- ⚡ **闪电般快速**：最小代码占用（核心约200行）
- 🧠 **智能内存**：自动上下文管理，只保留关键信息
- 🔧 **工具集成**：轻松扩展自定义工具
- 📦 **零依赖**：纯 Node.js，无外部包
- 🎯 **任务聚焦**：专为单一目的子 agent 设计
- 💾 **状态持久化**：保存和恢复 agent 状态

#### 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/YOUR_USERNAME/oh-nano-agent.git
   cd oh-nano-agent
   ```

2. **直接运行**
   ```bash
   node index.js run "搜索 OpenClaw 文档"
   ```

3. **在 OpenClaw 中使用**
   ```bash
   ln -s $(pwd) ~/.openclaw/skills/oh-nano-agent
   ```

#### 使用示例

**运行任务：**
```bash
node index.js run "分析当前项目结构"
```

**查看内存：**
```bash
node index.js memory
```

**清空内存：**
```bash
node index.js clear
```

#### 使用场景

- 快速信息收集
- 简单数据处理
- 隔离任务执行
- 并行子任务处理
- 资源受限环境

#### 架构

```
NanoAgent
├── 内存（最近10条消息）
├── 任务规划器（基于关键词）
├── 步骤执行器（最小化）
└── 状态管理器（保存/加载）
```

#### 配置

```javascript
const agent = new NanoAgent({
  name: 'my-agent',
  model: 'qwen3',
  maxTokens: 4000,
  temperature: 0.7,
  tools: ['search', 'analyze']
});
```

#### 依赖要求

- Node.js >= 18
- OpenClaw >= 1.0.0（可选）

#### 许可证

MIT
