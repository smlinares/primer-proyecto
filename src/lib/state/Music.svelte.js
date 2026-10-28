// @ts-nocheck
const songStatus = $state({
        current: null

    })

export const statusChange = (Song) => {
    songStatus.current = Song
}