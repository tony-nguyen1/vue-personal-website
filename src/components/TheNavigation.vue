<template>
  <nav class="bg-blue-500 flex">
    <router-link
      v-for="rubrique in mesRubriques"
      :key="rubrique.id"
      :to="{ name: `${rubrique.lien}` }"
    >
      {{ rubrique.nom }}
    </router-link>
  </nav>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      mesRubriques: sourceData.nomRubriques,
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
  // created() {
  //   document.getElementsByTagName("body")[0].style.height = "100%";
  //   document.getElementsByTagName("html")[0].style.height = "100%";
  //   document.getElementById("app").style.height = "100%";
  //   console.log("hi");
  // },
  // beforeUnmount() {
  //   console.log("goodbye");
  //   document.getElementsByTagName("body")[0].style.height = "auto";
  //   document.getElementsByTagName("html")[0].style.height = "auto";
  //   document.getElementById("app").style.height = "auto";
  // },
  // unmounted() {
  //   console.log("test");
  // },
  // beforeUpdate() {
  //   console.log("tesing");
  // },
  // updated() {
  //   console.log("tesing2");
  // },
  // mounted() {
  //   console.log("tesing3");
  // },
};
</script>

<style scoped>
nav {
  padding: 30px;
  padding-left: 125px;
}

nav a {
  font-weight: 500;
  color: rgb(253 186 116);
  margin-right: 0.5rem;
  font-size: 2em;
}

nav a:hover {
  color: rgb(251 146 60);
  font-weight: 600;
}

nav a.router-link-exact-active {
  color: rgb(251 146 60);
  font-weight: 600;
}
</style>
