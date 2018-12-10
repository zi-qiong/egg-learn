{% extends '../layout/index.tpl' %}
{% block content %}
<div class="listView">
    <ul>
        {% for item in dataList.list %}
        <li class="list-item">
            <h2>{{item.title}}</h2>
            <div class="info">
                <span>{{item.author}}</span>
                <span>{{item.time}}</span>
            </div>
            <div class="desc">{{item.desc}}</div>
            <a class="btn" href="{{item.url}}">Read More</a>
        </li>
        {% endfor %}
    </ul>
</div>
{% endblock %}
