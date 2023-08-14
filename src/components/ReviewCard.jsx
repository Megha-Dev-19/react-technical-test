import Image from 'next/image'
import StarRatings from './StarRatings'

export default function ReviewCard({ data }) {
    return (
        <div className="review-card">
            {data?.ratings && <StarRatings filledStars={data.ratings} />}
            <p>{data?.review}</p>
            <div className="flex gap-2 items-center">
                <Image
                    src={data?.image}
                    width={50}
                    height={50}
                    className="review-avatar"
                    alt={data?.author}
                />
                <div>
                    <p>{data?.author}</p>
                    <p>{data?.position}</p>
                </div>
            </div>
        </div>
    )
}
