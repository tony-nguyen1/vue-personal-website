<template>
  <div id="particularites" class="text-justify p-5">
    <div
      v-for="uneParticularite in particularites"
      :key="uneParticularite.titre"
    >
      <h3>{{ uneParticularite.titre }}</h3>
      <p>{{ uneParticularite.contenu }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "projetDescription",
  props: { particularites: Array },
};
</script>
