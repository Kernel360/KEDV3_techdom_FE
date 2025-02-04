import { MAP_BOUNDS } from '@/constants/map'
import { MapState } from '@/types/map'

// 위도와 경도를 받아 해당 좌표의 주소를 반환
export const convertCoordsToAddress = (lat: number, lng: number): Promise<string> => {
    const geocoder = new kakao.maps.services.Geocoder()

    return new Promise((resolve, reject) => {
        geocoder.coord2Address(lng, lat, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                resolve(result[0].address.address_name)
            } else {
                reject(new Error('주소 변환 실패'))
            }
        })
    })
}

// 마커의 개수에 따라 정해진 색상을 반환
export const getMarkerColor = (count: number) => {
    if (count <= 100) {
        return {
            outer: '#fdced440',
            inner: '#fdced480',
        }
    }
    if (count <= 1000) {
        return {
            outer: '#fb7da740',
            inner: '#fb7da780',
        }
    }
    return {
        outer: '#f41d4e40',
        inner: '#f41d4e80',
    }
}

// 현재 지도의 상태(레벨, 중심좌표, 경계좌표)를 반환
export const getMapStatus = (map: kakao.maps.Map): MapState => {
    const level = map.getLevel()

    const bounds = map.getBounds()
    const centerLat = map.getCenter().getLat()
    const centerLng = map.getCenter().getLng()
    const swLat = bounds.getSouthWest().getLat()
    const swLng = bounds.getSouthWest().getLng()
    const neLat = bounds.getNorthEast().getLat()
    const neLng = bounds.getNorthEast().getLng()

    const center = { lat: centerLat, lng: centerLng }
    const swCoord = { lat: swLat, lng: swLng }
    const neCoord = { lat: neLat, lng: neLng }

    return {
        level,
        center,
        swCoord,
        neCoord,
    }
}

// 지정된 경계 내로 제한된 지도 상태를 반환하는 함수
// 현재 지도 상태가 지정된 경계를 벗어날 경우, 경계값으로 보정
export const getBoundedMapStatus = (map: kakao.maps.Map): MapState => {
    const mapState = getMapStatus(map)
    const { swCoord, neCoord } = mapState

    if (!swCoord || !neCoord) return mapState

    const isOutOfBounds = {
        sw: {
            lat: swCoord.lat > MAP_BOUNDS.SW_LAT,
            lng: swCoord.lng > MAP_BOUNDS.SW_LNG,
        },
        ne: {
            lat: neCoord.lat < MAP_BOUNDS.NE_LAT,
            lng: neCoord.lng < MAP_BOUNDS.NE_LNG,
        },
    }

    const boundedCoords = {
        sw: {
            lat: isOutOfBounds.sw.lat ? swCoord.lat : MAP_BOUNDS.SW_LAT,
            lng: isOutOfBounds.sw.lng ? swCoord.lng : MAP_BOUNDS.SW_LNG,
        },
        ne: {
            lat: isOutOfBounds.ne.lat ? neCoord.lat : MAP_BOUNDS.NE_LAT,
            lng: isOutOfBounds.ne.lng ? neCoord.lng : MAP_BOUNDS.NE_LNG,
        },
    }
    return {
        ...mapState,
        swCoord: boundedCoords.sw,
        neCoord: boundedCoords.ne,
    }
}
