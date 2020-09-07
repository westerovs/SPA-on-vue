<template>
    <div class="list">
        <h1 class="list__title">LIST</h1>

        <!-- проверяем есть ли задачи -->
        <table
            v-if="tasks.length"
            class="table"
        >
            <thead>
                <tr class="table__row">
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>status</th>
                    <th>open</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(task, idx) of tasks"
                    :key="idx"
                >
                    <td class="table__index">{{ idx + 1 }}</td>
                    <td>{{ task.title }}</td>
                    <td>{{ new Date(task.date).toLocaleDateString() }}</td>
                    <td class="table__td">
                        <div class="table__desk">{{ task.description }}</div>
                    </td>
                    <td class="table__status">{{ task.status }}</td>
                    <td>
                        <router-link
                            class="table__btn"
                            tag="button"
                            :to="`/task/${task.id}`">
                            Open
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>No tasks</p>
    </div>
</template>

<script>
    export default {
        // 4
        // нужно получить из storA state (list.vue)
        computed: {
            tasks() {
                return this.$store.getters.tasks
            }
        }
    };
</script>

<style scoped>
    .list {
        padding: 10px 20px;
    }

    .list__title {
        margin-bottom: 10px;
    }

    .table {
        min-width: 400px;
        margin: 0 auto;
    }

    th {
        padding: 10px 20px;
        background-color: rgb(90, 86, 86);
    }

    td {
        background-color: gray;
        padding: 10px 20px;
    }

    .table__index {
        text-align: center;
    }

    .table__btn {
        padding: 5px 10px;
        background-color: green;
        border: none;
        box-shadow: 1px 1px 5px black;
        cursor: pointer;
    }

    .table__status {
        color: rgb(10, 224, 10);
    }

    /* для появления точек, если не умещается контент */
    .table__td {
        max-width: 200px;
    }

    .table__desk {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>