document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READY STATE', xhr.readyState);
    
  }

  xhr.onload = function () {
    // console.log("READY STATE", xhr.readyState);

    if (this.status === 200) {
      console.log(this.responseText);

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  xhr.send();

  // readyState values
  // 0: request not initialized
  // 1: server connection estatblished
  // 2: request receievd
  // 3: processing request
  // 4: request finished and response is ready


  // HTTP statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}