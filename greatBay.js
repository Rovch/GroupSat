var Listing = function (name, cost) {
    this.listings = [];
    this.name = name;
    this.cost = cost;

    this.addListing = function (name, cost) {
        this.listing.push(new Listing(name, cost));
    };
};