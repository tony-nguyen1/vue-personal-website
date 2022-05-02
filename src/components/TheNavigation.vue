<template>
  <div id="nav">
    <router-link id="logo" to="/">Tony N.</router-link>
    <router-link
      class="rounded-full bg-blue-500 px-2 py-2 mr-2"
      v-for="rubrique in mesRubriques"
      :key="rubrique.id"
      :to="{ name: `${rubrique.lien}` }"
    >
      {{ rubrique.nom }}
    </router-link>
  </div>
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
};
</script>
