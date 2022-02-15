import { cryptoJsFunc } from "cryptoJs"

export function transformEvent(event, metadata) {
    const value = "RudderEncrypt%3AU2FsdGVkX18%2BSDAst3Ywuas3pitv5wDpqxb2FzYJ3bHYod5HKQeSPj2ITX7SsW7ZuM6jnDr9RImZfyLlhwpvlQ%3D%3D";
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