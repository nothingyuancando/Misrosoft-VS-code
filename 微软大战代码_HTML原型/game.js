const ASSET = "../微软大战代码_素材库/图片资源/";
const ROWS = 7;
const COLS = 11;
const BUILD_COLS = 7;
const CELL_W = 66;
const CELL_H = 54;
const GAP = 6;
const protectedFiles = [
  { path: "src/main.ts", short: "main.ts", icon: "TS" },
  { path: "src/defense.ts", short: "defense.ts", icon: "TS" },
  { path: "src/waves.json", short: "waves.json", icon: "{}" },
  { path: "assets/plants.svg", short: "plants.svg", icon: "SVG" },
  { path: "README.md", short: "README.md", icon: "MD" },
  { path: "package.json", short: "package.json", icon: "{}" },
  { path: "毕业设计-最终版.zip", short: "最终版.zip", icon: "ZIP" }
];
const rowNames = protectedFiles.map(file => file.short);

const plantDefs = {
  coffee: {
    type: "plant",
    name: "coffee 机",
    icon: ASSET + "植物与代码图标/plant_coffee_machine.svg",
    coffee: 50,
    memory: 0,
    hp: 90,
    text: "产咖啡"
  },
  print: {
    type: "plant",
    name: "print 炮",
    icon: ASSET + "植物与代码图标/plant_print_cannon.svg",
    coffee: 100,
    memory: 0,
    hp: 105,
    text: "字符弹"
  },
  wall: {
    type: "plant",
    name: "if 墙",
    icon: ASSET + "植物与代码图标/plant_if_wall.svg",
    coffee: 75,
    memory: 0,
    hp: 280,
    text: "阻挡"
  },
  bug: {
    type: "plant",
    name: "bug 雷",
    icon: ASSET + "植物与代码图标/plant_bug_mine.svg",
    coffee: 125,
    memory: 0,
    hp: 55,
    text: "爆炸"
  },
  rollback: {
    type: "plant",
    name: "rollback",
    icon: ASSET + "植物与代码图标/plant_rollback.svg",
    coffee: 150,
    memory: 0,
    hp: 110,
    text: "击退"
  },
  function: {
    type: "plant",
    name: "函数炮",
    icon: ASSET + "植物与代码图标/plant_function_cannon.svg",
    coffee: 200,
    memory: 0,
    hp: 100,
    text: "曲线弹"
  }
};

const moduleDefs = {
  for: {
    type: "module",
    name: "for",
    icon: ASSET + "植物与代码图标/module_for_loop.svg",
    coffee: 0,
    memory: 40,
    mark: "for",
    text: "连发"
  },
  if: {
    type: "module",
    name: "if",
    icon: ASSET + "植物与代码图标/module_if_filter.svg",
    coffee: 0,
    memory: 30,
    mark: "if",
    text: "优先"
  },
  else: {
    type: "module",
    name: "else",
    icon: ASSET + "植物与代码图标/module_else_plate.svg",
    coffee: 0,
    memory: 35,
    mark: "else",
    text: "反击"
  },
  trycatch: {
    type: "module",
    name: "try-catch",
    icon: ASSET + "植物与代码图标/module_try_catch_shield.svg",
    coffee: 0,
    memory: 50,
    mark: "try",
    text: "保险"
  }
};

const enemyDefs = {
  update: {
    name: "更新兵",
    icon: ASSET + "怪物贴纸/windows_update_head.svg",
    hp: 105,
    speed: .155,
    damage: 16,
    attackRate: 1100,
    tag: "37%"
  },
  restart: {
    name: "重启车",
    icon: ASSET + "怪物贴纸/restart_head.svg",
    hp: 70,
    speed: .31,
    damage: 22,
    attackRate: 900,
    tag: "restart"
  },
  edge: {
    name: "Edge 传教士",
    icon: ASSET + "怪物贴纸/edge_head.svg",
    hp: 125,
    speed: .18,
    damage: 12,
    attackRate: 1500,
    tag: "default"
  },
  teams: {
    name: "Teams 会议怪",
    icon: ASSET + "怪物贴纸/teams_head.svg",
    hp: 145,
    speed: .13,
    damage: 13,
    attackRate: 1200,
    tag: "meeting"
  },
  onedrive: {
    name: "OneDrive 同步怪",
    icon: ASSET + "怪物贴纸/onedrive_head.svg",
    hp: 85,
    speed: .18,
    damage: 13,
    attackRate: 1050,
    tag: "sync"
  },
  boss: {
    name: "蓝屏巨人",
    icon: ASSET + "怪物贴纸/bsod_head.svg",
    hp: 920,
    speed: .07,
    damage: 28,
    attackRate: 1050,
    tag: "BSOD",
    boss: true
  }
};

const waves = [
  [
    { kind: "update", row: 1, delay: 500 },
    { kind: "update", row: 3, delay: 1800 },
    { kind: "update", row: 5, delay: 3300 },
    { kind: "update", row: 0, delay: 4700 }
  ],
  [
    { kind: "restart", row: 2, delay: 400 },
    { kind: "update", row: 6, delay: 1200 },
    { kind: "update", row: 4, delay: 2400 },
    { kind: "restart", row: 0, delay: 4200 },
    { kind: "update", row: 1, delay: 5600 }
  ],
  [
    { kind: "edge", row: 1, delay: 500 },
    { kind: "update", row: 2, delay: 1600 },
    { kind: "edge", row: 6, delay: 3400 },
    { kind: "update", row: 0, delay: 4400 },
    { kind: "restart", row: 5, delay: 5800 }
  ],
  [
    { kind: "teams", row: 2, delay: 500 },
    { kind: "onedrive", row: 3, delay: 1600 },
    { kind: "onedrive", row: 1, delay: 2800 },
    { kind: "restart", row: 6, delay: 4200 },
    { kind: "teams", row: 4, delay: 5600 },
    { kind: "update", row: 0, delay: 6900 }
  ],
  [
    { kind: "boss", row: 3, delay: 600 },
    { kind: "restart", row: 0, delay: 1800 },
    { kind: "update", row: 6, delay: 3000 },
    { kind: "teams", row: 1, delay: 5200 },
    { kind: "onedrive", row: 5, delay: 6500 },
    { kind: "edge", row: 2, delay: 7800 },
    { kind: "restart", row: 4, delay: 9000 }
  ]
];

const state = {
  coffee: 175,
  memory: 70,
  lives: ROWS,
  wave: 0,
  running: false,
  paused: false,
  selected: null,
  selectedKind: null,
  plants: Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => null)),
  enemies: [],
  bullets: [],
  effects: [],
  pendingSpawns: [],
  lastTime: 0,
  enemyId: 1,
  bulletId: 1,
  updateProgress: 0,
  waveActive: false,
  gameOver: false,
  files: protectedFiles.map(file => ({ ...file, deleted: false, hits: 0, lastEnemy: "" })),
  functionExpression: "sin(x + t) * 0.33",
  functionLabel: "sin(x + t) * 0.33",
  functionFn: (x, t) => Math.sin(x + t) * .33
};

const board = document.getElementById("board");
const actorLayer = document.getElementById("actorLayer");
const rowLabels = document.getElementById("rowLabels");
const plantCards = document.getElementById("plantCards");
const moduleCards = document.getElementById("moduleCards");
const logEl = document.getElementById("log");
const fileTree = document.getElementById("fileTree");
const protectedList = document.getElementById("protectedList");
const incidentModal = document.getElementById("incidentModal");
const fakeDeleteList = document.getElementById("fakeDeleteList");
const functionInput = document.getElementById("functionInput");
const formulaValue = document.getElementById("formulaValue");

function cellX(col) {
  return col * (CELL_W + GAP) + CELL_W / 2;
}

function cellY(row) {
  return row * (CELL_H + GAP) + CELL_H / 2;
}

function addLog(text, type = "") {
  const line = document.createElement("div");
  line.className = `log-line ${type}`;
  line.innerHTML = `<span class="prompt">&gt;</span> ${text}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
  while (logEl.children.length > 90) logEl.removeChild(logEl.firstChild);
}

function moneyText(def) {
  const parts = [];
  if (def.coffee) parts.push(`${def.coffee} coffee`);
  if (def.memory) parts.push(`${def.memory} memory`);
  return parts.join(" / ") || "free";
}

function createCards() {
  plantCards.innerHTML = "";
  Object.entries(plantDefs).forEach(([key, def]) => {
    plantCards.appendChild(createCard(key, def));
  });
  moduleCards.innerHTML = "";
  Object.entries(moduleDefs).forEach(([key, def]) => {
    moduleCards.appendChild(createCard(key, def));
  });
}

function createCard(key, def) {
  const button = document.createElement("button");
  button.className = "card";
  button.dataset.key = key;
  button.dataset.kind = def.type;
  button.innerHTML = `
    <img src="${def.icon}" alt="" />
    <div class="card-name">${def.name}<br><span style="color:#858585;font-weight:400">${def.text}</span></div>
    <div class="card-cost">${moneyText(def)}</div>
  `;
  button.addEventListener("click", () => {
    if (!canPay(def)) {
      addLog(`${def.name} 资源不足：还需要 ${resourceShortage(def)}。`, "warn");
      updateUI();
      return;
    }
    state.selected = key;
    state.selectedKind = def.type;
    addLog(def.type === "module"
      ? `已选择 ${def.name} 模块，请点击一个已有代码植物来挂载。`
      : `已选择 ${def.name}，请点击左侧可部署格子。`);
    updateUI();
  });
  return button;
}

function createBoard() {
  rowLabels.innerHTML = "";
  rowNames.forEach((name, index) => {
    const label = document.createElement("div");
    label.className = "row-label";
    label.dataset.row = index;
    label.textContent = name;
    rowLabels.appendChild(label);
  });

  board.innerHTML = "";
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("div");
      cell.className = `cell ${c < BUILD_COLS ? "buildable" : "enemy-zone"}`;
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.dataset.line = `${String(r + 1).padStart(2, "0")}:${String(c + 1).padStart(2, "0")}`;
      cell.addEventListener("click", () => handleCellClick(r, c));
      board.appendChild(cell);
    }
  }
}

function canPay(def) {
  return state.coffee >= (def.coffee || 0) && state.memory >= (def.memory || 0);
}

function resourceShortage(def) {
  const missing = [];
  const coffee = Math.max(0, (def.coffee || 0) - state.coffee);
  const memory = Math.max(0, (def.memory || 0) - state.memory);
  if (coffee) missing.push(`${Math.ceil(coffee)} coffee`);
  if (memory) missing.push(`${Math.ceil(memory)} memory`);
  return missing.join(" / ") || "0";
}

function pay(def) {
  state.coffee -= def.coffee || 0;
  state.memory -= def.memory || 0;
}

function handleCellClick(row, col) {
  if (!state.selected || state.gameOver) return;
  const key = state.selected;
  if (state.selectedKind === "plant") {
    const def = plantDefs[key];
    if (col >= BUILD_COLS) {
      addLog("敌人生成区拒绝了你的种植请求。", "warn");
      return;
    }
    if (state.plants[row][col]) {
      addLog("这个格子已经有代码植物了。", "warn");
      return;
    }
    if (!canPay(def)) return;
    pay(def);
    state.plants[row][col] = {
      key,
      row,
      col,
      hp: def.hp,
      maxHp: def.hp,
      modules: [],
      lastAction: 0,
      stunnedUntil: 0,
      guardReady: true,
      modulePulseUntil: 0
    };
    addLog(`${def.name} 已部署到 ${rowNames[row]} 第 ${col + 1} 列。`, "good");
  } else {
    const def = moduleDefs[key];
    const plant = state.plants[row][col];
    if (!plant) {
      addLog("模块没有找到可以挂载的基础植物。", "warn");
      return;
    }
    if (plant.modules.length >= 2) {
      addLog(`${plantDefs[plant.key].name} 的模块槽已满。`, "warn");
      return;
    }
    if (plant.modules.includes(key)) {
      addLog("同一个模块已经挂上去了。", "warn");
      return;
    }
    if (!canPay(def)) return;
    pay(def);
    plant.modules.push(key);
    plant.modulePulseUntil = performance.now() + 900;
    addEffect(row, col, "blast");
    addLog(`${plantDefs[plant.key].name} 挂载 ${def.name} 模块：${moduleEffectText(plant, key)}`, "good");
  }
  updateUI();
  renderPlants();
}

function startGame() {
  if (state.gameOver) resetGame();
  state.running = true;
  state.paused = false;
  if (!state.waveActive && state.wave === 0 && state.enemies.length === 0) startNextWave();
  if (!state.waveActive && state.wave > 0 && state.wave < waves.length && state.enemies.length === 0) startNextWave();
  addLog("防线启动。main 分支进入保护状态。", "good");
  updateUI();
}

function togglePause() {
  if (!state.running) return;
  state.paused = !state.paused;
  addLog(state.paused ? "时间暂停，所有进程假装自己很忙。" : "进程恢复，敌人继续靠近。");
  if (!state.paused && !state.waveActive && state.wave > 0 && state.wave < waves.length && state.enemies.length === 0) startNextWave();
  updateUI();
}

function resetGame() {
  state.coffee = 175;
  state.memory = 70;
  state.lives = ROWS;
  state.wave = 0;
  state.running = false;
  state.paused = false;
  state.selected = null;
  state.selectedKind = null;
  state.plants = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => null));
  state.enemies = [];
  state.bullets = [];
  state.effects = [];
  state.pendingSpawns = [];
  state.lastTime = performance.now();
  state.enemyId = 1;
  state.bulletId = 1;
  state.updateProgress = 0;
  state.waveActive = false;
  state.gameOver = false;
  state.files = protectedFiles.map(file => ({ ...file, deleted: false, hits: 0, lastEnemy: "" }));
  applyFunctionExpression(functionInput.value, false);
  logEl.innerHTML = "";
  incidentModal.classList.remove("show");
  addLog("VS Code 工作区已重新打开。");
  addLog("请在编辑器战场中守护这些文件，敌人突破只会触发界面里的假删除。");
  renderPlants();
  renderActors();
  updateUI();
}

function startNextWave() {
  if (state.wave >= waves.length) return;
  state.wave += 1;
  state.waveActive = true;
  const now = performance.now();
  state.pendingSpawns = waves[state.wave - 1].map(spawn => ({ ...spawn, at: now + spawn.delay }));
  addLog(`第 ${state.wave} 波开始。${waveName(state.wave)} 正在接近。`, "warn");
  updateNextWave();
}

function waveName(num) {
  return ["首次更新", "稍后提醒我", "默认浏览器争夺", "会议和同步", "蓝屏降临"][num - 1] || "未知波次";
}

function spawnEnemy(kind, row, col = COLS - 0.25, copy = false) {
  const def = enemyDefs[kind];
  state.enemies.push({
    id: state.enemyId++,
    kind,
    row,
    col,
    hp: copy ? Math.round(def.hp * .45) : def.hp,
    maxHp: copy ? Math.round(def.hp * .45) : def.hp,
    lastAttack: 0,
    lastSkill: 0,
    usedSkill: false,
    copied: false,
    stoppedUntil: 0,
    copy
  });
  addLog(`${copy ? "冲突副本" : def.name} 正在尝试删除 ${state.files[row].path}。`);
}

function tick(time) {
  requestAnimationFrame(tick);
  if (!state.lastTime) state.lastTime = time;
  const dt = Math.min((time - state.lastTime) / 1000, .05);
  state.lastTime = time;
  if (!state.running || state.paused || state.gameOver) return;

  handleSpawns(time);
  updatePlants(time, dt);
  updateEnemies(time, dt);
  updateBullets(time, dt);
  updateEffects(time);
  checkWaveEnd();
  renderPlants();
  renderActors();
  updateUI();
}

function handleSpawns(time) {
  const ready = state.pendingSpawns.filter(spawn => spawn.at <= time);
  state.pendingSpawns = state.pendingSpawns.filter(spawn => spawn.at > time);
  ready.forEach(spawn => spawnEnemy(spawn.kind, spawn.row));
}

function updatePlants(time) {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const plant = state.plants[r][c];
      if (!plant || plant.stunnedUntil > time) continue;
      if (plant.key === "coffee") handleCoffee(plant, time);
      if (plant.key === "print") handlePrint(plant, time);
      if (plant.key === "rollback") handleRollback(plant, time);
      if (plant.key === "function") handleFunctionCannon(plant, time);
    }
  }
}

function hasModule(plant, key) {
  return plant.modules.includes(key);
}

function moduleEffectText(plant, key) {
  const plantName = plantDefs[plant.key].name;
  if (plant.key === "print" && key === "for") return "print + for 已生效，下一次攻击会连发 3 颗字符弹。";
  if (plant.key === "print" && key === "if") return "print + if 已生效，会优先瞄准快怪、精英怪和 Boss。";
  if (plant.key === "print" && key === "trycatch") return "print + try-catch 已生效，可以抵消一次停火或重启。";
  if (plant.key === "wall" && key === "else") return "if + else 已生效，墙破时会触发一次备用反击。";
  if (plant.key === "bug" && key === "rollback") return "bug + rollback 已生效，爆炸会额外击退敌人。";
  if (plant.key === "rollback" && key === "if") return "rollback + if 已生效，会优先回滚更危险的敌人。";
  if (key === "for") return `${plantName} 的触发频率提高。`;
  if (key === "if") return `${plantName} 获得条件判断，目标选择更聪明。`;
  if (key === "else") return `${plantName} 获得备用分支。`;
  if (key === "trycatch") return `${plantName} 获得一次异常保险。`;
  return `${plantName} 的行为已更新。`;
}

function handleCoffee(plant, time) {
  const interval = hasModule(plant, "for") ? 5200 : 7600;
  if (time - plant.lastAction < interval) return;
  plant.lastAction = time;
  const gain = hasModule(plant, "for") ? 40 : 25;
  state.coffee = Math.min(999, state.coffee + gain);
  addLog(`coffee 机产出 ${gain} coffee。`);
}

function handlePrint(plant, time) {
  const interval = hasModule(plant, "for") ? 1450 : 1850;
  if (time - plant.lastAction < interval) return;
  const target = chooseRowTarget(plant.row, hasModule(plant, "if"));
  if (!target) return;
  plant.lastAction = time;
  const count = hasModule(plant, "for") ? 3 : 1;
  for (let i = 0; i < count; i++) {
    state.bullets.push({
      id: state.bulletId++,
      row: plant.row,
      x: plant.col + .66 + i * .08,
      yOffset: (i - (count - 1) / 2) * .13,
      damage: hasModule(plant, "if") ? 30 : 24,
      speed: 2.9 + i * .12,
      glyph: i === 1 ? "{}" : ";"
    });
  }
}

function chooseRowTarget(row, preferThreat) {
  const rowEnemies = state.enemies.filter(enemy => enemy.row === row && enemy.col >= -0.2);
  if (!rowEnemies.length) return null;
  if (!preferThreat) return rowEnemies.sort((a, b) => a.col - b.col)[0];
  return rowEnemies.sort((a, b) => {
    const scoreA = enemyThreat(a);
    const scoreB = enemyThreat(b);
    return scoreB - scoreA || a.col - b.col;
  })[0];
}

function enemyThreat(enemy) {
  if (enemy.kind === "boss") return 100;
  if (enemy.kind === "restart") return 70;
  if (enemy.kind === "teams" || enemy.kind === "edge") return 60;
  return enemyDefs[enemy.kind].hp / 4;
}

function handleRollback(plant, time) {
  const interval = hasModule(plant, "for") ? 6500 : 8200;
  if (time - plant.lastAction < interval) return;
  const candidates = state.enemies
    .filter(enemy => enemy.row === plant.row && enemy.col > plant.col && enemy.col < COLS - 0.1)
    .sort((a, b) => a.col - b.col);
  const target = hasModule(plant, "if")
    ? candidates.find(enemy => ["boss", "teams", "edge"].includes(enemy.kind)) || candidates[0]
    : candidates[0];
  if (!target) return;
  plant.lastAction = time;
  const push = hasModule(plant, "for") ? 1.9 : 1.25;
  target.col = Math.min(COLS - 0.1, target.col + push);
  target.hp -= 12;
  addEffect(plant.row, plant.col, "blast");
  addLog(`git rollback 把 ${enemyDefs[target.kind].name} 送回了上一个版本，然后清理了自己的临时分支。`, "good");
  state.plants[plant.row][plant.col] = null;
}

function handleFunctionCannon(plant, time) {
  const interval = 12500;
  if (time - plant.lastAction < interval || state.memory < 60) return;
  const targetRow = rowWithMostEnemies();
  if (targetRow === null) return;
  plant.lastAction = time;
  state.memory -= 60;
  state.bullets.push({
    id: state.bulletId++,
    row: targetRow,
    x: plant.col + .66,
    yOffset: 0,
    damage: 92,
    speed: 2.2,
    glyph: "f(x)",
    wave: true,
    born: time,
    fn: state.functionFn,
    label: state.functionLabel
  });
  addLog(`函数炮载入 y = ${state.functionLabel}，炮弹开始按自定义函数移动。`, "good");
}

function applyFunctionExpression(rawExpression, announce = true) {
  const expression = rawExpression.trim() || "sin(x + t) * 0.33";
  const compiled = compileFunctionExpression(expression);
  if (!compiled.ok) {
    if (announce) addLog(`函数编译失败：${compiled.error}`, "bad");
    functionInput.value = state.functionExpression;
    return false;
  }
  state.functionExpression = expression;
  state.functionLabel = expression;
  state.functionFn = compiled.fn;
  formulaValue.textContent = expression;
  functionInput.value = expression;
  if (announce) addLog(`函数炮公式已更新：y = ${expression}`, "good");
  return true;
}

function compileFunctionExpression(expression) {
  const normalized = expression.replace(/\^/g, "**");
  if (!/^[0-9a-zA-Z_xXtT+\-*/().,\s%*]+$/.test(normalized)) {
    return { ok: false, error: "只允许数字、x、t、运算符和常用 Math 函数。" };
  }
  const identifiers = normalized.match(/[a-zA-Z_]+/g) || [];
  const allowed = new Set(["x", "t", "sin", "cos", "tan", "abs", "sqrt", "pow", "min", "max", "floor", "ceil", "round", "PI", "E"]);
  const invalid = identifiers.find(name => !allowed.has(name));
  if (invalid) return { ok: false, error: `${invalid} 不在允许列表里。` };
  try {
    const fn = new Function(
      "x",
      "t",
      `"use strict"; const {sin, cos, tan, abs, sqrt, pow, min, max, floor, ceil, round, PI, E} = Math; return (${normalized});`
    );
    const test = fn(1, 1);
    if (!Number.isFinite(test)) return { ok: false, error: "公式结果不是有效数字。" };
    return {
      ok: true,
      fn: (x, t) => {
        const value = Number(fn(x, t));
        if (!Number.isFinite(value)) return 0;
        return Math.max(-.82, Math.min(.82, value));
      }
    };
  } catch (error) {
    return { ok: false, error: "公式语法不对。" };
  }
}

function rowWithMostEnemies() {
  let bestRow = null;
  let bestCount = 0;
  for (let r = 0; r < ROWS; r++) {
    const count = state.enemies.filter(enemy => enemy.row === r).length;
    if (count > bestCount) {
      bestCount = count;
      bestRow = r;
    }
  }
  return bestRow;
}

function updateEnemies(time, dt) {
  for (const enemy of [...state.enemies]) {
    const def = enemyDefs[enemy.kind];
    useEnemySkill(enemy, time);
    const blockingPlant = getBlockingPlant(enemy);
    if (blockingPlant) {
      attackPlant(enemy, blockingPlant, time);
    } else if (enemy.stoppedUntil <= time) {
      enemy.col -= def.speed * dt;
    }

    if (enemy.col < -0.45) {
      state.enemies = state.enemies.filter(item => item.id !== enemy.id);
      markFileDeleted(enemy.row, def.name);
      if (remainingFiles() <= 0) loseGame();
    }
  }
}

function markFileDeleted(row, enemyName) {
  const file = state.files[row];
  file.hits += 1;
  file.lastEnemy = enemyName;
  if (!file.deleted) {
    file.deleted = true;
    addEffect(row, 0, "blast");
    addLog(`${enemyName} 突破防线：rm -rf ${file.path}`, "bad");
    addLog(`${file.path} 在 Explorer 中被标记为 deleted。真实文件没有被删除。`, "warn");
  } else {
    addLog(`${enemyName} 又检查了一遍 ${file.path}，发现它已经在假删除列表里。`, "bad");
  }
  state.lives = remainingFiles();
  if (state.lives <= Math.ceil(ROWS / 2) && !state.gameOver) {
    addLog("守护文件数量过半告急，建议补墙、补 rollback、给关键植物挂 try-catch。", "warn");
  }
}

function remainingFiles() {
  return state.files.filter(file => !file.deleted).length;
}

function useEnemySkill(enemy, time) {
  if (enemy.kind === "update" && !enemy.usedSkill && enemy.col < 5.4) {
    enemy.usedSkill = true;
    state.updateProgress = Math.min(100, state.updateProgress + 22);
    stunRow(enemy.row, time, 900, "Windows 更新兵读条完成，本行代码植物卡顿。");
  }
  if (enemy.kind === "teams" && time - enemy.lastSkill > 8200 && enemy.col < 7.2) {
    enemy.lastSkill = time;
    stunRow(enemy.row, time, 2200, "Teams 会议怪发起会议，整行进入同步进度。");
  }
  if (enemy.kind === "onedrive" && !enemy.copied && enemy.col < 6.8 && !enemy.copy) {
    enemy.copied = true;
    spawnEnemy("onedrive", enemy.row, Math.min(COLS - 0.2, enemy.col + .35), true);
    addLog("OneDrive 同步怪制造了一个冲突副本。", "warn");
  }
  if (enemy.kind === "boss" && time - enemy.lastSkill > 7400 && enemy.col < 7.5) {
    enemy.lastSkill = time;
    stunRow(enemy.row, time, 2600, "蓝屏巨人释放 MEMORY_MANAGEMENT。", "bad");
  }
}

function stunRow(row, time, duration, message) {
  let protectedCount = 0;
  for (let c = 0; c < BUILD_COLS; c++) {
    const plant = state.plants[row][c];
    if (!plant) continue;
    if (hasModule(plant, "trycatch") && plant.guardReady) {
      plant.guardReady = false;
      protectedCount += 1;
      addLog(`try-catch 捕获了 ${plantDefs[plant.key].name} 的异常。`, "good");
    } else {
      plant.stunnedUntil = Math.max(plant.stunnedUntil, time + duration);
    }
  }
  addLog(protectedCount ? `${message} ${protectedCount} 个 try-catch 保险生效。` : message, protectedCount ? "warn" : "bad");
}

function getBlockingPlant(enemy) {
  const col = Math.floor(enemy.col);
  if (col < 0 || col >= BUILD_COLS) return null;
  const plant = state.plants[enemy.row][col];
  if (!plant) return null;
  const edge = col + .72;
  return enemy.col <= edge ? plant : null;
}

function attackPlant(enemy, plant, time) {
  const def = enemyDefs[enemy.kind];
  if (time - enemy.lastAttack < def.attackRate) return;
  enemy.lastAttack = time;
  plant.hp -= def.damage;

  if (enemy.kind === "restart") {
    if (hasModule(plant, "trycatch") && plant.guardReady) {
      plant.guardReady = false;
      addLog("try-catch 捕获了一次强制重启。", "good");
    } else {
      plant.stunnedUntil = Math.max(plant.stunnedUntil, time + 2600);
      addLog(`强制重启车让 ${plantDefs[plant.key].name} 进入重启中。`, "bad");
    }
  }

  if (enemy.kind === "edge" && time - enemy.lastSkill > 3300) {
    enemy.lastSkill = time;
    if (hasModule(plant, "trycatch") && plant.guardReady) {
      plant.guardReady = false;
      addLog("try-catch 拒绝了默认浏览器修改。", "good");
    } else {
      plant.stunnedUntil = Math.max(plant.stunnedUntil, time + 3300);
      addLog(`Edge 传教士正在劝说 ${plantDefs[plant.key].name}。`, "warn");
    }
  }

  if (plant.hp <= 0) destroyPlant(plant);
}

function destroyPlant(plant) {
  if (plant.key === "wall" && hasModule(plant, "else")) {
    addEffect(plant.row, plant.col, "blast");
    state.enemies
      .filter(enemy => enemy.row === plant.row && Math.abs(enemy.col - plant.col) < 1.6)
      .forEach(enemy => enemy.hp -= 70);
    addLog("else 反击墙触发备用分支，附近敌人被弹开。", "good");
  }
  addLog(`${plantDefs[plant.key].name} 被摧毁。`, "bad");
  state.plants[plant.row][plant.col] = null;
}

function updateBullets(time, dt) {
  for (const bullet of [...state.bullets]) {
    bullet.x += bullet.speed * dt;
    if (bullet.wave) {
      const age = (time - bullet.born) / 1000;
      bullet.yOffset = bullet.fn ? bullet.fn(bullet.x, age * 4) : Math.sin(age * 8 + bullet.x * 1.2) * .33;
    }
    const hit = state.enemies.find(enemy =>
      enemy.row === bullet.row &&
      enemy.col <= bullet.x + .22 &&
      enemy.col >= bullet.x - .34
    );
    if (hit) {
      hit.hp -= bullet.damage;
      state.bullets = state.bullets.filter(item => item.id !== bullet.id);
      if (hit.hp <= 0) killEnemy(hit);
    } else if (bullet.x > COLS + .35) {
      state.bullets = state.bullets.filter(item => item.id !== bullet.id);
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < BUILD_COLS; c++) {
      const plant = state.plants[r][c];
      if (plant?.key === "bug") {
        const enemy = state.enemies.find(item => item.row === r && Math.abs(item.col - c) < .42);
        if (enemy) triggerMine(plant, enemy);
      }
    }
  }
}

function triggerMine(plant, enemy) {
  const damage = hasModule(plant, "for") ? 190 : 125;
  enemy.hp -= damage;
  if (hasModule(plant, "rollback")) enemy.col = Math.min(COLS - 0.2, enemy.col + 1.8);
  addEffect(plant.row, plant.col, "blast");
  addLog(hasModule(plant, "rollback") ? "bug 雷爆炸并触发 rollback，把敌人炸回去了。" : "bug 雷触发，错误爆炸。", "good");
  state.plants[plant.row][plant.col] = null;
  if (enemy.hp <= 0) killEnemy(enemy);
}

function killEnemy(enemy) {
  const def = enemyDefs[enemy.kind];
  state.enemies = state.enemies.filter(item => item.id !== enemy.id);
  const memoryGain = enemy.kind === "boss" ? 80 : (["teams", "edge", "onedrive"].includes(enemy.kind) ? 12 : 6);
  state.memory = Math.min(999, state.memory + memoryGain);
  state.coffee = Math.min(999, state.coffee + (enemy.kind === "boss" ? 60 : 8));
  addLog(`${def.name} 被清理。回收 ${memoryGain} memory。`, "good");
}

function addEffect(row, col, type) {
  state.effects.push({ row, col, type, until: performance.now() + 300 });
}

function updateEffects(time) {
  state.effects = state.effects.filter(effect => effect.until > time);
}

function checkWaveEnd() {
  if (!state.waveActive) return;
  if (state.pendingSpawns.length === 0 && state.enemies.length === 0) {
    state.waveActive = false;
    if (state.wave >= waves.length) {
      winGame();
    } else {
      addLog(`第 ${state.wave} 波结束。下一波正在排队。`, "good");
      setTimeout(() => {
        if (state.running && !state.paused && !state.gameOver && !state.waveActive) startNextWave();
      }, 3200);
    }
  }
}

function winGame() {
  state.running = false;
  state.gameOver = true;
  addLog("编译成功。工作区文件幸存。", "good");
  addLog("你获得了 3 杯冷掉的咖啡。", "good");
  updateUI();
}

function loseGame() {
  state.running = false;
  state.gameOver = true;
  addLog("Explorer 显示：你的代码文件被删掉了。", "bad");
  addLog("安全提示：这只是游戏状态，真实项目文件没有被删除。", "warn");
  showIncidentModal();
  updateUI();
}

function showIncidentModal() {
  const deleted = state.files.filter(file => file.deleted);
  fakeDeleteList.innerHTML = deleted.map(file => (
    `<li>deleted: ${file.path}${file.lastEnemy ? `  // by ${file.lastEnemy}` : ""}</li>`
  )).join("") || "<li>deleted: workspace/*</li>";
  incidentModal.classList.add("show");
}

function renderPlants() {
  document.querySelectorAll(".cell").forEach(cell => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const plant = state.plants[row][col];
    cell.querySelectorAll(".plant").forEach(node => node.remove());
    if (!plant) return;
    const def = plantDefs[plant.key];
    const plantEl = document.createElement("div");
    const now = performance.now();
    plantEl.className = `plant ${plant.stunnedUntil > now ? "stunned" : ""} ${plant.modulePulseUntil > now ? "module-pulse" : ""}`;
    const modules = plant.modules.map(module => {
      const mod = moduleDefs[module];
      return `<span class="module-badge ${module}">${mod.mark}</span>`;
    }).join("");
    plantEl.innerHTML = `
      <img src="${def.icon}" alt="" />
      <div class="module-badges">${modules}</div>
      <div class="hpbar"><span style="width:${Math.max(0, plant.hp / plant.maxHp * 100)}%"></span></div>
    `;
    cell.appendChild(plantEl);
  });
}

function renderActors() {
  actorLayer.innerHTML = "";
  state.enemies.forEach(enemy => {
    const def = enemyDefs[enemy.kind];
    const enemyEl = document.createElement("div");
    enemyEl.className = `enemy ${def.boss ? "boss" : ""}`;
    enemyEl.style.left = `${cellX(enemy.col)}px`;
    enemyEl.style.top = `${cellY(enemy.row)}px`;
    enemyEl.innerHTML = `
      <span class="tag">${enemy.copy ? "copy" : def.tag}</span>
      <img src="${def.icon}" alt="" />
      <div class="enemy-hp"><span style="width:${Math.max(0, enemy.hp / enemy.maxHp * 100)}%"></span></div>
    `;
    actorLayer.appendChild(enemyEl);
  });

  state.bullets.forEach(bullet => {
    const bulletEl = document.createElement("div");
    bulletEl.className = "bullet";
    bulletEl.style.left = `${cellX(bullet.x)}px`;
    bulletEl.style.top = `${cellY(bullet.row) + bullet.yOffset * CELL_H}px`;
    bulletEl.textContent = bullet.glyph;
    actorLayer.appendChild(bulletEl);
  });

  state.effects.forEach(effect => {
    const el = document.createElement("div");
    el.className = effect.type;
    el.style.left = `${cellX(effect.col)}px`;
    el.style.top = `${cellY(effect.row)}px`;
    actorLayer.appendChild(el);
  });
}

function updateUI() {
  document.getElementById("coffeeValue").textContent = Math.floor(state.coffee);
  document.getElementById("memoryValue").textContent = Math.floor(state.memory);
  document.getElementById("waveValue").textContent = state.wave;
  document.getElementById("livesValue").textContent = state.lives;
  document.getElementById("guardValue").textContent = `${remainingFiles()}/${ROWS}`;
  document.getElementById("selectedValue").textContent = state.selected ? selectedName() : "none";
  document.getElementById("stateValue").textContent = state.gameOver ? "done" : state.paused ? "paused" : state.running ? "running" : "ready";
  document.getElementById("plantCount").textContent = countPlants();
  document.getElementById("enemyCount").textContent = state.enemies.length;
  document.getElementById("bulletCount").textContent = state.bullets.length;
  document.getElementById("updateValue").textContent = `${state.updateProgress}%`;
  document.getElementById("safetyStatus").textContent = state.gameOver
    ? "simulation only: real files are safe"
    : "guarding workspace files";

  document.querySelectorAll(".card").forEach(card => {
    const key = card.dataset.key;
    const def = card.dataset.kind === "plant" ? plantDefs[key] : moduleDefs[key];
    card.classList.toggle("selected", state.selected === key && state.selectedKind === def.type);
    card.classList.toggle("disabled", !canPay(def));
  });
  updateNextWave();
  renderFileStatus();
}

function renderFileStatus() {
  fileTree.innerHTML = state.files.map((file, index) => `
    <div class="file-row ${index === 1 ? "active" : ""} ${file.deleted ? "deleted" : ""}">
      <span class="file-icon">${file.icon}</span>
      <span title="${file.path}">${file.path}</span>
      <span class="file-status">${file.deleted ? "deleted" : "safe"}</span>
    </div>
  `).join("");

  protectedList.innerHTML = state.files.map(file => `
    <div class="protected-item ${file.deleted ? "deleted" : ""}">
      <span title="${file.path}">${file.path}</span>
      <strong>${file.deleted ? "lost" : "safe"}</strong>
    </div>
  `).join("");

  document.querySelectorAll(".row-label").forEach(label => {
    const row = Number(label.dataset.row);
    label.classList.toggle("deleted", Boolean(state.files[row]?.deleted));
  });
  document.querySelectorAll(".cell").forEach(cell => {
    const row = Number(cell.dataset.row);
    cell.classList.toggle("file-lost", Boolean(state.files[row]?.deleted));
  });
}

function selectedName() {
  if (state.selectedKind === "plant") return plantDefs[state.selected].name;
  return moduleDefs[state.selected].name;
}

function countPlants() {
  let count = 0;
  for (const row of state.plants) for (const plant of row) if (plant) count += 1;
  return count;
}

function updateNextWave() {
  const next = waves[Math.min(state.wave, waves.length - 1)] || [];
  const counts = next.reduce((acc, item) => {
    acc[item.kind] = (acc[item.kind] || 0) + 1;
    return acc;
  }, {});
  const box = document.getElementById("nextWave");
  box.innerHTML = Object.entries(counts).map(([kind, count]) => {
    const def = enemyDefs[kind];
    return `
      <div class="wave-item">
        <img src="${def.icon}" alt="" />
        <span>${def.name}</span>
        <strong>x${count}</strong>
      </div>
    `;
  }).join("") || `<div class="wave-item">无</div>`;
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("pauseBtn").addEventListener("click", togglePause);
document.getElementById("resetBtn").addEventListener("click", resetGame);
document.getElementById("modalResetBtn").addEventListener("click", resetGame);
document.getElementById("applyFunctionBtn").addEventListener("click", () => applyFunctionExpression(functionInput.value));
functionInput.addEventListener("keydown", event => {
  if (event.key === "Enter") applyFunctionExpression(functionInput.value);
});

createCards();
createBoard();
resetGame();
requestAnimationFrame(tick);
