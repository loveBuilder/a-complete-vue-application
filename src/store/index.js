import Vue from 'vue'
import Vuex from 'vuex'

import storyWall from '../components/storyWall/storyWall_store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storywall: storyWall
  }
})
