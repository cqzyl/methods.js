/*

## cqloading
> loading()

### proto:

- end: Function loading结束

*/
function cqLoading () {
  return cqLoading.start()
}
// start
cqLoading.start = function () {
  if (!this.loading_dom) {
    document.body.appendChild(this.loading_html);
  }
  this.loading_dom.style.display = 'block'
}
// end
cqLoading.end = function () {
  this.loading_dom.style.display = 'none'
}

cqLoading.loading_dom = document.getElementById('cq_loading');

var loading_dom = document.createDocumentFragment()
var style_dom = document.createElement('style')
var dialog_dom = document.createElement('dialog')
style_dom.innerHTML = '.cq-loading{position:fixed;top:0;left:0;width:100%;height:100%;text-align:center;z-index:998;background:rgba(0,0,0,0.6)}.cq-loading svg{position:relative;max-width:12%;max-height:12%;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);}';
dialog_dom.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="135" height="140" viewBox="0 0 135 140" fill="#fff"><rect y="7.28533" width="15" height="125.429" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="30" y="16.7715" width="15" height="106.457" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="60" width="15" height="81.4571" rx="6" y="29.2715"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="90" y="16.7715" width="15" height="106.457" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="120" y="7.28533" width="15" height="125.429" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect></svg>'

dialog_dom.getElementsByTagName('svg')[0].ontouchstart = function () {return false}

dialog_dom.setAttribute('id','cq_loading')
dialog_dom.setAttribute('class','cq-loading')

dialog_dom.setAttribute('open','')

loading_dom.appendChild(style_dom)
loading_dom.appendChild(dialog_dom)

cqLoading.loading_html = loading_dom

// exports.cqLoading = cqLoading
module.exports = {
  cqLoading
}

