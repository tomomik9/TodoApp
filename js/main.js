var app = new Vue({
    el: '#app',
    data: {
        newtask: '',
        todolist: []
    },
    methods: {
        addTask: function() {
            if (this.newtask == '') return;
            this.todolist.push({ text: this.newtask, done: false, hover: false}); 
            this.newtask = '';
        },
        remove: function(index) {
            if (this.todolist[index].done === true) {
                this.todolist.splice(index, 1);
            }
        }
    }
});