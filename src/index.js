export default function _h(method, url, payload) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => 
      xhr.status >= 300
        ? reject(xhr.responseText ? JSON.parse(xhr.responseText) : xhr.responseText)
        : resolve(xhr.responseText ? JSON.parse(xhr.responseText) : xhr.responseText)
    
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(payload ? JSON.stringify(payload) : payload);
  });
}