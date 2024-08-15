<template>
  <div id="app">
    <header>
      <router-link to="/"
        ><div class="logo"><img src="./assets/logo.png" alt="logo" /></div
      ></router-link>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/favorites">Избранное</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #42b983;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

header .logo img {
  width: 50px;
}

header nav {
  display: flex;
}

header nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
}

main {
  padding-top: 80px;
}
h1 {
  text-align: center;
}
</style>
