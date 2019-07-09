import React from "react"
import Stats from "./Stats.jsx"

import store from "./store.js"
import tagStore from "./tagStore.js"
import { observer } from 'mobx-react-lite'

const MonthStats = observer(
function MonthStats({year, month}){
	const items = store.completedTodosFromMonth(year, month)
	console.log(items)
	return <Stats data={store.getTimeFromEachTag(tagStore.tags, items)} />
})
export default MonthStats