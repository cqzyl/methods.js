/*
  # html转义

  ## new HTMLTrope()

  ### proto:
 
  - data: Object 要进行置换的参数{ 编码后: 解码后 }

  - setData: Function 新增转义字符
    
    - arguments:
      > obj: Object 要新增的置换参数{ 编码后: 解码后 }

  - encode: Function 编码
  
    - arguments:
      > str: String 需要被编码的字符串
      
    - res: String 编码后的字符串

  - decode: Function 解码
  
    - arguments:
    > str: String 需要被解码的字符串
    
    - res: String 解码后的字符串
*/
function HTMLTrope() {
  this.data = {
    '&lt;'   : '<',
    '&gt;'   : '>',
    '&nbsp;' : ' ',
    '&amp;'  : '&',
    '&quot;' : '"',
    '&#39;'  : '\''
  };
  var data_RegExp = null,
      // 解码用r_data
      r_data = null,
      r_data_RegExp = null,
      that = this;
  
  data_RegExp = dataToRegExp(this.data)
  r_data_RegExp = setRData()
  
  // 设置解码data
  function setRData () {
    r_data = {}
    for (var i in that.data) {
      r_data[that.data[i]] = i
    }
    return dataToRegExp(r_data)
  }
  
  // 根据data生成正则
  function dataToRegExp(obj) {
    var arrRegExp = []
    for (var key in obj) {
      arrRegExp.push(key)
    }
    return new RegExp('(' + arrRegExp.join('|') + ')', 'ig')
  }

  // 新增转义字符
  this.setData = function (obj) {
    for (var i in obj) {
      this.data[i] = obj[i]
    }
    data_RegExp = dataToRegExp(this.data)
    r_data_RegExp = setRData()
  }

  // 编码toread
  this.encode = function (str) {
    return str.replace(r_data_RegExp, function (all, t) {
      return r_data[t];
    })
  }
  
  // 解码tocode
  this.decode = function (str) {
    return str.replace(data_RegExp, function (all, t) {
      return that.data[t];
    })
  }
}
// exports.HTMLTrope = new HTMLTrope()
module.exports = {
  HTMLTrope: new HTMLTrope()
}
