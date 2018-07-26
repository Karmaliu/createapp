import request from '../../../utils/request';

export function queryWeather(city) {
    return request(`/mmm/air/cityair?city=${city}&key=31876d06cf5cad066b21655aed7b0d9a`);
}