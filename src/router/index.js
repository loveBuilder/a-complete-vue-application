import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../components/notFound/index'
import MyWork from '../components/myWork/index'
import UpLoad from '../components/upLoadMng/index'
import TestMng from '../components/testMng/test/index'
import UseCaseMng from '../components/testMng/useCase/index'
import DevMng from '../components/devMng/index'
import ProjectMng from '../components/projectMng/index'
import SystemMng from '../components/systemMng/index'
import AttendMng from '../components/attendMng/index'
import SvnMng from '../components/svnMng/index'
import DemandMng from '../components/demandMng/index'
import CodeMng from '../components/codeMng/index'
import IssuesMng from '../components/issuesMng/index'
import StoryWall from '../components/storyWall/index'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/tdp',
      component: App,
      children: [
        {
          path: '',
          component: MyWork
        }, {
          path: 'mywork',
          component: MyWork
        }, {
          path: 'upload/:id',
          component: UpLoad
        }, {
          path: 'test',
          component: TestMng
        }, {
          path: 'usecase',
          component: UseCaseMng
        }, {
          path: 'devmng',
          component: DevMng
        }, {
          path: 'projectmng',
          component: ProjectMng
        }, {
          path: 'systemmng',
          component: SystemMng
        }, {
          path: 'attendmng',
          component: AttendMng
        }, {
          path: 'svnmng',
          component: SvnMng
        }, {
          path: 'demandmng',
          component: DemandMng
        }, {
          path: 'codemng',
          component: CodeMng
        }, {
          path: 'issuesmng',
          component: IssuesMng
        }
      ]
    }, {
      path: '/storyWall',
      component: StoryWall
    }, {
      path: '/',
      redirect: '/storyWall'
    }
  ]
})
