import RainbowSixSiegeUserData from 'rainbow-six-user-data'

const RainbowSixSiegeDataAPI = async (req, res) => {
    const { params } = req
    const platform = req.query.platform || 'pc'
    const username = params.user

    await RainbowSixSiegeUserData.GetPlayerID(username, platform)
        .then(idData => {
            res.json(idData.data.ids)
        })
        .catch(ex => {
            res.json(ex)
        })
}

export default RainbowSixSiegeDataAPI
