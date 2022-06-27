const Docs = require("./../models/Docs");
const Videos = require("./../models/Videos");

exports.getDocsBySubject = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Docs.findAll({
      where: {
        subject: id,
      },
    });

    return res.status(200).json({ data });
  } catch (err) {
    consoile.log(err);
    return res.status(500).send({ err });
  }
};
