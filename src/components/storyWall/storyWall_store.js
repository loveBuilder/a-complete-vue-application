import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
const axios = require('axios')

export default {
  state: {
    // 项目数据
    projTreeLoading: false,
    projTree: [],
    // 版本数据
    versionLoading: false,
    versionTree: [],
    // 任务数据
    storylistLoading: false,
    storylistRes: {
      nonStory: { // 非需求任务
        closed: [],
        developing: [],
        planned: [],
        developed: []
      },
      story: { // 需求任务
        tested: [],
        testing: [],
        closed: [],
        developing: [],
        planned: [],
        developed: []
      }
    }
  },
  mutations: {
    // 正式开始
    // 获取项目树
    getProjTree: function (state) {
      state.projTreeLoading = true
      axios.get('/Story/getProject')
        .then(res => {
          state.projTreeLoading = false
          state.projTree = res.data.data
        })
        .catch(err => {
          state.projTreeLoading = false
          console.log(err)
        })
    },
    // 获取版本树
    getVersion: function (state, params) {
      state.versionLoading = true
      axios.get('/Story/getVersion', { params })
        .then(res => {
          state.versionLoading = false
          state.versionTree = res.data.data
        })
        .catch(err => {
          state.versionLoading = false
          console.log(err)
        })
    },
    // 获取需求数据
    getAllStory: function (state, params) {
      state.storylistLoading = true
      axios.get('/Story/getAllStory', { params })
        .then(res => {
          state.storylistLoading = false
          state.storylistRes = res.data.data
        })
        .catch(err => {
          state.storylistLoading = false
          console.log(err)
        })
    }
  },
  actions: {
    getProjTree_storewall: function (context) {
      context.commit('getProjTree')
    },
    getVersion_storewall: function (context, options) {
      context.commit('getVersion', options)
    },
    getAllStory_storewall: function (context, options) {
      context.commit('getAllStory', options)
    }
  },
  getters: {
    // uppercase: function (state) {
    //   return state.name.toUpperCase()
    // }
  }
}
