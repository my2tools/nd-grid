'use strict'

var $ = require('nd-jquery')
var Grid = require('index')
var Promise = require('nd-promise')

$('<div id="main"/>').appendTo('body')

new Grid({
  parentNode: '#main',
  // for AJAX 代理
  proxy:{
    LIST: (function() {
      return function() {
        return Promise.resolve({
          items: [{
            'activity_id':1,
            'name': '李明敏',
            'creator': '李明敏',
            'last_updater': '李明敏',
            'apply_duration': '李明敏',
            'publish_at': '李明敏',
            'begin_date': '李明敏'
          }]
        })

      }
    })()
  },
  uniqueId: 'activity_id',
  labelMap: {
    'name': '活动名称',
    'creator': '创建者',
    'last_updater': '最后更新人',
    'apply_duration': '报名起止时间',
    'publish_at': '预约发布时间',
    'begin_date': '开始时间'
  }
}).render()





