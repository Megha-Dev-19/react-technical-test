import { DefaultData } from '@/lib/data'
import ReviewCard from '@/components/ReviewCard'
import './index.css'

export default function ReviewPage() {
    const data = DefaultData
    return (
        <div>
            <span className="bg-dot-left"></span>
            <span className="bg-dot-right"></span>
            <div className="review-grid-container">
                <div className="review-grid">
                    {data?.map((item) => (
                        <ReviewCard data={item} key={item?.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
