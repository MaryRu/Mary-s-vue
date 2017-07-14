new Vue({
  el:'#app',
  data:{
    newPerson:{
      name:'',
      age:0,
      sex:'Male'
    },
    people:[{
      name:'Jack',
      age: 30,
      sex:'Male'
    },
    {
      name:'Tom',
      age: 25,
      sex:'Female'
    },
    {
      name:'Ma',
      age: 12,
      sex:'Male'
    }]
  },
  methods:{
    createPerson:function(){
      this.people.push(this.newPerson);
      this.newPerson = {name:'',age:0,sex:'Male'}
    },
    deletePerson:function(index){
      this.people.splice(index,1);
    }
  }
})