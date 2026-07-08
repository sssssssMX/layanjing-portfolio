import Link from 'next/link';

const categories = [
  '全部展示',
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
    tag: '售楼处样板间',
    desc: '接待大厅、沙盘区、洽谈区与样板间空间摄影。',
    count: '01',
    slug: 'sales-office',
    gradient: 'linear-gradient(135deg, #d8d2c8, #8f897f)'
  },
  {
    title: '私宅空间',
    tag: '私宅',
    desc: '客厅、卧室、餐厨、卫浴与居住氛围记录。',
    count: '02',
    slug: 'private-home',
    gradient: 'linear-gradient(135deg, #d7d7d7, #868686)'
  },
  {
    title: '建筑外观',
    tag: '建筑',
    desc: '建筑立面、体块关系、光影变化与环境关系。',
    count: '03',
    slug: 'architecture',
    gradient: 'linear-gradient(135deg, #c7ccd1, #6f7780)'
  },
  {
    title: '酒店空间',
    tag: '酒店',
    desc: '大堂、客房、餐厅、公区、泳池与夜景拍摄。',
    count: '04',
    slug: 'hotel',
    gradient: 'linear-gradient(135deg, #d6c5ad, #7f6651)'
  },
  {
    title: '民宿空间',
    tag: '民宿',
    desc: '庭院、公区、客房、露台与生活方式氛围呈现。',
    count: '05',
    slug: 'homestay',
    gradient: 'linear-gradient(135deg, #d4d8ce, #7b8471)'
  },
  {
    title: '商铺空间',
    tag: '商铺',
    desc: '门头、陈列、动线、吧台、餐饮与零售空间。',
    count: '06',
    slug: 'retail',
    gradient: 'linear-gradient(135deg, #d8d8d8, #5f6368)'
  },
  {
    title: '室内细节',
    tag: '空间细节',
    desc: '材质、软装、灯光、家具与局部构图。',
    count: '07',
    slug: 'private-home',
    gradient: 'linear-gradient(135deg, #e0d8cd, #9c8f80)'
  },
  {
    title: '商业氛围',
    tag: '商业空间',
    desc: '用空间画面帮助品牌、地产与设计机构展示项目价值。',
    count: '08',
    slug: 'retail',
    gradient: 'linear-gradient(135deg, #d0d5dc, #6e7885)'
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">辣</div>
          <span>辣眼睛视觉</span>
        </div>

        <nav className="topnav">
          <a className="active" href="/">主页</a>
          <a href="#portfolio">项目分类</a>
          <a href="tel:15733151572">电话咨询</a>
          <a href="/admin/login">后台入口</a>
        </nav>

        <a className="phone-pill" href="tel:15733151572">
          157****1572
        </a>
      </header>

      <section className="hero-new">
        <div>
          <p className="eyebrow">SPACE PHOTOGRAPHY PORTFOLIO</p>
          <h1>空间摄影作品集</h1>
          <p className="hero-desc">
            辣眼睛视觉专注空间摄影，用克制、干净、有秩序的画面，
            展示售楼处样板间、私宅、建筑、酒店、民宿与商铺项目。
          </p>
        </div>

        <div className="hero-stat">
          <span>项目分类</span>
          <strong>6+</strong>
          <p>支持后续持续上传真实案例</p>
        </div>
      </section>

      <section className="toolbar shell" id="portfolio">
        <div className="category-tabs">
          {categories.map((item, index) => (
            <button key={item} className={index === 0 ? 'tab active' : 'tab'}>
              {item}
            </button>
          ))}
        </div>

        <div className="search-box">
          搜索项目 / 空间类型
        </div>
      </section>

      <section className="project-wall shell">
        {projects.map((project) => (
          <article className="work-card" key={project.title}>
            <div
              className="work-image"
              style={{ background: project.gradient }}
            >
              <span className="work-number">✦ {project.count}</span>
              <span className="heart">♡</span>
            </div>

            <div className="work-content">
              <h3>{project.title}</h3>
              <span className="tag">{project.tag}</span>
              <p>{project.desc}</p>

              <div className="card-footer">
                <span className="score">空间摄影</span>
                <Link className="use-btn" href={`/category/${project.slug}`}>
                  查看案例
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bottom-contact shell">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>需要拍摄空间项目？</h2>
          <p>可直接电话沟通项目类型、拍摄时间与交付需求。</p>
        </div>

        <a className="big-phone" href="tel:15733151572">
          15733151572
        </a>
      </section>
    </main>
  );
}
