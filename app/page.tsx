import Image from "next/image";
import styles from "./page.module.css";
import { getUsers } from "../lib/api/users";

import Gallery from "./gallery";

export default async function Home() {
  // data from https://jsonplaceholder.typicode.com/users

  const users = await getUsers();

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
