const app = new Vue(
  {
    el: '#app',
    data: {
      listEmail: [],
      loading: false
    },
    mounted(){
      for(let i = 0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) =>{
            this.listEmail.push(response.data.response);
        });
      }
    }
  }
)
