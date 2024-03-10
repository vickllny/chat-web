
import { createApp } from "/node_modules/.vite/deps/vue.js?v=7b5b59ae"
import App from "/src/App.vue?t=1710062102776"
import router from "/src/router/index.js?t=1710064747898"
import * as ElementPlusIconsVue from "/node_modules/.vite/deps/@element-plus_icons-vue.js?v=7b5b59ae"


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)

app.mount('#app')

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwiL25vZGVfbW9kdWxlcy8udml0ZS9kZXBzL3Z1ZS5qcz92PTdiNWI1OWFlXCJcbmltcG9ydCBBcHAgZnJvbSBcIi9zcmMvQXBwLnZ1ZT90PTE3MTAwNjIxMDI3NzZcIlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiL3NyYy9yb3V0ZXIvaW5kZXguanM/dD0xNzEwMDY0NzQ3ODk4XCJcbmltcG9ydCAqIGFzIEVsZW1lbnRQbHVzSWNvbnNWdWUgZnJvbSBcIi9ub2RlX21vZHVsZXMvLnZpdGUvZGVwcy9AZWxlbWVudC1wbHVzX2ljb25zLXZ1ZS5qcz92PTdiNWI1OWFlXCJcblxuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKVxuXG5mb3IgKGNvbnN0IFtrZXksIGNvbXBvbmVudF0gb2YgT2JqZWN0LmVudHJpZXMoRWxlbWVudFBsdXNJY29uc1Z1ZSkpIHtcbiAgICBhcHAuY29tcG9uZW50KGtleSwgY29tcG9uZW50KVxufVxuXG5hcHAudXNlKHJvdXRlcilcblxuYXBwLm1vdW50KCcjYXBwJylcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUN6RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNyRztBQUNBO0FBQ0EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUMxQjtBQUNBLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDakMsQ0FBQztBQUNEO0FBQ0EsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDZjtBQUNBLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOyJ9