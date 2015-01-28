---

---

var searchdb = {
  "hochschulen": [
{% for hochschule in site.hochschule %}
    {
      "name": {{ hochschule.Name | jsonify }},
      "bundesland": {{ hochschule.bundesland | jsonify }},
      "slug": {{ hochschule.url | jsonify }}
    }{% unless forloop.last %},{% endunless %}
{% endfor %}
  ],
  "foerderer": [
{% for foerd in site.foerderer %}
    {
      "name": {{ foerd.Firma | jsonify }},
      "slug": {{ foerd.url | jsonify }}
    }{% unless forloop.last %},{% endunless %}
{% endfor %}
  ]
};
