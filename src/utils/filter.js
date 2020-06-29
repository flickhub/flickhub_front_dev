class FilterString {
  constructor() {
    this.filterString = "";
  }

  setFilterString(filterString) {
    console.log("filterString", filterString);
    this.filterString = filterString;
  }

  getFilterString() {
    return this.filterString;
  }
}

const filterStringInstance = new FilterString();

export default filterStringInstance;
