import axios from 'axios';

export default function request(config) {
    var instance = axios.create({
        timeout: 3000
    });

    return new Promise((reslove, reject) => {
        instance(config).then(res => {
            reslove(res)
        });
    })
}