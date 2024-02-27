import { Professionals }  from '../professionals/professionals.module';

const createProfessional = async (req, res) => {
    try {
    const professional = await Professionals.create(req.body);
    res.json(professional);
    } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    }
};
