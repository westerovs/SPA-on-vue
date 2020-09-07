<template>
  <div class="home">
    <h1 class="home__title">Create</h1>

    <form @submit.prevent="submitHandler" class="form">
      <div class="form__row">
        <label for="title" class="form__label">Title:</label>
        <input
          v-model="title"
          id="title"
          type="text"
          class="form__input"
          placeholder="title"
        >
      </div>

      <div class="form__row">
        <label for="textarea" class="form__label">Description:</label>
        <textarea id="textarea"
          v-model="description"
          type="textarea"
          class="form__textarea"
          placeholder="description"
          maxlength="2077"
        ></textarea>
      </div>

      <div class="form__row">
        <label for="date" class="form__label">Date:</label>
        <input id="date" class="form__date" ref="datepicker" type="datetime-local">
      </div>

      <button class="form__btn" type="submit">Create task</button>
    </form>
  </div>
</template>

<script>

  export default {
    name: 'create',
    data: () => ({
      title: '',
      description: '',
      date: null,
    }),
    mounted() {
      const date = document.querySelector('.form__date');
      date.value = '1989-10-17T12:30';

      this.date = date.value;
    },
    methods: {
      submitHandler() {
        const task = {
          title: this.title,
          description: this.description,
          id: Date.now(),
          status: 'active',
          date: this.date
        }

        console.log(task);
        // передаём задачу в vuex
        this.$store.dispatch('createTask', task)
        // переходим на страницу задачи
        this.$router.push('/list')
      },
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
    margin-bottom: 20px;
  }

  .form__label {
    margin-bottom: 5px;
    color: black;
    cursor: pointer;
  }

  .form__textarea,
  .form__input {
    padding: 15px;
    border-radius: 10px;
    border-width: 0;
  }

  .form__btn {
    margin: 0 auto;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
  }
</style>