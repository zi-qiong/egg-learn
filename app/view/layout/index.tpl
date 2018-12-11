<!DOCTYPE html>
<html>
  <head>
    <title>egg blog</title>
    <link rel="stylesheet" type="text/css" href="/public/css/index.css" />
  </head>
  <body>
    <div id="app">
      {% include './header.tpl' %}
      <section class="blog-content">
        {% block content %}
        {% endblock %}
      </section>
    </div>
    {% block javascript %}{% endblock %}
  </body>
</html>
