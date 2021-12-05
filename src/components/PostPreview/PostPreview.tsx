import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface PreviewProps {
  img: {
    src: any,
    alt: string
  },
  title: string,
  date: string,
  excerpt: string,
  tags: Array<string>,
  to: string,
  large: boolean
}

export const PostPreview = ({ img, title, date, excerpt, tags, to, large }: PreviewProps) => {
  console.log({ tags })
  const image = getImage(img.src)
  return (
    <div className={large ? 'grid grid-cols-2 gap-5 col-span-12' : 'col-span-4'}>
      <Link to={to}>
        <GatsbyImage className='rounded-lg w-full col-span-1' image={image} alt={img.alt} />
      </Link>
      <div>
        {/* tags */}
        <h1 className='font-bold text-3xl'>{title}</h1>
        <span>{date}</span>
        <p className='font-medium'>{excerpt}</p>
      </div>
    </div>
  )
}