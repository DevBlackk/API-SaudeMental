import { User } from "../entity/User.entity";

const router = Router();

router.post('/signup', async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });

        if (existingUser) {
            console.log('Username already in use');
            return res.status(503).send('Username already in use');
        }

        const user = new User(req.body);

        if (!user.validate()) {
            return res.status(406).send('Invalid data');
        }
        await user.save();
        res.json({ message: 'Successfully signed up!' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;



