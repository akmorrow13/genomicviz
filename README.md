genomic-viz
===============================

genomicviz

Installation
------------

<!-- To install use pip:

    $ pip install genomicviz
    $ jupyter nbextension enable --py --sys-prefix genomicviz -->


For a development installation (requires npm >= 3.10.10 and node.js >= 6.11.0),

    $ git clone https://github.com/akmorrow13/genomicviz.git
    $ cd genomicviz
    $ rm -r genomicviz/static/

Genomicviz uses a version of pileup.js not yet in npm. To install the latest version of pileup:
        $ git clone https://github.com/hammerlab/pileup.js.git
        $ cd pileup.js
        $ npm run build

Navigate to genomic-viz
        $ cd js/
        $ mkdir node_modules
        $ npm install --save <path_to_pileup>

    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix genomicviz
    $ jupyter nbextension enable --py --sys-prefix genomicviz


After pileup.js is installed once, you can just run the following for development:
  $ cd genomicviz
  $ rm -r genomicviz/static/
  $ pip install -e .
  $ jupyter nbextension install --py --symlink --sys-prefix genomicviz
  $ jupyter nbextension enable --py --sys-prefix genomicviz

For running examples:
    $ First run installation, explained above.
    $ cd examples
    $ jupyter notebook


For javascript development type checking:
  $ cd js
  $ npm run test
