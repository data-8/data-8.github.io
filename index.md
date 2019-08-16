<link rel="stylesheet" href="sp17/theme/css/main.css" />

Data 8: The Foundations of Data Science
====

The UC Berkeley Foundations of Data Science course combines three perspectives:
inferential thinking, computational thinking, and real-world relevance. Given
data arising from some real-world phenomenon, how does one analyze that data so
as to understand that phenomenon? The course teaches critical concepts and
skills in computer programming and statistical inference, in conjunction with
hands-on analysis of real-world datasets, including economic data, document
collections, geographical data, and social networks. It delves into social
issues surrounding data analysis such as privacy and design.

The course is offered in partnership with the [Berkeley Division of Data Sciences](http://data.berkeley.edu). 

Offerings
----

Each offering site includes links to assignments, slides, and readings.
You are welcome to use any of the materials you find.

-  [Summer 2019](./su19)
-  [Spring 2019](./sp19)
-  [Fall 2018](./fa18)
-  [Summer 2018](./su18)
-  [Spring 2018](./sp18)
-  [Fall 2017](./fa17)
-  [Summer 2017](./su17)
-  [Spring 2017](./sp17)
-  [Fall 2016](./fa16)
-  [Spring 2016](https://data-8.appspot.com/sp16/course)
-  [Fall 2015](./fa15)

Materials
---

All materials for the course, including the textbook and assignments, are
available for free online under a Creative Commons license.

**Textbook**: [Computational and Inferential Thinking: The Foundations of Data
Science](http://inferentialthinking.com) is a free online textbook that
includes interactive Jupyter notebooks and public data sets for all examples.
The textbook source is maintained as an [open source
project](https://github.com/data-8/textbook).

**Assignments**:
[All assignments from the Spring 2017 course
offering](https://github.com/data-8/data8assets/tree/gh-pages/materials/sp17),
as well as [assignments from the Fall 2016
offering](https://github.com/data-8/data8assets/tree/gh-pages/materials/fa16)
are available as Jupyter notebooks. The notebooks assume a Python 3 installation
with the standard modules from [an Anaconda
installation](https://www.continuum.io/downloads) such as Numpy and Matplotlib,
as well as the [datascience](https://pypi.python.org/pypi/datascience/) and
[okpy](https://pypi.python.org/pypi/okpy/) modules.

**Lecture Materials**: All [lecture videos from Fall
2016](https://www.youtube.com/playlist?list=PLFeJ2hV8Fyt7mjvwrDQ2QNYEYdtKSNA0y)
are hosted by Youtube. Slides as [PDF from Fall 2016](./fa16) and [Google Slides
and Jupyter notebooks from Spring 2017](./sp17) are linked from the respective
course calendars. To request access to the source of the slides for
instructional purposes, please fill out our [Data 8 Instructor
Interest](https://docs.google.com/forms/d/e/1FAIpQLSfw6iN-V58Urvg7RRfbjNQceisLULBizg0qku1_2qV8cvOtvA/viewform)
form.

Infrastructure
---

All of the software components of the course are maintained as open-source
projects. We encourage you to contact us if you want any help using them.
We also have prepared [a guide on how to set up course
infrastructure](http://data8.org/zero-to-data-8/).

**The [`datascience`](http://data8.org/datascience) module**: The course uses a module
for table manipulation, charts, and maps that provides an interface appropriate
for an introductory course. The `Table` class is similar to a `DataFrame` in
[Pandas](http://pandas.pydata.org/), but explicitly does not support row
indexes, hierarchical indexes, time series data, missing values, slicing, and
many other advanced features that can complicate table manipulation for novices.
The charting features use Matplotlib, but customize the output to match the
pedagogical goals of the course. The mapping features are implemented by
[Folium](https://github.com/python-visualization/folium), but aim to simplify
working with tables and geojson files. While the `datascience` module can
certainly be used outside the context of the course, it was specifically
designed to support the Data 8 curriculum, while setting up students to
transition to more standard tools such as Pandas.

**The [OK](http://okpy.org) autograder and submission system**: The
assignments depend on a Python-based autograder that includes client-side tests
available to students at any time and server-side tests intended for
correctness-based grading. Assignments are distributed with a folder of named
`tests`, which include test cases. These test cases are invoked from within
a notebook.

**Hosted Computing Environment**:
We provide a hosted environment for our students to edit and execute their
Notebooks. It includes two components, a [Kubernetes-based deployment of
JupyterHub](https://github.com/data-8/jupyterhub-k8s/blob/master/README.md) that
we have specifically designed for courses, and an [assignment
server](https://github.com/data-8/nbinteract) that loads assignments into the
students' environment.

If you want more information about any of these tools, please fill out our [Data
8 Instructor
Interest](https://docs.google.com/forms/d/e/1FAIpQLSfFvhl3DOuZZB2fV2FY3qcmBGoG17BwxIhWP91G7rcVqaEguA/viewform)
form or email `denero@berkeley.edu`.
