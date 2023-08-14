import FilledStarIcon from '../../public/icons/Full_Star.svg'
import EmptyStarIcon from '../../public/icons/Empty_Star.svg'
import Image from 'next/image'

export default function StarRatings({ filledStars }) {
    const totalStars = 5
    const emptyStars = totalStars - filledStars

    return (
        <div className="flex gap-2">
            {[...Array(filledStars)].map((_, index) => (
                <Image src={FilledStarIcon} key={index} />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <Image src={EmptyStarIcon} key={index} />
            ))}
        </div>
    )
}
