<div class="blog-header">
  <div class="blog-header-container clearfix">
    <ul>
      <li {{ 'class=active' if menu === 'home' }}>
        <a href="/">首页</a>
      </li>
      <li {{ 'class=active' if menu === 'article' }}>
        <a href="/article">文章</a>
      </li>
      <li {{ 'class=active' if menu === 'interview' }}>
        <a href="/interview">面试</a>
      </li>
      <li {{ 'class=active' if menu === 'partner' }}>
        <a href="/partner">合作伙伴</a>
      </li>
    </ul>
    <div class="blog-search">
      <input placeholder="请输入关键字" />
    </div>
  </div>
</div>