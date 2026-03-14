import Image from "next/image";
import styles from "./page.module.css";
import { getUsers } from "../lib/api/users";
import { getJoke } from "../lib/api/randomJoke";

import Gallery from "./gallery";
import Joke from "./joke";

export default async function Home() {
  // data from https://jsonplaceholder.typicode.com/users

  const users = await getUsers();
  const joke = await getJoke();

  return (
    <main className={styles.main}>
      <Gallery users={users} setup={joke.setup} punchline={joke.punchline} />
    </main>
  );
}
