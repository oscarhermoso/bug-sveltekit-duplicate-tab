export const load = async ({ fetch }) => {
  const response = await fetch('/example');

  return { ...(await response.json()) };
};
