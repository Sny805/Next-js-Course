import Link from "next/link"

function index() {
  return (
    <>
    <h1>This is index page </h1>
    <ul>
        <li>
            <Link href="news/next-js">
                Next Js is the best framework
            </Link>
        </li>
    </ul>
    </>
  )
}

export default index