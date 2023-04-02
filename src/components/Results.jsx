import Result from "./Result";
export default function Results({ results, searchMessage }) {
  console.log("results");
  console.log(searchMessage);

  return (
    <>
      {results.map((result) => (
        <Result
          key={result.mal_id}
          result={result}
          searchMessage={searchMessage}
        />
      ))}
    </>
  );
}
