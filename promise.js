const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data added...");
    resolve({ data: "chanuka" });
  }, 5000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
