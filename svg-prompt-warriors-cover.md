# SVG 庆祝封面 Prompt（勇士胜掘金 · 伦德博格生涯之夜）

可直接复制给任意支持 SVG 生成的模型/工具使用。

## 中文版 Prompt

请用纯 SVG 生成一张竖版赛事庆祝封面，尺寸 680 × 880，viewBox="0 0 680 880"，可缩放、无外部依赖、可直接保存为 .svg。

主题：2026 年 10 月 27 日 NBA 常规赛，金州勇士客场 134-114 击败丹佛掘金，拿下赛季首胜；11 号秀亚克塞尔·伦德博格（Yaxel Lendeborg）砍下生涯新高 31 分 12 篮板 6 助攻，正负值 +27。

配色（严格限定蓝 + 金，占画面 90% 以上）：
- 勇士蓝 #1D428A（主色：标题栏、球员剪影、数据数字）
- 勇士金 #FFC72C（辅色：徽章、圆环、篮球、星芒）
- 浅金底 #FFF0CC / #FFF6E0（卡片与光晕）
- 浅蓝点缀 #85B7EB / #B5D4F4（彩带、副文字）
- 背景米白 #FBF8F1，中性灰 #5F5E5A / #888780 仅用于小字

版式结构（自上而下）：
1. 顶部蓝色圆角标题栏（y=40，高 64，rx=12）：左侧金色 "Golden State Warriors"，右侧浅蓝 "2026-10-27 · Ball Arena"。
2. 标题区：金色胶囊徽章写"生涯之夜"；下方 46px 深蓝大字"伦德博格"，右侧 20px 琥珀色"生涯新高"；第三行 "Yaxel Lendeborg · 11 号秀 · 生涯第 4 场 · 24 岁"。
3. 主视觉区：中心 (340, 400) 半径 130 的浅金圆 + 2px 金色描边；外围 12 道放射三角光芒（浅金 #FFD98A，旋转 30° 递增）；中间为深蓝扁平剪影球员——双手举球过顶、球为金色带蓝线、球衣上有金色 "11" 号码；四周撒 10 个小矩形彩带（蓝/金/浅蓝，随机旋转）和 4 枚四角星芒。
4. 比分牌：白色圆角面板内左蓝块（金州勇士 134，白字大字）右灰块（丹佛掘金 114），中间金色圆形写"终场"。
5. 数据卡：三张浅金圆角卡，分别为 31 分 / 12 篮板 / 6 助攻，数字 36px 深蓝，标签 13px 琥珀棕。
6. 页脚两行小字："队史自 1966 年里克·巴里后，首位单场 31+12+6 的新秀"、"罚球 13 中 12 · 全队 22 记三分 · 库里 8 投 8 中 24 分"。

风格约束：扁平化、纯色填充、禁止渐变/阴影/模糊/外发光/霓虹；不使用位图与外链字体；所有文字用中文或英文，字号不小于 11px；字重只用 400 和 500；元素之间保持留白，不重叠压字；整体为亮色（浅底深字）主题。

输出要求：只输出一个完整的 <svg>...</svg> 代码块，带 role="img" 与 <title>/<desc>，不要任何解释文字。

## English version

Generate a single self-contained SVG (no external assets, no gradients, no shadows, no blur) for a vertical sports celebration poster, 680 × 880, viewBox "0 0 680 880".

Subject: On Oct 27, 2026 the Golden State Warriors beat the Denver Nuggets 134-114 on the road for their first win of the season. Rookie Yaxel Lendeborg (11th pick) posted a career-high 31 points, 12 rebounds, 6 assists, +27.

Palette (blue and gold only): Warriors blue #1D428A, Warriors gold #FFC72C, pale gold #FFF0CC / #FFF6E0, light blue #85B7EB / #B5D4F4, off-white background #FBF8F1, neutral gray for small captions.

Layout: blue header bar with gold team name; headline "Lendeborg" in 46px blue with gold "career night" badge; hero zone with a pale-gold circle (r=130) behind 12 radiating gold rays and a flat blue silhouette of a player holding a gold basketball overhead, jersey number 11 in gold; confetti rectangles and four-point sparkles around; scoreboard panel showing GSW 134 vs DEN 114 with a gold "final" badge; three stat cards for 31 PTS / 12 REB / 6 AST; two caption lines at the bottom. Flat design, solid fills, minimum font size 11px, font weights 400 and 500 only, light theme (light background, dark text).

Output only the <svg> element with role="img", <title> and <desc>. No explanation.
