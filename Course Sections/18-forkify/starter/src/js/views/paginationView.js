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
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, others';
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return 'last page';
    }

    // Other page
    if (this._data.page < numPages) {
      return 'other page';
    }

    // Page 1, and there are NO other pages
    return 'only one page';
  }
}

export default new PaginationView();
