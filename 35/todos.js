const TodoItem = {
    name: 'TodoItem',
    props: ['item', 'index'],
    methods: {
        markDone(index){
            this.$parent.markDone(index)
        }
    },
    template: '#todo_item'
}

const App = {
    data(){
        return {
            todoList: [
                {
                    text: 'Buy milk',
                    isDone: true
                },
                {
                    text: 'Learn Vue.js',
                    isDone: false
                },
                {
                    text: 'Wash the car',
                    isDone: false
                }
            ],
            taskText: ''
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addTodo(){
            if (this.taskText !== ''){
                this.todoList.push({
                    text: this.taskText,
                    isDone: false
                });
                this.taskText = '';
            }
        },
        markDone(index) {
            this.todoList[index].isDone = true;
        }
    },
}

Vue.createApp(App).mount('#app')