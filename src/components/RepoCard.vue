<template>
  <div class="card">
    <div class="card__header">
      <div class="card__header__text">
        {{ repo.full_name }}
      </div>
      <div class="card__header__subtitle">
        {{ repo.description }}
      </div>
    </div>
    <div class="card__content">
      Fork: {{ repo.fork }}<br />
      Stars count: {{ repo.stargazers_count }}<br />
      Updated at: {{ repo.updated_at }}<br />
      Langage: {{ repo.language }}<br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'repo-card',
  props: ['repo'],
};
</script>

<style scoped>
.card {
  border-radius: 2px;
  box-shadow: 2px 2px 5px #2f2f2f;

  margin: 8px;
  padding: 8px;

  text-align: left;
}

.card__header {
  line-height: 2em;
  text-overflow: ellipsis;
}
.card__header__text {
  font-weight: bold;
}
.card_header__subtitle {
  font-size: 0.9em;
  font-style: italic;
  height: 1em;
}
</style>
