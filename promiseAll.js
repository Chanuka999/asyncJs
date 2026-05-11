const gossip = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("gossip is added");
    resolve({ gossip: [1, 2, 3, 4, 5] });
  }, 3000);
});

const videos = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("video is created");
    resolve({ videos: [1, 2, 3] });
  }, 5000);
});

Promise.all([gossip, videos]).then((result) => {
  console.log(result);
});
