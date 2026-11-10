<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import {
  PhMagnifyingGlass,
  PhArrowRight,
  PhUserGear,
  PhHeadset,
  PhChalkboardTeacher,
  PhCalculator,
  PhUsersThree,
  PhBuildings,
  PhEnvelopeSimple,
} from '@phosphor-icons/vue'
import { HOME_FAQ, HERO_SHOT } from './home-data'

type Item = { text?: string; link?: string; items?: Item[] }

const { theme } = useData()
const sidebar = computed<Item[]>(() => (Array.isArray(theme.value.sidebar) ? theme.value.sidebar : []) as Item[])

/* ---------- Ô tìm kiếm lớn mở đúng hộp tìm của trang ---------- */
const isMac = ref(false)
onMounted(() => {
  isMac.value = /Mac|iPhone|iPad/i.test(navigator.userAgent)
})
function openSearch() {
  const btn = document.querySelector<HTMLButtonElement>('.VPNavBarSearch button')
  if (btn) btn.click()
}

/* ---------- Lộ trình: lấy thẳng từ mục lục để luôn khớp tên bài ---------- */
function flatten(items: Item[]): Item[] {
  return items.flatMap((i) => (i.items ? flatten(i.items) : i.link ? [i] : []))
}
const startGroup = computed(() => sidebar.value.find((g) => g.text === 'Bắt đầu'))
const steps = computed(() =>
  flatten(startGroup.value?.items || [])
    .filter((i) => i.link && /\/bat-dau\/\d{2}-/.test(i.link))
    .map((i) => ({
      link: i.link as string,
      n: Number((i.link as string).match(/\/bat-dau\/(\d{2})-/)![1]),
      title: String(i.text || '').replace(/^Bước\s*\d+\s*[:.\-–—]\s*/i, ''),
    })),
)
const PHASES = [
  { title: 'Dựng nền và đội ngũ', desc: 'Đăng nhập, kiểm tra gói, thiết lập trung tâm, tạo tài khoản và hồ sơ nhân sự.', from: 1, to: 4 },
  { title: 'Học phí, kênh gửi và lớp học', desc: 'Khai học phí, nối Zalo và ngân hàng, tạo lớp và xếp giáo viên.', from: 5, to: 7 },
  { title: 'Đưa học sinh vào và vận hành', desc: 'Học sinh, ghi danh, điểm danh, thay đổi trong tháng và báo kết quả học tập.', from: 8, to: 12 },
  { title: 'Cuối tháng: thu tiền, trả lương', desc: 'Xuất và gửi phiếu, ghi nhận tiền, chốt lương, xem báo cáo. Từ tháng thứ hai chỉ lặp lại các bước này.', from: 13, to: 16 },
]
const phases = computed(() =>
  PHASES.map((p) => ({ ...p, steps: steps.value.filter((s) => s.n >= p.from && s.n <= p.to) })).filter(
    (p) => p.steps.length,
  ),
)

/* ---------- Theo vai ---------- */
const ROLES = [
  {
    key: 'admin',
    icon: PhUserGear,
    title: 'Chủ trung tâm & Quản trị viên',
    desc: 'Thiết lập trung tâm, cấp tài khoản cho nhân viên, theo dõi học phí và báo cáo.',
    link: '/bat-dau/',
    cta: 'Đi theo lộ trình A-Z',
  },
  {
    key: 'le-tan',
    icon: PhHeadset,
    title: 'Lễ tân',
    desc: 'Chấm công vào ca, chăm sóc lead, đón học thử, ghi danh và đối chiếu điểm danh.',
    link: '/bat-dau/vai-le-tan',
    cta: 'Xem việc trong ngày',
  },
  {
    key: 'quan-ly-chi-nhanh',
    icon: PhBuildings,
    title: 'Quản lý chi nhánh & Nhân sự',
    desc: 'Hồ sơ nhân sự, đơn giá dạy, chấm công, dạy thay và chốt lương cho cơ sở của bạn.',
    link: '/bat-dau/vai-quan-ly-chi-nhanh',
    cta: 'Xem việc trong tháng',
  },
  {
    key: 'giao-vien',
    icon: PhChalkboardTeacher,
    title: 'Giáo viên & Trợ giảng',
    desc: 'Xem lịch dạy, điểm danh, nhận xét buổi học, công bố điểm và làm phiếu tháng.',
    link: '/bat-dau/vai-giao-vien',
    cta: 'Xem việc trong ngày',
  },
  {
    key: 'ke-toan',
    icon: PhCalculator,
    title: 'Kế toán',
    desc: 'Lập và gửi phiếu học phí, ghi nhận tiền thu, theo dõi phiếu quá hạn.',
    link: '/bat-dau/vai-ke-toan',
    cta: 'Xem việc trong tháng',
  },
  {
    key: 'phu-huynh',
    icon: PhUsersThree,
    title: 'Phụ huynh & Học sinh',
    desc: 'Xem lịch học, điểm danh, điểm số, phiếu học phí của con và gửi đơn xin nghỉ.',
    link: '/bat-dau/vai-phu-huynh',
    cta: 'Xem cách theo dõi con',
  },
]

/* ---------- Tra cứu theo nghiệp vụ ---------- */
const directory = computed(() =>
  sidebar.value
    .filter((g) => g.text !== 'Bắt đầu')
    .map((g) => {
      const flat = flatten(g.items || [])
      return { text: g.text || '', count: flat.length, top: flat.slice(0, 4), first: flat[0]?.link || '/' }
    })
    .filter((g) => g.count > 0),
)
</script>

<template>
  <div class="k-home">
    <!-- 1. Mở đầu -->
    <section class="k-hero">
      <div class="k-wrap k-hero__grid">
        <div class="k-hero__copy">
          <h1 class="k-hero__title">Hướng dẫn sử&nbsp;dụng <span class="k-hero__brand">KLASSA</span></h1>
          <p class="k-hero__lead">
            Từ lần đăng nhập đầu tiên đến điểm danh, xuất phiếu học phí và báo cáo cuối tháng.
          </p>
          <button class="k-search" type="button" aria-label="Tìm hướng dẫn" @click="openSearch">
            <PhMagnifyingGlass :size="20" aria-hidden="true" />
            <span class="k-search__text">Tìm hướng dẫn, ví dụ: tạo hoá đơn</span>
            <kbd class="k-search__kbd">{{ isMac ? '⌘' : 'Ctrl' }} K</kbd>
          </button>
          <div class="k-hero__actions">
            <a class="k-btn k-btn--primary" :href="withBase('/bat-dau/')">
              Bắt đầu từ A-Z
              <PhArrowRight :size="18" aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure v-if="HERO_SHOT" class="k-hero__shot">
          <img :src="HERO_SHOT" alt="Trang chủ KLASSA của quản trị viên" width="1440" height="900" fetchpriority="high" />
        </figure>
      </div>
    </section>

    <!-- 2. Lộ trình A-Z -->
    <section v-if="phases.length" id="lo-trinh" class="k-section k-journey">
      <div class="k-wrap">
        <header class="k-head">
          <h2>Lộ trình {{ steps.length }} bước cho trung tâm mới</h2>
          <p>Làm lần lượt từ bước 1. Cuối mỗi bài có danh sách kiểm tra để biết mình đã xong.</p>
        </header>
        <ol class="k-phases">
          <li v-for="(p, i) in phases" :key="p.title" class="k-phase" :class="{ 'k-phase--strong': i === phases.length - 1 }">
            <div class="k-phase__head">
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </div>
            <ol class="k-steps">
              <li v-for="s in p.steps" :key="s.link">
                <a class="k-step" :href="withBase(s.link)">
                  <span class="k-step__n">{{ s.n }}</span>
                  <span class="k-step__t">{{ s.title }}</span>
                  <PhArrowRight class="k-step__go" :size="16" aria-hidden="true" />
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </section>

    <!-- 3. Theo vai -->
    <section id="theo-vai" class="k-section">
      <div class="k-wrap">
        <header class="k-head">
          <h2>Hướng dẫn nhanh theo vai</h2>
          <p>Mỗi người một việc. Chọn đúng vai để xem các việc cần làm trong ngày.</p>
        </header>
        <div class="k-bento">
          <a
            v-for="r in ROLES"
            :key="r.key"
            class="k-tile"
            :class="`k-tile--${r.key}`"
            :href="withBase(r.link)"
          >
            <span class="k-tile__icon"><component :is="r.icon" :size="22" aria-hidden="true" /></span>
            <span class="k-tile__body">
              <span class="k-tile__title">{{ r.title }}</span>
              <span class="k-tile__desc">{{ r.desc }}</span>
            </span>
            <span class="k-tile__cta">
              {{ r.cta }}
              <PhArrowRight :size="16" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- 4. Tra cứu -->
    <section v-if="directory.length" class="k-section k-dir">
      <div class="k-wrap">
        <header class="k-head">
          <h2>Tra cứu theo nghiệp vụ</h2>
        </header>
        <div class="k-dir__grid">
          <div v-for="g in directory" :key="g.text" class="k-dir__col">
            <a class="k-dir__title" :href="withBase(g.first)">
              {{ g.text }}
              <span class="k-dir__count">{{ g.count }} bài</span>
            </a>
            <ul>
              <li v-for="it in g.top" :key="it.link">
                <a :href="withBase(it.link || '/')">{{ it.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Hỏi nhanh -->
    <section v-if="HOME_FAQ.length" class="k-section k-faq">
      <div class="k-wrap k-faq__grid">
        <header class="k-head k-head--tight">
          <h2>Câu hỏi hay gặp</h2>
          <a class="k-link" :href="withBase('/faq/tong-hop')">
            Xem tất cả câu hỏi
            <PhArrowRight :size="16" aria-hidden="true" />
          </a>
        </header>
        <div class="k-faq__list">
          <details v-for="q in HOME_FAQ" :key="q.q" class="k-qa">
            <summary>{{ q.q }}</summary>
            <p>
              {{ q.a }}
              <a v-if="q.link" :href="withBase(q.link)">Xem hướng dẫn</a>
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- 6. Hỗ trợ -->
    <section class="k-section k-section--last">
      <div class="k-wrap">
        <div class="k-support">
          <div>
            <h2>Chưa tìm thấy điều bạn cần?</h2>
            <p>Gửi câu hỏi cho đội hỗ trợ KLASSA, kèm ảnh chụp màn hình nếu có.</p>
          </div>
          <a class="k-btn k-btn--ghost" href="mailto:support@klassa.vn">
            <PhEnvelopeSimple :size="18" aria-hidden="true" />
            support@klassa.vn
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.k-home {
  --k-wrap: 1200px;
  overflow-x: clip;
}
.k-wrap {
  max-width: var(--k-wrap);
  margin: 0 auto;
  padding: 0 24px;
}
@media (max-width: 640px) {
  .k-wrap {
    padding: 0 16px;
  }
}

/* ---------- Mở đầu ---------- */
.k-hero {
  position: relative;
  padding: 56px 0 72px;
}
.k-hero::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 560px;
  pointer-events: none;
  background: radial-gradient(60% 70% at 12% 0%, var(--k-hero-glow), transparent 70%);
}
.k-hero__grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 40px;
  align-items: center;
}
@media (min-width: 960px) {
  .k-hero {
    padding: 72px 0 96px;
  }
  .k-hero__grid {
    grid-template-columns: minmax(0, 11fr) minmax(0, 13fr);
    gap: 48px;
  }
}
.k-hero__copy {
  animation: k-rise 0.6s var(--k-ease) both;
}
.k-hero__title {
  margin: 0;
  font-family: var(--k-font-heading);
  font-weight: 700;
  font-size: clamp(2.1rem, 1.5rem + 2.4vw, 3.2rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
  text-wrap: balance;
}
.k-hero__brand {
  display: block;
  color: var(--vp-c-brand-1);
}
.k-hero__lead {
  margin: 18px 0 0;
  max-width: 36ch;
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}
.k-search {
  margin-top: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 480px;
  height: 52px;
  padding: 0 10px 0 16px;
  border-radius: var(--k-radius-control);
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-3);
  font-size: 15.5px;
  text-align: left;
  cursor: text;
  box-shadow: var(--k-shadow-sm);
  transition: border-color 0.2s var(--k-ease), box-shadow 0.2s var(--k-ease);
}
.k-search:hover {
  border-color: var(--vp-c-brand-1);
}
.k-search:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.k-search__text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.k-search__kbd {
  flex: none;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font: 600 12px/1.4 var(--vp-font-family-base);
  color: var(--vp-c-text-2);
}
@media (max-width: 640px) {
  .k-search__kbd {
    display: none;
  }
}
.k-hero__actions {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.k-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 46px;
  padding: 0 20px;
  border-radius: var(--k-radius-control);
  font-family: var(--k-font-heading);
  font-weight: 600;
  font-size: 15px;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color 0.2s var(--k-ease), transform 0.15s var(--k-ease), border-color 0.2s var(--k-ease);
}
.k-btn:active {
  transform: scale(0.98);
}
.k-btn--primary {
  background: var(--vp-c-brand-3);
  color: #fdfdfe;
}
.k-btn--primary:hover {
  background: var(--vp-c-brand-2);
}
.k-btn--ghost {
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}
.k-btn--ghost:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.k-hero__shot {
  margin: 0;
  animation: k-rise 0.7s 0.08s var(--k-ease) both;
}
:global(.dark) .k-hero__shot img {
  filter: brightness(0.9);
}
.k-hero__shot img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--k-radius-card);
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--k-shadow-lg);
  background: var(--vp-c-bg-soft);
}
@media (min-width: 1280px) {
  .k-hero__shot {
    margin-right: -48px;
  }
}
@keyframes k-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* ---------- Khung mục ---------- */
.k-section {
  padding: 72px 0;
  border-top: 1px solid var(--vp-c-divider);
}
.k-section--last {
  padding-bottom: 96px;
}
.k-head {
  max-width: 62ch;
  margin-bottom: 32px;
}
.k-head h2,
.k-support h2 {
  margin: 0;
  font-family: var(--k-font-heading);
  font-weight: 700;
  font-size: clamp(1.55rem, 1.25rem + 1.1vw, 2.1rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}
.k-head p {
  margin: 10px 0 0;
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

/* ---------- Lộ trình ---------- */
.k-phases {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
}
@media (min-width: 960px) {
  .k-phases {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}
.k-phase {
  border-radius: var(--k-radius-card);
  background: var(--vp-c-bg-soft);
  padding: 24px 20px 14px;
}
.k-phase__head h3 {
  margin: 0;
  font-family: var(--k-font-heading);
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.k-phase__head p {
  margin: 6px 0 14px;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}
.k-steps {
  list-style: none;
  margin: 0;
  padding: 0;
}
.k-steps li {
  position: relative;
}
.k-steps li + li::before {
  content: '';
  position: absolute;
  left: 25px;
  top: -6px;
  height: 12px;
  width: 1px;
  background: var(--vp-c-border);
}
.k-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 10px;
  margin: 0 -2px;
  border-radius: var(--k-radius-control);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.2s var(--k-ease);
}
.k-step:hover {
  background: var(--vp-c-bg-elv);
}
.k-step__n {
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: var(--vp-c-bg-elv);
  box-shadow: inset 0 0 0 1px var(--vp-c-border);
  font: 600 13px/1 var(--k-font-heading);
  color: var(--vp-c-brand-1);
}
.k-step__t {
  flex: 1;
  min-width: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
}
.k-step__go {
  flex: none;
  opacity: 0;
  transform: translateX(-4px);
  color: var(--vp-c-brand-1);
  transition: opacity 0.2s var(--k-ease), transform 0.2s var(--k-ease);
}
.k-step:hover .k-step__go,
.k-step:focus-visible .k-step__go {
  opacity: 1;
  transform: none;
}
.k-phase--strong {
  background: var(--k-tile-navy);
}
.k-phase--strong .k-phase__head h3,
.k-phase--strong .k-step {
  color: var(--k-tile-navy-fg);
}
.k-phase--strong .k-phase__head p {
  color: color-mix(in srgb, var(--k-tile-navy-fg) 78%, transparent);
}
.k-phase--strong .k-step:hover {
  background: rgba(255, 255, 255, 0.08);
}
.k-phase--strong .k-step__n {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: none;
  color: var(--k-tile-navy-fg);
}
.k-phase--strong .k-step__go {
  color: var(--k-tile-navy-fg);
}
.k-phase--strong .k-steps li + li::before {
  background: rgba(255, 255, 255, 0.2);
}

/* ---------- Theo vai (bento 2 + 3) ---------- */
.k-bento {
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
}
@media (min-width: 720px) {
  .k-bento {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .k-tile--admin,
  .k-tile--phu-huynh {
    grid-column: 1 / -1;
  }
}
@media (min-width: 1024px) {
  .k-bento {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 20px;
  }
  .k-tile--admin {
    grid-column: span 7;
  }
  .k-tile--le-tan {
    grid-column: span 5;
  }
  .k-tile--quan-ly-chi-nhanh,
  .k-tile--giao-vien,
  .k-tile--ke-toan {
    grid-column: span 4;
  }
  .k-bento .k-tile--phu-huynh {
    grid-column: span 12;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    min-height: 0;
  }
  .k-bento .k-tile--phu-huynh .k-tile__cta {
    margin-left: auto;
    white-space: nowrap;
  }
}
.k-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 200px;
  padding: 24px;
  border-radius: var(--k-radius-card);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.25s var(--k-ease), box-shadow 0.25s var(--k-ease), border-color 0.25s var(--k-ease);
}
.k-tile:hover {
  transform: translateY(-2px);
  box-shadow: var(--k-shadow-md);
  border-color: var(--vp-c-border);
}
.k-tile:active {
  transform: translateY(0) scale(0.99);
}
.k-tile:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.k-tile__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.k-tile__body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}
.k-tile__title {
  font-family: var(--k-font-heading);
  font-weight: 700;
  font-size: 1.12rem;
  line-height: 1.35;
}
.k-tile__desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  max-width: 46ch;
}
.k-tile__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
.k-tile__cta svg {
  transition: transform 0.2s var(--k-ease);
}
.k-tile:hover .k-tile__cta svg {
  transform: translateX(3px);
}
.k-tile--admin {
  background: var(--k-tile-navy);
  border-color: transparent;
  color: var(--k-tile-navy-fg);
  min-height: 236px;
}
.k-tile--admin::after {
  content: '';
  position: absolute;
  right: -80px;
  bottom: -120px;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  background: radial-gradient(closest-side, rgba(245, 158, 11, 0.22), transparent);
  pointer-events: none;
}
.k-tile--admin .k-tile__icon {
  background: rgba(255, 255, 255, 0.12);
  color: var(--k-tile-navy-fg);
}
.k-tile--admin .k-tile__title {
  font-size: 1.4rem;
}
.k-tile--admin .k-tile__desc {
  color: color-mix(in srgb, var(--k-tile-navy-fg) 80%, transparent);
  font-size: 15.5px;
}
.k-tile--admin .k-tile__cta {
  color: var(--k-tile-navy-fg);
}
.k-tile--le-tan {
  background: var(--vp-c-brand-soft);
  border-color: transparent;
}
.k-tile--le-tan .k-tile__icon {
  background: var(--vp-c-bg-elv);
}

/* ---------- Tra cứu ---------- */
.k-dir__grid {
  display: grid;
  gap: 32px 28px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
.k-dir__title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 10px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-family: var(--k-font-heading);
  font-weight: 700;
  font-size: 15.5px;
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.k-dir__title:hover {
  color: var(--vp-c-brand-1);
}
.k-dir__count {
  flex: none;
  font-family: var(--vp-font-family-base);
  font-weight: 500;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
}
.k-dir ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.k-dir li a {
  display: block;
  padding: 5px 0;
  font-size: 14.5px;
  line-height: 1.45;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.15s var(--k-ease);
}
.k-dir li a:hover {
  color: var(--vp-c-brand-1);
}

/* ---------- Hỏi nhanh ---------- */
.k-faq__grid {
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1fr);
}
@media (min-width: 960px) {
  .k-faq__grid {
    grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
    gap: 48px;
  }
}
.k-head--tight {
  margin-bottom: 0;
}
.k-link {
  margin-top: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 15px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.k-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.k-faq__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.k-qa {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--k-radius-card);
  background: var(--vp-c-bg-elv);
  transition: border-color 0.2s var(--k-ease);
}
.k-qa:hover {
  border-color: var(--vp-c-border);
}
.k-qa summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 16px 52px 16px 20px;
  font-family: var(--k-font-heading);
  font-weight: 600;
  font-size: 15.5px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}
.k-qa summary::-webkit-details-marker {
  display: none;
}
.k-qa summary::after {
  content: '';
  position: absolute;
  right: 22px;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -6px;
  border-right: 2px solid var(--vp-c-text-3);
  border-bottom: 2px solid var(--vp-c-text-3);
  transform: rotate(45deg);
  transition: transform 0.25s var(--k-ease);
}
.k-qa[open] summary::after {
  transform: rotate(225deg);
  margin-top: -2px;
}
.k-qa p {
  margin: 0;
  padding: 0 20px 18px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.k-qa p a {
  margin-left: 4px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

/* ---------- Hỗ trợ ---------- */
.k-support {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px 32px;
  padding: 32px;
  border-radius: var(--k-radius-card);
  background: var(--vp-c-bg-soft);
}
.k-support p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 15.5px;
}
@media (max-width: 640px) {
  .k-support {
    padding: 24px 20px;
  }
  .k-section {
    padding: 56px 0;
  }
}
</style>
