import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    };
  }

  toggleEdit() {
    const editing = this.state.edit;
    this.setState({edit: !editing});
  }
  
  render() {
    const {title, body, rating, id} = this.props.review;

    return (
    <div className="index-item">
      <ul className="title-item">
        <li>{title}</li>
      </ul>
      <ul className="body-item">
        <li>{body}</li>
        <li>Review</li>
      </ul>
      <ul className="rating-item">
        <li>{rating}</li>
        <li>Rating</li>
      </ul>

      <button onClick={() => this.props.handleDeleteSubmit(id)}>Delete</button>
      <button onClick={this.handle}>Edit</button>
    </div>
    )
  }

}

export default ReviewIndexItem;