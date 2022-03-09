export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime illo eius repudiandae sit doloribus magni beatae laboriosam non? Vero illo omnis consectetur aliquid incidunt quisquam obcaecati corrupti magnam a. ',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime illo eius repudiandae sit doloribus magni beatae laboriosam non? Vero illo omnis consectetur aliquid incidunt quisquam obcaecati corrupti magnam a. ',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime illo eius repudiandae sit doloribus magni beatae laboriosam non? Vero illo omnis consectetur aliquid incidunt quisquam obcaecati corrupti magnam a. ',
            picture: null,
        }
    ]
})