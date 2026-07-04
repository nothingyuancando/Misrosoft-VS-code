# 06 MVP 原型范围

## 原型目标

当前 MVP 目标是验证“VS Code 桌面幸存者”是否比传统路线塔防更有趣。

要验证的三件事：

```txt
1. 控制 VS Code 图标移动、躲避、捡 coffee 是否顺手
2. 植物作为武器构筑是否比固定种植更爽
3. 锦囊抽卡、弹窗干扰和文件假删除是否形成独特记忆点
```

## 必做内容

### 界面

第一版界面必须保留 VS Code 氛围：

```txt
左侧 Explorer：文件生命和 already deleted 状态
上方状态栏：时间、文件数量、生命、手牌、威胁、Boss 倒计时
上方手牌区：锦囊抽卡和当前手牌
中间编辑器：移动生存战场
右侧 Battle Kit：快捷锦囊、武器构筑、下一类事故、提交目标
底部 Terminal：战斗日志
```

### 主角

```txt
主角：VS Code 图标
移动：WASD / 方向键
基础生命：100
基础速度：250
已解锁武器显示在主角周围
```

### 资源

```txt
coffee：抽卡、出牌、升级节奏的核心资源
coffee exp：拾取 coffee 增加经验
level：经验满后升级，三选一植物武器
```

第一版不再使用内存资源。资源收束到 coffee，减少理解负担。

### 植物武器

第一版武器池：

```txt
coffee 机：提高收益并回血
print 炮：默认字符弹
bug 雷：周期性地雷
rollback：回滚脉冲
函数炮：曲线弹
Docker：容器护盾
TypeScript：高威胁锁定
JavaScript：高频随机飞镖
Python：范围自动化扫场
IDEA：重构激光
Tomcat：8080 火球
Spring Boot：健康检查恢复
```

### 锦囊手牌

第一版手牌池：

```txt
Ctrl+S
kill -9
Stack Overflow
Git Stash
Docker Build
热咖啡
CI Pipeline
Alt+F4
```

规则：

```txt
手牌上限：4
抽卡费用：25 coffee
每张牌有独立 coffee 费用
开局免费摸 2 张
```

### 快捷锦囊

右侧提供三个冷却技能，保证玩家没抽到对应手牌时也有基础救场能力：

```txt
Space：Ctrl+S
Q：kill -9
E：Alt+F4
```

### 敌人

第一版敌人池：

```txt
Windows 更新
Edge 弹窗
Teams 会议
OneDrive 冲突
npm 黑洞
Defender 误杀
YAML 缩进
需求变更
蓝屏合并冲突 Boss
```

敌人从编辑器边缘刷出，逐渐向 VS Code 主角靠近。部分敌人有特殊行为：

```txt
OneDrive：受伤后复制冲突副本
Edge：周期性生成弹窗
Boss：周期性生成 BSOD 弹窗并伤害文件
```

### 弹窗

弹窗是区别于普通敌人的桌面干扰：

```txt
Windows Update
Edge
Teams
OneDrive
BSOD
```

弹窗可以鼠标点击关闭，也可以用 `Alt+F4` 清掉。倒计时结束会伤害一个文件。

### 文件生命

第一版文件列表：

```txt
src/main.ts
src/defense.ts
src/waves.json
assets/plants.svg
README.md
package.json
毕业设计-最终版.zip
```

文件生命归零后显示：

```txt
already deleted
```

这只是游戏状态，真实文件不受影响。

## 可延后内容

这些不放进当前 MVP：

```txt
联网
存档
正式关卡章节
真实命令输入
复杂剧情
成就系统
装备背包
多人模式
移动端适配
商业化素材复核
```

## 当前验收标准

原型达到以下标准即可进入下一阶段：

```txt
玩家能完成一局 3 到 5 分钟的生存战斗
开局能马上理解自己控制的是 VS Code 图标
主角周围能看到已解锁植物武器
coffee 掉落和升级三选一能驱动构筑
手牌能在关键时刻救场
弹窗能制造桌面混乱感
文件 already deleted 足够紧张但不会误导真实删除
蓝屏 Boss 有明显压迫感
```

## 下一阶段扩展

原型成立后优先扩展：

```txt
武器进化组合
更多弹窗形态
Boss 阶段变化
更多程序员梗战报
更明显的武器特效
更细的 coffee 经济平衡
```
