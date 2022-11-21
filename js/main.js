const app = Vue.createApp({
    data: () => ({
       税抜価格: 100
    }),
    computed: {
        税込価格: {
            get: function() {
                return this.税抜価格 * 1.1
            },
            set: function(value) {
                this.税抜価格 = value / 1.1
            }
        }
    }
})
app.mount('#app')