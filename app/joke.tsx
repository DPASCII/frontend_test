import React from "react";

type JokeProps = {
  setup: string;
  punchline: string;
};

const JokeHeader: React.FC<JokeProps> = ({ setup, punchline }) => (
  <header>
    <h1>{setup}</h1>
    <h2>{punchline}</h2>
  </header>
);

export default JokeHeader;
