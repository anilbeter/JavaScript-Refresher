import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    ); // Math.ceil() -> her zaman yukarı yuvarlar
    console.log(numPages);

    // Page 1, and there are other pages
    // Page 1, and there are NO other pages
    // Last page
    // Other page
  }
}

export default new PaginationView();
