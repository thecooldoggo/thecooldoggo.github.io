const subCount = document.getElementById('subCount');
const delay = 600000;

let getSubscribers = () => {
    fetch(`https://thecooldoggo.hackclub.app/yt-stats.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        subCount.innerHTML = data["items"][0].subscriber_count;
    })
    .catch(error => console.error('Error while fetching:', error));
}

getSubscribers();
setInterval(getSubscribers, delay);
