import './category-item.styles.scss'
const CategoryItem = ({ category }) => {
    const { title, subtitle, id, imgUrl } = category;
    return (
        <div className="category-container" key={id}>
            <div className="background-image" style={{ backgroundImage: `url(${imgUrl})`}} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default CategoryItem;