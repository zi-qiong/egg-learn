{% extends '../layout/index.tpl' %}
{% block content %}
  <div class="blog-partner">
    {% for item in partnerList %}
      <div class="partner-item">
        <a href="{{'/partner/' + item.slug}}">
          <div class="cover">
            <img src="{{item.cover}}" />
          </div>
          <div class="content">
            <div>{{item.name}}</div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
{% endblock %}
{% block javascript %}
  <script type="text/javascript">
    var list = {{ partnerList | dump | safe }};
    console.log(list)
  </script>
{% endblock %}

