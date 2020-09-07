<template>
  <div class="home">
    <h1 class="home__title">Create</h1>

    <form class="form">
      <div class="form__row">
        <label for="title" class="form__label">Title:</label>
        <input id="title" type="text" class="form__input">
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
  .home {
    padding: 10px 20px;
  }

  .home__title {
    margin-bottom: 10px;
  }

  .form {
    max-width: 300px;
    margin: 0 auto;
  }

  .form__row {
    display: flex;
    flex-direction: column;
  }

  .form__label {
    margin-bottom: 5px;
    color: black;
    cursor: pointer;
  }

  .form__input {
    padding: 15px;
    border-radius: 50px;
    border-width: 0;
  }
</style>