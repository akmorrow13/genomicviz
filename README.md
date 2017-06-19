genomic-viz
===============================

genomicviz

Installation
------------

To install use pip:

    $ pip install genomicviz
    $ jupyter nbextension enable --py --sys-prefix genomicviz


For a development installation (requires npm),

    $ git clone https://github.com/akmorrow13/genomic-viz.git
    $ cd genomic-viz
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix genomicviz
    $ jupyter nbextension enable --py --sys-prefix genomicviz
