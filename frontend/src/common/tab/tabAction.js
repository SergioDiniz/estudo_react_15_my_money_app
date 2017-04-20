export const selectTab = (tabID) => {
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}

export const showTabs = (...tabIDs) => {
    const tabs ={}
    tabIDs.forEach( e => tabs[e] = true)
    return{
        type: 'TAB_SHOWED',
        payload: tabs
    }
}