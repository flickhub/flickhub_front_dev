const baseUrl = "http://085b41a4ac71.ngrok.io";

const httpService = async ({ url, method, body }) => {
  let response;

  const options =
    !method || method === "GET"
      ? {
          header: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      : {
          header: {
            "Access-Control-Allow-Origin": "*",
          },
          method,
          body: JSON.stringify(body),
        };

  await fetch(`${baseUrl}${url}`, options)
    .then((res) => res.json())
    .then((res) => {
      response = res;
    })
    .catch((error) => console.log("error", error));
  return response;
};

export default httpService;
