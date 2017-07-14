var vm = new Vue({
  el:'#example',
  data:{
      isActive: true,
      hasError: true
  }
})
var vm = new Vue({
  el:'#example1',
  data:{
      classObject:{
        active:false,
        'text-danger':true,
        pad:true
      }
  }
})
var vm = new Vue({
  el:'#example2',
  data:{
    isActive:false,
    activeClass:'active',
    errorClass:'text-danger'
  }
})
// 绑定内联样式
var vm = new Vue({
  el:'#example3',
  data:{
    activeColor: 'red',
    fontSize: 30
  }
})