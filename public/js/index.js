var oHTML = document.querySelector('html')
var aWidth = oHTML.clientWidth

// 這裡是預設設計稿寬是 375 px
// 將使用者的 Device 寬度取出後除設計稿的寬度

oHTML.style.fontSize = (aWidth / 375) * 16 + 'px'
