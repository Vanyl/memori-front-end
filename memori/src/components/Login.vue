<template>
  <form class="login-form">
    <h2>login</h2>
    <div class="email-input">
      <label for="email">Email: </label>
      <input id="email" type="email" placeholder="email"/>
    </div>
    <div class="password-input">
      <label for="password">Password: </label>
      <input id="password" type="password" placeholder="password" />
    </div>
    <button class="btn-login" type="submit">Login</button>
    <p>New user? <a @click="$emit('show-register')"  class="to-register">Register here</a></p>
  </form>
</template>

<script>

export default {
  name: 'Login.vue',
};

</script>

<style scoped>
  h2{
    position: absolute;
    top: 110px;
    background-color: #eee;
  }
  .login-form{
    border: 1px solid black;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 100px;
  }

  .email-input, .password-input {
    display: flex;
    flex-direction: column;
  }

  .email-input input, .password-input input{
    padding: 10px;
  }

  button{
    padding: 10px 50px;
    border-radius: none;
    cursor: pointer;
  }

  .to-register{
    cursor: pointer;
    transition: all ease-in-out 0.5s;
  }

  .to-register:hover{
    color: pink;
    transform: translateY(2px)
  }
</style>