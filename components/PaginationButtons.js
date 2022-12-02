import Link from "next/link"
import { useRouter } from "next/router"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

export default function PaginationButtons({ results }) {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 1

  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="cursor-poiner flex flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-10" />
            <p>prev</p>
          </div>
        </Link>
      )}

      {startIndex < 90 &&
        results.searchInformation.totalResults - startIndex > 10 && (
          <Link
            href={`/search?term=${router.query.term}&searchType=${
              router.query.searchType
            }&start=${startIndex + 10}`}
          >
            <div className="cursor-poiner flex flex-col items-center hover:underline">
              <ChevronRightIcon className="h-10" />
              <p>next</p>
            </div>
          </Link>
        )}
    </div>
  )
}
