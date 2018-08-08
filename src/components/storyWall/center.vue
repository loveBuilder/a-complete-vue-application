<template>
  <div class="center-box" ref="centerbox">
    <div class="center">
      <div class="title-bar">
        <el-row>
          <el-col :span="4" class="col-borderR">
            <div class="title-name">确认中（{{storylistRes.story.planned.length}} / {{storylistRes.nonStory.planned.length}}）</div>
          </el-col>
          <el-col :span="4" class="col-borderR">
            <div class="title-name">研发中（{{storylistRes.story.developing.length}} / {{storylistRes.nonStory.developing.length}}）</div>
          </el-col>
          <el-col :span="4" class="col-borderR">
            <div class="title-name">研发完毕（{{storylistRes.story.developed.length}} / {{storylistRes.nonStory.developed.length}}）</div>
          </el-col>
          <el-col :span="4" class="col-borderR">
            <div class="title-name">测试中（{{storylistRes.story.testing.length}}）</div>
          </el-col>
          <el-col :span="4" class="col-borderR">
            <div class="title-name">测试完毕（{{storylistRes.story.tested.length}}）</div>
          </el-col>
          <el-col :span="4" class="col-borderR">
            <div class="title-name">取消/切换（{{storylistRes.story.closed.length}} / {{storylistRes.nonStory.closed.length}}）</div>
          </el-col>
        </el-row>
      </div>
      <div class="story-bar" ref="storybar" v-loading="storylistLoading">
        <el-row>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.story.planned.length">无数据</p>
            <StoryPlanned v-for="value in storylistRes.story.planned" :data="value" v-if="value" :key="`story_planned_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.story.developing.length">无数据</p>
            <StoryDevelop v-for="value in storylistRes.story.developing" :data="value" v-if="value" :key="`story_developing_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.story.developed.length">无数据</p>
            <StoryDevelop v-for="value in storylistRes.story.developed" :data="value" v-if="value" :key="`story_developed_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.story.testing.length">无数据</p>
            <StoryTest v-for="value in storylistRes.story.testing" :data="value" v-if="value" :key="`story_testing_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.story.tested.length">无数据</p>
            <StoryTest v-for="value in storylistRes.story.tested" :data="value" v-if="value" :key="`story_tested_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.story.closed.length">无数据</p>
            <StoryClosed v-for="value in storylistRes.story.closed" :data="value" v-if="value" :key="`story_closed_${value.id}`" />
          </el-col>
        </el-row>
      </div>
      <div class="nonstory-bar" ref="nonstorybar" v-loading="storylistLoading">
        <el-row>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.nonStory.planned.length">无数据</p>
            <StoryPlanned v-for="value in storylistRes.nonStory.planned" :data="value" v-if="value" :key="`nonstory_planned_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.nonStory.developing.length">无数据</p>
            <StoryDevelop v-for="value in storylistRes.nonStory.developing" :data="value" v-if="value" :key="`nonstory_developing_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.nonStory.developed.length">无数据</p>
            <StoryDevelop v-for="value in storylistRes.nonStory.developed" :data="value" v-if="value" :key="`nonstory_developed_${value.id}`" />
          </el-col>
          <el-col :span="4" class="col-borderR">

          </el-col>
          <el-col :span="4" class="col-borderR">

          </el-col>
          <el-col :span="4" class="col-borderR">
            <p class="empty" v-if="!storylistRes.nonStory.closed.length">无数据</p>
            <StoryClosed v-for="value in storylistRes.nonStory.closed" :data="value" v-if="value" :key="`nonstory_closed_${value.id}`" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StoryPlanned from './story-planned' // 确认中
import StoryDevelop from './story-develop' // 研发中、研发完毕
import StoryTest from './story-test' // 测试中、测试完毕
import StoryClosed from './story-closed' // 取消、换版

export default {
  name: 'Center',
  components: {
    StoryPlanned,
    StoryDevelop,
    StoryTest,
    StoryClosed
  },
  computed: {
    storylistLoading () {
      return this.$store.state.storywall.storylistLoading
    },
    storylistRes () {
      return this.$store.state.storywall.storylistRes
    }
  },
  mounted: function () {
    this.initCenterbox()
    this.initbars()
  },
  updated: function () {
    console.log('更新了')
    this.initbars()
  },
  methods: {
    initCenterbox: function () {
      const bodyHeight = window.innerHeight
      this.$refs.centerbox.style.height = (bodyHeight - 80) + 'px'
    },
    initbars: function () {
      const storylist = this.storylistRes
      const { story, nonStory } = storylist
      const storyArr = [story.planned.length, story.developing.length, story.developed.length, story.testing.length, story.tested.length, story.closed.length]
      const nonStoryArr = [nonStory.planned.length, nonStory.developing.length, nonStory.developed.length, nonStory.closed.length]
      const storyMax = Math.max.apply(null, storyArr)
      const nonStoryMax = Math.max.apply(null, nonStoryArr)
      this.$refs.storybar.firstChild.style.height = `${storyMax === 0 ? 100 : 144 * storyMax + 20}px`
      this.$refs.nonstorybar.firstChild.style.height = `${nonStoryMax === 0 ? 100 : 144 * nonStoryMax + 20}px`
    }
  }
}
</script>

<style scoped lang="scss">
@import "./story.scss"
</style>
