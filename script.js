new Vue({
  el: '#app',
  data: {
    passwordLength: 16,
    refreshPassword: false,
    optiondata: [
      {
        name: 'lowercase',
        status: true,
        chars: 'abcdefghjkmnopqrstuvwxyz'
      },
      {
        name: 'uppercase',
        status: true,
        chars: 'ABCDEFGHJKLMNOPQRSTUVWXYZ'
      },
      {
        name: 'numbers',
        status: true,
        chars: '0123456789'
      },
      {
        name: 'specialchars',
        status: false,
        chars: '!$%&?+*#-/'
      }
    ]
  },
  computed: {
    charset() {
      return [...this.optiondata]
        .map(element => {
        if(element.status === true)
          return element.chars;
      }).join('');
    },
    generatedPassword() {
      this.refreshPassword;

      return [...window.crypto.getRandomValues(new Uint32Array(this.passwordLength))]
        .map(value => this.charset[value % this.charset.length])
        .join('');
    }
  }
})