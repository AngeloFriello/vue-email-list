const { createApp } = Vue

createApp({
	data() {
		return {
			emails: [],
		}
	},
	methods: {
        fetchEmail(n) {
            for(let i = 0; i < n; i++){
                axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data, this.emails.length)
                    const email = res.data.response
                    this.emails.push(email)
					
                })           
            }
		},
	},
	created() {
		this.fetchEmail(10)
	},
}).mount('#app')
