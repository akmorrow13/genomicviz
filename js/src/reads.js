var widgets = require('jupyter-js-widgets');
var _ = require('underscore');
var pileup = require('pileup');

require('pileup/style/pileup.css');

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var ReadsModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(_.result(this, 'widgets.DOMWidgetModel.prototype.defaults'), {
        _model_name : 'ReadsModel',
        _view_name : 'ReadsView',
        _model_module : 'genomic-viz',
        _view_module : 'genomic-viz',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        json : '{}'
    })
});


// Custom View. Renders the widget model.
var ReadsView = widgets.DOMWidgetView.extend({
    render: function() {
        this.json_changed();
        this.model.on('change:json', this.json_changed, this);
    },

    json_changed: function() {

      // make pileup div
      var sources = [
          {
            viz: pileup.viz.genome(),
            isReference: true,
            data: pileup.formats.twoBit({
              url: 'http://www.biodalliance.org/datasets/hg19.2bit'
            }),
            name: 'Reference'
          },
          {
            viz: pileup.viz.scale(),
            name: 'Scale'
          },
          {
            viz: pileup.viz.pileup(),
            data: pileup.formats.json(this.model.get('json'))
          }
      ];

      // TODO: pass as parameter
      var range = {contig: 'chr17', start: 7512284, stop: 7512644};

      var p = pileup.create(this.el, {
        range: range,
        tracks: sources
      });
    }
});


module.exports = {
    ReadsModel : ReadsModel,
    ReadsView : ReadsView
};
