<template>
  <h1>Coucou</h1>
  <p>{{ projet.id }}</p>
  <p>{{ projet.nom }}</p>
  <p>{{ projet.langages }}</p>
</template>

<script>
import sourceData from "@/data.json";

export default {
  props: {
    id: String,
  },
  computed: {
    projet() {
      return sourceData.portfolio.find((unProjet) => unProjet.id === this.id);
    },
  },
};
</script>
