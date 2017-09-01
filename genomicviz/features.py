import ipywidgets as widgets
from traitlets import Unicode, Int

@widgets.register('genomicviz.Features')
class Features(widgets.DOMWidget):
    """"""
    _view_name = Unicode('FeatureView').tag(sync=True)
    _model_name = Unicode('FeatureModel').tag(sync=True)
    _view_module = Unicode('genomicviz').tag(sync=True)
    _model_module = Unicode('genomicviz').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    json = Unicode('{}').tag(sync=True)
    build = Unicode('hg19').tag(sync=True)
    contig = Unicode('chr1').tag(sync=True)
    start = Int(1).tag(sync=True)
    stop = Int(50).tag(sync=True)
