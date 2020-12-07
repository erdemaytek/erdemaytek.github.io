<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" v-on:click="navbar_Toggle()" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active' : state}" >
    <div class="navbar-start">
             <nuxt-link class="navbar-item" to="/"> Ana Sayfa</nuxt-link>
     <nuxt-link class="navbar-item" to="/ozgecmis"> Öz Geçmiş</nuxt-link>
        <nuxt-link class="navbar-item" to="/iletisim"> İletişim</nuxt-link>
                <nuxt-link class="navbar-item" to="/blog/"> Blog</nuxt-link>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href="https://github.com/erdemaytek" class="button is-primary">
            Github
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    data(){
        return{
            state:false
        }
    },
        methods: {
            navbar_Toggle() {
                this.state = !this.state
            }
        }
        
        }
</script>

<style>
</style>