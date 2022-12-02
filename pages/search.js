import Head from "next/head"
import SearchHeader from "../components/SearchHeader"
import Response from "../Response"

export default function Search({ results }) {
  return (
    <>
      <Head>
        <title>{results}</title>
      </Head>

      <SearchHeader />
    </>
  )
}

export async function getServerSideProps(context) {
  const mockData = false

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json())

  return {
    props: {
      results: data,
    },
  }
}
