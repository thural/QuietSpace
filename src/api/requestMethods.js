

export async function getApiResponse(url, method, body, token) {

    const headers = new Headers({ 'content-type': 'application/json' });
    if (token != null) headers.append("Authorization", "Bearer " + token);

    const options = {
      method: method,
      headers: headers,
    };

    if (body != null) options.body = JSON.stringify(body);

    const data = await fetch(url, options);
    const parsedData = await data.json();

    return await parsedData;

  }

  export const fetchPosts = async (url, token) => {
    try {
      const responseData = await getApiResponse(url, 'GET', null, token);
      console.log(responseData['content'][0])
      return responseData['content'];
    } catch (err) { console.log(err) }
  }