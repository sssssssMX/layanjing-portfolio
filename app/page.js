const categories = [
  '售楼处样板间',
  '私宅',
  '建筑',
  '酒店',
  '民宿',
  '商铺'
];

const projects = [
  {
    title: '售楼处样板间',
    category: 'SALES GALLERY',
    desc: '接待大厅、沙盘区、洽谈区与样板间空间摄影，呈现地产项目的秩序、材质与空间气质。',
    meta: 'LAYANJING VISUAL | SPACE',
    color: '#8b7968'
  },
  {
    title: '私宅空间',
    category: 'PRIVATE RESIDENCE',
    desc: '记录客厅、卧室、餐厨、卫浴与日常居住氛围，以自然光线呈现真实空间质感。',
    meta: 'RESIDENCE | DESIGN',
    color: '#b28a62'
  },
  {
    title: '建筑外观',
    category: 'ARCHITECTURE',
    desc: '关注建筑立面、体块关系、环境关系与光影变化，用画面呈现建筑本身的力量。',
    meta: 'ARCHITECTURE | CITY',
    color: '#9da3a8'
  },
  {
    title: '酒店空间',
    category: 'HOTEL',
    desc: '覆盖大堂、客房、餐厅、公区、泳池与夜景拍摄，兼顾商业传播与空间美感。',
    meta: 'HOTEL | COMMERCIAL',
    color: '#a67855'
  },
  {
    title: '民宿空间',
    category: 'HOMESTAY',
    desc: '呈现庭院、公区、客房、露台与在地生活方式，强调松弛、自然与情绪氛围。',
    meta: 'HOMESTAY | LIFESTYLE',
    color: '#7f8a75'
  },
  {
    title: '商铺空间',
    category: 'RETAIL',
    desc: '拍摄门头、陈列、动线、吧台、餐饮与零售空间，帮助品牌建立视觉识别。',
    meta: 'RETAIL | BRAND',
    color: '#6d7178'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="intro">
        <p className="eyebrow">SPACE PHOTOGRAPHY PORTFOLIO</p>
        <h1>空间摄影作品集</h1>
        <p>
          辣眼睛视觉专注空间摄影，服务售楼处样板间、私宅、建筑、酒店、民宿与商铺项目。
          用克制、干净、有秩序的画面，呈现空间的结构、材质、光线与情绪。
        </p>
      </section>

      <section className="category-row">
        {categories.map((item) => (
          <a key={item} href="#works">
            {item}
          </a>
        ))}
      </section>

      <section className="work-grid" id="works">
        {projects.map((project) => (
          <article className="work-item" key={project.title}>
            <div className="image-box" style={{ backgroundColor: project.color }}>
              <div className="image-light" />
              <span>{project.category}</span>
            </div>

            <div className="work-text">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="meta">{project.meta}</div>
            </div>
          </article>
        ))}
      </section>

      <section className="contact-strip">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>空间摄影项目咨询</h2>
        </div>
        <div className="contact-phone">15733151572</div>
      </section>
    </main>
  );
}
