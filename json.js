var req = XMLHttpRequest()
req.addEventListener('load', onLoad);
req.addEventListener('error', onFail);
req.addEventListener('abort', onFail);
req.open('GET', "https://yvesrychener.github.io/testbench/data.json");
req.send();

function onLoad(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);
      print(json);
    }
}
