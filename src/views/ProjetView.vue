<template>
  <h2>{{ projet.nom }}</h2>
  <projetLangages :noms="projet.langages" />
  <p>{{ projet.description }}</p>
  <projetDescription :particularites="projet.particularites" />
</template>

<script>
import sourceData from "@/data.json";
import projetLangages from "@/components/ProjetLangages.vue";
import projetDescription from "@/components/ProjetDescription.vue";

export default {
  props: {
    id: String,
  },
  components: {
    projetLangages,
    projetDescription,
  },
  computed: {
    projet() {
      return sourceData.portfolio.find((unProjet) => unProjet.id === this.id);
    },
  },
};
</script>
