export const selectTab = (tabID) => {
    console.log(tabID)
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}