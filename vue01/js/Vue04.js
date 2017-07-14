// 对于复杂的逻辑，使用计算属性
var vm = new Vue({
  el:'#example',
  data:{
    message:'Hello'
  },
  computed:{
    reversedMessage:function(){   
      return this.message.split('').reverse().join('')
    }
  }
})
// method 没有缓存，当我们有一个开销比较大的计算属性时，method 会每次都遍历这个属性;computed 有缓存，基于依赖进行缓存，当相关的依赖发生改变时会重新求值。
var vm = new Vue({
  el:'#example1',
  data:{
    message:'Ma'
  },
   methods:{
    reversedMessage:function(){
      return this.message.split('').join('-')
    }
  }
})
 
//  computed比watch更简洁
 var vm = new Vue({
  el:'#example2',
  data:{
    firstName:'Ma',
    lastName :'Ru',
    // fullName :'Ma ru'
  },
  //  watch:{
  //   firstName: function (val) {
  //     this.fullName = val + ' ' + this.lastName
  //   },
  //    lastName: function (val) {
  //     this.fullName = this.firstName + ' ' + val
  //   }
  // }
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
