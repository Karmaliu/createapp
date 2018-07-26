import request from '../../../utils/request';

export function queryWeather(city) {
    return request(`/api/air/cityair?city=shijiazhuang&key=31876d06cf5cad066b21655aed7b0d9a`);
}