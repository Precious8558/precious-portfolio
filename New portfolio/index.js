// nav function

const app = Vue.createApp({
    data() {
        return {
            click: false
        }
    },
    methods: {
        toggle() {
            this.click = !this.click
        }
    }

})
app.mount("#respon")


//dark mode

function toggleDark() {
    var dark = document.body;
    dark.classList.toggle('dark-mode');


    const d = document.querySelector('.dark-M');
    if (d.innerHTML === '🌙') {
        d.innerHTML = '⛅'
    } else {
        d.innerHTML = '🌙'
    }
}