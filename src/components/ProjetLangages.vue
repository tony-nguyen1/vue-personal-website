<template>
  <div class="flex flex-row flex-wrap justify-center">
    <img
      class="w-24"
      v-for="unNom in noms"
      :key="unNom"
      :src="require('../assets/logo/' + unNom)"
      alt="Icone"
    />
  </div>
</template>

<script>
export default {
  name: "projetLangages",
  props: { noms: Array },
};
</script>
