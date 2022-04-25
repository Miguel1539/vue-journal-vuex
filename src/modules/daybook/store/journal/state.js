export default () => ({
    isLoading: false,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'lorem ipsum',
            picture: null
        },
        {
            id: new Date().getTime() +1000,
            date: new Date().toDateString(),
            text: 'lorem ipsum2',
            picture: null
        },
        {
            id: new Date().getTime() +2000,
            date: new Date().toDateString(),
            text: 'lorem ipsum3',
            picture: null
        }
    ]
})