const { createApp } = Vue

createApp({
	data() {
		return {
			emails: [],
		}
	},
	methods: {
		fetchName(n) {
            for(let i = 0; i < n; i++){
                axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data)
                    const email = res.data.response
                    email.push(this.emails)
                })
                
            }
			
		},
	},
	created() {
		this.fetchName(10)
	},
}).mount('#app')
