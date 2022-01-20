exports.parseDate = (req, res, next) => {
    const date = new Date(parseInt(req.params.date, 10)).toString();
    console.log(date);
    res.status(200).json({ date: date });
};
