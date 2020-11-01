var app = new Vue({
    el: '#app',
    data(){
        return{
            newTodo: '',
            todoList: []
        }
    },
    methods: {
        // add item to the list with the psudh method
        additem()
        {
            this.todoList.push({
                title: this.newTodo,
                done: false
            });
        },
        // indexOf returns the Position in the Array. The splice function uses the Position
        // as the first param and the second parameter tells how many elements should be 
        // delete from this position
        removeItem(item) {
            console.log(item);
            let todoIndex = this.todoList.indexOf(item);
            this.todoList.splice(todoIndex, 1); 
        },
        // check all todos with forEach Loop by setting the done prop to ture
        checkall()
        {
            this.todoList.forEach(item => {
                item.done = true;
            });
        },
        // delete all todos
        deleteall()
        {
            this.todoList = [];
        }
    }
}) 