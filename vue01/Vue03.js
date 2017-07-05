var app = new Vue({
  el:'#app',
  data:{
    msg:'Hello Vue!'
  }
})

var app1 = new Vue({
  el:'#app1',
  data:{
    dynamicId:'newId'
  }
})
var app2 = new Vue({
  el:'#app2',
  data:{
    isButtonDisabled:''
  }
})

var app3 = new Vue({
  el:'#app3',
  data:{
    number:'',
    ok: 1,
    message: 'hello vue',
    id: Math.round(Math.random()*9+1)
  }
})

var app4 = new Vue({
  el:'#app4',
  data:{
    // onSubmit:'true'
  }
})