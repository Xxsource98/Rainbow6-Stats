import RainbowSixSiegeUserData from 'rainbow-six-user-data'

const RainbowSixSiegeDataAPI = async (req, res) => {
    const { params } = req
    const username = params.playerid

    if (username) {
        await RainbowSixSiegeUserData.GetPlayerData(username)
            .then(idData => {
                res.json(idData)
            })
            .catch(ex => {
                res.json(ex)
            })
    } else {
        res.json('Fail')
    }
}

export default RainbowSixSiegeDataAPI
