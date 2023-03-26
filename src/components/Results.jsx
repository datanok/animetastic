import Result from "./Result";
export default function Results({ results }) {
  return (
    <>
      {results.map((result) => (
        <Result key={result.mal_id} result={result} />
      ))}
    </>
  );
}
