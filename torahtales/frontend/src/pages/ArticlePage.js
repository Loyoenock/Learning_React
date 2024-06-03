import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const { articleId } = useParams();
    return (
        <div>
        <h1>Article Page {articleId}</h1>
        </div>
    );
}
export default ArticlePage;