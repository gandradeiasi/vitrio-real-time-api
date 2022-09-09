function _vsendcollectdata(url, data, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        if (typeof onerror !== 'undefined') {
            xhr.onerror = onerror;
        }
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));

   return xhr;
}
