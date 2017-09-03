<template>
  <div class="page">
    <div class="header">
      <h1 class="header__text">Octokottans</h1>
    </div>

    <main class="main">
      <form class="form" v-on:submit.prevent="onSubmit">
        <div class="form__row">
          <label class="form__label">GitHub username:</label>
          <input class="form__input" type="text" v-model="username">
          <button class="button">
              <span class="button__text">View</span>
          </button>
        </div>
      </form>
    </main>
  </div>
</template>


<script>
export default {
  name: 'welcome',
  data() {
    return {
      username: '',

      // Handlers
      onSubmit() {
        this.$router.push({
          name: 'User',
          params: { username: this.username },
        });
      },
    };
  },
};
</script>
