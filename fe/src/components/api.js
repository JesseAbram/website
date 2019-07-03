import config from '../config/config'

const url = process.env.NODE_ENV === 'development' ? config.development.backenUrl : config.production.backenUrl

console.log(url)
export const getMedia = async () => {
    const reasponse = await fetch(`${url}/getVideoLinks`, {
        method: "get",
        mode: "cors",
    })
    const json = await reasponse.json()
    console.log("get Video", json);
    return json
}
