import Link from 'next/link';

const labels = {
  'sales-office': '售楼处样板间',
  'private-home': '私宅',
  architecture: '建筑',
  hotel: '酒店',
  homestay: '民宿',
  retail: '商铺'
};

export default function CategoryPage({ params }) {
  const title = labels[params.slug] || '项目分类';

  return (
    <main className="section shell">
      <p className="eyebrow">CATEGORY</p>
      <h1>{title}</h1>
      <p className="hero-text">
        当前分类项目预留位。后台功能接入后，可上传真实项目并展示在这里。
      </p>

      <div className="category-grid">
        {[1, 2, 3, 4].map((item) => (
          <div className="category-card" key={item}>
            <span>PROJECT 0{item}</span>
            <h3>{title} 项目 {item}</h3>
            <p>这里将展示项目封面、地点、年份和简介。</p>
          </div>
        ))}
      </div>

      <div className="hero-actions">
        <Link className="button primary" href="/contact">联系咨询</Link>
        <Link className="button ghost" href="/">返回首页</Link>
      </div>
    </main>
  );
}
