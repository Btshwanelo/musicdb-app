const baseUrl = 'https://api.deezer.com';

const getQueryString = (params) => {
    var esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

/**
 * 
 * @param {String} url 
 * @param {Object} params { headers: Object, query: Object, data: Object, auth: false } 
 * @returns {Promise}
 */
const request = (url, params) => {
    var method = params.method || 'GET';
    var qs = '';
    var body;
    var headers = params.headers || {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (['GET', 'DELETE'].indexOf(method) > -1) {
        qs = params.query ? '?' + getQueryString(params.query) : '';
    } else {
        // POST or PUT
        qs = params.query ? '?' + getQueryString(params.query) : '';
        body = JSON.stringify(params.data);
    }

    var httpUrl = url + qs;

    return new Promise((resolve, reject) => {
        fetch(baseUrl + httpUrl, { method, headers, credentials: "include", body })
            .then(async response => {
                if (!response.ok && response.status !== 401) {
                    const res = await response.json();
                    return reject(res);
                }
                return response.json();
            }).then(data => resolve(data)).catch(error => {
                if (!error.response) {
                    return reject({ message: error.message });
                } else {
                    return reject(error)
                }
            });
    })
}

module.exports = {
    get: (url, params) => request(url, Object.assign({ method: 'GET' }, params)),
    post: (url, params) => request(url, Object.assign({ method: 'POST' }, params)),
    put: (url, params) => request(url, Object.assign({ method: 'PUT' }, params)),
};