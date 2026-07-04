const ASSET = "../微软大战代码_素材库/图片资源/";
const MAX_HAND = 4;
const DRAW_CARD_COST = 25;

const protectedFiles = [
  { path: "src/main.ts", short: "main.ts", icon: "TS", maxHp: 100, code: "bootstrapWorkspace(vscode, weapons, coffee);" },
  { path: "src/defense.ts", short: "defense.ts", icon: "TS", maxHp: 115, code: "export const guard = files.map(file => file.safe);" },
  { path: "src/waves.json", short: "waves.json", icon: "{}", maxHp: 90, code: "\"spawn\": [\"update\", \"edge\", \"teams\"]" },
  { path: "assets/plants.svg", short: "plants.svg", icon: "SVG", maxHp: 90, code: "<weapon id=\"print-cannon\" orbit=\"vscode\" />" },
  { path: "README.md", short: "README.md", icon: "MD", maxHp: 95, code: "## Misrosoft VS Code  // real files are safe" },
  { path: "package.json", short: "package.json", icon: "{}", maxHp: 105, code: "\"scripts\": { \"survive\": \"vite --host\" }" },
  { path: "毕业设计-最终版.zip", short: "最终版.zip", icon: "ZIP", maxHp: 140, code: "archive.lock(\"final-final-never-delete.zip\");" }
];

const pollutionSnippets = [
  "TypeError: Cannot read properties of undefined",
  "const everything: any = panic();",
  "<<<<<<< HEAD   =======   >>>>>>> windows-update",
  "TODO: 明天一定修，今天先上线",
  "Module not found: dependency went missing",
  "SyntaxError: Unexpected token coffee",
  "CORS policy blocked your last hope",
  "npm ERR! peer dependency chaos"
];

const enemyDefs = {
  update: {
    name: "Windows 更新",
    icon: ASSET + "怪物贴纸/windows_update_head.svg",
    hp: 46,
    speed: 54,
    damage: 10,
    xp: 8,
    tag: "37%"
  },
  edge: {
    name: "Edge 弹窗",
    icon: ASSET + "怪物贴纸/edge_head.svg",
    hp: 62,
    speed: 66,
    damage: 8,
    xp: 10,
    tag: "default"
  },
  teams: {
    name: "Teams 会议",
    icon: ASSET + "怪物贴纸/teams_head.svg",
    hp: 78,
    speed: 44,
    damage: 13,
    xp: 12,
    tag: "muted"
  },
  onedrive: {
    name: "OneDrive 冲突",
    icon: ASSET + "怪物贴纸/onedrive_head.svg",
    hp: 54,
    speed: 58,
    damage: 9,
    xp: 9,
    tag: "copy"
  },
  npmhell: {
    name: "npm 黑洞",
    icon: ASSET + "怪物贴纸/npm_hell_head.svg",
    hp: 96,
    speed: 34,
    damage: 15,
    xp: 16,
    tag: "deps"
  },
  defender: {
    name: "Defender 误杀",
    icon: ASSET + "怪物贴纸/defender_quarantine_head.svg",
    hp: 72,
    speed: 62,
    damage: 12,
    xp: 13,
    tag: "block"
  },
  yaml: {
    name: "YAML 缩进",
    icon: ASSET + "怪物贴纸/yaml_indent_head.svg",
    hp: 58,
    speed: 74,
    damage: 9,
    xp: 11,
    tag: "indent"
  },
  requirement: {
    name: "需求变更",
    icon: ASSET + "怪物贴纸/requirement_change_head.svg",
    hp: 135,
    speed: 36,
    damage: 18,
    xp: 22,
    tag: "change"
  },
  boss: {
    name: "蓝屏合并冲突",
    icon: ASSET + "怪物贴纸/bsod_head.svg",
    hp: 1100,
    speed: 28,
    damage: 24,
    xp: 80,
    tag: "BSOD",
    boss: true
  }
};

const weaponDefs = {
  print: {
    name: "print 炮",
    icon: ASSET + "植物与代码图标/plant_print_cannon.svg",
    text: "自动喷出字符弹，最稳定的主武器。"
  },
  coffee: {
    name: "coffee 机",
    icon: ASSET + "植物与代码图标/plant_coffee_machine.svg",
    text: "提高 coffee 掉落收益，并缓慢回血。"
  },
  bug: {
    name: "bug 雷",
    icon: ASSET + "植物与代码图标/plant_bug_mine.svg",
    text: "周期性丢出高伤害 bug 雷。"
  },
  rollback: {
    name: "rollback",
    icon: ASSET + "植物与代码图标/plant_rollback.svg",
    text: "定期释放回滚脉冲，推开附近事故。"
  },
  function: {
    name: "函数炮",
    icon: ASSET + "植物与代码图标/plant_function_cannon.svg",
    text: "发射按曲线飞行的函数弹。"
  },
  docker: {
    name: "Docker",
    icon: ASSET + "植物与代码图标/devicon_docker_original.svg",
    text: "生成容器护盾，撞到敌人会造成伤害。"
  },
  typescript: {
    name: "TypeScript",
    icon: ASSET + "植物与代码图标/devicon_typescript_original.svg",
    text: "锁定高威胁目标，发射类型检查蓝弹。"
  },
  javascript: {
    name: "JavaScript",
    icon: ASSET + "植物与代码图标/devicon_javascript_original.svg",
    text: "高频热修复飞镖，射速快但略微随机。"
  },
  python: {
    name: "Python",
    icon: ASSET + "植物与代码图标/plant_python_tool.svg",
    text: "自动化脚本扫场，对成群敌人很好用。"
  },
  idea: {
    name: "IDEA",
    icon: ASSET + "植物与代码图标/plant_idea_tool.svg",
    text: "重构激光优先打最硬的敌人。"
  },
  tomcat: {
    name: "Tomcat",
    icon: ASSET + "植物与代码图标/plant_tomcat_tool.svg",
    text: "喷出 8080 火球，压制正面事故。"
  },
  springboot: {
    name: "Spring Boot",
    icon: ASSET + "植物与代码图标/plant_springboot_tool.svg",
    text: "健康检查光环，持续恢复并清掉小伤害。"
  }
};

const cardDefs = {
  ctrlS: {
    name: "Ctrl+S",
    icon: ASSET + "战斗地点_VSCode/devicon_vscode_original.svg",
    type: "闪",
    cost: 18,
    text: "保存冲击波，击退并伤害周围敌人"
  },
  kill9: {
    name: "kill -9",
    icon: ASSET + "植物与代码图标/simpleicons_git.svg",
    type: "杀",
    cost: 28,
    text: "强制终止最危险的事故进程"
  },
  stackoverflow: {
    name: "Stack Overflow",
    icon: ASSET + "植物与代码图标/simpleicons_stackoverflow.svg",
    type: "锦囊",
    cost: 22,
    text: "全屏答案弹幕，但会招来隐藏 bug"
  },
  stash: {
    name: "Git Stash",
    icon: ASSET + "植物与代码图标/devicon_git_original.svg",
    type: "锦囊",
    cost: 20,
    text: "短暂无敌，并保护一个受损文件"
  },
  dockerBuild: {
    name: "Docker Build",
    icon: ASSET + "植物与代码图标/devicon_docker_original.svg",
    type: "装备",
    cost: 24,
    text: "立刻获得容器护盾"
  },
  hotCoffee: {
    name: "热咖啡",
    icon: ASSET + "植物与代码图标/simpleicons_coffeescript.svg",
    type: "桃",
    cost: 10,
    text: "回血并获得 coffee"
  },
  ci: {
    name: "CI Pipeline",
    icon: ASSET + "植物与代码图标/simpleicons_github.svg",
    type: "延时锦囊",
    cost: 30,
    text: "3 秒后全屏扫描小怪"
  },
  altF4: {
    name: "Alt+F4",
    icon: ASSET + "系统UI梗图/restart_prompt_mock.svg",
    type: "闪",
    cost: 18,
    text: "关闭全部弹窗并打断 Edge"
  }
};

const arena = document.getElementById("arena");
const arenaLayer = document.getElementById("arenaLayer");
const toastLayer = document.getElementById("toastLayer");
const playerEl = document.getElementById("player");
const playerWeapons = document.getElementById("playerWeapons");
const fileList = document.getElementById("fileList");
const logEl = document.getElementById("log");
const codeStatusList = document.getElementById("codeStatusList");
const cardHand = document.getElementById("cardHand");
const drawCardBtn = document.getElementById("drawCardBtn");
const upgradeOverlay = document.getElementById("upgradeOverlay");
const upgradeChoices = document.getElementById("upgradeChoices");
const incidentModal = document.getElementById("incidentModal");
const fakeDeleteList = document.getElementById("fakeDeleteList");

const state = {
  running: false,
  paused: false,
  gameOver: false,
  upgrading: false,
  elapsed: 0,
  lastTime: 0,
  width: 800,
  height: 420,
  coffee: 35,
  level: 1,
  xp: 0,
  xpNeed: 55,
  player: {
    x: 400,
    y: 220,
    hp: 100,
    maxHp: 100,
    speed: 250,
    invulnUntil: 0,
    shieldUntil: 0
  },
  keys: new Set(),
  enemies: [],
  projectiles: [],
  pickups: [],
  effects: [],
  mines: [],
  popups: [],
  toasts: [],
  delayed: [],
  hand: [],
  files: [],
  weapons: {},
  timers: {},
  enemyId: 1,
  projectileId: 1,
  pickupId: 1,
  cardId: 1,
  bossSpawned: false,
  spawnTimer: 0,
  popupTimer: 12,
  nextIncident: "Windows 更新",
  functionName: "fixBug",
  uiTimer: 0
};

function resetGame() {
  updateArenaSize();
  state.running = false;
  state.paused = false;
  state.gameOver = false;
  state.upgrading = false;
  state.elapsed = 0;
  state.lastTime = performance.now();
  state.coffee = 35;
  state.level = 1;
  state.xp = 0;
  state.xpNeed = 55;
  state.player = {
    x: state.width / 2,
    y: state.height / 2,
    hp: 100,
    maxHp: 100,
    speed: 250,
    invulnUntil: 0,
    shieldUntil: 0
  };
  state.keys.clear();
  state.enemies = [];
  state.projectiles = [];
  state.pickups = [];
  state.effects = [];
  state.mines = [];
  state.popups = [];
  state.toasts = [];
  state.delayed = [];
  state.hand = [];
  state.files = protectedFiles.map(file => ({
    ...file,
    hp: file.maxHp,
    deleted: false,
    lastHit: "",
    pollution: 0,
    problem: "",
    flash: 0
  }));
  state.weapons = { print: 1 };
  state.timers = {};
  state.enemyId = 1;
  state.projectileId = 1;
  state.pickupId = 1;
  state.cardId = 1;
  state.bossSpawned = false;
  state.spawnTimer = 0;
  state.popupTimer = 10;
  state.nextIncident = "Windows 更新";
  state.functionName = "fixBug";
  state.uiTimer = 0;
  logEl.innerHTML = "";
  toastLayer.innerHTML = "";
  upgradeOverlay.classList.remove("show");
  incidentModal.classList.remove("show");
  addLog("VS Code 图标已经进入编辑器战场。");
  addLog("植物现在是武器：print 炮会自动开火，升级时可以解锁更多程序员武器。", "good");
  drawCard(false);
  drawCard(false);
  renderAll();
}

function startGame() {
  if (state.gameOver) resetGame();
  state.keys.clear();
  state.running = true;
  state.paused = false;
  state.lastTime = performance.now();
  arena.focus();
  addLog("桌面幸存者模式启动。别让微软事故把工作区盖满。", "good");
  renderAll();
}

function togglePause() {
  if (!state.running || state.gameOver || state.upgrading) return;
  state.paused = !state.paused;
  addLog(state.paused ? "暂停：老板路过，窗口先假装很正经。" : "继续：弹窗又活了。");
  renderAll();
}

function updateArenaSize() {
  const rect = arena.getBoundingClientRect();
  state.width = Math.max(520, rect.width || 800);
  state.height = Math.max(300, rect.height || 420);
}

function addLog(text, type = "") {
  const line = document.createElement("div");
  line.className = `log-line ${type}`;
  line.innerHTML = `<span class="prompt">&gt;</span> ${text}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
  while (logEl.children.length > 90) logEl.removeChild(logEl.firstChild);
  addToast(text, type);
}

function addToast(text, type = "") {
  state.toasts.push({
    id: Math.random().toString(36).slice(2),
    text,
    type,
    until: performance.now() + 2400
  });
  while (state.toasts.length > 3) state.toasts.shift();
}

function drawCard(announce = true) {
  if (state.hand.length >= MAX_HAND) {
    if (announce) addLog("锦囊手牌已满，先丢出去一张再抽。", "warn");
    return false;
  }
  const keys = Object.keys(cardDefs);
  const key = keys[Math.floor(Math.random() * keys.length)];
  state.hand.push({ id: state.cardId++, key });
  if (announce) addLog(`摸到锦囊：${cardDefs[key].name}。`);
  renderHand();
  return true;
}

function buyCard() {
  if (state.coffee < DRAW_CARD_COST) {
    addLog(`抽卡需要 ${DRAW_CARD_COST} coffee，还差 ${DRAW_CARD_COST - state.coffee}。`, "warn");
    return;
  }
  state.coffee -= DRAW_CARD_COST;
  drawCard(true);
  renderAll();
}

function playCard(id) {
  if (state.gameOver || state.upgrading) return;
  const card = state.hand.find(item => item.id === id);
  if (!card) return;
  const def = cardDefs[card.key];
  if (state.coffee < def.cost) {
    addLog(`${def.name} 需要 ${def.cost} coffee 才能打出。`, "warn");
    return;
  }
  state.coffee -= def.cost;
  resolveCard(card.key);
  state.hand = state.hand.filter(item => item.id !== id);
  renderAll();
}

function resolveCard(key) {
  const now = performance.now();
  if (key === "ctrlS") {
    savePulse(170, 82);
    state.player.invulnUntil = Math.max(state.player.invulnUntil, now + 900);
    addLog("Ctrl+S 保存冲击波扩散：附近事故被推开。", "good");
  }
  if (key === "kill9") {
    killDangerEnemy();
  }
  if (key === "stackoverflow") {
    for (let i = 0; i < 18; i++) {
      const angle = Math.PI * 2 * i / 18;
      spawnProjectile(state.player.x, state.player.y, Math.cos(angle), Math.sin(angle), 220, 38, "try/catch", "function");
    }
    spawnEnemy("yaml");
    addLog("Stack Overflow 高赞答案全屏飞出，但顺手带来了一个隐藏缩进问题。", "warn");
  }
  if (key === "stash") {
    state.player.invulnUntil = Math.max(state.player.invulnUntil, now + 2600);
    healWorstFile(28);
    addEffect(state.player.x, state.player.y, "save");
    addLog("Git Stash 把当前混乱暂存了：短暂无敌，并恢复最危险文件。", "good");
  }
  if (key === "dockerBuild") {
    state.player.shieldUntil = Math.max(state.player.shieldUntil, now + 6500);
    unlockOrLevelWeapon("docker");
    addLog("Docker Build 完成：VS Code 套上容器护盾。", "good");
  }
  if (key === "hotCoffee") {
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 26);
    gainCoffee(24, false);
    addLog("热咖啡入口：回血并提神。", "good");
  }
  if (key === "ci") {
    state.delayed.push({ type: "ci", at: now + 3000 });
    addLog("CI Pipeline 已排队，3 秒后全屏扫描小怪。");
  }
  if (key === "altF4") {
    closePopups();
  }
}

function renderHand() {
  cardHand.innerHTML = state.hand.map(card => {
    const def = cardDefs[card.key];
    return `
      <button class="hand-card" data-id="${card.id}">
        <span class="card-type">${def.type}</span>
        <img src="${def.icon}" alt="" />
        <span class="hand-name">${def.name}</span>
        <span class="hand-text">${def.text}</span>
        <span class="hand-cost">${def.cost} coffee</span>
      </button>
    `;
  }).join("");
  cardHand.querySelectorAll(".hand-card").forEach(button => {
    button.addEventListener("click", () => playCard(Number(button.dataset.id)));
  });
}

function tick(time) {
  requestAnimationFrame(tick);
  updateArenaSize();
  const dt = Math.min((time - state.lastTime) / 1000, .05);
  state.lastTime = time;
  if (!state.running || state.paused || state.gameOver || state.upgrading) {
    renderActors();
    return;
  }

  state.elapsed += dt;
  updatePlayer(dt);
  updateSpawns(dt);
  updateWeapons(dt, time);
  updateProjectiles(dt);
  updateEnemies(dt, time);
  updateMines();
  updatePickups(dt);
  updatePopups(dt);
  updateDelayed(time);
  updateCodeLines(dt, time);
  updateEffects(time);
  checkBoss(time);
  renderActors();
  state.uiTimer -= dt;
  if (state.uiTimer <= 0) {
    state.uiTimer = .12;
    renderRuntimePanels();
  }
}

function updatePlayer(dt) {
  let dx = 0;
  let dy = 0;
  if (state.keys.has("arrowleft") || state.keys.has("a")) dx -= 1;
  if (state.keys.has("arrowright") || state.keys.has("d")) dx += 1;
  if (state.keys.has("arrowup") || state.keys.has("w")) dy -= 1;
  if (state.keys.has("arrowdown") || state.keys.has("s")) dy += 1;
  const len = Math.hypot(dx, dy) || 1;
  const slow = state.popups.length ? .92 : 1;
  state.player.x = clamp(state.player.x + dx / len * state.player.speed * slow * dt, 28, state.width - 28);
  state.player.y = clamp(state.player.y + dy / len * state.player.speed * slow * dt, 28, state.height - 28);
}

function normalizeInputKey(event) {
  const codeMap = {
    ArrowLeft: "arrowleft",
    ArrowRight: "arrowright",
    ArrowUp: "arrowup",
    ArrowDown: "arrowdown",
    KeyA: "a",
    KeyD: "d",
    KeyW: "w",
    KeyS: "s"
  };
  return codeMap[event.code] || event.key.toLowerCase();
}

function updateSpawns(dt) {
  const pressure = Math.min(1.8, 1 + state.elapsed / 180);
  state.spawnTimer -= dt;
  if (state.spawnTimer <= 0) {
    const count = state.elapsed > 110 ? 2 : 1;
    for (let i = 0; i < count; i++) spawnEnemy(pickEnemyKind());
    state.spawnTimer = Math.max(.55, 1.75 / pressure);
  }
  state.popupTimer -= dt;
  if (state.popupTimer <= 0) {
    spawnPopup();
    state.popupTimer = Math.max(9, 20 - state.elapsed / 14);
  }
}

function pickEnemyKind() {
  const t = state.elapsed;
  const pool = ["update", "edge", "teams", "onedrive"];
  if (t > 25) pool.push("yaml", "defender");
  if (t > 50) pool.push("npmhell", "yaml", "edge");
  if (t > 85) pool.push("requirement", "defender", "onedrive");
  return pool[Math.floor(Math.random() * pool.length)];
}

function spawnEnemy(kind, x = null, y = null) {
  const def = enemyDefs[kind];
  const pos = x === null ? randomEdgePosition() : { x, y };
  const scale = 1 + Math.min(.8, state.elapsed / 260);
  state.enemies.push({
    id: state.enemyId++,
    kind,
    x: pos.x,
    y: pos.y,
    hp: Math.round(def.hp * scale),
    maxHp: Math.round(def.hp * scale),
    speed: def.speed * (kind === "boss" ? 1 : 1 + Math.min(.22, state.elapsed / 500)),
    damage: def.damage,
    hitCooldown: 0,
    skillTimer: 0,
    codeTouchCooldown: .6 + Math.random() * 1.4,
    copied: false,
    boss: Boolean(def.boss)
  });
}

function randomEdgePosition() {
  const side = Math.floor(Math.random() * 4);
  if (side === 0) return { x: -30, y: Math.random() * state.height };
  if (side === 1) return { x: state.width + 30, y: Math.random() * state.height };
  if (side === 2) return { x: Math.random() * state.width, y: -30 };
  return { x: Math.random() * state.width, y: state.height + 30 };
}

function updateWeapons(dt, time) {
  handlePrint(dt);
  handleJavaScript(dt);
  handleTypeScript(dt);
  handleDocker(dt, time);
  handleCoffee(dt);
  handleBug(dt);
  handleRollback(dt);
  handleFunction(dt, time);
  handlePython(dt);
  handleIdea(dt);
  handleTomcat(dt);
  handleSpringBoot(dt);
}

function weaponLevel(key) {
  return state.weapons[key] || 0;
}

function tickTimer(name, dt, interval) {
  state.timers[name] = (state.timers[name] || 0) - dt;
  if (state.timers[name] > 0) return false;
  state.timers[name] = interval;
  return true;
}

function handlePrint(dt) {
  const level = weaponLevel("print");
  if (!level) return;
  const interval = Math.max(.42, .95 - level * .08);
  if (!tickTimer("print", dt, interval)) return;
  const target = nearestEnemy();
  const angle = target ? Math.atan2(target.y - state.player.y, target.x - state.player.x) : -Math.PI / 2;
  for (let i = 0; i < Math.min(4, level); i++) {
    const spread = (i - (Math.min(4, level) - 1) / 2) * .13;
    spawnProjectile(state.player.x, state.player.y, Math.cos(angle + spread), Math.sin(angle + spread), 340, 18 + level * 3, "console.log()", "print");
  }
}

function handleJavaScript(dt) {
  const level = weaponLevel("javascript");
  if (!level) return;
  if (!tickTimer("javascript", dt, Math.max(.22, .46 - level * .035))) return;
  const angle = Math.random() * Math.PI * 2;
  spawnProjectile(state.player.x, state.player.y, Math.cos(angle), Math.sin(angle), 390, 10 + level * 2, "=> {}", "javascript");
}

function handleTypeScript(dt) {
  const level = weaponLevel("typescript");
  if (!level) return;
  if (!tickTimer("typescript", dt, Math.max(.72, 1.18 - level * .07))) return;
  const target = dangerEnemy();
  if (!target) return;
  const angle = Math.atan2(target.y - state.player.y, target.x - state.player.x);
  spawnProjectile(state.player.x, state.player.y, Math.cos(angle), Math.sin(angle), 430, 28 + level * 6, ": Guard", "typescript", "ts");
}

function handleDocker(dt, time) {
  const level = weaponLevel("docker");
  if (!level) return;
  if (state.player.shieldUntil < time && tickTimer("dockerShield", dt, Math.max(7, 12 - level))) {
    state.player.shieldUntil = time + 2800 + level * 520;
    addLog("Docker 容器护盾自动构建完成。");
  }
  if (state.player.shieldUntil > time) {
    state.enemies.forEach(enemy => {
      if (distance(enemy, state.player) < 72 + level * 7) {
        enemy.hp -= (18 + level * 4) * dt;
        pushEnemy(enemy, 80 * dt);
      }
    });
  }
}

function handleCoffee(dt) {
  const level = weaponLevel("coffee");
  if (!level) return;
  if (tickTimer("coffee", dt, Math.max(5.5, 9 - level * .7))) {
    gainCoffee(4 + level * 2, false);
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 2 + level);
  }
}

function handleBug(dt) {
  const level = weaponLevel("bug");
  if (!level) return;
  if (!tickTimer("bug", dt, Math.max(3.2, 6.4 - level * .55))) return;
  const angle = Math.random() * Math.PI * 2;
  state.mines.push({
    x: clamp(state.player.x + Math.cos(angle) * 62, 18, state.width - 18),
    y: clamp(state.player.y + Math.sin(angle) * 62, 18, state.height - 18),
    damage: 90 + level * 28,
    radius: 48 + level * 4,
    life: 12
  });
}

function handleRollback(dt) {
  const level = weaponLevel("rollback");
  if (!level) return;
  if (!tickTimer("rollback", dt, Math.max(5.8, 9.5 - level * .65))) return;
  savePulse(128 + level * 12, 24 + level * 7, "rollback");
  addLog("rollback 脉冲触发，事故被推回上一个版本。", "good");
}

function handleFunction(dt, time) {
  const level = weaponLevel("function");
  if (!level) return;
  if (!tickTimer("function", dt, Math.max(1.35, 2.4 - level * .16))) return;
  const target = nearestEnemy();
  const angle = target ? Math.atan2(target.y - state.player.y, target.x - state.player.x) : Math.random() * Math.PI * 2;
  const label = `${state.functionName}()`;
  spawnProjectile(state.player.x, state.player.y, Math.cos(angle), Math.sin(angle), 250, 24 + level * 5, label, "function", "function");
}

function handlePython(dt) {
  const level = weaponLevel("python");
  if (!level) return;
  if (!tickTimer("python", dt, Math.max(3.4, 5.8 - level * .42))) return;
  let count = 0;
  state.enemies.forEach(enemy => {
    if (distance(enemy, state.player) < 185 + level * 22) {
      enemy.hp -= 20 + level * 7;
      count += 1;
    }
  });
  if (count) {
    addEffect(state.player.x, state.player.y, "save");
    addLog(`Python 自动化脚本扫过战场，处理 ${count} 个事故。`);
  }
}

function handleIdea(dt) {
  const level = weaponLevel("idea");
  if (!level) return;
  if (!tickTimer("idea", dt, Math.max(2.6, 4.8 - level * .34))) return;
  const target = dangerEnemy();
  if (!target) return;
  target.hp -= 55 + level * 18;
  addEffect(target.x, target.y);
  addLog(`IDEA 重构激光定位 ${enemyDefs[target.kind].name}。`);
}

function handleTomcat(dt) {
  const level = weaponLevel("tomcat");
  if (!level) return;
  if (!tickTimer("tomcat", dt, Math.max(.8, 1.55 - level * .09))) return;
  const target = nearestEnemy();
  const base = target ? Math.atan2(target.y - state.player.y, target.x - state.player.x) : 0;
  for (let i = 0; i < Math.min(3, level); i++) {
    const angle = base + (i - 1) * .18;
    spawnProjectile(state.player.x, state.player.y, Math.cos(angle), Math.sin(angle), 285, 23 + level * 4, "@8080", "tomcat", "git");
  }
}

function handleSpringBoot(dt) {
  const level = weaponLevel("springboot");
  if (!level) return;
  if (tickTimer("springboot", dt, Math.max(4.2, 7 - level * .42))) {
    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 6 + level * 3);
    healWorstFile(5 + level * 2, false);
    addEffect(state.player.x, state.player.y, "save");
  }
}

function spawnProjectile(x, y, dx, dy, speed, damage, glyph, source, cssClass = "") {
  const len = Math.hypot(dx, dy) || 1;
  state.projectiles.push({
    id: state.projectileId++,
    x,
    y,
    dx: dx / len,
    dy: dy / len,
    speed,
    damage,
    glyph,
    source,
    cssClass,
    life: 2.8,
    age: 0
  });
}

function updateProjectiles(dt) {
  for (const projectile of [...state.projectiles]) {
    projectile.age += dt;
    projectile.life -= dt;
    if (projectile.cssClass === "function") {
      projectile.x += projectile.dx * projectile.speed * dt;
      projectile.y += projectile.dy * projectile.speed * dt + Math.sin(projectile.age * 10) * 42 * dt;
    } else {
      projectile.x += projectile.dx * projectile.speed * dt;
      projectile.y += projectile.dy * projectile.speed * dt;
    }
    const hit = state.enemies.find(enemy => distance(projectile, enemy) < (enemy.boss ? 48 : 31));
    if (hit) {
      hit.hp -= projectile.damage * counterMultiplier(projectile.source, hit.kind);
      if (projectile.source === "typescript") hit.speed *= .985;
      repairCodeNear(hit.x, hit.y, 7 + projectile.damage * .16, projectile.source);
      state.projectiles = state.projectiles.filter(item => item.id !== projectile.id);
      if (hit.hp <= 0) killEnemy(hit);
    } else if (projectile.life <= 0 || projectile.x < -60 || projectile.x > state.width + 60 || projectile.y < -60 || projectile.y > state.height + 60) {
      state.projectiles = state.projectiles.filter(item => item.id !== projectile.id);
    }
  }
}

function updateEnemies(dt, time) {
  for (const enemy of [...state.enemies]) {
    enemy.hitCooldown = Math.max(0, enemy.hitCooldown - dt);
    enemy.skillTimer += dt;
    enemy.codeTouchCooldown = Math.max(0, enemy.codeTouchCooldown - dt);
    const angle = Math.atan2(state.player.y - enemy.y, state.player.x - enemy.x);
    enemy.x += Math.cos(angle) * enemy.speed * dt;
    enemy.y += Math.sin(angle) * enemy.speed * dt;

    if (enemy.kind === "onedrive" && !enemy.copied && enemy.hp < enemy.maxHp * .55) {
      enemy.copied = true;
      spawnEnemy("onedrive", enemy.x + 24, enemy.y - 24);
      addLog("OneDrive 同步怪复制了一个冲突副本。", "warn");
    }
    if (enemy.kind === "edge" && enemy.skillTimer > 7) {
      enemy.skillTimer = 0;
      spawnPopup("Edge");
    }
    if (enemy.kind === "boss" && enemy.skillTimer > 6) {
      enemy.skillTimer = 0;
      spawnPopup("BSOD");
      damageRandomFile(8, "蓝屏合并冲突");
    }

    if (distance(enemy, state.player) < (enemy.boss ? 54 : 34)) {
      hitPlayer(enemy.damage, enemyDefs[enemy.kind].name);
      pushEnemy(enemy, enemy.boss ? 28 : 80);
    }
  }
}

function updateMines() {
  for (const mine of [...state.mines]) {
    mine.life -= .016;
    const hit = state.enemies.find(enemy => distance(mine, enemy) < mine.radius);
    if (hit) {
      state.enemies.forEach(enemy => {
        if (distance(mine, enemy) < mine.radius) {
          enemy.hp -= mine.damage;
          pushEnemy(enemy, 54);
          if (enemy.hp <= 0) killEnemy(enemy);
        }
      });
      addEffect(mine.x, mine.y);
      state.mines = state.mines.filter(item => item !== mine);
    } else if (mine.life <= 0) {
      state.mines = state.mines.filter(item => item !== mine);
    }
  }
}

function updatePickups(dt) {
  for (const pickup of [...state.pickups]) {
    if (distance(pickup, state.player) < 92) {
      const angle = Math.atan2(state.player.y - pickup.y, state.player.x - pickup.x);
      pickup.x += Math.cos(angle) * 250 * dt;
      pickup.y += Math.sin(angle) * 250 * dt;
    }
    if (distance(pickup, state.player) < 24) {
      gainCoffee(pickup.value, true);
      state.pickups = state.pickups.filter(item => item.id !== pickup.id);
    }
  }
}

function updatePopups(dt) {
  for (const popup of [...state.popups]) {
    popup.life -= dt;
    if (popup.life <= 0) {
      damageRandomFile(popup.damage, popup.title);
      state.popups = state.popups.filter(item => item.id !== popup.id);
      addLog(`${popup.title} 没关掉，污染了一个工作区文件。`, "bad");
    }
  }
}

function updateDelayed(time) {
  const ready = state.delayed.filter(item => item.at <= time);
  state.delayed = state.delayed.filter(item => item.at > time);
  ready.forEach(item => {
    if (item.type === "ci") {
      let cleared = 0;
      state.enemies.forEach(enemy => {
        if (!enemy.boss && enemy.hp < 140) {
          enemy.hp = 0;
          cleared += 1;
        }
      });
      state.enemies.filter(enemy => enemy.hp <= 0).forEach(killEnemy);
      addEffect(state.width / 2, state.height / 2, "save");
      addLog(`CI Pipeline 通过，全屏扫描清掉 ${cleared} 个小事故。`, cleared ? "good" : "warn");
    }
  });
}

function updateEffects(time) {
  state.effects = state.effects.filter(effect => effect.until > time);
}

function checkBoss() {
  if (!state.bossSpawned && state.elapsed > 180) {
    state.bossSpawned = true;
    spawnEnemy("boss");
    addLog("蓝屏合并冲突巨人出现：屏幕开始怀疑人生。", "bad");
  }
  if (state.bossSpawned && !state.enemies.some(enemy => enemy.kind === "boss") && state.elapsed > 180 && !state.gameOver) {
    winGame();
  }
}

function hitPlayer(amount, source) {
  const now = performance.now();
  if (state.player.invulnUntil > now) return;
  if (state.player.shieldUntil > now) amount *= .45;
  state.player.hp -= Math.round(amount);
  state.player.invulnUntil = now + 560;
  damageRandomFile(Math.ceil(amount / 3), source, false);
  if (state.player.hp <= 0) {
    state.player.hp = 0;
    loseGame("VS Code 图标被事故淹没。");
  }
}

function damageRandomFile(amount, source, loud = true) {
  const candidates = state.files.filter(file => !file.deleted);
  if (!candidates.length) {
    loseGame("所有文件都进入 already deleted。");
    return;
  }
  const file = candidates[Math.floor(Math.random() * candidates.length)];
  damageFile(file, amount, source, loud);
}

function damageFile(file, amount, source, loud = true) {
  if (!file || file.deleted) return;
  file.hp = Math.max(0, file.hp - amount);
  file.lastHit = source;
  contaminateFile(file, source, amount * 1.8, false);
  if (file.hp <= 0 && !file.deleted) {
    file.deleted = true;
    file.pollution = 100;
    file.problem = "throw new Error(\"already deleted\")";
    addLog(`${source} 打穿 ${file.path}：already deleted。真实文件仍然安全。`, "bad");
    if (remainingFiles() <= 0) loseGame("Explorer 全部变红。");
  } else if (loud) {
    addLog(`${source} 擦伤 ${file.short}，文件生命下降。`, "warn");
  }
}

function remainingFiles() {
  return state.files.filter(file => !file.deleted).length;
}

function healWorstFile(amount, loud = true) {
  const file = state.files
    .filter(item => !item.deleted)
    .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
  if (!file) return;
  file.hp = Math.min(file.maxHp, file.hp + amount);
  repairFileCode(file, amount * 1.6);
  if (loud) addLog(`${file.path} 被恢复了一点工作区状态。`, "good");
}

function contaminateFile(file, source, amount, loud = true) {
  if (!file || file.deleted) return;
  const before = file.pollution;
  file.pollution = clamp(file.pollution + amount, 0, 100);
  file.problem = file.problem || pollutionSnippets[Math.floor(Math.random() * pollutionSnippets.length)];
  file.flash = .35;
  if (loud && before < 60 && file.pollution >= 60) {
    addLog(`${source} 把 ${file.short} 污染成：${file.problem}`, "warn");
  }
}

function repairFileCode(file, amount, source = "") {
  if (!file || file.deleted || file.pollution <= 0) return false;
  const before = file.pollution;
  file.pollution = clamp(file.pollution - amount, 0, 100);
  file.flash = .28;
  if (before >= 60 && file.pollution < 60) {
    addLog(`${source || "代码弹幕"} 修复了 ${file.short} 的危险报错。`, "good");
  }
  if (file.pollution <= 0) file.problem = "";
  return true;
}

function repairCodeNear(x, y, amount, source) {
  const target = state.files
    .filter(file => !file.deleted && file.pollution > 0)
    .sort((a, b) => b.pollution - a.pollution || a.hp / a.maxHp - b.hp / b.maxHp)[0];
  if (target) {
    repairFileCode(target, amount, weaponDefs[source]?.name || "代码弹幕");
  }
}

function updateCodeLines(dt) {
  state.files.forEach(file => {
    file.flash = Math.max(0, file.flash - dt);
    if (!file.deleted && file.pollution > 0 && state.running && !state.paused) {
      file.pollution = Math.max(0, file.pollution - dt * 1.8);
      if (file.pollution <= 0) file.problem = "";
    }
  });
  state.toasts = state.toasts.filter(toast => toast.until > performance.now());
}

function killEnemy(enemy) {
  if (!state.enemies.includes(enemy)) return;
  state.enemies = state.enemies.filter(item => item.id !== enemy.id);
  const def = enemyDefs[enemy.kind];
  const bonus = weaponLevel("coffee") ? Math.ceil(def.xp * (.25 + weaponLevel("coffee") * .08)) : 0;
  dropCoffee(enemy.x, enemy.y, def.xp + bonus);
  addEffect(enemy.x, enemy.y);
  if (enemy.boss) {
    addLog("蓝屏合并冲突被关闭。", "good");
  }
}

function dropCoffee(x, y, value) {
  const chunks = Math.max(1, Math.min(4, Math.ceil(value / 10)));
  for (let i = 0; i < chunks; i++) {
    state.pickups.push({
      id: state.pickupId++,
      x: x + (Math.random() - .5) * 32,
      y: y + (Math.random() - .5) * 32,
      value: Math.ceil(value / chunks)
    });
  }
}

function gainCoffee(amount, countsForLevel) {
  state.coffee = Math.min(999, state.coffee + amount);
  if (countsForLevel) {
    state.xp += amount;
    if (state.xp >= state.xpNeed) levelUp();
  }
}

function levelUp() {
  state.xp -= state.xpNeed;
  state.level += 1;
  state.xpNeed = Math.round(state.xpNeed * 1.22 + 18);
  state.upgrading = true;
  showUpgradeChoices();
  addLog(`coffee 经验满了，等级 ${state.level}：选择一个植物武器升级。`, "good");
}

function showUpgradeChoices() {
  const keys = shuffle(Object.keys(weaponDefs)).slice(0, 3);
  upgradeChoices.innerHTML = keys.map(key => {
    const def = weaponDefs[key];
    const level = weaponLevel(key);
    return `
      <button class="upgrade-card" data-key="${key}">
        <img src="${def.icon}" alt="" />
        <strong>${level ? `${def.name} Lv.${level + 1}` : `解锁 ${def.name}`}</strong>
        <span>${def.text}</span>
      </button>
    `;
  }).join("");
  upgradeChoices.querySelectorAll(".upgrade-card").forEach(button => {
    button.addEventListener("click", () => {
      unlockOrLevelWeapon(button.dataset.key);
      state.upgrading = false;
      upgradeOverlay.classList.remove("show");
      arena.focus();
      renderAll();
    });
  });
  upgradeOverlay.classList.add("show");
}

function unlockOrLevelWeapon(key) {
  if (key === "function" && !state.weapons.function) {
    const customName = window.prompt("给函数炮命名：function ______()", state.functionName);
    if (customName) {
      state.functionName = customName
        .trim()
        .replace(/[^\w\u4e00-\u9fa5$]/g, "")
        .slice(0, 14) || state.functionName;
    }
  }
  state.weapons[key] = Math.min(8, (state.weapons[key] || 0) + 1);
  addLog(`${weaponDefs[key].name} 升到 Lv.${state.weapons[key]}。`, "good");
}

function savePulse(radius = 150, damage = 60, type = "save") {
  state.enemies.forEach(enemy => {
    const dist = distance(enemy, state.player);
    if (dist < radius) {
      enemy.hp -= damage * (1 - dist / radius * .35);
      pushEnemy(enemy, type === "rollback" ? 145 : 92);
      if (enemy.hp <= 0) killEnemy(enemy);
    }
  });
  addEffect(state.player.x, state.player.y, type);
}

function killDangerEnemy() {
  const target = dangerEnemy();
  if (!target) {
    addLog("kill -9 没找到可终止的事故进程。", "warn");
    return;
  }
  target.hp -= target.boss ? 210 : 999;
  addEffect(target.x, target.y);
  addLog(`kill -9 终止 ${enemyDefs[target.kind].name}。`, "good");
  if (target.hp <= 0) killEnemy(target);
}

function closePopups() {
  const count = state.popups.length;
  state.popups = [];
  state.enemies.forEach(enemy => {
    if (enemy.kind === "edge") enemy.hp -= 90;
    if (enemy.hp <= 0) killEnemy(enemy);
  });
  addLog(`Alt+F4 关闭 ${count} 个弹窗，Edge 的话术被打断。`, count ? "good" : "warn");
}

function spawnPopup(forced = "") {
  const options = [
    { title: "Windows Update", body: "你的电脑将在 2 分钟后重启。", damage: 16 },
    { title: "Edge", body: "要不要把默认浏览器交给我？", damage: 11 },
    { title: "Teams", body: "你能听到我吗？", damage: 13 },
    { title: "OneDrive", body: "正在同步 决赛版-最终版.zip。", damage: 12 },
    { title: "BSOD", body: "CRITICAL_PROCESS_DIED", damage: 22 }
  ];
  const selected = forced
    ? options.find(item => item.title === forced) || options[0]
    : options[Math.floor(Math.random() * (state.elapsed > 120 ? options.length : options.length - 1))];
  state.popups.push({
    id: Math.random().toString(36).slice(2),
    title: selected.title,
    body: selected.body,
    damage: selected.damage,
    x: 100 + Math.random() * Math.max(120, state.width - 200),
    y: 70 + Math.random() * Math.max(80, state.height - 150),
    life: selected.title === "BSOD" ? 5 : 7
  });
  state.nextIncident = selected.title;
}

function counterMultiplier(source, kind) {
  const counters = {
    docker: ["onedrive", "defender"],
    typescript: ["npmhell", "yaml", "requirement"],
    javascript: ["edge", "teams", "npmhell"],
    python: ["yaml", "npmhell", "defender"],
    idea: ["yaml", "requirement", "npmhell"],
    tomcat: ["update", "boss"],
    springboot: ["requirement", "yaml", "boss"],
    print: ["update"],
    function: ["boss", "edge"]
  };
  return counters[source]?.includes(kind) ? 1.55 : 1;
}

function dangerEnemy() {
  return [...state.enemies].sort((a, b) => {
    const bossScore = Number(b.boss) - Number(a.boss);
    if (bossScore) return bossScore;
    return b.hp - a.hp || distance(a, state.player) - distance(b, state.player);
  })[0] || null;
}

function nearestEnemy() {
  return [...state.enemies].sort((a, b) => distance(a, state.player) - distance(b, state.player))[0] || null;
}

function pushEnemy(enemy, amount) {
  const angle = Math.atan2(enemy.y - state.player.y, enemy.x - state.player.x);
  enemy.x = clamp(enemy.x + Math.cos(angle) * amount, -80, state.width + 80);
  enemy.y = clamp(enemy.y + Math.sin(angle) * amount, -80, state.height + 80);
}

function addEffect(x, y, type = "") {
  state.effects.push({ x, y, type, until: performance.now() + 320 });
}

function winGame() {
  state.running = false;
  state.gameOver = true;
  addLog("git commit 成功：VS Code 工作区挺过了微软桌面大乱斗。", "good");
  renderAll();
}

function loseGame(reason) {
  if (state.gameOver) return;
  state.running = false;
  state.gameOver = true;
  addLog(reason, "bad");
  addLog("安全提示：这只是游戏状态，真实项目文件没有被删除。", "warn");
  showIncidentModal();
  renderAll();
}

function showIncidentModal() {
  const deleted = state.files.filter(file => file.deleted);
  fakeDeleteList.innerHTML = deleted.map(file => (
    `<li>already deleted: ${file.path}${file.lastHit ? `  // by ${file.lastHit}` : ""}</li>`
  )).join("") || "<li>already deleted: workspace/*</li>";
  incidentModal.classList.add("show");
}

function renderAll() {
  renderFiles();
  renderHand();
  renderWeapons();
  renderPlayerWeapons();
  renderCodeStatus();
  renderEvents();
  renderActors();
  updateUI();
}

function renderRuntimePanels() {
  renderFiles();
  renderWeapons();
  renderPlayerWeapons();
  renderCodeStatus();
  renderEvents();
  updateUI();
}

function renderFiles() {
  fileList.innerHTML = state.files.map(file => `
    <div class="file-card ${file.deleted ? "deleted" : ""}">
      <div class="file-top">
        <span class="file-icon">${file.icon}</span>
        <span class="file-name">${file.deleted ? "already deleted" : file.short}</span>
        <span class="file-status">${file.deleted ? "deleted" : "safe"}</span>
      </div>
      <div class="file-hp"><span style="width:${Math.max(0, file.hp / file.maxHp * 100)}%"></span></div>
    </div>
  `).join("");
}

function renderWeapons() {
  const box = document.getElementById("weaponList");
  box.innerHTML = Object.entries(state.weapons).map(([key, level]) => {
    const def = weaponDefs[key];
    return `
      <div class="weapon-item">
        <img src="${def.icon}" alt="" />
        <span>${def.name}</span>
        <strong>Lv.${level}</strong>
      </div>
    `;
  }).join("");
}

function renderCodeStatus() {
  codeStatusList.innerHTML = state.files.map(file => {
    const status = file.deleted || file.pollution >= 72 ? "corrupted" : file.pollution >= 28 ? "damaged" : "clean";
    const label = file.deleted ? "deleted" : file.pollution >= 72 ? "broken" : file.pollution >= 28 ? "dirty" : "safe";
    return `
      <div class="code-status-item ${status}">
        <span>${file.deleted ? "already deleted" : file.short}</span>
        <strong>${label}</strong>
      </div>
    `;
  }).join("");
}

function renderPlayerWeapons() {
  const entries = Object.entries(state.weapons);
  const radius = entries.length <= 1 ? 44 : entries.length <= 4 ? 48 : 55;
  playerWeapons.innerHTML = entries.map(([key, level], index) => {
    const def = weaponDefs[key];
    const angle = entries.length === 1 ? 0 : -Math.PI / 2 + Math.PI * 2 * index / entries.length;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return `
      <span class="player-weapon" title="${def.name} Lv.${level}" style="transform:translate(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px))">
        <img src="${def.icon}" alt="" />
        <strong>${level}</strong>
      </span>
    `;
  }).join("");
}

function renderEvents() {
  const box = document.getElementById("eventList");
  const names = [
    state.nextIncident,
    state.bossSpawned ? "蓝屏合并冲突" : `${Math.max(0, Math.ceil(180 - state.elapsed))}s 后 Boss`,
    state.elapsed > 80 ? "需求变更变多" : "普通弹窗潮"
  ];
  box.innerHTML = names.map(name => `
    <div class="event-item">
      <img src="${ASSET}怪物贴纸/windows_update_head.svg" alt="" />
      <span>${name}</span>
      <strong>soon</strong>
    </div>
  `).join("");
}

function renderActors() {
  playerEl.style.left = `${state.player.x}px`;
  playerEl.style.top = `${state.player.y}px`;
  playerEl.style.opacity = state.player.invulnUntil > performance.now() ? ".68" : "1";
  playerEl.style.filter = state.player.shieldUntil > performance.now()
    ? "drop-shadow(0 0 16px rgba(43, 199, 180, .95))"
    : "";

  arenaLayer.innerHTML = [
    ...state.projectiles.map(projectile => `
      <div class="projectile ${projectile.cssClass || ""}" style="left:${projectile.x}px;top:${projectile.y}px">${projectile.glyph}</div>
    `),
    ...state.mines.map(mine => `
      <div class="mine" style="left:${mine.x}px;top:${mine.y}px">bug</div>
    `),
    ...state.pickups.map(pickup => `
      <div class="pickup" style="left:${pickup.x}px;top:${pickup.y}px">c</div>
    `),
    ...state.enemies.map(enemy => {
      const def = enemyDefs[enemy.kind];
      return `
        <div class="enemy ${enemy.boss ? "boss" : ""}" style="left:${enemy.x}px;top:${enemy.y}px">
          <span class="tag">${def.tag}</span>
          <img src="${def.icon}" alt="" />
          <div class="hpbar"><span style="width:${Math.max(0, enemy.hp / enemy.maxHp * 100)}%"></span></div>
        </div>
      `;
    }),
    ...state.popups.map(popup => `
      <div class="popup-threat" data-popup-id="${popup.id}" style="left:${popup.x}px;top:${popup.y}px">
        <div class="popup-title"><span>${popup.title}</span><span>x</span></div>
        <p>${popup.body}</p>
        <button>稍后提醒我</button>
      </div>
    `),
    ...state.effects.map(effect => `
      <div class="effect ${effect.type || ""}" style="left:${effect.x}px;top:${effect.y}px"></div>
    `)
  ].join("");
  renderToasts();
}

function renderToasts() {
  const now = performance.now();
  state.toasts = state.toasts.filter(toast => toast.until > now);
  toastLayer.innerHTML = state.toasts.map(toast => `
    <div class="toast-line ${toast.type || ""}">${escapeHtml(toast.text)}</div>
  `).join("");
}

function updateUI() {
  document.getElementById("coffeeValue").textContent = state.coffee;
  document.getElementById("levelValue").textContent = state.level;
  document.getElementById("timeValue").textContent = formatTime(state.elapsed);
  document.getElementById("filesValue").textContent = `${remainingFiles()}/${state.files.length}`;
  document.getElementById("hpValue").textContent = Math.ceil(state.player.hp);
  document.getElementById("handValue").textContent = state.hand.length;
  document.getElementById("threatValue").textContent = state.enemies.length > 24 ? "panic" : state.enemies.length > 12 ? "busy" : "calm";
  document.getElementById("bossValue").textContent = state.bossSpawned ? "awake" : `${Math.max(0, Math.ceil(180 - state.elapsed))}s`;
  document.getElementById("drawCostValue").textContent = `${DRAW_CARD_COST} coffee`;
  document.getElementById("startBtn").textContent = state.paused ? "继续" : state.running && !state.gameOver ? "运行中" : "开始";
  document.getElementById("startBtn").disabled = state.running && !state.paused && !state.gameOver;
  drawCardBtn.disabled = state.hand.length >= MAX_HAND || state.coffee < DRAW_CARD_COST || state.gameOver;
  document.getElementById("safetyStatus").textContent = state.gameOver
    ? "simulation only: real files are safe"
    : "real files are safe";
}

function formatTime(seconds) {
  const total = Math.floor(seconds);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("pauseBtn").addEventListener("click", togglePause);
document.getElementById("resetBtn").addEventListener("click", resetGame);
document.getElementById("modalResetBtn").addEventListener("click", resetGame);
drawCardBtn.addEventListener("click", buyCard);
arenaLayer.addEventListener("click", event => {
  const popup = event.target.closest(".popup-threat");
  if (!popup) return;
  state.popups = state.popups.filter(item => item.id !== popup.dataset.popupId);
  addLog("弹窗被手动关掉，桌面清爽了一点。", "good");
  renderAll();
});

window.addEventListener("keydown", event => {
  const key = normalizeInputKey(event);
  if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d"].includes(key)) {
    event.preventDefault();
  }
  state.keys.add(key);
});

window.addEventListener("keyup", event => {
  state.keys.delete(normalizeInputKey(event));
});

window.addEventListener("blur", () => {
  state.keys.clear();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) state.keys.clear();
});

window.addEventListener("resize", () => {
  updateArenaSize();
  state.player.x = clamp(state.player.x, 28, state.width - 28);
  state.player.y = clamp(state.player.y, 28, state.height - 28);
});

resetGame();
requestAnimationFrame(tick);
