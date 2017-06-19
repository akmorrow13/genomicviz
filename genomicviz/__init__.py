from ._version import version_info, __version__

from .reads import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'genomic-viz',
        'require': 'genomic-viz/extension'
    }]
