import Link from 'next/link';

const projectMap = {
  'sales-office': {
    name: '售楼处样板间',
    english: 'SALES GALLERY',
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
  'private-home': {
    name: '私宅',
    english: 'PRIVATE RESIDENCE',
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
  architecture: {
    name: '建筑',
    english: 'ARCHITECTURE',
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
  hotel: {
    name: '酒店',
    english: 'HOTEL',
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
  homestay: {
    name: '民宿',
    english: 'HOMESTAY',
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
  retail: {
    name: '商铺',
    english: 'RETAIL',
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
};

function getProject(slug) {
  const parts = slug.split('-');
  const number = Number(parts[parts.length - 1]);
  const categorySlug = parts.slice(0, -1).join('-');
  const category = projectMap[categorySlug];

  if (!category || !number) {
    return null;
  }

  return {
    title: category.projects[number - 1],
    number,
    categoryName: category.name,
    english: category.english,
    color: category.color
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    return (
      <main className="page">
        <h1>项目不存在</h1>
        <Link href="/">返回首页</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="project-detail-head">
        <div>
          <p className="eyebrow">{project.english}</p>
          <h1>{project.title}</h1>
          <p>
            {project.categoryName}空间摄影项目。这里可以填写项目地点、拍摄时间、空间面积、
            设计机构、拍摄重点与项目背景。
          </p>
        </div>

        <div className="detail-info">
          <span>项目分类</span>
          <strong>{project.categoryName}</strong>
          <span>联系方式</span>
          <strong>15733151572</strong>
        </div>
      </section>

      <section className="detail-gallery">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            className="detail-image"
            key={index}
            style={{ backgroundColor: project.color }}
          >
            <div className="image-light" />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </section>

      <section className="detail-bottom">
        <Link href="/">返回首页</Link>
        <span>后续可替换为真实项目照片</span>
      </section>
    </main>
  );
}
