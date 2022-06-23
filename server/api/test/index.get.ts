export default defineEventHandler((event) => {
  //console.log(event.req.method);
  //console.log(event.req.headers);

  const config = useRuntimeConfig();

  /*console.log(config);*/

  if (event.req.headers.token === config.apiSecret) {
    return {
      id: 1,
      text: "valami szöveg",
    };
  } else {
    event.res.statusCode = 401;
  }
});
