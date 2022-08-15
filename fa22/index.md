---
layout: home
title: Home
nav_order: 1
nav_exclude: false
permalink: index.html
seo:
  type: Course
  name: Data 8 Fall 2022
---

# Data 8: Foundations of Data Science

{: .mb-2 }
UC Berkeley, Fall 2022
{: .mb-2 .fs-6 .text-grey-dk-000 }

## Announcements

{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}

{% for module in site.modules %}
{{ module }}
{% endfor %}

<!--
DARKMODE UNDER CONSTRUCTION

### Darkmode Test

<button class="js-toggle-dark-mode">Toggle Dark Mode</button>


<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
  } else {
    jtd.setTheme('dark');
  }
});
</script>
-->
