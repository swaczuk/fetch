fetch('https://raw.githubusercontent.com/swaczuk/fetch/master/cv.json')
.then (response => response.json()
.then (res => console.log(res)))