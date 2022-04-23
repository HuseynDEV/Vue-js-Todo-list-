const app = Vue.createApp({


    data() {

        return {
            todoList: [{
                id: 1,
                text: "todo 1",
                deger: false
            },
            {
                id: 2,
                text: "todo 2",
                deger: false
            },
            {
                id: 3,
                text: "todo 3",
                deger: false
            },
            {
                id: 4,
                text: "todo 4",
                deger: false
            }
            ]
        }
    },

    methods: {
        Ekle(event) {
            this.todoList.push({
                id: new Date(),
                text: event.target.value,
                deger: false
            })

            event.target.value=""
        },
        Silme(event) {
            this.todoList = this.todoList.filter(e => e != event)
        }
    },


    computed: {
        Finished() {
            return this.todoList.filter(e => e.deger).length

        },

        NotFinished() {
            return this.todoList.filter(e => !e.deger).length
        }
    }



}).mount("#app")