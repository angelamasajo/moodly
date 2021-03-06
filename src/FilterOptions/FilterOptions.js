import React, { Component } from "react";
import "./FilterOptions.css";

class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="Filtering_Type">
          <form>
            <fieldset>
              <legend>Mood</legend>

              <label htmlFor="filter_allTypes">
                <input
                  type="radio"
                  value="All"
                  id="filter_allTypes"
                  name="filterType"
                  checked={filterOption === "All"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                all
              </label>

              <label htmlFor="filter_happy">
                <input
                  type="radio"
                  value="happy"
                  id="filter_happy"
                  name="filterType"
                  checked={filterOption === "happy"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                happy
              </label>

              <label htmlFor="filter_sad">
                <input
                  type="radio"
                  value="sad"
                  id="filter_sad"
                  name="filterType"
                  checked={filterOption === "sad"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                sad
              </label>

              <label htmlFor="filter_content">
                <input
                  type="radio"
                  value="content"
                  id="filter_content"
                  name="filterType"
                  checked={filterOption === "content"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                content
              </label>

              <label htmlFor="filter_angry">
                <input
                  type="radio"
                  value="angry"
                  id="filter_angry"
                  name="filterType"
                  checked={filterOption === "angry"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                angry
              </label>

              <label htmlFor="filter_frustrated">
                <input
                  type="radio"
                  value="frustrated"
                  id="filter_frustrated"
                  name="filterType"
                  checked={filterOption === "frustrated"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                frustrated
              </label>

              <label htmlFor="filter_anxious">
                <input
                  type="radio"
                  value="anxious"
                  id="filter_anxious"
                  name="filterType"
                  checked={filterOption === "anxious"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                anxious
              </label>

              <label htmlFor="filter_excited">
                <input
                  type="radio"
                  value="excited"
                  id="filter_excited"
                  name="filterType"
                  checked={filterOption === "excited"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                excited
              </label>

              <label htmlFor="filter_other">
                <input
                  type="radio"
                  value="other"
                  id="filter_other"
                  name="filterType"
                  checked={filterOption === "other"}
                  onChange={(e) =>
                    this.props.handleFilterChange(e.target.value)
                  }
                />
                other
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
