<!--测试中、测试完毕-->
<template>
  <el-tooltip :disabled="!value.timeOutDay" effect="dark" :content="`超时天数：${value.timeOutDay}天`" placement="top">
    <div class="story-box clearfix">
      <i :class="['icon-colorbar', value.ifTimeout ? 'icon-colorbar-timeout' : 'icon-colorbar-normal']"></i>
      <div class="context-box">
        <div class="context-header clearfix">
          <span class="needid">{{ value.id }}</span>
          <span class="personal" :title="value.developers">{{ value.developers }}</span>
        </div>
        <p class="context-center" :title="value.title" ref="cText">{{ newTitle }}</p>
        <div class="context-footer">
          <span>例：{{ value.caseCnt }}&nbsp;&nbsp;错：{{ value.bugSolves }}/{{ value.bugSum }}</span>
        </div>
      </div>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'StoryTest',
  props: {
    data: Object
  },
  data: function () {
    return {
      value: this.data,
      newTitle: this.data.title
    }
  },
  mounted: function () {
    // 先获取目标元素的line-height
    const lineHeight = parseInt(window.getComputedStyle(this.$refs.cText).lineHeight)
    const totalHeight = this.$refs.cText.clientHeight
    const totalRow = 2 // 显示两行
    const totalLength = this.value.title.length
    const rowLength = parseInt(totalLength / (totalHeight / lineHeight))
    let title = this.value.title
    if ((totalHeight / lineHeight) > totalRow) {
      title = this.value.title.substr(0, rowLength * totalRow - 3) + '...'
    }
    // console.log('lineHeight:', lineHeight)
    // console.log('totalHeight:', totalHeight)
    // console.log('totalLength:', totalLength)
    // console.log('rowLength:', rowLength)
    this.newTitle = title
  }
}
</script>

<style scoped lang="scss">
@import "./story.scss"
</style>
