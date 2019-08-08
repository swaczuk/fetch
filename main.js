fetch('https://reqres.in/api/user')
    .then(response => response.json())
    .then(res => {
        // console.log(res.data);
        const {data} = res
        data.map(({id, name}) => console.log(`id: ${id}\nname: ${name}`))
    })

 fetch('https://raw.githubusercontent.com/swaczuk/fetch/master/cv.json')
.then (response => response.json()
.then (res => console.log(res)))