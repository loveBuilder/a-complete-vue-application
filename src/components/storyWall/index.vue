<template>
  <div class="root">
    <Header />
    <Center />
  </div>
</template>

<script>
import Header from './header'
import Center from './center'
export default {
  name: 'StoryWall',
  components: {
    Header,
    Center
  }
}
</script>

<style scoped lang="scss">
@import './story.scss';
</style>
