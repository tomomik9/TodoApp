var app = new Vue({
    el: '#app',
    data: {
        storageKey: 'todolist',
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
    },
    created: function() {
        var dataStr = localStorage.getItem(this.storageKey);
        if (dataStr) {
            this.todolist = JSON.parse(dataStr);
        }
    },
    watch: {
        todolist: {
            handler: function() {
                localStorage.setItem(
                    this.storageKey,
                    JSON.stringify(this.todolist)
                );
            },
            deep: true
        }
    }    
});