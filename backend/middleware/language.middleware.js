const supportedLanguages = ["ar", "en"];

const languageMiddleware = (req, res, next) => {
    const language = req.acceptsLanguages(...supportedLanguages) || "ar";
    req.language = language;

    next();
};

module.exports = languageMiddleware;