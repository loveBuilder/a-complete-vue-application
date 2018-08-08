<template>
  <div class="header-box">
    <el-row>
      <el-col :span="16">
        <el-form ref="form" :model="form" :inline="true">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="项目：">
                <el-select
                  v-model="form.projid"
                  :placeholder="projTreeLoading ? '加载中...' : '请选择项目'"
                  v-on:change="getVersion"
                >
                  <el-option
                    v-for="(item, index) in projTree"
                    :label="item.name"
                    :value="item.id"
                    :key="`proj_${index}`"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="版本：">
                <el-select
                  v-model="form.buildId"
                  :placeholder="versionLoading ? '加载中...' : '请选择版本'"
                  v-on:change="getAllStory"
                >
                  <el-option
                    v-for="(item, index) in versionTree"
                    :label="item.name"
                    :value="item.id"
                    :key="`vs_${index}`"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-checkbox
                  v-model="form.ifHistory"
                  label="历史版本"
                  v-on:change="getVersion"
                ></el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="8">
        <div class="icons-bar">
          <div class="icons-bar-node">
            <i class="icon-colorbar icon-colorbar-normal"></i>
            <span>正常</span>
          </div>
          <div class="icons-bar-node">
            <i class="icon-colorbar icon-colorbar-timeout"></i>
            <span>超时</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Header',
  data: function () {
    return {
      form: {
        projid: '',
        buildId: '',
        ifHistory: false
      }
    }
  },
  computed: {
    projTreeLoading () {
      return this.$store.state.storywall.projTreeLoading
    },
    projTree () {
      return this.$store.state.storywall.projTree
    },
    versionLoading () {
      return this.$store.state.storywall.versionLoading
    },
    versionTree () {
      return this.$store.state.storywall.versionTree
    }
  },
  methods: {
    changeVersion (event) {
      this.$store.dispatch('changeVersion_storewall', event)
    },
    getProjTree () {
      this.$store.dispatch('getProjTree_storewall')
    },
    getVersion () {
      const projid = this.form.projid
      const ifHistory = this.form.ifHistory
      this.$store.dispatch('getVersion_storewall', {projid, ifHistory})
    },
    getAllStory () {
      const projid = this.form.projid
      const buildId = this.form.buildId
      this.$store.dispatch('getAllStory_storewall', {projid, buildId})
    }
  },
  mounted: function () {
    this.getProjTree()
  }
}
</script>

<style scoped lang="scss">
@import './story.scss';
</style>
