<template>
  <form class="register-form">
    <h2>register</h2>
    <div class="username-input">
      <label>Username: </label>
      <input v-model="input.username" placeholder="username">
    </div>
    <div class="email-input">
      <label for="email">Email: </label>
      <input v-model="input.email" id="email" type="email" placeholder="email"/>
    </div>
    <div class="password-input">
      <label for="password">Password: </label>
      <input v-model="input.password" type="password" id="password" placeholder="password"/>
    </div>
    <button class="btn-register" type="submit">Register</button>
    <p>Already have an account? <a @click="$emit('show-login')" class="to-login">Login here</a></p>
  </form>
</template>

<script>

export default {
    name: 'Register.vue',
    data(){
    return{
        input:{
            username: "",
            email: "",
            password: ""
        }
    }
  }
};

</script>

<style scoped>
  h2{
    position: absolute;
    top: 110px;
    background-color: #eee;
  }
  .register-form{
    border: 1px solid black;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 100px;
  }

  .username-input, .email-input, .password-input {
    display: flex;
    flex-direction: column;
  }

  .username-input input, .email-input input, .password-input input{
    padding: 10px;
  }

  button{
    padding: 10px 50px;
    border-radius: none;
    cursor: pointer;
  }

  .to-login{
    cursor: pointer;
    transition: all ease-in-out 0.5s;
  }

  .to-login:hover{
    color: pink;
    transform: translateY(2px)
  }
</style>