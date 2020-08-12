import axios from 'axios'
import qs from 'qs'

const REGION_ASIA = 'asia'
const REGION_EU = 'eu'
const REGION_RU = 'ru'
const REGION_NA = 'na'
let region = localStorage.getItem('region')
let language = JSON.parse(localStorage.getItem('language'))

if (!region) {
    region = REGION_ASIA
    localStorage.setItem('region', region)
}

if (!language) {
    axios.get('https://cdn.jsdelivr.net/gh/mouyase/WowsStrings@gh-pages/zh_sg.json')
        .then(response => {
            localStorage.setItem('language', JSON.stringify(response.data))
            language = JSON.parse(localStorage.getItem('language'))
        })
}

// let icons = {
//     AirCarrier: {
//         standard: require('@/assets/image/icon/AirCarrier/standard.png'),
//         elite: require('@/assets/image/icon/AirCarrier/elite.png'),
//         premium: require('@/assets/image/icon/AirCarrier/premium.png'),
//     },
//     Battleship: {
//         standard: require('@/assets/image/icon/Battleship/standard.png'),
//         elite: require('@/assets/image/icon/Battleship/elite.png'),
//         premium: require('@/assets/image/icon/Battleship/premium.png'),
//     },
//     Cruiser: {
//         standard: require('@/assets/image/icon/Cruiser/standard.png'),
//         elite: require('@/assets/image/icon/Cruiser/elite.png'),
//         premium: require('@/assets/image/icon/Cruiser/premium.png'),
//     },
//     Destroyer: {
//         standard: require('@/assets/image/icon/Destroyer/standard.png'),
//         elite: require('@/assets/image/icon/Destroyer/elite.png'),
//         premium: require('@/assets/image/icon/Destroyer/premium.png'),
//     },
//     Submarine: {
//         standard: require('@/assets/image/icon/Submarine/standard.png'),
//         elite: require('@/assets/image/icon/Submarine/elite.png'),
//         premium: require('@/assets/image/icon/Submarine/premium.png'),
//     },
// }

export default {
    getText(key) {
        return language['IDS_' + key]
    },
    getShipIcon(ship) {
        if (ship.type) {
            if (ship.is_premium && ship.is_premium === true) {
                return require('@/assets/image/icon/' + ship.type + '/premium.png')
            } else {
                return require('@/assets/image/icon/' + ship.type + '/elite.png')
            }
        }
    },
    getRegion() {
        return region
    },
    setRegion(value) {
        console.log(value)
        if (value === REGION_ASIA || value === REGION_EU || value === REGION_RU || value === REGION_NA) {
            region = value
            localStorage.setItem('region', value)
        }
    },
    getAPIHost() {
        if (region === REGION_ASIA) {
            return 'https://api.worldofwarships.asia'
        } else if (region === REGION_EU) {
            return 'https://api.worldofwarships.eu'
        } else if (region === REGION_RU) {
            return 'https://api.worldofwarships.ru'
        } else if (region === REGION_NA) {
            return 'https://api.worldofwarships.com'
        }
    },
}

