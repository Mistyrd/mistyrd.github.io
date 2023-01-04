let heo_cookiesTime = null;
let heo_musicPlaying = false;
let heo_keyboard = false;
let heo_intype = false;
// 私有函数
var heo = {

  //作者卡片问好
  sayhi: function() {
    if (document.querySelector('#author-info__sayhi')){
      document.getElementById("author-info__sayhi").innerHTML = getTimeState() + "！我是";
    }
  },

  //更改主题色
  changeThemeColor: function(color) {
    if (document.querySelector('meta[name="theme-color"]') !== null) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
    }
  },

  //自适应主题色
  initThemeColor: function() {
    if (heo.is_Post()) {
      const currentTop = window.scrollY || document.documentElement.scrollTop
      if (currentTop > 56) {
        let themeColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-background');
        heo.changeThemeColor(themeColor);
      }else {
        if (currentTop === 0) {
          let themeColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-main');
          heo.changeThemeColor(themeColor);
        }
      }
    }else {
      let themeColor = getComputedStyle(document.documentElement).getPropertyValue('--heo-background');
      heo.changeThemeColor(themeColor);
    }
  }
}