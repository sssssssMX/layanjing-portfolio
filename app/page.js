import Link from 'next/link';

const categories = [
  {
    name: '售楼处样板间',
    english: 'SALES GALLERY',
    slug: 'sales-office',
    color: '#8b7968',
    projects: [
      '光序售楼处',
      '云幕生活馆',
      '山隐样板间',
      '境界体验中心',
      '湖岸接待中心',
      '星河展示区',
      '林语销售中心',
      '城市会客厅',
      '海棠样板间',
      '森屿售楼处',
      '江湾展示中心',
      '天际样板间'
    ]
  },
  {
    name: '私宅',
    english: 'PRIVATE RESIDENCE',
    slug: 'private-home',
    color: '#b28a62',
    projects: [
      '留白之家',
      '向光公寓',
      '木序宅邸',
      '灰度住宅',
      '城市平层',
      '山居别墅',
      '静谧之家',
      '光影私宅',
      '暖木住宅',
      '云端公寓',
      '湖畔私宅',
      '松弛之家'
    ]
  },
  {
    name: '建筑',
    english: 'ARCHITECTURE',
    slug: 'architecture',
    color: '#9da3a8',
    projects: [
      '折线美术馆',
      '水岸展厅',
      '云谷办公楼',
      '山丘会客厅',
      '城市立面',
      '社区中心',
      '艺术馆外立面',
      '滨水建筑',
      '公共空间',
      '光庭建筑',
      '山谷图书馆',
      '城市展馆'
    ]
  },
  {
    name: '酒店',
    english: 'HOTEL',
    slug: 'hotel',
    color: '#a67855',
    projects: [
      '雾屿酒店',
      '观海套房酒店',
      '森屿度假酒店',
      '序章精品酒店',
      '山野酒店',
      '城市商务酒店',
      '温泉度假酒店',
      '海岸酒店',
      '林间客房',
      '云顶酒店',
      '湖景度假酒店',
      '暮色酒店'
    ]
  },
  {
    name: '民宿',
    english: 'HOMESTAY',
    slug: 'homestay',
    color: '#7f8a75',
    projects: [
      '野白民宿',
      '云边小院',
      '慢屿山居',
      '石间宿集',
      '山谷院子',
      '海边小屋',
      '林下民宿',
      '竹影山房',
      '溪畔客舍',
      '白墙庭院',
      '远山民宿',
      '隐溪小筑'
    ]
  },
  {
    name: '商铺',
    english: 'RETAIL',
    slug: 'retail',
    color: '#6d7178',
    projects: [
      '半格咖啡',
      '序列买手店',
      '光感餐酒吧',
      '材质实验室',
      '城市面包店',
      '花艺商铺',
      '品牌展厅',
      '集合店空间',
      '茶饮空间',
      '生活方式店',
      '夜色酒吧',
      '极简餐厅'
    ]
  }
];

function makeSlug(categorySlug, index) {
  return `${categorySlug}-${index + 1}`;
}

export default function HomePage() {
  return (
    <main className="page">
      <section className="intro">
        <p className="eyebrow">SPACE PHOTOGRAPHY PORTFOLIO</p>
        <h1>辣眼睛空间摄影作品集</h1>
        <p>
          辣眼睛视觉专注空间摄影，服务售楼处样板间、私宅、建筑、酒店、民宿与商铺项目。
          用克制、干净、有秩序的画面，呈现空间的结构、材质、光线与情绪。
        </p>
      </section>

      <section className="category-row">
        {categories.map((category) => (
          <a key={category.name} href={`#${category.slug}`}>
            {category.name}
          </a>
        ))}
      </section>

      {categories.map((category) => (
        <section className="category-section" id={category.slug} key={category.name}>
          <div className="category-title-row">
            <div>
              <p className="eyebrow">{category.english}</p>
              <h2>{category.name}</h2>
            </div>
            <span>{category.projects.length} PROJECTS</span>
          </div>

          <div className="work-grid">
            {category.projects.map((project, index) => (
              <Link
                className="work-item"
                key={project}
                href={`/project/${makeSlug(category.slug, index)}`}
              >
                <div className="image-box" style={{ backgroundColor: category.color }}>
                  <div className="image-light" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="work-text">
                  <h3>{project}</h3>
                  <p>
                    空间摄影项目入口，后续可替换为真实项目图片、地点、年份与完整案例页面。
                  </p>
                  <div className="meta">
                    {category.english} | LAYANJING VISUAL
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="project-switch">
            <button>01</button>
            <button>02</button>
            <span>每个分类精选 12 个优秀项目</span>
          </div>
        </section>
      ))}

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
