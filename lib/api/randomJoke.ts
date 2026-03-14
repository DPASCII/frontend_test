export async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}