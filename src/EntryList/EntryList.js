import React, { Component } from "react";
import EntryListItem from "../EntryListItem/EntryListItem";
import "./EntryList.css";

class EntryList extends Component {
  render() {
    const { allEntries } = this.props;
    const list = allEntries.map((file, key) => (
      <EntryListItem
        {...file}
        key={key}
        id={file.id}
        history={this.props.history}
        allEntries={this.props.allEntries}
        // componentDidMount={this.props.componentDidMount()}
      />
    ));

    return (
      <div className="PlantList">
        <fieldset>
          <legend>Results</legend>
          {list}
        </fieldset>
      </div>
    );
  }
}

EntryList.defaultProps = {
  files: [],
};

export default EntryList;
