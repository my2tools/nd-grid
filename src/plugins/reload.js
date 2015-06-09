/**
 * @module Grid
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

var $ = require('jquery');

var helpers = require('../helpers');

module.exports = function() {
  var plugin = this,
    host = plugin.host;

  // 添加按钮到顶部
  (function(button) {
    host.$(helpers.makePlace(button)).append(
      helpers.makeButton($.extend({
        role: 'reload',
        text: '刷新',
        disabled: true
      }, button))
    );
  })(plugin.getOptions('button'));

  host.delegateEvents({
    'click [data-role="reload"]': function() {
      host.getList();
    }
  });

  host.after('renderPartial', function() {
    host.$('[data-role="reload"]').prop('disabled', false);
  });

  // 通知就绪
  this.ready();
};
