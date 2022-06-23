export default defineEventHandler((event) => {
  console.log(event.req.method);
  return {
    id: 1,
    text: "valami szöveg",
  };
});
