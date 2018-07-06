/* 

## cqalert
> cqalert(msg)
- arguments:
    ```
    > msg: String 提示字段
    ```

 */
function cqAlert (str) {
  return cqAlert.start(str)
}

cqAlert.alert_dom = document.getElementById('cq_alert');

var alert_dom = document.createDocumentFragment()
var style_dom = document.createElement('style')
var dialog_dom = document.createElement('dialog')
 
var alert_rem = Math.min(window.screen.width * window.devicePixelRatio, window.screen.height * window.devicePixelRatio)/100

style_dom.innerHTML = '.cq-alert,.cq-alert *{margin:0;padding:0}.cq-alert .tac{text-align:center}.cq-alert{font-size:'+ (alert_rem * 5) +'px;display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:999;background:rgba(0,0,0,0.6)}.cq-alert .cq-alert-main{position:absolute;width:92%;top:45%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);border-radius:1.5vw;overflow:hidden;background:#fff}.cq-alert p{padding:8% 5%}.cq-alert button{font-size: 1em;display:block;border:none;width:100%;background:none;border-top:1px solid #aaa; height:2.5em;line-height:2.5em}'
dialog_dom.innerHTML = '<section class="cq-alert-main"><p class="tac">弹窗~</p><button class="tac">确定</button></section>'

dialog_dom.setAttribute('id','cq_alert')
dialog_dom.setAttribute('class','cq-alert')
dialog_dom.setAttribute('open','')
dialog_dom.getElementsByTagName('button')[0].onclick = function () {
  dialog_dom.style.display = ''
}
alert_dom.appendChild(style_dom)
alert_dom.appendChild(dialog_dom)
cqAlert.alert_html = alert_dom

cqAlert.start = function (str) {

  // 是否存在此dom
  if (!this.alert_dom) {
    this.appendHTML()
  }

  // 是否已经展开
  if (this.alert_dom.style.display === 'block') {
    this.alert_dom.style.display = ''
  }

  this.toAlert(str)
}

// alert弹窗展示
cqAlert.toAlert = function (str) {
  this.alert_dom.getElementsByTagName('p')[0].innerHTML = str;
  this.alert_dom.style.display = 'block'
};

cqAlert.appendHTML = function () {
  this.alert_dom = dialog_dom;
  document.body.appendChild(this.alert_html);
};

cqAlert.toWindow = function () {
  window.alert = this
};

module.exports = {
  cqAlert
}
// exports.cqAlert = cqAlert
