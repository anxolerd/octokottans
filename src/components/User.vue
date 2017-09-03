<template>
  <div class="page">
    <div class="header">
      <h1 class="header__text">{{ username }}</h1>
    </div>

    <main class="main">

    </main>
  </div>
</template>


<script>
export default {
  name: 'user',
  props: ['username'],
  data() {
    return {
    };
  },
};
</script>
