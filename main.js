new Vue ({
    el:'#app',
    data: {
        title :"Hello World"
    },
    methods: {
        reverseTitle: function() {

       this.title = this.title.split('').reverse().join(' ');
    } 

    }

})
