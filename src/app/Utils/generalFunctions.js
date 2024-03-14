import MD5 from 'crypto-js/md5'

export const generateHash = ()=>{

    let pubkey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    let pvtkey = process.env.PRIVATE_KEY;

    let message = currentTime()+pvtkey+pubkey;
    let hash = MD5(message);
    return hash

}

export const currentTime = () =>{
    let ts = new Date().getTime();
    return ts
}

  