import Head from "next/head"
import SearchHeader from "../components/SearchHeader"
import SearchResults from "../components/SearchResults"
import ImageResults from "../components/ImageResults"
import Response from "../Response"
import { useRouter } from "next/router"

export default function Search({ results }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>about {router.query.term}</title>
      </Head>

      <SearchHeader />

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1"
  const mockData = false
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json())
  return {
    props: {
      results: data,
    },
  }
}
