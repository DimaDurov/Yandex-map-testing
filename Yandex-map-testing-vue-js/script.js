new Vue({
  el: '#app',
  data: {
    coords: [
      55.75830499835677,
      37.61873346205809
    ],
  },
  computed: {
    balloonTemplate() {
      return `
<p>Вы находитесь тут <b>${this.coords}</b></p>
`
    }
  },
  methods: {
    onClick(h) {
      this.coords = h.get('coords');
    }
  }
})