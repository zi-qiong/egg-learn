{% extends '../layout/index.tpl' %}
{% block content %}
  <div class="blog-partner">
    {% for item in partnerList %}
      <div class="partner-item">
        <div class="cover">
          <img src="{{item.cover}}" />
        </div>
        <div class="content">
          <div>{{item.name}}</div>
        </div>
      </div>
    {% endfor %}
  </div>
{% endblock %}
