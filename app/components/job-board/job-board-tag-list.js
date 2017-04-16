import React from 'react';
import JobBoardTagItem from './job-board-tag-item.js';

export default class JobBoardTagList extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <button type="button" className="btn btn-default tag_title">
          <span className="glyphicon glyphicon-tag"> Tags:</span>
        </button>
        {React.Children.map(this.props.children, function(child) {
          return (
            <div>
              <button type="button" className="btn btn-default tag_list">
                {child}
              </button>
              <button type="button" className="btn btn-default tag_list">
                {child}
              </button>
            </div>
          )
        })}
        <button type="button" className="btn btn-default tag_list">
          <JobBoardTagItem tag='Tag1' />
        </button>
        <button type="button" className="btn btn-default tag_list">
          <JobBoardTagItem tag='Tag2' />
        </button>
      </div>
    )
  }
}