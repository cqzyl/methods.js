
/*
  # 删除url指定参数
  
  ## delURLParameter(parameter_name, not_change_url)

  - arguments:
    > parameter_name: String 要删除的url

    > not_change_url: Boolean 是否更改url
    
  - res:
    > url中的指定参数（'parameter_name=parameter_value'）
*/
function delURLParameter (parameter_name, not_change_url) {
  var 
    myhref = window.location.href,
    hrefarr = myhref.split('?'),
    replace_url = '',
    del_parameter = '';

  if (!hrefarr[1] || hrefarr[1].indexOf(parameter_name) === -1) {
    return false;
  }
  
  var c0arr = hrefarr[1].split('&');

  for (var i = c0arr.length - 1; i > -1; i--) {
    if (c0arr[i].indexOf(parameter_name) === 0) {
      del_parameter = c0arr[i];
      c0arr.splice(i, 1 );
    }
  }
  replace_url = hrefarr[0] + (c0arr.length ? ('?' + c0arr.join('&')) : '');
  if (!not_change_url) {
    try{
      history.replaceState(null, '', replace_url);
    } catch (er) {console.log(er)}
  }
  return del_parameter
}

// exports.delURLParameter = delURLParameter

module.exports = {
  delURLParameter
}
