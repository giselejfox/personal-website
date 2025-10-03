import Link from "next/link"

export default function ListListingItem({ urlOrSlug, title}) {

    return (
        <li className="list-unstyled my-3">
            <Link className="text-dark" href={urlOrSlug}>{title}</Link>
        </li>
    )

}