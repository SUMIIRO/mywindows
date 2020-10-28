$(function (){
  $('.js-draggy').draggable();
});
var zIndex = 0
// 打开我的电脑
function openMyPc() {
  let myPc = document.getElementById('my-pc')
  zIndex+=1
  myPc.style.zIndex = zIndex
  myPc.style.display='block'
}
// 点击最小化or‘x’关闭我的电脑
function closeMyPc() {
  let myPc = document.getElementById('my-pc')
  myPc.style.display='none'
}

function openPanel() {
  let panel = document.getElementById('panel')
  zIndex+=1
  panel.style.zIndex = zIndex
  panel.style.display='block'

}
function closePanel() {
  let panel = document.getElementById('panel')
  panel.style.display='none'
}

function openNetwork() {
  let network = document.getElementById('network')
  zIndex+=1
  network.style.zIndex = zIndex
  network.style.display='block'

}
function closeNetwork() {
  let network = document.getElementById('network')
  network.style.display='none'
}

function openWechat() {
  let wechat = document.getElementById('wechat')
  zIndex+=1
  wechat.style.zIndex = zIndex
  wechat.style.display='block'

}
function closeWechat() {
  let wechat = document.getElementById('wechat')
  wechat.style.display='none'
}

function openTeams() {
  let teams = document.getElementById('teams')
  zIndex+=1
  teams.style.zIndex = zIndex
  teams.style.display='block'
  setTimeout(()=>{
    openTeams1()
  },300)
}
function openTeams1() {
  let teams = document.getElementById('teams1')
  zIndex+=1
  teams.style.zIndex = zIndex
  teams.style.display='block'
  teams.style.left = '350px'
  teams.style.top = '70px'
  setTimeout(()=>{
    openTeams2()
  }, 300)
}
function openTeams2() {
  let teams = document.getElementById('teams2')
  zIndex+=1
  teams.style.zIndex = zIndex
  teams.style.left = '400px'
  teams.style.top = '140px'
  teams.style.display='block'
  // 如果要多加一个就得在他的上一个方法内 增加以下代码
  setTimeout(()=>{
    openTeams3()
  }, 300)
}
function openTeams3() {
  let teams = document.getElementById('teams3')
  zIndex+=1
  teams.style.zIndex = zIndex
  teams.style.left = '450px'
  teams.style.top = '190px'
  teams.style.display='block'
}
function closeTeams() {
  let teams = document.getElementById('teams')
  teams.style.display='none'
}
function closeTeams1() {
  let teams = document.getElementById('teams1')
  teams.style.display='none'
}
function closeTeams2() {
  let teams = document.getElementById('teams2')
  teams.style.display='none'
}
function closeTeams3() {
  let teams = document.getElementById('teams3')
  teams.style.display='none'
}
