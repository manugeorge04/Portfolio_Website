export const logChat = (uuid, query, answer, count) => {
  const data = {
    uuid,
    query,
    answer,
    count
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/logChat";


  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  // fire and forget as we are just logging
  fetch(endpoint, options);
}