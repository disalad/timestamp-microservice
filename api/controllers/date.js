exports.parseDate = (req, res, next) => {
    let date;
    // Send current date and time for empty parameter
    if (!req.params.date) {
        return res.json({
            unix: new Date().getTime(),
            utc: new Date().toUTCString(),
        });
    }

    if (Number(req.params.date)) {
        date = new Date(Number(req.params.date));
    } else {
        date = new Date(req.params.date);
    }
    if (!date.getTime()) {
        res.status(400).json({ error: 'Invalid Date' });
    } else {
        res.status(200).json({
            unix: date.getTime(),
            utc: date.toUTCString(),
        });
    }
};
