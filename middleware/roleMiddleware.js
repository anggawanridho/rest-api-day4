function roleMiddleware(req, res, next) {
    const role = req.query.role;

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    next();
}

module.exports = roleMiddleware;
