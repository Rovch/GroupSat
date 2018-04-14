var Listing = function (name, bid, buyNow, description) {
    this.listings = [];
    this.name = name;
    this.bid = bid;
    this.buyNow = buyNow;
    this.description = description;

    this.addListing = function (name, cost, buyNow, description) {
        this.listing.push(new Listing(argv[2], argv[3], argv[4], argv[5]));
    };
};

module.exports = Listing;