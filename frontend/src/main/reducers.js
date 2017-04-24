import {combineReducers} from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycle from '../billingCycle/billingCyclesReducer'
import {reducer as FormReducer} from 'redux-form'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycle,
    form: FormReducer
})

export default rootReducer