const GQL_URL = "http://localhost:9000/";

async function fetchGreeting() {
  const res = await fetch(GQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query {
                greeting
            }
        `,
    }),
  });
  //   const resBody = await res.json();
  //   console.log(1, resBody); // { data: [{},{}] }
  //   console.log(2, res); //response object
  const { data } = await res.json();
  return data;
}

const elem = document.getElementById("greeting");
elem.textContent = "Loading...";
//call the async function and resolve the results with the .then()
fetchGreeting().then((data) => {
  return (elem.textContent = data.greeting);
});
