import { cryptoJsFunc } from "cryptoJs"

export function transformEvent(event, metadata) {
    const value = "RudderEncrypt%3AU2FsdGVkX19bRZvvLcvglTBt8fbAf8wkt2S%2FBVrIypBJiI9KzWeKjmqGlD06ywZ4J5lURMWHvL%2Fio8OoXX%2B2ZQ%3D%3D";
    const prefix = "RudderEncrypt";
    
    const anonIdCookie = decodeURIComponent(value.slice(prefix.length));
    
    const {
        AES,
        Utf8
    } = cryptoJsFunc()
    
    function decryptValue(value) {
        return AES.decrypt(
            value.substring(1),
            'Rudder'
        ).toString(Utf8);
    }
    
    const anonymousId = decryptValue(anonIdCookie)
    
    log(anonymousId)
}
