const d = {
  '转': '轉', 
  '换': '換',  
  '编': '編', 
  '码': '碼', 
  '说': '說', 
  '明': '明', 
  '.': '.'
}

function s2t(text) {
  let result = []
  for (let i=0; i<text.length; i++) {
    let c = text.charAt(i)
    let tc = d[c]
    let c1 = (tc==null) ? c : tc
    result.push(c1)
  }
  return result.join('')
}

const sText = '转换编码说明.转换编码说明.繁简'
let tText = s2t(sText)
console.log('tText=', tText)
