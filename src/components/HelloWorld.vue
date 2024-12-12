<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div>Ashish - {{token}}</div>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <div class="btn-div">
      <button class="btn" @click="handleRequestPermission">Request Permission</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const token = ref(window?.localStorage?.getItem('currentToken'));
    const handleRequestPermission = () => {
      if (!('Notification' in window)) {
        alert('Notification not supported');
      } else {
        alert('Inside permission processing block');
        if (Notification.permission === 'granted') {
          alert('Permission already granted');
          new Notification('Permission Already granted');
        } else if (Notification.permission === 'denied') {
          alert('Permission already denied');
        } else {
          alert('Requesting permission');
          try {
            Notification.requestPermission().then((permission) => {
              if (permission === 'granted') {
                alert('Permission granted');
                new Notification('Yayy, Permission granted');
              } else if (permission === 'denied') {
                alert('Permission denied');
              }
            });
          } catch (error) {
            alert('Notification request error', error);
          }
        }
      }
    };

    watch(() => window?.localStorage?.getItem('currentToken'), (newval) => {
      token.value = newval;
    });

    return {
      token,
      handleRequestPermission,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
