import './SkeletonCard.css';

export default function SkeletonCard() {
  return (
    <article className="skeletonCard">
      <div className="skeletonImage">
        <div className="skeleton shimmer"></div>
      </div>
      <div className="skeletonBody">
        <div className="skeletonTop">
          <div className="skeletonTag shimmer"></div>
          <div className="skeletonBadge shimmer"></div>
        </div>
        <div className="skeletonTitle shimmer"></div>
        <div className="skeletonDesc shimmer"></div>
        <div className="skeletonFooter">
          <div className="skeletonPrice shimmer"></div>
          <div className="skeletonButton shimmer"></div>
        </div>
      </div>
    </article>
  );
}
