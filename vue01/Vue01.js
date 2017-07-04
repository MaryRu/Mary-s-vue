/**
 * Created by Administrator on 2017/2/28.
 */
//Vue声明
var app1 = new Vue({
    el:'#app',
    data:{
        message:'hello vue!'
    }
})
// Vue.config.devtools = true;
var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'鼠标停留，你可以看到许多信息哟~'
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'Learn JavaScript'},
            {text:'Learn Vue'},
            {text:'Build something awesome'},
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'你好啊'
    }
})

// 组件化应用构建
Vue.component('todo-item',{
    // prop类似于一个自定义属性
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
var app7 = new Vue({
    el:'#app-7',
    data:{
        goodsList:[
            {id:0, text:'蔬菜'},
            {id:1, text:'水果'},
            {id:2, text:'肉'},
        ]
    }
})