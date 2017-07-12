import ProductView from './search-results-item';

let SearchResults = Backbone.View.extend({
    el: '.aff-amazon-import-search-results',

    /**
     * Initialize the search results.
     *
     * @param {array} options
     * @public
     */
    initialize(options) {
        this.collection = options.collection;

        // Bind the collection events
        this.collection.bind('reset', () => this.render());
        this.collection.bind('add', () => this.render());
        this.collection.bind('remove', () => this.render());
        this.collection.bind('sync', () => this.render());
    },

    /**
     * Render the search results.
     *
     * @public
     */
    render() {
        this._addAll();
    },

    /**
     * Add all search results items to the view.
     *
     * @private
     */
    _addAll() {
        this.$el.empty();
        this.collection.forEach(this._addOne, this);
    },

    /**
     * Add one search results item to the view.
     *
     * @private
     */
    _addOne(product) {
        let view = new ProductView({
            model: product,
        });

        this.$el.append(view.render().el);
    },
});

export default SearchResults;