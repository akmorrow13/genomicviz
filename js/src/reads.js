/* @flow */

var widgets = require('jupyter-js-widgets');
var _ = require('underscore');
var pileup = require('pileup');
var utils = require("./utils");



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
        json : '{}',
        build: 'hg19',
        contig: 'chr1',
        start: 1,
        stop: 50
    })
});


// Custom View. Renders the widget model.
var ReadsView = widgets.DOMWidgetView.extend({
    render: function() {
        this.json_changed();
        this.model.on('change:json', this.json_changed, this);
        this.model.on('change:build', this.json_changed, this);
    },

    json_changed: function() {

      // make pileup div
      var sources = [
          {
            viz: pileup.viz.genome(),
            isReference: true,
            data: pileup.formats.twoBit({
              url: utils.genomeBuilds[this.model.get('build')]
            }),
            name: 'Reference'
          },
          {
            viz: pileup.viz.scale(),
            name: 'Scale'
          },
          {
            viz: pileup.viz.pileup(),
            cssClass: 'reads',
            data: pileup.formats.json(this.model.get('json'))
          }
      ];

      var range = {contig: this.model.get('contig'), start: this.model.get('start'), stop: this.model.get('stop')};

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
