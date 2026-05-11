console.log("start");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user created");

      resolve({ secretId: 123 });
    }, 3000);
  });
}

function getAllSecret(secretId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("secret created");

      resolve({ secret: [1, 2, 3, 4, 5] });
    }, 5000);
  });
}

async function displayInfo() {
  const user = await getUser(1);
  const secrets = await getAllSecret(user.secretId);
  console.log(secrets);
}

displayInfo();

console.log("end");
