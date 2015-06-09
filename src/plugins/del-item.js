/**
 * @module Grid
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

var $ = require('jquery');

var Confirm = require('nd-confirm');
var Alert = require('nd-alert');

module.exports = function() {
  var plugin = this,
    host = plugin.host,
    awaiting;

  (function(button) {
    host.addItemAction($.extend({
      'role': 'del-item',
      'text': '删除',
      'tips': '确定删除？'
    }, button), button && button.index);
  })(plugin.getOptions('button'));

  host.delegateEvents({

    'click [data-role="del-item"]': function(e) {
      if (awaiting) {
        return;
      }

      Confirm.show(e.currentTarget.getAttribute('data-tips'), function() {
        // 添加用于阻止多次点击
        awaiting = true;

        plugin.trigger('submit', host.getItemIdByTarget(e.currentTarget));
      });
    }

  });

  plugin.on('submit', function(id) {
    host.DELETE(id)
      .done(function(/*data*/) {
        host.deleteItem(id);
      })
      .fail(function(error) {
        Alert.show(error);
      })
      .always(function() {
        awaiting = false;
      });
    });

  // 通知就绪
  this.ready();
};
