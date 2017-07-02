# js代码如何封装

## js没有提供类的支持，但我们可以利用js闭包封装机制来实现js类

```js
function f1(){
  this.show = function(){};
  this.init = function(){};
}
```

## 另外我们还可以用prototype属性来定义类的方法

```js
f1.prototype = {
  show: function(){},
  init: function(){}
}
```

## js也不支持类继承机制，但我们可以通过将父类prototype中的成员方法复制到子类的prototype中来实现

首先来看看js中的虚方法，在传统语言中虚方法是要先定义的，包含虚方法的类就是抽象类，不能被实例化，而在javascript中，虚方法就可以看做该类中没有定义的方法，但已经通过this指针使用了。

js虚方法不需经过声明，而直接使用了，并且类也可以被实例化，先定义Object的extend，一个为静态方法，一个为实例方法，这两个方法用于实现继承的prototype复制。

```js
Object.extend = function(){}
Object.prototype.extend = function(){}
```

实现一个继承类：

```js
function Rect(){}
Rect.prototype = Object.prototype;
// 扩充新方法
Rect.prototype.add = function(){}
```

这种方法不能用于重写,如果改变了show方法, f1的show也会指向同一函数可能是由于prototype赋值只是简单的改变指向地址. 如果上面也定义了: 

```js
Rect.prototype.show=function() { 
  alert("Rect show"); 
}
```

那么执行结果:

```js
function test(){ 
  var s=new f1(); 
  s.show(); //结果:Rect show 
  var r=new Rect(); 
  r.show(); //结果:Rect show 
  r.add(); 
}
```

我们再使用object.extend实现继承, 并实现一个oninit虚方法, 修改f1

```js
f1.prototype={ 
  show: function(){ 
    alert("f1 show"); 
  }, 
  initialize:function(){ 
    this.oninit(); 
  } 
};
```

实现Rect类继承

```js
Rect.prototype=(new f1).extend({ 
  //添加新的方法 
  add:function() { 
    alert("Rect add"); 
  }, 
  //使用这种方法可以重写show方法 
  show:function() { 
    alert("Rect show"); 
  }, 
  //实现虚方法 
  oninit:function() { 
    alert("Rect oninit"); 
  } 
})
```