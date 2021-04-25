import AddComment from '../../components/forms/add-comment';
import CommentList from '../../components/list/comment-list';
import CommentsProviderComponent from '../../contexts/comments-provider/CommentsProvider';

function Comments(props) {
  return (
    <CommentsProviderComponent>
      <div className="row">
        <div className="col-4">
          <AddComment />
        </div>

        <div className="col-8 d-flex flex-wrap">
          <CommentList />
        </div>
      </div>
    </CommentsProviderComponent>
  );
}
export default Comments;
