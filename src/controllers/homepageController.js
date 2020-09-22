let getHomepage = (req, res) => {
    return res.render("hello");
};

module.exports = {
    getHomepage: getHomepage
};
