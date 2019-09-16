var randomuser = new Vue({
  el: '#userinfo',
  data: {
    users: {
      name:"",
      dob:"",
      age:"",
      email:"",
      nat:"",
      picture:""
    }
},
methods: {
  fetchUser() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {randomuser.users = json.results[0];})
  }
},
created(){
    this.fetchUser()
  }
});
