const subCount = document.getElementById('subCount');
const delay = 600000;

let getSubscribers = () => {
    fetch(`https://thecooldoggo.hackclub.app/yt-stats.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data && data.subscriber_count && data.view_count) {
            subCount.innerHTML = data.subscriber_count;
            // viewCount.innerHTML = data.view_count;
        } else {
            throw new Error('JSON response does not have expected structure');
        }
    })
    .catch(error => console.error('Error while fetching:', error));
}

getSubscribers();
setInterval(getSubscribers, delay);
