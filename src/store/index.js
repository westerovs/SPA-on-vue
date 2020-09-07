import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* 3
      помещаем всё то, что находится в localStorage,
      если ничего нет, то во избежания ошибки, возвращаем пустой массив что бы json смог распарсить его
     */
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    // 2
    // вызываем mutations, который позволяет изменять Store
    createTask(state, task) {
      // обращаемся к state и добавляем в него задачу
      state.tasks.push(task)
      // что бы задачи сохранялись после перезапуска страницы и не удалялись
      // сохраняем весь state в localStorage (см vuex state in devtools)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    // 1
    // реализуем createTask из Create.vue
    // получаем через деструктур. метод commit и объект задач
    // где вызывая метод commit, куда мы передаём задачу
    createTask({ commit }, task) {
      commit('createTask', task)
    }
  },
  modules: {
  }
})
