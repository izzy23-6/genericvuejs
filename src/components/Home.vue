<template>
  <!-- login form -->

  <body class="text-center">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="text" class="sr-only">UserID</label>
      <input type="text" id="text" class="form-control" placeholder="UserId" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>

      <router-link to="/home">
        <button class="btn btn-lg btn-primary btn-block">Sign In</button>
      </router-link>

      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </body>

</template>

<script src='../JS/Home.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../CSS/Home.css' scoped></style>
