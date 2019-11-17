/*eslint-disable */


(() => {
    class HTTPClient {
        get(url, options) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();

                request.open('GET', url);
                request.responseType = options.responseType;
                request.onprogress = options.onprogress;
                request.onload = () => resolve({body: request.response});
                request.onerror = () => reject(request.status + ' ' + request.statusText);
                request.send();
            });
        }
    }

    const CAT_URL = 'https://media4.s-nbcnews.com/j/newscms/2019_10/1415012/cat-food-eat-today-main-190305_ec2dc58bbd275269fe5b1c233cd24f6a.fit-2000w.jpg';
    const progressBarEl = document.querySelector('[data-progress]');

    new HTTPClient()
        .get(CAT_URL, { responseType: 'arraybuffer', onprogress })
        .then(parseResponseCat)
        .then(renderCat);

    function onprogress({ loaded, total }) {
        const progress = `${(loaded / total) * 100}%`;
        progressBarEl.style.setProperty('--progress', progress);
    }

    function parseResponseCat({ body }) {
        const base64Image = buffer.Buffer.from(body, 'binary').toString('base64');
        return `data:image/jpg;base64,${ base64Image }`;
    }

    function renderCat(catImage) {
        document.querySelector('[data-cat]').src = catImage;
    }
})()
