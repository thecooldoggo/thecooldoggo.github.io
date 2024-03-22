const youtubeKey = 'AIzaSyCFMWN3gavWxGZ9t4kHnYl9Q-dmeICxBGA';
const youtubeUser = 'UCSFnerDbmzCxFCFl_P7IdSw';
const subCount = document.getElementById('subCount');
const delay = 600000;

let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })
    .catch(error => console.error('Error while fetching:', error));
}

getSubscribers();
setInterval(getSubscribers, delay);
