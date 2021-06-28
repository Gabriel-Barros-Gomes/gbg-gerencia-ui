<template>
  <div id="app">
    
    <div id="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="" alt="GBG - solutions LOGO" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>


        <router-link class="navbar-item" to="/">Inicio</router-link>
        <router-link class="navbar-item" to="/about">Sobre</router-link>
        <router-link class="navbar-item" to="/auth/login">Entrar</router-link>
        <router-link class="navbar-item" to="/auth/sign">Cadastre-se</router-link>
      </nav>
      
    </div>

    <div id="canvas">
      <router-view/>
    </div>

    <div id="footer">
      Developed by GBG <a href="">www.gbg-solutions.com.br</a>
    </div>
  </div>
</template>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
#nav{
  padding: 2rem;
}
#canvas{
  padding: 1rem;
}
#footer{
  padding: 1rem
}
</style>
