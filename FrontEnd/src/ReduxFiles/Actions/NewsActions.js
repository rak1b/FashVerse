
const NewsActions = (news) => {
    return ({
        type: 'NEWS',
        payload:news
    }
    )
}

const NewsImageActions = () => {
    return {
        type: 'NEWSIMAGE',
    }

}

export {NewsActions,NewsImageActions}
