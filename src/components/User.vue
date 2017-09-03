<template>
  <div class="page">
    <loader v-if="user === null" />
    <div class="header">
      <h1 class="header__text" v-if="this.user">
        {{ this.user.name }}
        ({{ this.user.login }})
      </h1>
    </div>

    <main class="main">
      <div class="container">
        <repo-card
          :repo="repo"
          v-for="repo in this.repos"
          :key="repo.id"
        />
      </div>
      <div v-if="hasNext">
        <button role="button" class="button" @click.prevent="onLoadMoreClick">
          <span class="button__text">Load more</span>
        </button>
      </div>
    </main>
  </div>
</template>


<script>
import RepoCard from './RepoCard';
import Loader from './Loader';

export default {
  name: 'user',
  components: {
    Loader,
    RepoCard,
  },
  props: ['username'],

  created() {
    this.$github.user(this.username, this.userCb.bind(this));
    this.$github.userRepos(this.username, this.page, this.reposCb.bind(this));
  },

  data() {
    return {
      user: null,
      repos: [],
      page: 1,
      hasNext: true,

      onLoadMoreClick() {
        this.$github.userRepos(
          this.username,
          this.page,
          this.reposCb.bind(this),
        );
      },

      reposCb(data, err) {
        if (err) { throw err; }
        this.hasNext = data.length > 0;
        data.forEach((repo) => { this.repos.push(repo); });
        this.page += 1;
      },

      userCb(data, err) {
        if (err) { throw err; }
        this.user = data;
      },
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
