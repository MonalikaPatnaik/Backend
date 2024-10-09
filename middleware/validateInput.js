exports.validateWebtoon = (req, res, next) => {
    const { title, description, characters } = req.body;
  
    if (!title || !description || !Array.isArray(characters) || characters.length === 0) {
      return res.status(400).json({ message: 'Invalid input' });
    }
  
    next();
  };
  