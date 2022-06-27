const { Subject } = require("./../../models/index");

exports.getSubjects = async (req, res) => {
  try {
    const data = await Subject.findAll();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getSubjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await Subject.findByPk(id);
    if (!subject) return res.status(404).send({ err: "Subject not found" });
    return res.status(200).json({ data: subject });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getSubjectsByClassId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Subject.findAll({
      where: {
        class: id,
      },
    });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.postSubject = async (req, res) => {
  const { name, classId } = req.body;
  try {
    const data = await Subject.create({
      name,
      class: classId,
    });
    return res.status(201).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.updateSubjectById = async (req, res) => {
  const { name, classId } = req.body;
  const { id } = req.params;
  try {
    const subject = await Subject.findByPk(id);
    if (!subject) return res.status(404).send({ err: "Subject not found" });
    subject.name = name;
    subject.class = classId;
    const data = await subject.update();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.deleteSubjectById = async () => {
  const { id } = req.params;
  try {
    await Subject.destroy({
      where: {
        id,
      },
    });

    return res.status(200).send({ msg: "Subject deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
