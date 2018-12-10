{% extends '../layout/index.tpl' %}
{% block content %}
<div class="listView">
    <ul>
        <li class="list-item">
            <h2>{{item.title}}</h2>
            <div class="info">
                <span>作者</span>
                <span>创建时间</span>
            </div>
            <div class="desc">一般我们用vue的时候，有很多好用的插件，我们npm安装一下就可以用了，但是像表单验证这种的很难找到自己心仪的插件，和自己的网站交互也不一样，还需要修改一下，而且文件很大，不如自己手写一个了，只要自己需要的功能，可能写的不好，提出意见</div>
            <a class="btn">Read More</a>
        </li>
    </ul>
</div>
{% endblock %}
