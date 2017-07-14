var example = new Vue({
  el: '#example-1',
  data: {
    items: [
      {message: '我是1' },
      {message: '我是2' }
    ]
  }
})
var example1 = new Vue({
  el: '#example-2',
  data: {
    items: [
      {msg: 'm' },
      {msg: 'y' },
      {msg: 'r' }
    ]
  }
})
var example2 = new Vue({
  el: '#example-3'
})
var example3 = new Vue({
  el: '#example-4',
  data:{
    numbers:[1,2,3,4,5]
  },
  computed:{
    evenNumbers:function(){
      return this.numbers.filter(function(number){
        return number % 2 !== 0
      })
    }
  }
})
