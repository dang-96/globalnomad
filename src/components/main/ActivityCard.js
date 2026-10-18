import Image from "next/image";

const ActivityCard = ({ type, img, review, reviewTotal, title, price }) => {
  console.log(img);
  return (
    <div className="activity-card">
      {type === "out" && (
        <>
          <div
            className="activity-card-img"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="activity-out-content">
            <p className="activity-review">
              <Image
                src="/images/icons/icon-start.svg"
                alt="별 아이콘"
                width={15}
                height={15}
              />
              <span className="text-lg-medium">
                {review} <span className="review-total">({reviewTotal})</span>
              </span>
            </p>
            <h4 className="activity-title text-2xl-semibold">{title}</h4>
            <p className="activity-price text-2xl-bold">
              ₩ {price}
              <span className="text-xl-regular">/ 인</span>
            </p>
          </div>
        </>
      )}
      {type === "inner" && (
        <div
          className="activity-card-img big"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="activity-inner-content">
            <p className="activity-review">
              <Image
                src="/images/icons/icon-start.svg"
                alt="별 아이콘"
                width={15}
                height={15}
              />
              <span className="text-md-semibold">
                {review} ({reviewTotal})
              </span>
            </p>
            <h4 className="activity-title text-3xl-bold">{title}</h4>
            <p className="activity-price text-xl-bold">
              ₩ {price}
              <span className="text-md-regular">/ 인</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
